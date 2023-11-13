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
  message: z.string().min(1, 'Message is required'),
  phone: z.string().min(10, 'Phone number is required'),
})

export type SupportFormDetailsType = z.infer<typeof schema>

const ContactForm = () => {
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
      type: 'additional lead type request',
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
      <Input label='Email Address' className='col-span-2' inputProps={{ ...register('email') }} error={errors.email} />
      <Input label='Phone Number' className='col-span-2' inputProps={{ ...register('phone') }} error={errors.phone} />
      <Input label='Subject' className='col-span-4' inputProps={{ ...register('subject') }} error={errors.subject} />
      <TextArea
        label='Enter the lead type you are looking for'
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

export default ContactForm
