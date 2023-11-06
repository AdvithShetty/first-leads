import Input from '@/components/Onboarding/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

export const schema = z.object({
  oldPassword: z.string().min(8),
  newPassword: z.string().min(8),
})

export type ChangePasswordSchemaType = z.infer<typeof schema>

//TODO: Change password to stars
const ChangePassword = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ChangePasswordSchemaType>({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
    },
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: ChangePasswordSchemaType) => {
    if (data.oldPassword === data.newPassword) {
      toast.error('New password cannot be the same as old password', {
        position: 'bottom-right',
      })
      return
    }
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 pt-2'>
      <h1 className='pb-4 font-sans text-[22px] font-bold text-black'>Change Your Password</h1>
      <div className='grid w-full grid-cols-4 gap-x-10 gap-y-8 pb-16'>
        <Input
          label='Old Password'
          inputProps={{ ...register('oldPassword'), type: 'password' }}
          error={errors.oldPassword}
          className='col-span-4'
        />
        <Input
          label='New Password'
          inputProps={{ ...register('newPassword'), type: 'password' }}
          error={errors.newPassword}
          className='col-span-4'
        />

        <Button
          type='submit'
          className='ml-auto h-12 w-max rounded-[10px] border border-[#0000001C] bg-[#7363F3] px-14 font-rubik text-[13px] font-normal text-white'
        >
          Change Password
        </Button>
      </div>
    </form>
  )
}

export default ChangePassword
