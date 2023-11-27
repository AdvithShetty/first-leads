import Link from 'next/link'
import { ReactNode } from 'react'

export const LinkWrapper = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <Link href={href} target='_blank' rel='noopener noreferrer' className='text-blue-600 underline underline-offset-2'>
      {children}
    </Link>
  )
}
