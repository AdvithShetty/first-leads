'use client'
import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC, useState } from 'react'

const Navbar = () => {
  return (
    <nav className='mx-auto flex w-full items-center justify-between py-4 font-archivo'>
      <h1 className='mr-44 text-4xl font-semibold text-white'>Logo</h1>
      <div className='flex items-center gap-16'>
        {navLinks.map((link, i) => (
          <NavLink key={i} {...link} />
        ))}
      </div>
      <Button className='ml-32 cursor-pointer rounded-lg bg-[#D88600] py-6 transition-all duration-250 ease-in-out hover:scale-105'>
        {/* //TODO: Added Get Started Link */}
        <Link href='#' className='text-base font-semibold text-[#FAFAFA]'>
          Get Started Now
        </Link>
      </Button>
    </nav>
  )
}

const NavLink: FC<{ name: string; path: string }> = ({ path, name }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={path}
      className='group relative cursor-pointer text-base font-medium text-[#FCFCFC]'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {name}
      <motion.div
        className='absolute -bottom-1 h-0.5 w-full rounded-md bg-white'
        initial={{
          width: '0%',
        }}
        animate={{
          width: isHovered ? '100%' : '0%',
        }}
      />
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
