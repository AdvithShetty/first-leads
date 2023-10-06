'use client'

import { useIsClient } from '@/hooks/useIsClient'

const Subscribe = () => {
  const isClient = useIsClient()

  if (!isClient) return null

  return (
    <div className='flex w-[20rem] flex-col gap-4 pt-2 font-archivo'>
      <h1 className='pb-2 text-xl font-semibold text-white'>Subscribe</h1>
      <h2 className='text-lg font-normal text-[#859794]'>
        The latest news article and resources in your inbox every month.
      </h2>
      <form
        className='flex w-full items-center py-2'
        onSubmit={(e) => {
          e.preventDefault()
          console.log('submit', e.target)
        }}
      >
        <input
          type='text'
          placeholder='Enter your email Address....'
          className='placeholder:text-[text-sm text-[#859794]] h-12 w-[90%] rounded-[10px] border border-[#E5E5E4] p-6 text-sm text-[#859794] outline-none placeholder:text-sm'
        />
        <button
          type='submit'
          className='grid h-full -translate-x-4 place-items-center rounded-lg bg-[#6A26DA] transition-colors hover:bg-[#8f5be3]'
          style={{
            aspectRatio: '1/1',
          }}
        >
          <ArrowIcon />
        </button>
      </form>
    </div>
  )
}

const ArrowIcon = () => (
  <svg className='h-6 w-6 rotate-90' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
    <path
      fill='none'
      stroke='#FFFFFF'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='48'
      d='m112 244l144-144l144 144M256 120v292'
    />
  </svg>
)

export default Subscribe
