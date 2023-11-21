'use client'
import LoadingUi from '@/components/LoadingUi'
import useUser from '@/hooks/useUser'
import Image from 'next/image'
import { useIsClient } from 'usehooks-ts'
import Sidebar from '../dashboard/Sidebar'
import SupportForm from './SupportForm'

const Support = () => {
  const { data: user, isLoading } = useUser()
  const isClient = useIsClient()

  if (isLoading && !isClient) return <LoadingUi />

  return (
    <div className='grid h-screen grid-cols-6 bg-[#160042]'>
      {user ? <Sidebar /> : null}
      <div className={`${user ? 'col-span-5' : 'col-span-full'} w-full`}>
        <div className='h-screen w-full overflow-y-auto bg-white'>
          <div className='flex w-full flex-col items-center gap-6 py-20'>
            <div className='relative h-[75px] w-3/4 lg:h-[100px] lg:w-[400px]'>
              <Image src='/images/Onboarding/Logo.png' fill alt='Logo' className='object-contain' />
            </div>
            <h1 className='px-8 text-center font-quicksand text-3xl font-bold text-black lg:px-0 lg:pt-4 lg:text-5xl'>
              How may we Help You?
            </h1>
            {/* <p className='w-4/5 py-2 text-center font-outfit text-lg font-normal text-[#5F5F5F] lg:w-3/5 lg:text-[21px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p> */}
            <SupportForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
