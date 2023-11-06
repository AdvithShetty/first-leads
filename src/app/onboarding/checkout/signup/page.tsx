'use client'
import { EyeFilledIcon, EyeSlashFilledIcon } from '@/components/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

const schema = z.object({
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
})

export type PasswordSchemaType = z.infer<typeof schema>

const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<PasswordSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = (data: PasswordSchemaType) => {
    if (data.password !== data.confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    console.log(data)
  }

  return (
    <div className='flex w-full gap-10 bg-white p-8'>
      <div className='w-1/2'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex h-[89vh] w-full flex-col justify-center gap-8 px-20'>
          <h1 className='pb-4 font-inter text-4xl font-bold tracking-[-0.72px] text-black'>Set Your Password</h1>
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
            className='w-[85%] 2xl:w-3/4'
            classNames={{
              label: 'text-[#667085] font-inter text-base font-normal',
              input: 'font-inter text-base font-normal',
              inputWrapper: 'border border-[#D0D5DD] rounded-lg',
            }}
          />
          <Input
            {...register('confirmPassword')}
            label='Confirm Password'
            variant='bordered'
            endContent={
              <button
                className='focus:outline-none'
                type='button'
                onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
              >
                {isConfirmPasswordVisible ? (
                  <EyeSlashFilledIcon className='pointer-events-none text-2xl text-default-400' />
                ) : (
                  <EyeFilledIcon className='pointer-events-none text-2xl text-default-400' />
                )}
              </button>
            }
            isInvalid={Boolean(errors.confirmPassword)}
            errorMessage={errors.confirmPassword?.message}
            type={isConfirmPasswordVisible ? 'text' : 'password'}
            className='w-[85%] 2xl:w-3/4'
            classNames={{
              label: 'text-[#667085] font-inter text-base font-normal',
              input: 'font-inter text-base font-normal',
              inputWrapper: 'border border-[#D0D5DD] rounded-lg',
            }}
          />
          <Button
            type='submit'
            className='h-14 w-[85%] rounded-lg bg-[#6941C6] font-inter text-lg font-semibold text-white 2xl:w-3/4'
          >
            Sign Up
          </Button>
        </form>
        <div className='flex items-center justify-between font-inter text-sm font-normal text-[#667085]'>
          <div className='flex items-center divide-x-1 divide-[#4A5957]'>
            <Link href='#' target='_blank' rel='noopener noreferrer' className='pr-2 '>
              Privacy Policy
            </Link>
            <Link href='#' target='_blank' rel='noopener noreferrer' className='pl-2 '>
              Terms of Use
            </Link>
          </div>
          <p>2023 © First Leads</p>
        </div>
      </div>
      <div className='flex h-[91vh] w-1/2 flex-col items-end justify-center pl-40'>
        <div className='flex h-full w-full flex-col gap-6 bg-[#6941C6] p-8'>
          <Image src='/images/LogoWhite.png' width={250} height={100} alt='Logo' />
          <div className='my-auto flex flex-col items-center gap-6'>
            <div className='relative h-80 w-full overflow-hidden rounded-[10px] bg-white'>
              <Image
                src='/images/Onboarding/DataExtraction.png'
                fill
                alt='Data Extraction'
                className='scale-150 object-contain'
              />
            </div>
            <h1 className='pt-2 text-center font-inter text-5xl font-bold tracking-[-0.96px] text-white'>
              Leads that work
            </h1>
            <p className='text-center font-inter text-base font-normal leading-8 text-white'>
              Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and cubilia laoreet augue and luctus
              magna dolor luctus at egestas sapien vitae nemo egestas volute and turpis dolores aliquam quaerat sodales
              a sapien
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
