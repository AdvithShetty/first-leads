'use client'
import { Variants, motion } from 'framer-motion'
import { Fragment } from 'react'
import { useInView } from 'react-intersection-observer'

const containerVariant: Variants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
}

const circleVariant: Variants = {
  visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20 } },
  hidden: { opacity: 0, y: -100 },
}
const lineVariant: Variants = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
}

const Steps = () => {
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
    fallbackInView: true,
  })

  return (
    <motion.div
      className='flex flex-col pt-10'
      ref={ref}
      initial='hidden'
      animate={inView && 'visible'}
      variants={containerVariant}
    >
      {steps.map((step, i) => (
        <Fragment key={i}>
          <motion.div className='relative z-0 flex gap-6 xl:items-center xl:gap-10' variants={circleVariant}>
            <div className='grid h-16 w-16 shrink-0 place-items-center rounded-full bg-purple-2 text-[26px] font-medium tracking-[-0.75px] text-white xl:h-20 xl:w-20'>
              0{i + 1}.
            </div>
            <div className='flex flex-col' key={i}>
              <h3 className='text-2xl font-medium tracking-[-0.75px] text-white xl:text-[26px]'>{step.title}</h3>
              <p className='text-base font-normal text-[#BABABA] xl:text-[19px]'>{step.description}</p>
            </div>
            {i + 1 < steps.length ? (
              <motion.div
                className='absolute z-[-1] ml-[30px] block h-full w-1 bg-white xl:ml-[38px] xl:hidden'
                variants={lineVariant}
              />
            ) : null}
          </motion.div>
          {i + 1 < steps.length ? (
            <motion.div className='ml-[30px] h-16 w-1 bg-white xl:ml-[38px]' variants={lineVariant} />
          ) : null}
        </Fragment>
      ))}
    </motion.div>
  )
}

const steps = [
  {
    title: 'Select Lead type',
    description: `Select the lead types you're interested in.`,
  },
  {
    title: 'Select coverage area.',
    description: 'Choose County for lead acquisition.',
  },
  {
    title: 'Data Delivery',
    description: 'Receive weekly lead data straight to your Dashboard.',
  },
  {
    title: 'Explore opportunities',
    description: 'Connect with potential clients.',
  },
  {
    title: 'Maximize ROI',
    description: 'Utilize our data to boost your business success!',
  },
]

export default Steps
