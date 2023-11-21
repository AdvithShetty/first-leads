'use client'
import usePicklists from '@/hooks/usePicklists'
import { fadeVariants } from '@/utils/variants'
import { Skeleton } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

const WhyUs = () => {
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
    fallbackInView: true,
  })

  const { data: picklists, isLoading } = usePicklists()

  return (
    <motion.div
      variants={fadeVariants}
      initial='hidden'
      animate={inView && 'visible'}
      ref={ref}
      className='w-full px-10 py-10 xl:px-20 2xl:px-40'
    >
      <h1 className='font-sans text-xl font-bold uppercase tracking-[-0.6px] text-[#2A00FF]'>WHY US</h1>
      <div className='flex flex-col items-center justify-between xl:flex-row'>
        <div className='flex w-full flex-col gap-14 xl:w-1/2'>
          <h2 className='py-6 font-sans text-4xl font-bold text-black xl:text-6xl'>Your Gateway To Exclusive Leads</h2>
          <Image src='/images/Landing/USStates.png' width={600} height={400} alt='Why Us' />
        </div>
        {isLoading ? (
          <Skeleton className='h-[400px] w-full lg:w-2/5' />
        ) : picklists ? (
          <div className='flex scale-80 gap-5 font-outfit xl:scale-100 xl:gap-10'>
            <div className='flex flex-col gap-5 xl:gap-16'>
              <PurpleCard title='Total States Covered' value={picklists.geoStatistics.totalUniqueStates} />
              <WhiteCard
                title='Average Number of Leads per week'
                value={picklists.globalStatistics.totalLeadsPerWeek}
              />
            </div>
            <div className='mt-10 flex flex-col gap-5 xl:mt-16 xl:gap-16'>
              <WhiteCard title='Total Number of Leads' value={picklists.globalStatistics.totalLeads} />
              <PurpleCard title='Potential Revenues' value={picklists.globalStatistics.totalPotentialRevenue} />
            </div>
          </div>
        ) : null}
      </div>
    </motion.div>
  )
}

interface CardProps {
  title: string
  value: number
  // subtitle: string
}

const PurpleCard = ({ title, value }: CardProps) => {
  return (
    <div
      className='flex w-[12rem] flex-col gap-4 rounded-[5px] bg-purple-2 p-4 leading-none text-white xl:w-[19rem] xl:p-9'
      style={{
        boxShadow: '0px 0px 20px 4px rgb(0, 0, 0, 0.08)',
      }}
    >
      <h2 className='text-2xl font-normal xl:text-[26px]'>Upto</h2>
      <h1 className='text-4xl font-bold xl:text-[58px]'>{value}</h1>
      <p className='text-base font-normal xl:text-[21px]'>{title}</p>
    </div>
  )
}

const WhiteCard = ({ title, value }: CardProps) => {
  return (
    <div
      className='flex w-[12rem] flex-col gap-4 rounded-[5px] bg-white p-4 leading-none text-black xl:w-[19rem] xl:p-9'
      style={{
        boxShadow: '0px 0px 20px 4px rgb(0, 0, 0, 0.04)',
      }}
    >
      <h2 className='text-2xl font-normal xl:text-[26px]'>Upto</h2>
      <h1 className='text-4xl font-bold xl:text-[58px]'>{value}</h1>
      <p className='text-base font-normal xl:text-[21px]'>{title}</p>
    </div>
  )
}

export default WhyUs
