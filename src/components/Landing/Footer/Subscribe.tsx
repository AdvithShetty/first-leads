'use client'

import { useIsClient } from '@/hooks/useIsClient'
import { Button, Link } from '@nextui-org/react'

const Subscribe = () => {
  const isClient = useIsClient()

  if (!isClient) return null

  return (
    <div className='flex w-[20rem] flex-col gap-4 pt-2 font-archivo'>
      <h1 className='pb-2 text-xl font-semibold text-white'>Need more information?</h1>
      <Button
        className={`h-12 cursor-pointer rounded-lg bg-[#FD6001] transition-all duration-250 ease-in-out hover:scale-105`}
      >
        <Link
          href='/contact'
          className='flex h-full w-full items-center justify-center px-4 text-base font-semibold text-[#FAFAFA]'
        >
          Contact Us
        </Link>
      </Button>
    </div>
  )
}

const ArrowIcon = () => (
  <svg className='h-6 w-6 rotate-90' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
    <path
      fill='none'
      stroke='#FFFFFF'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='48'
      d='m112 244l144-144l144 144M256 120v292'
    />
  </svg>
)

export default Subscribe
