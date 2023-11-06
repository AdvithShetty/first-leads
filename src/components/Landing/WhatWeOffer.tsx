import Image from 'next/image'
import { FC } from 'react'

const WhatWeOffer = () => {
  return (
    <div className='flex flex-col items-center gap-20 pb-20 font-rubik xl:py-20' id='features'>
      <h1 className='text-4xl font-medium tracking-[-1px] text-[#2F353E] xl:text-[54px]'>What We Offer</h1>
      <div className='grid grid-cols-3 place-items-center gap-4 xl:gap-10'>
        {cardsContent.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  )
}

interface CardProps {
  title: string
  description: string
  image: string
  className?: string
}

const Card: FC<CardProps> = ({ image, title, description, className }) => {
  return (
    <div className='col-span-3 w-4/5 pb-16 font-rubik xl:col-span-1 xl:w-96'>
      <div className='card-top-fade px-8 py-6'>
        <div className='relative h-56 w-full'>
          <Image src={image} fill className={className} alt='Image' />
        </div>
      </div>
      <div className='flex flex-col gap-4 pt-6'>
        <h1 className='text-center text-[24px] font-medium tracking-[-0.75px] text-[#2F353E]'>{title}</h1>
        <p className='text-center text-[19px] font-normal text-[#6C757D]'>{description}</p>
      </div>
    </div>
  )
}

const cardsContent: CardProps[] = [
  {
    title: '14-day free trial',
    description:
      'No strings attached, cancel at any time, instant access to our data. Not charged until end of trial period.',
    image: '/images/Landing/FreeTrial.jpeg',
    className: 'object-cover object-top',
  },
  {
    title: 'Fresh leads delivered on schedule',
    description: 'Straight to your dashboard, downloadable, accessible all in one place.',
    image: '/images/Landing/DeliveredWeekly.png',
    className: 'object-cover',
  },
  {
    title: 'Leads Contact Information',
    description: 'Get direct contact information of prospective clients. Name, Address, Phone and more.',
    image: '/images/Landing/LeadContactInformation.png',
    className: 'object-cover',
  },
  {
    title: 'DNC Verified',
    description: 'National Do Not Call list verified to limit your risks.',
    image: '/images/Landing/DNCVerified.png',
    className: 'object-contain',
  },
  {
    title: 'Diverse Industry Coverage',
    description: '15+ industry types and growing daily.',
    image: '/images/Landing/DiverseIndustryCoverage.png',
    className: 'object-contain',
  },
  {
    title: 'Geographic Coverage',
    description: 'Select Counties that matter most to you. Counties include all respective zip-codes.',
    image: '/images/Landing/GeographicCoverage.png',
    className: 'object-contain',
  },
]

export default WhatWeOffer
