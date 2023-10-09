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
          <motion.div className='flex items-center gap-10' variants={circleVariant}>
            <div className='grid h-20 w-20 place-items-center rounded-full bg-purple-2 text-[26px] font-medium tracking-[-0.75px] text-white'>
              0{i + 1}.
            </div>
            <div className='flex flex-col' key={i}>
              <h3 className='text-[26px] font-medium tracking-[-0.75px] text-white'>{step.title}</h3>
              <p className='text-[19px] font-normal text-[#BABABA]'>{step.description}</p>
            </div>
          </motion.div>
          {i + 1 < steps.length ? <motion.div className='ml-[38px] h-16 w-1 bg-white' variants={lineVariant} /> : null}
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
