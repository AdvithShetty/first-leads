'use client'
import { UsersIcon } from '@/components/Admin/icons'
import { CrossIcon, LogoutIcon } from '@/components/Dashboard/icons'
import useRefreshToken from '@/hooks/useRefreshToken'
import useUser from '@/hooks/useUser'
import { useDisclosure } from '@nextui-org/react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { useQueryClient } from 'react-query'

const AdminSidebar = () => {
  const pathname = usePathname()
  const { data: user, isSuccess } = useUser()
  const { refreshToken, setRefreshToken } = useRefreshToken()
  const queryClient = useQueryClient()
  const router = useRouter()

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <div className='z-10 col-span-1 flex h-full flex-col items-center justify-between lg:hidden'>
        <button className='flex flex-col items-center justify-center gap-1 pt-5' onClick={onOpen}>
          <div className='h-[3px] w-7 bg-white' />
          <div className='h-[3px] w-7 bg-white' />
          <div className='h-[3px] w-7 bg-white' />
        </button>
        <div className='flex w-full flex-col items-center justify-center gap-4 font-inter text-base font-medium text-white'>
          {sidebarTabs.map((tab, i) => (
            <Link
              href={tab.route}
              className={`flex w-3/4 items-center justify-center gap-4 rounded-lg py-2 ${
                pathname == tab.route ? 'bg-purple-2' : ''
              }`}
              key={i}
            >
              {tab.icon}
            </Link>
          ))}
        </div>
        <div className='flex w-full flex-col items-center justify-center gap-6 pb-4 font-inter text-base font-medium text-white'>
          <button
            onClick={() => {
              setRefreshToken('')
              queryClient.clear()
            }}
            className='flex w-full items-center justify-center gap-4 rounded-lg text-[#F10A0A]'
          >
            <LogoutIcon />
          </button>
        </div>
        {/* ---------------------------- Slider for mobile --------------------------- */}
        <AnimatePresence mode='wait'>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0.5, x: '-50vh' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0.5, x: '-50vh' }}
              transition={{
                duration: 0.5,
              }}
              className='fixed left-0 top-0 z-10 flex h-full w-3/4 flex-col items-center justify-between bg-[#160042]'
            >
              <div className='flex w-3/4 justify-end pt-6'>
                <button className='block rounded-full bg-white p-2.5 lg:hidden' onClick={onClose}>
                  <CrossIcon className='h-4 w-4' />
                </button>
              </div>
              <div className='flex w-3/4 flex-col items-center justify-center gap-4 pt-4 font-inter text-base font-medium text-white'>
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
              <div className='flex w-3/4 flex-col items-center justify-center gap-2 pb-4 font-inter text-base font-medium text-white'>
                <button
                  onClick={() => {
                    setRefreshToken('')
                    queryClient.clear()
                    router.replace('/admin')
                  }}
                  className='flex w-full items-center gap-4 rounded-lg px-4 py-3 text-[#F10A0A]'
                >
                  <LogoutIcon />
                  Log Out
                </button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
      <div className='col-span-1 hidden h-full flex-col lg:flex'>
        <div className='flex w-full flex-col items-center justify-center py-6'>
          <h1 className='pb-2 pt-10 font-quicksand text-2xl font-bold text-white'>Jack Doe</h1>
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
            onClick={() => {
              setRefreshToken('')
              queryClient.clear()
              router.replace('/admin')
            }}
          >
            <LogoutIcon />
            Log Out
          </button>
        </div>
      </div>
    </>
  )
}

const sidebarTabs = [
  {
    route: '/admin/users',
    icon: <UsersIcon />,
    label: 'Users',
  },
]

export default AdminSidebar
