import Image from 'next/image'
import Steps from './Steps'

const HowItWorks = () => {
  return (
    <>
      <div
        className='flex w-full flex-col bg-[#0C1E1B] px-10 pb-10 pt-20 font-rubik xl:pl-40 xl:pr-0'
        id='how-it-works'
      >
        <h1 className='font-sans text-xl font-bold uppercase tracking-[-0.6px] text-white'>PROCESS</h1>
        <div className='flex w-full justify-between'>
          <div className='flex w-full flex-col pt-2 xl:w-1/2'>
            <h2 className='text-4xl font-medium tracking-[-1px] text-white xl:text-[54px]'>How it Works</h2>
            <Steps />
          </div>
          {/* ---------------------------------- Image ---------------------------------  */}
          <Image
            src='/images/Landing/HowItWorks.png'
            alt='hero'
            width={700}
            height={600}
            className='mt-24 hidden object-contain xl:mt-0 xl:block'
          />
        </div>
      </div>
      <div className='h-8 w-full bg-purple-1' />
      <div
        className='h-0 w-0'
        style={{
          borderTop: '40px solid #6721FF',
          borderRight: '98vw solid transparent',
        }}
      />
    </>
  )
}

export default HowItWorks
