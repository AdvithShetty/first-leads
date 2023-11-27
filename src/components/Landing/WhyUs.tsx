'use client'
import usePicklists from '@/hooks/usePicklists'
import { fadeVariants } from '@/utils/variants'
import { Skeleton } from '@nextui-org/react'
import { animated, useSpring } from '@react-spring/web'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { useIsClient, useWindowSize } from 'usehooks-ts'

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
        ) : picklists && inView ? (
          <div className='flex scale-80 gap-5 font-outfit xl:scale-100 xl:gap-10'>
            <div className='flex flex-col gap-5 xl:gap-16'>
              <PurpleCard title='Total States Covered' value={picklists.geoStatistics.totalUniqueStates} />
              <WhiteCard title='Average Weekly Leads' value={picklists.globalStatistics.totalLeadsPerWeek} isCounting />
            </div>
            <div className='mt-10 flex flex-col gap-5 xl:mt-16 xl:gap-16'>
              <WhiteCard title='Total Number of Leads' value={picklists.globalStatistics.totalLeads} isCounting />
              <PurpleCard
                title='Potential Revenues'
                value={picklists.globalStatistics.totalPotentialRevenue}
                isCounting
                symbol='$'
              />
            </div>
          </div>
        ) : null}
      </div>
    </motion.div>
  )
}

interface CardProps {
  title: string
  value: number | string
  isCounting?: boolean
  symbol?: string
}

const PurpleCard = ({ title, value, isCounting, symbol }: CardProps) => {
  useIsClient()
  const { width } = useWindowSize()
  const isMobile = width < 1280

  return (
    <div
      className='flex w-[12rem] flex-col gap-4 rounded-[5px] bg-purple-2 p-4 leading-none text-white xl:w-[19rem] xl:p-9 xl:py-14'
      style={{
        boxShadow: '0px 0px 20px 4px rgb(0, 0, 0, 0.08)',
      }}
    >
      {/* <h2 className='text-2xl font-normal xl:text-[26px]'>Upto</h2> */}
      <h1
        className='flex items-center gap-1 text-4xl font-bold xl:text-[58px]'
        style={{
          fontSize: `calc(${isMobile ? '2.4rem' : '3rem'} - ${
            value.toString().length < 10 ? value.toString().length : value.toString().length * 1.5
          }px)`,
        }}
      >
        <span>{symbol}</span> {isCounting ? <RollingNumbers value={value as number} /> : value}
      </h1>
      <p className='text-base font-normal xl:text-[21px]'>{title}</p>
    </div>
  )
}

const WhiteCard = ({ title, value, isCounting }: CardProps) => {
  useIsClient()
  const { width } = useWindowSize()
  const isMobile = width < 1280

  return (
    <div
      className='flex w-[12rem] flex-col gap-4 rounded-[5px] bg-white p-4 leading-none text-black xl:w-[19rem] xl:p-9 xl:py-14'
      style={{
        boxShadow: '0px 0px 20px 4px rgb(0, 0, 0, 0.04)',
      }}
    >
      {/* <h2 className='text-2xl font-normal xl:text-[26px]'>Upto</h2> */}
      <h1
        className='text-4xl font-bold xl:text-[58px]'
        style={{
          fontSize: `calc(${isMobile ? '2.4rem' : '3rem'} - ${
            value.toString().length < 10 ? value.toString().length : value.toString().length * 1.5
          }px)`,
        }}
      >
        {isCounting ? <RollingNumbers value={value as number} /> : value}
      </h1>
      <p className='text-base font-normal xl:text-[21px]'>{title}</p>
    </div>
  )
}

const RollingNumbers = ({ value }: { value: number }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    config: { duration: 2000 },
  })

  return (
    <animated.div>
      {number.to((n) =>
        n.toLocaleString('en-US', {
          maximumFractionDigits: 0,
        })
      )}
    </animated.div>
  )
}

export default WhyUs
