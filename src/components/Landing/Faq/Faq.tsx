'use client'
import { fadeVariants } from '@/utils/variants'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import QuestionAndAnswer from './QuestionAndAnswer'

const Faq = () => {
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
      className='flex w-full flex-col items-center gap-4 pb-20'
      id='faq'
    >
      <h1 className='font-sans text-[20px] font-bold uppercase tracking-[-0.6px] text-[#2A00FF]'>FAQS</h1>
      <h2 className='font-sans text-3xl font-bold tracking-[-0.5px] text-[#212529] xl:text-[57px]'>
        Questions & Answers
      </h2>
      <QuestionAndAnswer />
    </motion.div>
  )
}

export default Faq
