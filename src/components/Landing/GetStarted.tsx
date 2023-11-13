'use client'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { FC } from 'react'

interface Props {
  /**
   * Tailwind CSS background color
   */
  backgroundColor: string

  customText?: string
}

const GetStarted: FC<Props> = ({ backgroundColor, customText }) => {
  return (
    <Button
      className={`${backgroundColor} h-12 cursor-pointer rounded-lg px-0 transition-all duration-250 ease-in-out hover:scale-105`}
    >
      <Link
        href='/onboarding'
        className='flex h-full w-full items-center justify-center px-4 text-base font-semibold text-[#FAFAFA]'
      >
        {customText || 'Get Started Now'}
      </Link>
    </Button>
  )
}

export default GetStarted
