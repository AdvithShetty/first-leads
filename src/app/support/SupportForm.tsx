'use client'
import Input, { TextArea } from '@/components/Input'
import { useIsClient } from '@/hooks/useIsClient'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nextui-org/react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
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

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SupportFormDetailsType>({
    resolver: zodResolver(schema),
    defaultValues: {},
  })

  const onSubmit = async (data: SupportFormDetailsType) => {
    const body = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      subject: data.subject,
      body: data.message,
      type: 'general',
    }

    try {
      await axios.post('/api/support', body)
      toast.success('Message sent successfully')
      reset()
    } catch (error) {
      toast.error('Something went wrong, please try again later')
    }
  }

  if (!isClient) return null

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='grid w-full grid-cols-4 gap-x-6 gap-y-6 px-4 pt-16 lg:w-[800px] lg:gap-x-10 lg:gap-y-8 lg:px-0'
    >
      <Input
        label='First Name'
        className='col-span-full lg:col-span-2'
        inputProps={{ ...register('firstName') }}
        error={errors.firstName}
      />
      <Input
        label='Last Name'
        className='col-span-full lg:col-span-2'
        inputProps={{ ...register('lastName') }}
        error={errors.lastName}
      />
      <Input label='Email Address' className='col-span-4' inputProps={{ ...register('email') }} error={errors.email} />
      <Input label='Subject' className='col-span-4' inputProps={{ ...register('subject') }} error={errors.subject} />
      <TextArea
        label='Message'
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
