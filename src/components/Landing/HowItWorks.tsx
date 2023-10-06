import Steps from './Steps'

const HowItWorks = () => {
  return (
    <>
      <div className='flex w-full flex-col bg-[#0C1E1B] pb-10 pl-40 pt-20 font-rubik' id='how-it-works'>
        <h1 className='font-sans text-xl font-bold uppercase tracking-[-0.6px] text-white'>PROCESS</h1>
        <div className='flex w-full justify-between'>
          <div className='flex w-1/2 flex-col pt-2'>
            <h2 className='text-[54px] font-medium tracking-[-1px] text-white'>How it Works</h2>
            <Steps />
          </div>
          <div className='mt-16 h-[30rem] w-2/5 bg-slate-500'></div>
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
