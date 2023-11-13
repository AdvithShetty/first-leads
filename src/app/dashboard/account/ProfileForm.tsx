import Input from '@/components/Input'
import useUser from '@/hooks/useUser'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nextui-org/react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

export const profileSchema = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  zipCode: z.string().min(1, 'ZipCode is required'),
})

export type ProfileSchemaType = z.infer<typeof profileSchema>

const ProfileForm = () => {
  const { data: user } = useUser()

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ProfileSchemaType>({
    defaultValues: {
      firstName: user?.firstName ?? '',
      lastName: user?.lastName ?? '',
      email: user?.email ?? '',
      phoneNumber: user?.phone ?? '',
      zipCode: user?.zipCode ?? '',
    },
    resolver: zodResolver(profileSchema),
  })

  const onSubmit = async (data: ProfileSchemaType) => {
    console.log(data)
    const res = await axios.patch('/api/user/update', {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phoneNumber,
      zipCode: data.zipCode,
    })

    if (res.status === 200) {
      toast.success('Profile updated successfully')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 pt-2'>
      <div className='flex items-center justify-between pb-6'>
        <h1 className='font-sans text-[40px] font-bold text-black'>My Account</h1>
        <Button
          type='submit'
          className='ml-auto h-12 w-max rounded-[10px] border border-[#0000001C] bg-[#7363F3] px-14 font-rubik text-[13px] font-normal text-white'
        >
          Save Changes
        </Button>
      </div>
      <h1 className='pb-4 font-sans text-[22px] font-bold text-black'>Your Profile</h1>
      <div className='grid w-full grid-cols-4 gap-x-10 gap-y-8 pb-16'>
        <Input
          label='Your First Name'
          inputProps={{ ...register('firstName') }}
          error={errors.firstName}
          className='col-span-2'
        />
        <Input
          label='Your Last Name'
          inputProps={{ ...register('lastName') }}
          error={errors.lastName}
          className='col-span-2'
        />
        <Input
          label='Email Address'
          inputProps={{ ...register('email') }}
          error={errors.email}
          className='col-span-4'
        />
        <Input
          label='Phone Number'
          inputProps={{ ...register('phoneNumber') }}
          error={errors.phoneNumber}
          className='col-span-4'
        />
        <Input label='Zip Code' inputProps={{ ...register('zipCode') }} error={errors.zipCode} className='col-span-4' />
      </div>
    </form>
  )
}

export default ProfileForm
