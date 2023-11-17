import { AnimatePresence, motion } from 'framer-motion'
import Cart from './Cart'
import { useCartDisclosure } from './CartSidebarContext'

const CartWrapper = () => {
  const { isOpen } = useCartDisclosure()

  return (
    <>
      <div className='relative top-0 z-10 col-span-1 hidden h-screen w-full lg:block'>
        <Cart />
      </div>
      <AnimatePresence mode='wait'>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, x: '100vh' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100vh' }}
            transition={{
              duration: 0.5,
            }}
            className='fixed top-0 z-10 col-span-full block h-screen w-full bg-[#F3F1FF] lg:relative lg:col-span-1 lg:hidden lg:bg-[#7363F30D]'
          >
            <Cart />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export default CartWrapper
