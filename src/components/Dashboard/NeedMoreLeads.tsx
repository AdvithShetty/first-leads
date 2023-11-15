'use client'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

const NeedMoreLeads = ({ buttonStyles }: { buttonStyles?: string }) => {
  return (
    <div
      className='my-8 flex w-full flex-wrap items-center justify-between gap-2 rounded-md bg-[#7363F3] p-6 lg:p-10'
      style={{
        boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
      }}
    >
      <h1 className='text-center font-sans text-lg font-medium text-white lg:text-left lg:text-[32px]'>{`Didn't find what you're looking for`}</h1>
      <Button
        className={`mx-auto h-12 shrink-0 rounded-lg bg-black font-inter text-base font-medium text-white lg:mx-0 ${buttonStyles}`}
      >
        <Link href='/contact'>Get In Touch</Link>
      </Button>
    </div>
  )
}

export default NeedMoreLeads
