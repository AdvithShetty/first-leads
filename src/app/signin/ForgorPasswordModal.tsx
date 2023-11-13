import { EmailIcon } from '@/components/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email('Invalid email address'),
})

export type SchemaType = z.infer<typeof schema>

const ForgorPasswordModal = ({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: (open: boolean) => void }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = async (data: SchemaType) => {
    await axios.post('/api/password/reset', {
      email: data.email,
    })
    onOpenChange(false)
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top-center'>
      <ModalContent>
        {(onClose) => (
          <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
            <ModalHeader className='flex flex-col gap-1 font-inter text-lg font-semibold text-[#6941C6]'>
              Log in
            </ModalHeader>
            <ModalBody>
              <Input
                label='Email'
                labelPlacement='outside'
                placeholder='example@domain.com'
                variant='bordered'
                type='email'
                startContent={<EmailIcon className='h-5 w-5 shrink-0' />}
                classNames={{
                  label: 'text-[#667085] font-inter text-base font-normal',
                  input: 'font-inter text-base font-normal',
                  inputWrapper: 'border border-[#D0D5DD] rounded-lg h-14',
                }}
                errorMessage={errors.email?.message}
                {...register('email')}
              />
              <p className='px-2 font-inter text-sm font-normal text-[#667085]'>
                We will send you a link to reset your password. <br /> This link will expire in 24 hours.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color='danger' variant='flat' onPress={onClose} className='font-inter text-sm'>
                Close
              </Button>
              <Button type='submit' className='bg-[#6941C6] font-inter text-sm font-medium text-white'>
                Send Link
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  )
}

export default ForgorPasswordModal
