import Input, { TextArea } from '@/components/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Modal, ModalContent, ModalFooter } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, 'Required'),
  basicPlanPrice: z.string().min(1, 'Required'),
  premiumPlanPrice: z.string().min(1, 'Required'),
  description: z.string().min(1, 'Required'),
})

export type AddNewLeadsModalType = z.infer<typeof schema>

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const AddNewLeadsModal = ({ isOpen, onClose }: ModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddNewLeadsModalType>({
    defaultValues: {
      name: '',
      basicPlanPrice: '',
      premiumPlanPrice: '',
      description: '',
    },
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: AddNewLeadsModalType) => {
    console.log(data)
    onClose()
  }

  return (
    <Modal size='xl' isOpen={isOpen} onClose={onClose}>
      <ModalContent className='rounded-lg bg-white p-10'>
        <h1 className='font-sans text-[40px] font-bold text-black'>Add Lead Type</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex w-full flex-col gap-6 py-4'>
          <Input label='Name' inputProps={{ ...register('name') }} error={errors.name} className='w-full' />
          <div className='flex w-full items-center justify-between gap-6'>
            <Input
              label='Basic Plan Price'
              inputProps={{ ...register('basicPlanPrice') }}
              error={errors.basicPlanPrice}
              className='w-full'
              starterContent={<p className='font-inter text-base font-normal text-black'>$</p>}
            />
            <Input
              label='Premium Plan Price'
              inputProps={{ ...register('premiumPlanPrice') }}
              error={errors.premiumPlanPrice}
              className='w-full'
              starterContent={<p className='font-inter text-base font-normal text-black'>$</p>}
            />
          </div>
          <TextArea label='Description' textAreaProps={{ ...register('description') }} error={errors.description} />

          <ModalFooter className='flex items-center justify-between gap-10 p-0'>
            <Button type='submit' className='h-12 w-full rounded-[10px] bg-purple-2 font-rubik text-base text-white'>
              Publish
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default AddNewLeadsModal
