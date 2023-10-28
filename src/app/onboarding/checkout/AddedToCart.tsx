'use client'
import SelectedLeadRow from '@/components/Onboarding/SelectedLeadRow'
import { Button } from '@nextui-org/react'
import { useState } from 'react'

const AddedToCart = () => {
  const [billedPeriod, setBilledPeriod] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <div className='sticky top-0 flex w-full flex-col items-center p-8'>
      {/* ------------------------------ Billed Period ----------------------------- */}
      <div className='flex w-full items-center justify-end gap-1 pb-4'>
        <select
          name='billed'
          className='appearance-none bg-transparent font-inter text-base font-semibold text-purple-2 outline-none'
          onChange={(e) => {
            if (e.target.value === 'monthly') {
              setBilledPeriod('monthly')
            } else {
              setBilledPeriod('yearly')
            }
          }}
        >
          <option value='monthly'>Billed Monthly</option>
          <option value='yearly'>Billed Yearly</option>
        </select>
        <svg xmlns='http://www.w3.org/2000/svg' width='9' height='6' viewBox='0 0 9 6' fill='none'>
          <path
            d='M4.02454 5.79526L0.198343 1.8456C-0.0661144 1.5726 -0.0661144 1.13117 0.198343 0.861084L0.834167 0.204743C1.09862 -0.0682478 1.52626 -0.0682478 1.7879 0.204743L4.5 3.00436L7.2121 0.204743C7.47655 -0.0682478 7.90419 -0.0682478 8.16583 0.204743L8.80166 0.861084C9.06611 1.13408 9.06611 1.57551 8.80166 1.8456L4.97546 5.79526C4.71663 6.06825 4.289 6.06825 4.02454 5.79526Z'
            fill='#7363F3'
          />
        </svg>
      </div>
      {/* ------------------------------- Lead Types ------------------------------- */}
      <div className='no-scroll-bar max-h-[75vh] w-full overflow-y-auto'>
        {Array.from({ length: 3 }).map((_, i) => (
          <SelectedLeadRow
            key={i}
            leadType='Lead Type'
            plans={[
              { title: 'Location (Basic)', price: 29 },
              { title: 'Location (Premium)', price: 49 },
            ]}
          />
        ))}
      </div>
      <div className='flex w-full flex-col gap-6 pt-4 font-sans'>
        <div className='flex items-center justify-between'>
          <h1 className='text-lg font-medium text-black'>Sub Total</h1>
          <p className='text-right text-lg font-medium text-purple-2'>$150</p>
        </div>
        <div className='flex items-center justify-between'>
          <h1 className='text-lg font-medium text-black'>Coupon Discount</h1>
          {/* //TODO: Add Apply a Coupon Link */}
          <a href='#' className='text-right text-[15px] font-medium text-[#494949] underline'>
            Apply a Coupon?
          </a>
        </div>
        <div className='flex items-center justify-between'>
          <h1 className='text-lg font-medium text-black'>Tax</h1>
          <p className='text-right text-lg font-medium text-purple-2'>$20</p>
        </div>
      </div>
      <div className='my-4 h-[1px] w-full bg-[#0000001F]' />
      <div className='flex w-full items-center justify-between pb-6 font-sans'>
        <h1 className='text-2xl font-semibold text-black'>Today's Due</h1>
        <p className='text-right text-2xl font-semibold text-purple-2'>$199</p>
      </div>
      <Button className='h-14 w-full shrink-0 rounded-[5px] bg-[#7363F3] font-sans text-lg font-medium text-white'>
        Checkout Now
      </Button>
    </div>
  )
}

export default AddedToCart
