'use client'
import LoadingUi from '@/components/LoadingUi'
import OnboardingDetailsForm from '@/components/Onboarding/OnboardingDetailsForm'
import useUser from '@/hooks/useUser'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useIsClient } from 'usehooks-ts'

const Onboarding = () => {
  const router = useRouter()

  const { data: user, isLoading: isUserLoading, isSuccess } = useUser()

  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
  }, [router, user])

  const isClient = useIsClient()

  if ((isUserLoading && !isSuccess) || !isClient) return <LoadingUi />

  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center bg-white py-10'>
      <Image src='/images/Onboarding/Logo.png' width={400} height={150} alt='Logo' className='object-contain' />

      <h1 className='pt-8 text-center font-quicksand text-5xl font-bold text-black'>Let us know more about you!</h1>
      <p className='w-3/5 py-2 text-center font-outfit text-[21px] font-normal text-[#5F5F5F]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <OnboardingDetailsForm />
    </div>
  )
}

export default Onboarding
