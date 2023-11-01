import Image from 'next/image'
import { ReactNode } from 'react'
import Sidebar from './Sidebar'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='grid h-screen grid-cols-6 bg-[#160042]'>
      <Sidebar />
      <div className='col-span-5 w-full'>
        <div className='flex h-[10vh] w-full items-center justify-between px-16'>
          <h1 className='flex gap-2 font-quicksand text-[21px] font-bold text-white'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='17' viewBox='0 0 24 17' fill='none'>
              <path
                d='M8.57143 5.95H6.86966C7.66569 3.66392 8.3454 2.56913 10.6071 1.63447C10.9846 1.47841 11.1981 1.08001 11.1177 0.68238C11.0374 0.285515 10.6858 0 10.2773 0H10.2756C5.55711 0.00833 2.84674 1.88428 0.924857 6.46961C0.3114 7.90985 0 9.45123 0 11.05C0 13.5087 0.75 14.8476 1.89343 16.6098C2.0508 16.853 2.32286 17 2.61411 17H8.57143C9.9894 17 11.1429 15.8562 11.1429 14.45V8.5C11.1429 7.09385 9.9894 5.95 8.57143 5.95ZM21.4286 5.95H19.7268C20.5228 3.66392 21.2025 2.56913 23.4643 1.63447C23.8418 1.47841 24.0553 1.08001 23.9749 0.68238C23.8946 0.285515 23.543 0 23.1345 0H23.1327C18.4143 0.00833 15.7039 1.88428 13.782 6.46961C13.1685 7.90985 12.8571 9.45123 12.8571 11.05C12.8571 13.5087 13.6071 14.8476 14.7506 16.6098C14.9079 16.853 15.18 17 15.4713 17H21.4286C22.8465 17 24 15.8562 24 14.45V8.5C24 7.09385 22.8465 5.95 21.4286 5.95Z'
                fill='#6721FF'
              />
            </svg>
            Let's Get your business the Growth It Deserves
          </h1>
          <Image src='/images/LogoWhite.png' width={250} height={100} alt='Logo' />
        </div>
        <div className='h-[90vh] w-full overflow-y-auto rounded-tl-[15px] bg-white'>{children}</div>
      </div>
    </div>
  )
}

export default layout
