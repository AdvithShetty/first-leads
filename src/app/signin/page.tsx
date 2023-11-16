'use client'
import { EmailIcon, EyeFilledIcon, EyeSlashFilledIcon } from '@/components/Input'
import LoadingUi from '@/components/LoadingUi'
import useRefreshToken from '@/hooks/useRefreshToken'
import useUser from '@/hooks/useUser'
import { UserResponse } from '@/utils/interface'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, useDisclosure } from '@nextui-org/react'
import axios from 'axios'
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
      <div className='w-full lg:w-1/2'>
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
              Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and cubilia laoreet augue and luctus
              magna dolor luctus at egestas sapien vitae nemo egestas volute and turpis dolores aliquam quaerat sodales
              a sapien
            </p>
          </div>
        </div>
      </div>
      <ForgorPasswordModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  )
}

export default SignIn
