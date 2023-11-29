'use client'
import ForgorPasswordModal from '@/app/signin/ForgorPasswordModal'
import { EmailIcon, EyeFilledIcon, EyeSlashFilledIcon } from '@/components/Input'
import LoadingUi from '@/components/LoadingUi'
import useRefreshToken from '@/hooks/useRefreshToken'
import useUser from '@/hooks/useUser'
import { UserResponse } from '@/utils/interface'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, useDisclosure } from '@nextui-org/react'
import axios from 'axios'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useIsClient } from 'usehooks-ts'
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
  const { setRefreshToken } = useRefreshToken()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const onSubmit = async (data: LoginInSchemaType) => {
    setIsSubmitting(true)
    try {
      const res = await axios.post<UserResponse>('/api/login', {
        email: data.email,
        password: data.password,
      })

      setIsSubmitting(false)

      if (res.data.user.type !== 'admin') {
        toast.error('You are not admin')
        return
      }
      setRefreshToken(res.data.refreshToken)
      router.push('/admin/users')
    } catch (error: any) {
      setIsSubmitting(false)
      toast.error("We couldn't find an account matching the email and password you entered. Please try again.")
      console.log('error', error?.response?.data.error)
    }
  }

  const { data: user, isLoading: isUserLoading, isSuccess } = useUser()

  useEffect(() => {
    if (user && user.type === 'admin') {
      router.push('/admin/users')
    }
  }, [router, user])

  const isClient = useIsClient()

  if ((isUserLoading && !isSuccess) || !isClient) return <LoadingUi />

  return (
    <div className='h-screen w-full bg-[#F9F5FF] p-4 lg:px-12 lg:py-10'>
      <div className='relative flex h-full w-full flex-col items-center rounded-[10px] bg-white py-20'>
        <Link href='/' className='absolute left-4 top-4 lg:left-6 lg:top-6'>
          <motion.svg
            className='h-8 w-8 cursor-pointer outline-none'
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
            whileTap={{
              scale: 0.9,
            }}
            whileHover={{
              scale: 1.1,
            }}
          >
            <path
              d='M12.5 25C19.375 25 25 19.375 25 12.5C25 5.625 19.375 0 12.5 0C5.625 0 0 5.625 0 12.5C0 19.375 5.625 25 12.5 25ZM7.875 11.625L11.625 7.875C12.125 7.375 12.875 7.375 13.375 7.875C13.875 8.375 13.875 9.125 13.375 9.625L11.75 11.25H16.25C17 11.25 17.5 11.75 17.5 12.5C17.5 13.25 17 13.75 16.25 13.75H11.75L13.375 15.375C13.875 15.875 13.875 16.625 13.375 17.125C12.875 17.625 12.125 17.625 11.625 17.125L7.875 13.375C7.375 12.875 7.375 12.125 7.875 11.625Z'
              fill='#7363F3'
            />
          </motion.svg>
        </Link>
        <div className='relative h-[75px] w-3/4 lg:h-[100px] lg:w-[400px]'>
          <Image src='/images/Onboarding/Logo.png' fill alt='Logo' className='object-contain' />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex w-full flex-col gap-8 px-4 py-10 lg:w-1/3 lg:px-0'>
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
            isLoading={isSubmitting}
            isDisabled={isSubmitting}
          >
            Sign In
          </Button>
        </form>
        <div className='absolute bottom-6 right-8 flex items-center justify-between font-inter text-sm font-normal text-[#667085]'>
          <p>2023 All Rights Reserves by First Leads Generation Inc.</p>
        </div>
      </div>
      <ForgorPasswordModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  )
}

export default Admin
