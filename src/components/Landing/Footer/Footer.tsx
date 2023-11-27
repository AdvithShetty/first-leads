import Link from 'next/link'
import GetStarted from '../GetStarted'
import CompanySocials from './CompanySocials'
import ContactDetails from './ContactDetails'
import Subscribe from './Subscribe'
import SuperCharge from './SuperCharge'

const Footer = () => {
  return (
    <>
      <footer className='relative mt-[10rem] hidden overflow-hidden pt-[10rem] font-archivo xl:block'>
        <div className='h-[45rem] w-[110vw] -translate-x-[10rem] translate-y-10 skew-x-6 skew-y-2 rounded-tr-[5rem] bg-[#0C1E1B]' />
        <div className='w-full'>
          <SuperCharge />
          <div className='absolute bottom-0 w-full px-28 2xl:px-40'>
            <div className='flex h-[16rem] justify-between'>
              <CompanySocials />
              <Subscribe />
              <div className='w-[20rem]'></div>
            </div>
            <div className='flex justify-between border-t-2 border-[#8597941A] py-14 font-archivo text-base text-[#E5EDE5]'>
              <p>2023 All Rights Reserves by First Leads Generation Inc.</p>
              <div className='flex items-center divide-x-1 divide-[#4A5957]'>
                <Link href='#' target='_blank' rel='noopener noreferrer' className='pr-4'>
                  Privacy Policy
                </Link>
                <Link href='#' target='_blank' rel='noopener noreferrer' className='pl-4'>
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='relative mt-48 block h-[120vh] bg-[#0C1E1B] font-archivo xl:hidden'>
        <div className='flex h-full w-full flex-col justify-end'>
          <div className='z-[1] mx-auto flex w-[90%] -translate-y-10 flex-col items-center rounded-2xl bg-purple-2 px-4 py-10 font-archivo xl:w-3/4 xl:px-20 xl:py-8'>
            <h1 className='text-center text-3xl font-semibold tracking-[-1px] text-white xl:text-5xl'>
              Ready to supercharge your Business?
            </h1>
            <h2 className='text-center text-3xl font-semibold tracking-[-1px] text-white xl:text-5xl'>
              Sign up for free!
            </h2>
            <GetStarted backgroundColor='bg-[#FD6001] h-14 px-8 mt-8' customText='Get Started' />
          </div>
          <div className='flex flex-col items-center justify-between gap-14'>
            <CompanySocials />
            <ContactDetails />
            <Subscribe />
          </div>
          <div className='mt-14 flex justify-between border-t-2 border-[#8597941A] px-8 py-8 font-archivo text-base text-[#E5EDE5]'>
            <p>2023 All Right Reserved by domain</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
