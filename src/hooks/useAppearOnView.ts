import { useInView } from 'react-intersection-observer'

const useAppearOnView = (amount?: number) => {
  const [ref, inView] = useInView({
    threshold: amount || 0.2,
    triggerOnce: true,
  })

  return {
    ref,
    animate: { opacity: inView ? 1 : 0 },
    transition: {
      duration: 0.5,
    },
  }
}

export default useAppearOnView
