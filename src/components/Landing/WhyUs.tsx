'use client'
import { fadeVariants } from '@/utils/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

const WhyUs = () => {
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
    fallbackInView: true,
  })
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
        <div className='flex scale-80 gap-5 font-outfit xl:scale-100 xl:gap-10'>
          <div className='flex flex-col gap-5 xl:gap-16'>
            <PurpleCard />
            <WhiteCard />
          </div>
          <div className='mt-10 flex flex-col gap-5 xl:mt-16 xl:gap-16'>
            <WhiteCard />
            <PurpleCard />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const PurpleCard = () => {
  return (
    <div
      className='flex w-[12rem] flex-col gap-4 rounded-[5px] bg-purple-2 p-4 leading-none text-white xl:w-[19rem] xl:p-9'
      style={{
        boxShadow: '0px 0px 20px 4px rgb(0, 0, 0, 0.08)',
      }}
    >
      <h2 className='text-2xl font-normal xl:text-[26px]'>Upto</h2>
      <h1 className='text-4xl font-bold xl:text-[68px]'>99%</h1>
      <p className='text-base font-normal xl:text-[21px]'>Total # Leads here</p>
    </div>
  )
}

const WhiteCard = () => {
  return (
    <div
      className='flex w-[12rem] flex-col gap-4 rounded-[5px] bg-white p-4 leading-none text-black xl:w-[19rem] xl:p-9'
      style={{
        boxShadow: '0px 0px 20px 4px rgb(0, 0, 0, 0.04)',
      }}
    >
      <h2 className='text-2xl font-normal xl:text-[26px]'>Upto</h2>
      <h1 className='text-4xl font-bold xl:text-[68px]'>99%</h1>
      <p className='text-base font-normal xl:text-[21px]'>Total # Leads here</p>
    </div>
  )
}

export default WhyUs
