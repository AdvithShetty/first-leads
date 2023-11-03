'use client'

import { Button } from '@nextui-org/react'

const PlanModification = () => {
  return (
    <div className='flex w-full items-center justify-between pt-10'>
      <div className='flex items-center gap-6'>
        <Button className='h-12 w-[220px] rounded-[10px] border border-[#0000001C] bg-[#7363F3] font-rubik text-[13px] font-normal text-white'>
          Subscribe New Industry
        </Button>
        <Button className='h-12 w-[220px] rounded-[10px] border border-[#0000001C] bg-white font-rubik text-[13px] font-normal text-black'>
          Subscribe New Industry
        </Button>
      </div>
      <Button className='bg-white px-0 font-rubik text-[13px] font-normal text-[#CC2E2E]' disableRipple>
        Cancel Subscription
      </Button>
    </div>
  )
}

export default PlanModification
