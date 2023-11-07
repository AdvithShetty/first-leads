'use client'
import { fadeVariants } from '@/utils/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <motion.div
      variants={fadeVariants}
      initial='hidden'
      animate='visible'
      className='flex flex-col items-center justify-between overflow-x-hidden pb-40 pt-20 font-archivo xl:mb-40 xl:flex-row xl:pt-16'
    >
      <div className='flex w-full flex-col gap-4 px-4 xl:w-1/2 xl:pl-40 xl:pr-0'>
        <h1 className='w-full text-center text-4xl font-semibold text-white xl:text-left xl:text-6xl xl:tracking-[-2px]'>
          Unlock Your Business Superpower!
        </h1>
        <p className='text-center text-lg font-normal text-[#E5EDE5] xl:text-left'>
          Are you ready to supercharge your sales and grow your business? At FirstLeads, we specialize in delivering
          high-quality leads to service businesses across various industries.
        </p>
        <div className='flex items-center justify-center gap-4 pt-4 xl:justify-start'>
          <GetStarted backgroundColor='bg-[#D88600] px-6 h-14' />
        </div>
      </div>

      <div className='flex items-center justify-center xl:w-1/2'>
        <Image
          src='/images/Landing/Hero.png'
          alt='hero'
          width={900}
          height={800}
          className='mt-[8rem] translate-x-10 scale-110 object-contain xl:mt-0 xl:translate-x-[6rem] xl:scale-125 2xl:translate-x-[9rem]'
          quality={100}
        />
      </div>
    </motion.div>
  )
}

export default Hero
