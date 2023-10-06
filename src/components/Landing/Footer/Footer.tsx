import Link from 'next/link'
import CompanySocials from './CompanySocials'
import ContactDetails from './ContactDetails'
import Subscribe from './Subscribe'
import SuperCharge from './SuperCharge'

const Footer = () => {
  return (
    <footer className='relative mt-[10rem] overflow-hidden pt-[10rem] font-archivo'>
      <div className='h-[45rem] w-[110vw] -translate-x-[10rem] translate-y-10 skew-x-6 skew-y-2 rounded-tr-[5rem] bg-[#0C1E1B]' />
      <div className='w-full'>
        <SuperCharge />
        <div className='absolute bottom-0 w-full px-28 2xl:px-40'>
          <div className='flex h-[16rem] justify-between '>
            <div className='flex gap-14'>
              <CompanySocials />
              <ContactDetails />
            </div>
            <Subscribe />
          </div>
          <div className='flex justify-between border-t-2 border-[#8597941A] py-14 font-archivo text-base text-[#E5EDE5]'>
            <p>2023 All Right Reserved by domain</p>
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
  )
}

export default Footer
