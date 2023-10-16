'use client'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-between pb-40 pt-16 font-archivo xl:flex-row'>
      <div className='flex w-full flex-col gap-4 px-10 xl:w-1/2 xl:pl-40'>
        <h1 className='text-center text-4xl font-semibold text-white xl:text-6xl xl:tracking-[-2px]'>
          Unlock Your Business Superpower!
        </h1>
        <p className='text-center text-lg font-normal text-[#E5EDE5]'>
          Are you ready to supercharge your sales and grow your business? At FirstLeads, we specialize in delivering
          high-quality leads to service businesses across various industries.
        </p>
        <div className='flex items-center justify-center gap-4 pt-4 xl:justify-start'>
          <GetStarted backgroundColor='bg-purple-2 px-6 h-14' />
        </div>
      </div>

      <div className='mt-20 h-[30rem] w-[90%] rounded-2xl bg-slate-500 xl:w-[40rem]'></div>
    </div>
  )
}

export default Hero
