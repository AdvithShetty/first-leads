'use client'
import { Variants, motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import UseCaseDiagram from './UseCaseDiagram'

const variants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      staggerChildren: 0.25,
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
  },
}

const childrenVariants: Variants = {
  visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25 } },
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
      <motion.h2
        variants={childrenVariants}
        className='text-center text-3xl font-bold tracking-tighter text-black lg:text-5xl xl:text-7xl'
      >
        Leads for Every Business
      </motion.h2>
      {/* --------------------------------- Diagram -------------------------------- */}
      <motion.div variants={childrenVariants} className='-mt-14 hidden xl:block'>
        <UseCaseDiagram />
      </motion.div>
      <motion.div variants={childrenVariants} className='relative mb-20 mt-10 block h-[100vh] w-full xl:hidden'>
        <Image
          src='/images/Landing/UseCaseDiagramMobile.png'
          fill
          className='object-contain'
          alt='Use Case Diagram Mobile'
        />
      </motion.div>
    </motion.div>
  )
}

export default UseCases
