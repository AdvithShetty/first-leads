'use client'
import {
  ArchiveIcon,
  DashboardIcon,
  HelpAndSupportIcon,
  LogoutIcon,
  MySubscriptionsIcon,
  ReportsIcon,
  SettingsIcon,
} from '@/components/Dashboard/icons'
import useRefreshToken from '@/hooks/useRefreshToken'
import useUser from '@/hooks/useUser'
import { Skeleton } from '@nextui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useQueryClient } from 'react-query'

const Sidebar = () => {
  const pathname = usePathname()
  const { data: user, isSuccess } = useUser()
  const { setRefreshToken } = useRefreshToken()
  const queryClient = useQueryClient()

  return (
    <div className='col-span-1 flex h-full flex-col'>
      <div className='flex w-full flex-col items-center justify-center py-10'>
        <div className='flex h-[92px] w-[92px] items-center justify-center overflow-hidden rounded-full bg-white'>
          <img src='/images/Landing/WhatMakesUsUnique.jpg' alt='avatar' className='h-full w-full' />
        </div>
        {isSuccess ? (
          <h1 className='pb-2 pt-5 font-quicksand text-2xl font-bold text-white'>
            {isSuccess ? `${user.firstName} ${user.lastName}` : ''}
          </h1>
        ) : (
          <Skeleton className='mb-2 mt-5 h-4 w-3/4 rounded-lg' />
        )}
        {isSuccess ? (
          <p className='font-inter text-sm font-normal text-[#E8E8E8]'>{user.industry}</p>
        ) : (
          <Skeleton className='h-4 w-1/2 rounded-lg' />
        )}
      </div>
      <div className='flex w-full flex-col items-center justify-center gap-4 px-6 pt-4 font-inter text-base font-medium text-white'>
        {sidebarTabs.map((tab, i) => (
          <Link
            href={tab.route}
            className={`flex w-full items-center gap-4 rounded-lg px-4 py-3 ${
              pathname == tab.route ? 'bg-purple-2' : ''
            }`}
            key={i}
          >
            {tab.icon}
            {tab.label}
          </Link>
        ))}
      </div>
      <div className='mt-auto flex w-full flex-col items-center justify-center gap-2 px-6 pb-4 font-inter text-base font-medium text-white'>
        <Link
          href='/support'
          className={`flex w-full items-center gap-4 rounded-lg px-4 py-3 ${
            pathname == '/support' ? 'bg-purple-2' : ''
          }`}
        >
          <HelpAndSupportIcon />
          Help & Support
        </Link>
        <button
          onClick={() => {
            setRefreshToken('')
            queryClient.clear()
          }}
          className='flex w-full items-center gap-4 rounded-lg px-4 py-3 text-[#F10A0A]'
        >
          <LogoutIcon />
          Log Out
        </button>
      </div>
    </div>
  )
}

const sidebarTabs = [
  {
    route: '/dashboard',
    icon: <DashboardIcon />,
    label: 'Dashboard',
  },
  {
    route: '/dashboard/reports',
    icon: <ReportsIcon />,
    label: 'My Report',
  },
  {
    route: '/dashboard/archives',
    icon: <ArchiveIcon />,
    label: 'Archives',
  },
  {
    route: '/dashboard/my-subscriptions',
    icon: <MySubscriptionsIcon />,
    label: 'My Subscription',
  },
  {
    route: '/dashboard/account',
    icon: <SettingsIcon />,
    label: 'My Account',
  },
]

export default Sidebar
