'use client'
import ForgorPasswordModal from '@/app/signin/ForgorPasswordModal'
import { EmailIcon, EyeFilledIcon, EyeSlashFilledIcon } from '@/components/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, useDisclosure } from '@nextui-org/react'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type LoginInSchemaType = z.infer<typeof schema>

const Admin = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginInSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: LoginInSchemaType) => {
    console.log(data)
  }

  return (
    <div className='h-screen w-full bg-[#F9F5FF] px-12 py-10'>
      <div className='relative flex h-full w-full flex-col items-center rounded-[10px] bg-white py-20'>
        <Image src='/images/Onboarding/Logo.png' width={400} height={150} alt='Logo' className='object-contain' />
        <form onSubmit={handleSubmit(onSubmit)} className='flex w-1/3 flex-col gap-8 py-10'>
          <h1 className='font-inter text-4xl font-bold tracking-[-0.72px] text-[#101828]'>Admin Login</h1>
          <Input
            {...register('email')}
            // label='Email'
            placeholder='example@domain.com'
            variant='bordered'
            isInvalid={Boolean(errors.email)}
            errorMessage={errors.email?.message}
            type='email'
            startContent={<EmailIcon className='h-5 w-5 shrink-0' />}
            classNames={{
              label: 'text-[#667085] font-inter text-base font-normal',
              input: 'font-inter text-base font-normal',
              inputWrapper: 'border border-[#D0D5DD] rounded-lg h-14',
            }}
          />
          <Input
            {...register('password')}
            label='Password'
            variant='bordered'
            endContent={
              <button
                className='focus:outline-none'
                type='button'
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <EyeSlashFilledIcon className='pointer-events-none text-2xl text-default-400' />
                ) : (
                  <EyeFilledIcon className='pointer-events-none text-2xl text-default-400' />
                )}
              </button>
            }
            isInvalid={Boolean(errors.password)}
            errorMessage={errors.password?.message}
            type={isPasswordVisible ? 'text' : 'password'}
            classNames={{
              label: 'text-[#667085] font-inter text-base font-normal',
              input: 'font-inter text-base font-normal',
              inputWrapper: 'border border-[#D0D5DD] rounded-lg',
            }}
          />
          <div className='flex w-full items-center justify-between'>
            <div className='flex items-center gap-2'>
              <svg
                className='cursor-pointer'
                onClick={() => setRememberMe(!rememberMe)}
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
              >
                <rect x='0.5' y='0.5' width='19' height='19' rx='9.5' fill='#F9F5FF' />
                {rememberMe ? <circle cx='10' cy='10' r='4' fill='#7F56D9' /> : null}
                <rect x='0.5' y='0.5' width='19' height='19' rx='9.5' stroke='#7F56D9' />
              </svg>
              <h2 className='font-inter text-base font-medium text-black'>Remember me</h2>
            </div>
            <button className='font-inter text-lg font-normal text-[#6941C6]' onClick={onOpen}>
              Forgot Password?
            </button>
          </div>
          <Button
            type='submit'
            className='h-14 w-full rounded-lg bg-[#6941C6] font-inter text-lg font-semibold text-white 2xl:w-3/4'
          >
            Sign In
          </Button>
        </form>
        <div className='absolute bottom-6 right-8 flex items-center justify-between font-inter text-sm font-normal text-[#667085]'>
          <p>2023 © First Leads</p>
        </div>
      </div>
      <ForgorPasswordModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  )
}

export default Admin
