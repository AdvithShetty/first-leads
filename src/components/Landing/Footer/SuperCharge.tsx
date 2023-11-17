import GetStarted from '../GetStarted'

const SuperCharge = () => {
  return (
    <div className='absolute top-14 z-0 w-full'>
      <svg
        className='absolute -top-8 right-[17rem] z-[-1]'
        xmlns='http://www.w3.org/2000/svg'
        width='349'
        height='110'
        viewBox='0 0 349 110'
        fill='none'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0 37.2198L300.087 0.322016C323.384 -2.54229 344.59 14.0202 347.455 37.3153L347.99 41.6664C350.965 65.877 332.997 87.6191 308.655 89.2544L0 109.991V37.2198Z'
          fill='#6721FF'
        />
      </svg>
      <div className='z-[1] mx-auto flex w-3/4 flex-col items-center rounded-2xl bg-purple-2 px-20 py-16 font-archivo'>
        <h1 className='text-center text-5xl font-semibold tracking-[-1px] text-white'>
          Ready to supercharge your Business?
        </h1>
        <h2 className='pt-1 text-5xl font-semibold tracking-[-1px] text-white'>Sign up for free!</h2>
        <GetStarted backgroundColor='bg-[#FD6001] h-14 px-8 mt-8' customText='Get Started Now' />
      </div>
    </div>
  )
}

export default SuperCharge
