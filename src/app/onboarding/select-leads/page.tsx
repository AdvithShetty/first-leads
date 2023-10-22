import LeadTypeCard from '@/components/Onboarding/SelectLead/LeadTypeCard'
import Image from 'next/image'

const SelectLead = () => {
  return (
    <div className='flex h-full w-full flex-col p-16'>
      <Image src='/images/Onboarding/Logo.png' width={250} height={150} alt='Logo' className='object-contain' />
      <h1 className='pt-4 font-sans text-5xl font-bold text-black'>Select your lead type</h1>
      <p className='mt-4 w-3/4 font-outfit text-[21px] font-normal text-[#5F5F5F]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <div className='grid w-full grid-cols-4 gap-10 py-10'>
        {Array.from({ length: 4 }).map((_, i) => (
          <LeadTypeCard key={i} />
        ))}
      </div>
    </div>
  )
}

export default SelectLead
