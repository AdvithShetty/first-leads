'use client'
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
import ForgorPasswordModal from './ForgorPasswordModal'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type SignInSchemaType = z.infer<typeof schema>

const SignIn = () => {
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
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: SignInSchemaType) => {
    setIsSubmitting(true)
    try {
      const res = await axios.post<UserResponse>('/api/login', {
        email: data.email,
        password: data.password,
      })

      setRefreshToken(res.data.refreshToken)

      setIsSubmitting(false)
      toast.success('Logged in successfully: Redirecting to dashboard...')
      router.push('/dashboard')
    } catch (error: any) {
      setIsSubmitting(false)
      toast.error("We couldn't find an account matching the email and password you entered. Please try again.")
      console.log('error', error?.response?.data.error)
    }
  }

  const { data: user, isLoading: isUserLoading, isSuccess } = useUser()

  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
  }, [router, user])

  const isClient = useIsClient()

  if ((isUserLoading && !isSuccess) || !isClient) return <LoadingUi />

  return (
    <div className='flex w-full gap-10 bg-white p-4 lg:p-8'>
      <div className='relative w-full lg:w-1/2'>
        <Link href='/' className='absolute left-0 top-0'>
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex h-[89vh] w-full flex-col items-center justify-center gap-8 lg:w-[85%] lg:px-20 2xl:w-3/4'
        >
          <div className='flex w-full flex-col items-center gap-2'>
            <h1 className='font-inter text-4xl font-bold tracking-[-0.72px] text-black'>Sign In</h1>
            <p className='font-inter text-lg font-normal text-[#667085]'>Send, spend and save smarter</p>
          </div>
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
          <div className='flex w-full flex-col gap-2'>
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
            <p className='w-full font-inter text-sm text-[#5F5F5F]'>
              By signing in you accept our{' '}
              <Link href='/terms' target='_blank' rel='noopener noreferrer' className='hover:text-blue-500'>
                Terms
              </Link>{' '}
              and{' '}
              <Link href='/privacy' target='_blank' rel='noopener noreferrer' className='hover:text-blue-500'>
                Privacy
              </Link>{' '}
              Policies.
            </p>
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
        <div className='flex flex-col justify-between gap-4 font-inter text-sm font-normal text-[#667085] lg:flex-row lg:items-center lg:gap-0'>
          <div className='flex items-center divide-x-1 divide-[#4A5957]'>
            <Link href='/privacy' target='_blank' rel='noopener noreferrer' className='pr-2 '>
              Privacy Policy
            </Link>
            <Link href='/terms' target='_blank' rel='noopener noreferrer' className='pl-2 '>
              Terms of Use
            </Link>
          </div>
          <p>© 2023 All Rights Reserved by First Leads Generation Inc.</p>
        </div>
      </div>
      <div className='hidden h-[91vh] w-1/2 flex-col items-end justify-center pl-40 lg:flex'>
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
              Are you ready to supercharge your sales and grow your business? At FirstLeads, we specialize in delivering
              high-quality leads to service businesses across various industries.
            </p>
          </div>
        </div>
      </div>
      <ForgorPasswordModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  )
}

export default SignIn
