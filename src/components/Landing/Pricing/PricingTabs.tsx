'use client'
import { useState } from 'react'
import PlanCards from './PlanCards'

enum AvailableTabs {
  Monthly = 'Monthly',
  Annually = 'Annually',
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 60,
}

const PricingTabs = () => {
  const [activeTab, setActiveTab] = useState<AvailableTabs>(AvailableTabs.Monthly)

  return (
    <div className='flex flex-col items-center gap-10 pt-10'>
      {/* <div className='relative mb-4 mt-10'>
        <div className='relative z-0 flex overflow-hidden rounded-[10px] border border-[#00000052] bg-white font-outfit'>
          <motion.div
            className={`absolute z-[-1] h-12 w-40 bg-purple-2 xl:h-14 xl:w-52 ${
              activeTab === AvailableTabs.Monthly ? 'left-0 top-0' : 'right-0 top-0'
            }`}
            layout
            transition={spring}
          />
          <motion.button
            animate={{ color: activeTab === AvailableTabs.Monthly ? '#fff' : '#000' }}
            onClick={() => setActiveTab(AvailableTabs.Monthly)}
            className='h-12 w-[161px] border-r border-[#00000052] text-xl font-semibold capitalize text-white xl:h-14 xl:w-[209px] xl:text-[26px]'
          >
            {AvailableTabs.Monthly}
          </motion.button>
          <motion.button
            animate={{ color: activeTab === AvailableTabs.Annually ? '#fff' : '#000' }}
            onClick={() => setActiveTab(AvailableTabs.Annually)}
            className='h-12 w-40 text-xl font-semibold capitalize text-black xl:h-14 xl:w-52 xl:text-[26px]'
          >
            {AvailableTabs.Annually}
          </motion.button>
        </div>
        <h3 className='absolute -right-6 -top-6 grid h-12 w-12 place-items-center rounded-full bg-[#FE3232] font-outfit text-[17px] font-semibold text-white'>
          -15%
        </h3>
      </div> */}

      <PlanCards />
    </div>
  )
}

export default PricingTabs
