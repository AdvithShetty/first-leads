'use client'
import { usePathname } from 'next/navigation'
import TawkChat from './TawkChat'

const TwakWrapper = () => {
  const pathname = usePathname()
  console.log(pathname, 'pathname', pathname !== '/')

  if (pathname !== '/') return null

  return <TawkChat />
}

export default TwakWrapper
