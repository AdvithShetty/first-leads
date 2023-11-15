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
      <div className='relative h-[100px] w-3/4 lg:h-[150px] lg:w-[400px]'>
        <Image src='/images/Onboarding/Logo.png' fill alt='Logo' className='object-contain' />
      </div>

      <h1 className='px-8 pt-8 text-center font-quicksand text-4xl font-bold text-black lg:px-0 lg:text-5xl'>
        Let us know more about you!
      </h1>
      <p className='w-4/5 py-2 text-center font-outfit text-[21px] font-normal text-[#5F5F5F] lg:w-3/5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <OnboardingDetailsForm />
    </div>
  )
}

export default Onboarding
