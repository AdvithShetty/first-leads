'use client'
import Input, { TextArea } from '@/components/Input'
import { useIsClient } from '@/hooks/useIsClient'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message is required'),
})

export type SupportFormDetailsType = z.infer<typeof schema>

const SupportForm = () => {
  const isClient = useIsClient()
  const router = useRouter()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SupportFormDetailsType>({
    resolver: zodResolver(schema),
    defaultValues: {},
  })

  const onSubmit = (data: SupportFormDetailsType) => {
    console.log(data)
  }

  if (!isClient) return null

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid w-[800px] grid-cols-4 gap-x-10 gap-y-8 pt-10'>
      <Input
        label='Your First Name'
        className='col-span-2'
        inputProps={{ ...register('firstName') }}
        error={errors.firstName}
      />
      <Input
        label='Your Last Name'
        className='col-span-2'
        inputProps={{ ...register('lastName') }}
        error={errors.lastName}
      />
      <Input label='Email Address' className='col-span-4' inputProps={{ ...register('email') }} error={errors.email} />
      <Input label='Subject' className='col-span-4' inputProps={{ ...register('subject') }} error={errors.subject} />
      <TextArea
        label='Your Message'
        className='col-span-4'
        textAreaProps={{ ...register('message') }}
        error={errors.message}
      />
      <Button
        type='submit'
        className='col-span-4 h-14 w-full rounded-md bg-[#7363F3] text-center font-sans text-lg font-medium text-white'
      >
        Submit Message
      </Button>
    </form>
  )
}

export default SupportForm
