'use client'
import { AnimatePresence, motion } from 'framer-motion'

const LoadingUi: React.FC = () => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key='loading'
        className='loading-container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className='loading-spinner'>
          <motion.div
            className='loading-spinner-circle'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 0.6,
              ease: 'easeInOut',
            }}
          ></motion.div>
          <motion.div
            className='loading-spinner-circle'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 0.6,
              ease: 'easeInOut',
              delay: 0.2,
            }}
          ></motion.div>
          <motion.div
            className='loading-spinner-circle'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 0.6,
              ease: 'easeInOut',
              delay: 0.4,
            }}
          ></motion.div>
        </div>
        <div className='loading-text font-outfit text-2xl'>Loading</div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingUi
