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
      className={`${backgroundColor} cursor-pointer rounded-lg py-6 transition-all duration-250 ease-in-out hover:scale-105`}
    >
      {/* //TODO: Added Get Started Link */}
      <Link href='#' className='text-base font-semibold text-[#FAFAFA]'>
        {customText || 'Get Started Now'}
      </Link>
    </Button>
  )
}

export default GetStarted
