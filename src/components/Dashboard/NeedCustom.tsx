'use client'
import { Button, Link } from '@nextui-org/react'

const NeedCustom = ({ paragraphWidth = 'w-3/4', buttonStyles }: { paragraphWidth?: string; buttonStyles?: string }) => {
  return (
    <div
      className='my-8 flex w-full items-center justify-between gap-2 rounded-md bg-[#7363F3] px-10 py-6'
      style={{
        boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
      }}
    >
      <div className='4/5 flex flex-col'>
        <h1 className='font-sans text-[32px] font-medium text-white'>Need Custom?</h1>
        <p className={`${paragraphWidth} font-rubik text-xs font-normal text-[#EDEDED]`}>
          Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a liberotempus, blandit and cursus
          varius and magnis sapien
        </p>
      </div>
      <Button
        className={`h-12 shrink-0 rounded-lg bg-black px-4 font-inter text-base font-medium text-white ${buttonStyles}`}
      >
        <Link href='#' target='_blank' rel='noopener noreferrer' className='text-white'>
          Contact Us
        </Link>
      </Button>
    </div>
  )
}

export default NeedCustom
