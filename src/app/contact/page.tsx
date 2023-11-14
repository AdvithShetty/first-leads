import Image from 'next/image'
import ContactForm from './ContactForm'

const page = () => {
  return (
    <div className='h-screen w-full overflow-y-auto bg-white'>
      <div className='flex w-full flex-col items-center gap-6 py-20'>
        <Image src='/images/Onboarding/Logo.png' width={350} height={100} alt='Logo' />
        <h1 className='pt-8 text-center font-quicksand text-5xl font-bold text-black'>
          {`We don't serve this industry yet`}
        </h1>
        <p className='w-3/5 py-2 text-center font-outfit text-[21px] font-normal text-[#5F5F5F]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <ContactForm />
      </div>
    </div>
  )
}

export default page
