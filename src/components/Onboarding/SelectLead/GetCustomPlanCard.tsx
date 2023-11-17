'use client'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { LeadTypeTitle } from './common'

const GetCustomPlanCard = () => {
  return (
    <div
      className='col-span-full flex flex-col rounded-[10px] bg-white px-6 py-8'
      style={{
        boxShadow: '0px 0px 30px 3px rgba(0, 0, 0, 0.07)',
      }}
    >
      <LeadTypeTitle title={`Didn't find what you're looking for`} />
      <p className='pt-2 font-outfit text-[15px] font-normal text-[#5F5F5F]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </p>
      <Button className='mt-6 h-12 rounded-lg bg-[#FD6001] px-0 font-inter text-[15px] font-semibold text-white transition-colors'>
        <Link href='/contact' className='flex h-full w-full items-center justify-center'>
          Get Custom Plan
        </Link>
      </Button>
    </div>
  )
}

export default GetCustomPlanCard
