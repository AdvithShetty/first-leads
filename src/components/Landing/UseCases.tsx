'use client'
import { Variants, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import UseCaseDiagram from './UseCaseDiagram'

const variants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      staggerChildren: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
  },
}

const childrenVariants: Variants = {
  visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12 } },
  hidden: { opacity: 0, y: 100 },
}

const UseCases = () => {
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
    fallbackInView: true,
  })

  return (
    <motion.div
      initial='hidden'
      animate={inView && 'visible'}
      variants={variants}
      className='flex min-h-screen w-full flex-col items-center gap-4 pt-10 font-sans'
      id='use-cases'
      ref={ref}
    >
      <motion.h1
        variants={childrenVariants}
        className='pb-2 text-xl font-bold uppercase tracking-[-0.6px] text-[#2A00FF]'
      >
        Use Cases
      </motion.h1>
      <motion.h2 variants={childrenVariants} className='text-center text-7xl font-bold tracking-tighter text-black'>
        Leads for Every Business
      </motion.h2>
      <motion.p
        variants={childrenVariants}
        className='w-1/2 text-center font-outfit text-[21px] font-normal leading-6 text-[#5F5F5F]'
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </motion.p>
      {/* --------------------------------- Diagram -------------------------------- */}
      <motion.div variants={childrenVariants} className='-mt-14'>
        <UseCaseDiagram />
      </motion.div>
    </motion.div>
  )
}

export default UseCases
