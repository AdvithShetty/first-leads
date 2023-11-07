'use client'
import { BlogPostsIcon, LeadTypeIcon, TransactionIcon, UploadLeadsIcon, UsersIcon } from '@/components/Admin/icons'
import { DashboardIcon, LogoutIcon, SettingsIcon } from '@/components/Dashboard/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const AdminSidebar = () => {
  const pathname = usePathname()

  return (
    <div className='col-span-1 flex h-full flex-col'>
      <div className='flex w-full flex-col items-center justify-center py-6'>
        <div className='flex h-[92px] w-[92px] items-center justify-center overflow-hidden rounded-full bg-white'>
          <img src='/images/Landing/WhatmakesUsUnique.jpg' alt='avatar' className='h-full w-full' />
        </div>
        <h1 className='pb-2 pt-5 font-quicksand text-2xl font-bold text-white'>Jack Doe</h1>
        <p className='font-inter text-sm font-normal text-[#E8E8E8]'>Admin</p>
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
        <button
          className={`flex w-full items-center gap-4 rounded-lg px-4 py-3 text-[#F10A0A]${
            pathname == '/support' ? 'bg-purple-2' : ''
          }`}
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
    route: '/admin/dashboard',
    icon: <DashboardIcon />,
    label: 'Dashboard',
  },
  {
    route: '/admin/lead-type',
    icon: <LeadTypeIcon />,
    label: 'Lead Type',
  },
  {
    route: '/admin/upload-leads',
    icon: <UploadLeadsIcon />,
    label: 'Upload Leads',
  },
  {
    route: '/admin/my-subscriptions',
    icon: <TransactionIcon />,
    label: 'Transaction',
  },
  {
    route: '/admin/my-subscriptions',
    icon: <BlogPostsIcon />,
    label: 'Blog Posts',
  },
  {
    route: '/admin/my-subscriptions',
    icon: <UsersIcon />,
    label: 'Users',
  },
  {
    route: '/admin/account',
    icon: <SettingsIcon />,
    label: 'My Account',
  },
]

export default AdminSidebar
