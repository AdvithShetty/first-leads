import Image from 'next/image'

const WhyUs = () => {
  return (
    <div className='w-full px-20 py-10 2xl:px-40'>
      <h1 className='font-sans text-xl font-bold uppercase tracking-[-0.6px] text-[#2A00FF]'>WHY US</h1>
      <div className='flex items-center justify-between'>
        <div className='flex w-1/2 flex-col gap-14'>
          <h2 className='py-6 font-sans text-6xl font-bold text-black'>Your Gateway To Exclusive Leads</h2>
          <Image src='/images/Landing/GeographicCoverage.png' width={600} height={400} alt='Why Us' />
        </div>
        <div className='flex gap-10 font-outfit'>
          <div className='flex flex-col gap-16'>
            <PurpleCard />
            <WhiteCard />
          </div>
          <div className='mt-16 flex flex-col gap-16'>
            <WhiteCard />
            <PurpleCard />
          </div>
        </div>
      </div>
    </div>
  )
}

const PurpleCard = () => {
  return (
    <div
      className='flex w-[19rem] flex-col gap-4 rounded-[5px] bg-purple-2 p-9 leading-none text-white'
      style={{
        boxShadow: '0px 0px 20px 4px rgb(0, 0, 0, 0.08)',
      }}
    >
      <h2 className='text-[26px] font-normal'>Upto</h2>
      <h1 className='text-[68px] font-bold'>99%</h1>
      <p className='text-[21px] font-normal'>Total # Leads here</p>
    </div>
  )
}

const WhiteCard = () => {
  return (
    <div
      className='flex w-[19rem] flex-col gap-4 rounded-[5px] bg-white p-9 leading-none text-black'
      style={{
        boxShadow: '0px 0px 20px 4px rgb(0, 0, 0, 0.04)',
      }}
    >
      <h2 className='text-[26px] font-normal'>Upto</h2>
      <h1 className='text-[68px] font-bold'>99%</h1>
      <p className='text-[21px] font-normal'>Total # Leads here</p>
    </div>
  )
}

export default WhyUs
