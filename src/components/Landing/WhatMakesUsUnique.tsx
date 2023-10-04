import Image from 'next/image'

const WhatMakesUsUnique = () => {
  return (
    <div className='flex items-center justify-center gap-20 pb-20 font-archivo'>
      <Image src='/images/WhatMakesUsUnique.png' width={500} height={500} alt='What Makes Us Unique' />
      <div className='flex flex-col gap-2'>
        <h1 className='pb-2 font-sans text-xl font-bold uppercase tracking-[-0.6px] text-[#2A00FF]'>
          What Makes Us Unique
        </h1>
        <h2 className='w-96 text-left text-5xl font-semibold tracking-[-1px] text-[#0C1E1B]'>
          Our Leads, Your Success
        </h2>
        <div className='flex flex-col gap-6 pt-6'>
          {[
            {
              icon: <ThunderIcon />,
              title: 'Our Business Model',
              description: 'We specialize in identifying high quality leads before your competition',
            },
            {
              icon: <MapIcon />,
              title: 'Non-SEO Leads',
              description: 'Leads Identified from Data Mining Leveraging AI',
            },
          ].map((item, i) => (
            <div className='flex gap-8' key={i}>
              {item.icon}
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-semibold text-[#0C1E1B]'>{item.title}</h1>
                <p className='w-4/5 text-base font-normal text-[#4A5957]'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const ThunderIcon = () => (
  <svg width='30' height='33' viewBox='0 0 30 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M16.6665 13.4367V1.77002L1.6665 20.1033H13.3332V31.77L28.3332 13.4367H16.6665Z'
      stroke='#7363F3'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const MapIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='32' height='30' viewBox='0 0 32 30' fill='none'>
    <path
      d='M11 28.4831L1.92131 23.9437C1.35667 23.6614 1 23.0843 1 22.453V4.51314C1 3.27417 2.30385 2.46834 3.41202 3.02242L11 6.81641M11 28.4831L21 23.4831M11 28.4831V6.81641M11 6.81641L21 1.81641M21 23.4831L28.588 27.2771C29.6961 27.8311 31 27.0253 31 25.7863V7.84651C31 7.21521 30.6433 6.63811 30.0787 6.35571L21 1.81641M21 23.4831V1.81641'
      stroke='#7363F3'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default WhatMakesUsUnique
