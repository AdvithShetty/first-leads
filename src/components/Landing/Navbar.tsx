import Link from 'next/link'
import { FC } from 'react'
import GetStarted from './GetStarted'

const Navbar = () => {
  return (
    <nav className='flex w-full items-center justify-between px-40 py-4 font-archivo'>
      <h1 className='text-4xl font-semibold text-white'>Logo</h1>
      <div className='flex items-center gap-16'>
        {navLinks.map((link, i) => (
          <NavLink key={i} {...link} />
        ))}
      </div>
      <div className='flex items-center gap-4'>
        <GetStarted backgroundColor='bg-[#D88600]' />
        <GetStarted backgroundColor='bg-purple-2 w-[9rem]' customText='Login' />
      </div>
    </nav>
  )
}

const NavLink: FC<{ name: string; path: string }> = ({ path, name }) => {
  return (
    <Link
      href={path}
      scroll={true}
      className='group group relative cursor-pointer text-base font-medium text-[#FCFCFC]'
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
