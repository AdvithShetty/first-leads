'use client'
import { Button } from '@nextui-org/react'
import { AnimatePresence, Variants, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import GetStarted from './GetStarted'

const navVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
    x: -10,
  },
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* --------------------------------- Desktop -------------------------------- */}
      <nav className='hidden w-full items-center justify-between px-36 py-4 font-archivo xl:flex'>
        <Image src='/images/LogoWhite.png' alt='logo' width={200} height={50} />
        <div className='flex items-center gap-16'>
          {navLinks.map((link, i) => (
            <NavLink key={i} {...link} />
          ))}
        </div>
        <div className='flex items-center gap-4'>
          <GetStarted backgroundColor='bg-[#FD6001]' />
          <Button
            className={`h-12 w-[9rem] cursor-pointer rounded-lg bg-purple-2 p-0 transition-all duration-250 ease-in-out hover:scale-105`}
          >
            <Link
              href='/signin'
              className='flex h-full w-full items-center justify-center text-base font-semibold text-[#FAFAFA]'
            >
              Login
            </Link>
          </Button>
        </div>
      </nav>
      {/* --------------------------------- Mobile --------------------------------- */}
      <div className='absolute left-4 top-5 xl:hidden'>
        <Image src='/images/LogoWhite.png' alt='logo' width={200} height={50} />
      </div>
      <nav
        className={`fixed right-0 top-0 z-10 block h-screen font-archivo xl:hidden ${
          isOpen ? 'w-3/4 md:w-1/2 lg:w-1/3' : 'w-0'
        }`}
      >
        <button
          className='absolute right-4 top-4 z-10 h-12 w-12 self-end overflow-hidden rounded-full bg-white'
          onClick={() => {
            setIsOpen((prev) => !prev)
          }}
        >
          <AnimatePresence mode='wait'>
            {!isOpen ? (
              <motion.div
                className='flex flex-col items-center justify-center gap-1'
                variants={navVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                key='1'
              >
                <div className='h-[3px] w-7 bg-purple-2' />
                <div className='h-[3px] w-7 bg-purple-2' />
                <div className='h-[3px] w-7 bg-purple-2' />
              </motion.div>
            ) : (
              <motion.div
                className='flex flex-col items-center justify-center gap-1'
                variants={navVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                key='2'
              >
                <div className='absolute h-[3px] w-7 rotate-45 bg-purple-2' />
                <div className='absolute h-[3px] w-7 -rotate-45 bg-purple-2' />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
        {
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100vh' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100vh' }}
                transition={{
                  duration: 0.5,
                }}
                className='flex h-screen w-full flex-col bg-[#160042] bg-opacity-80 font-archivo backdrop-blur-2xl'
              >
                <div className='flex flex-col items-start gap-10 p-10 pt-32'>
                  {navLinks.map((link, i) => (
                    <NavLink key={i} {...link} />
                  ))}
                </div>
                <div className='flex flex-col items-center gap-10'>
                  <GetStarted backgroundColor='bg-[#FD6001] w-4/5' />
                  <Button
                    className={`h-12 w-4/5 cursor-pointer rounded-lg bg-purple-2 p-0 transition-all duration-250 ease-in-out hover:scale-105`}
                  >
                    <Link
                      href='/signin'
                      className='flex h-full w-full items-center justify-center text-base font-semibold text-[#FAFAFA]'
                    >
                      Login
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        }
      </nav>
    </>
  )
}

const NavLink: FC<{ name: string; path: string }> = ({ path, name }) => {
  return (
    <Link
      href={path}
      scroll={true}
      className='group group relative cursor-pointer text-2xl font-medium text-[#FCFCFC] xl:text-base'
    >
      {name}
      <div className='absolute -bottom-1 h-0.5 w-0 rounded-md bg-white duration-400 ease-in-out group-hover:w-full' />
    </Link>
  )
}

const navLinks = [
  { name: 'Use Cases', path: '#use-cases' },
  { name: 'Features', path: '#features' },
  {
    name: 'How it Works',
    path: '#how-it-works',
  },
  {
    name: 'Pricing',
    path: '#pricing',
  },
  {
    name: 'FAQ',
    path: '#faq',
  },
]

export default Navbar
