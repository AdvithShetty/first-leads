'use client'
import LoadingUi from '@/components/LoadingUi'
import useRefreshToken from '@/hooks/useRefreshToken'
import useUser from '@/hooks/useUser'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import useIsClient from 'usehooks-ts/dist/esm/useIsClient/useIsClient'
import Sidebar from './Sidebar'

const Layout = ({ children }: { children: ReactNode }) => {
  const { data: user, isLoading: isUserLoading, isSuccess } = useUser()
  const { refreshToken } = useRefreshToken()
  const router = useRouter()

  useEffect(() => {
    if (!refreshToken) {
      router.replace('/signin')
    }
  }, [refreshToken, router])

  const isClient = useIsClient()

  if ((isUserLoading && !isSuccess) || !isClient) return <LoadingUi />

  return (
    <div className='grid h-screen grid-cols-7 bg-[#160042] lg:grid-cols-6'>
      <Sidebar />
      <div className='col-span-6 w-full lg:col-span-5'>
        <div className='hidden h-[10vh] w-full items-center justify-between px-16 lg:flex'>
          <h1 className='flex gap-2 font-quicksand text-[21px] font-bold text-white'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='17' viewBox='0 0 24 17' fill='none'>
              <path
                d='M8.57143 5.95H6.86966C7.66569 3.66392 8.3454 2.56913 10.6071 1.63447C10.9846 1.47841 11.1981 1.08001 11.1177 0.68238C11.0374 0.285515 10.6858 0 10.2773 0H10.2756C5.55711 0.00833 2.84674 1.88428 0.924857 6.46961C0.3114 7.90985 0 9.45123 0 11.05C0 13.5087 0.75 14.8476 1.89343 16.6098C2.0508 16.853 2.32286 17 2.61411 17H8.57143C9.9894 17 11.1429 15.8562 11.1429 14.45V8.5C11.1429 7.09385 9.9894 5.95 8.57143 5.95ZM21.4286 5.95H19.7268C20.5228 3.66392 21.2025 2.56913 23.4643 1.63447C23.8418 1.47841 24.0553 1.08001 23.9749 0.68238C23.8946 0.285515 23.543 0 23.1345 0H23.1327C18.4143 0.00833 15.7039 1.88428 13.782 6.46961C13.1685 7.90985 12.8571 9.45123 12.8571 11.05C12.8571 13.5087 13.6071 14.8476 14.7506 16.6098C14.9079 16.853 15.18 17 15.4713 17H21.4286C22.8465 17 24 15.8562 24 14.45V8.5C24 7.09385 22.8465 5.95 21.4286 5.95Z'
                fill='#6721FF'
              />
            </svg>
            {`Let's Get your business the Growth It Deserves`}
            <svg width='24' height='17' viewBox='0 0 24 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M15.4286 5.95H17.1303C16.3343 3.66393 15.6546 2.56913 13.3929 1.63447C13.0154 1.47841 12.8019 1.08001 12.8823 0.68238C12.9626 0.285515 13.3142 0 13.7227 0H13.7244C18.4429 0.00833 21.1533 1.88428 23.0751 6.46961C23.6886 7.90985 24 9.45124 24 11.05C24 13.5087 23.25 14.8476 22.1066 16.6099C21.9492 16.853 21.6771 17 21.3859 17H15.4286C14.0106 17 12.8571 15.8562 12.8571 14.45V8.5C12.8571 7.09385 14.0106 5.95 15.4286 5.95ZM2.57143 5.95H4.2732C3.47717 3.66393 2.79746 2.56913 0.535714 1.63447C0.158228 1.47841 -0.0552854 1.08001 0.0251146 0.68238C0.105429 0.285515 0.457028 0 0.865543 0H0.867258C5.58574 0.00833 8.29611 1.88428 10.218 6.46961C10.8315 7.90985 11.1429 9.45124 11.1429 11.05C11.1429 13.5087 10.3929 14.8476 9.24943 16.6099C9.09206 16.853 8.82 17 8.52874 17H2.57143C1.15346 17 -2.38419e-07 15.8562 -2.38419e-07 14.45V8.5C-2.38419e-07 7.09385 1.15346 5.95 2.57143 5.95Z'
                fill='#6721FF'
              />
            </svg>
          </h1>
          <Image src='/images/LogoWhite.png' width={250} height={100} alt='Logo' />
        </div>
        <div className='h-screen w-full overflow-y-auto bg-white lg:h-[90vh] lg:rounded-tl-[15px]'>{children}</div>
      </div>
    </div>
  )
}

export default Layout
