import Image from 'next/image'
import ContactForm from './ContactForm'

const page = () => {
  return (
    <div className='h-screen w-full overflow-y-auto bg-white'>
      <div className='flex w-full flex-col items-center gap-6 py-20'>
        <div className='relative h-[75px] w-3/4 lg:h-[100px] lg:w-[400px]'>
          <Image src='/images/Onboarding/Logo.png' fill alt='Logo' className='object-contain' />
        </div>
        <h1 className='px-8 text-center font-quicksand text-3xl font-bold text-black lg:px-0 lg:pt-4 lg:text-5xl'>
          {`Didn't find what you're looking for?`}
        </h1>
        <p className='w-4/5 py-2 text-center font-outfit text-lg font-normal text-[#5F5F5F] lg:w-3/5 lg:text-[21px]'>
          Let us know if you have any questions or are interested in industries, lead types, locations not yet
          represented.
        </p>
        <ContactForm />
      </div>
    </div>
  )
}

export default page
