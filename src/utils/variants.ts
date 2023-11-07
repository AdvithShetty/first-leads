import { Variants } from 'framer-motion'

export const fadeVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 20,
      staggerChildren: 0.25,
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
  },
}
