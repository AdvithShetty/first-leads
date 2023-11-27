'use client'
import { fadeVariants } from '@/utils/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import PricingTabs from './PricingTabs'

const Pricing = () => {
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
    fallbackInView: true,
  })
  return (
    <motion.div
      variants={fadeVariants}
      initial='hidden'
      animate={inView && 'visible'}
      ref={ref}
      className='w-full py-20'
      id='pricing'
    >
      <div className='px-10 xl:pl-28 2xl:pl-40'>
        <h1 className='font-sans text-xl font-bold uppercase tracking-[-0.6px] text-[#2A00FF]'>PRICING</h1>
        <h2 className='py-6 font-sans text-4xl font-bold text-black xl:text-6xl'>We Provide Leads that work</h2>
      </div>
      <PricingTabs />
      <div className='flex w-full flex-col items-center pb-10 pt-20'>
        <h2 className='font-outfit text-4xl font-semibold text-black'>See Pricing Details.</h2>
        <div className='flex flex-col items-center justify-center gap-24 py-10 xl:flex-row xl:items-start'>
          <div className='flex flex-col items-center xl:items-start'>
            <h1 className='font-rubik text-lg font-medium tracking-[-0.75px] text-[#2F353E]'>
              Accepted Payment Methods
            </h1>
            <div className='flex flex-wrap items-center justify-center gap-8 pt-3 xl:gap-16'>
              {[
                '/images/Landing/PaymentMethods/Visa.png',
                '/images/Landing/PaymentMethods/AmericanExpress.png',
                '/images/Landing/PaymentMethods/Discover.png',
                '/images/Landing/PaymentMethods/Paypal.png',
                '/images/Landing/PaymentMethods/Jcb.png',
                '/images/Landing/PaymentMethods/Shopify.png',
              ].map((item, i) => (
                <Image src={item} width={50} height={50} alt='' key={i} />
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-[4.5rem] xl:flex-row'>
            <div className='flex flex-col'>
              <RewindIcon />
              <h1 className='pb-2 pt-5 font-rubik text-lg font-medium tracking-[-0.75px] text-[#2F353E]'>Free Trial</h1>
              <p className='w-[18rem] font-outfit text-[21px] font-normal text-[#5F5F5F]'>
                14 days free trial. Cancel anytime.
              </p>
            </div>
            <div className='flex flex-col'>
              <ShieldIcon />
              <h1 className='pb-2 pt-5 font-rubik text-lg font-medium tracking-[-0.75px] text-[#2F353E]'>
                SSL Encrypted Payment
              </h1>
              <p className='w-[18rem] font-outfit text-[21px] font-normal text-[#5F5F5F]'>
                Reliable and Secure payment method.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Pricing

const RewindIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='34' height='42' viewBox='0 0 34 42' fill='none'>
    <path
      d='M29.75 25.2C29.75 32.151 24.0338 37.8 17 37.8C9.96625 37.8 4.25 32.151 4.25 25.2C4.25 18.249 9.96625 12.6 17 12.6V21L27.625 10.5L17 0V8.4C7.6075 8.4 0 15.918 0 25.2C0 34.482 7.6075 42 17 42C26.3925 42 34 34.482 34 25.2H29.75Z'
      fill='#7363F3'
    />
    <path
      d='M13.324 31C13.244 31 13.172 30.972 13.108 30.916C13.052 30.86 13.024 30.788 13.024 30.7V24.736L11.296 26.068C11.224 26.124 11.148 26.144 11.068 26.128C10.996 26.112 10.932 26.068 10.876 25.996L10.276 25.216C10.228 25.144 10.208 25.068 10.216 24.988C10.232 24.908 10.276 24.844 10.348 24.796L13.084 22.684C13.132 22.652 13.176 22.632 13.216 22.624C13.264 22.608 13.316 22.6 13.372 22.6H14.644C14.724 22.6 14.792 22.628 14.848 22.684C14.904 22.74 14.932 22.812 14.932 22.9V30.7C14.932 30.788 14.904 30.86 14.848 30.916C14.792 30.972 14.724 31 14.644 31H13.324Z'
      fill='#7363F3'
    />
    <path
      d='M19.8462 31C19.7662 31 19.6982 30.972 19.6422 30.916C19.5862 30.86 19.5582 30.788 19.5582 30.7V29.26H15.7782C15.6982 29.26 15.6302 29.232 15.5742 29.176C15.5182 29.12 15.4902 29.048 15.4902 28.96V27.988C15.4902 27.932 15.5022 27.872 15.5262 27.808C15.5502 27.744 15.5822 27.684 15.6222 27.628L19.1382 22.804C19.2422 22.668 19.3902 22.6 19.5822 22.6H21.1062C21.1862 22.6 21.2542 22.628 21.3102 22.684C21.3662 22.74 21.3942 22.812 21.3942 22.9V27.664H22.4622C22.5582 27.664 22.6302 27.692 22.6782 27.748C22.7342 27.804 22.7622 27.872 22.7622 27.952V28.96C22.7622 29.048 22.7342 29.12 22.6782 29.176C22.6222 29.232 22.5542 29.26 22.4742 29.26H21.3942V30.7C21.3942 30.788 21.3662 30.86 21.3102 30.916C21.2542 30.972 21.1862 31 21.1062 31H19.8462ZM17.3502 27.724H19.5942V24.568L17.3502 27.724Z'
      fill='#7363F3'
    />
  </svg>
)

const ShieldIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='32' height='40' viewBox='0 0 32 40' fill='none'>
    <path
      d='M31.26 3.29774C31.0276 3.10973 30.7561 2.97619 30.4654 2.90695C30.1747 2.8377 29.8721 2.83452 29.58 2.89762C27.4429 3.34564 25.2367 3.35135 23.0973 2.91439C20.9578 2.47743 18.9305 1.60704 17.14 0.356823C16.8052 0.124495 16.4075 0 16 0C15.5925 0 15.1948 0.124495 14.86 0.356823C13.0695 1.60704 11.0422 2.47743 8.90274 2.91439C6.76332 3.35135 4.55714 3.34564 2.42001 2.89762C2.12789 2.83452 1.82534 2.8377 1.53461 2.90695C1.24388 2.97619 0.972362 3.10973 0.740011 3.29774C0.50797 3.48604 0.321053 3.72395 0.192996 3.99399C0.0649389 4.26403 -0.00100438 4.55935 1.1563e-05 4.85823V19.7629C-0.00176651 22.6313 0.681557 25.4586 1.99308 28.0094C3.3046 30.5602 5.20637 32.7606 7.54001 34.4275L14.84 39.6291C15.1787 39.8704 15.5842 40 16 40C16.4158 40 16.8213 39.8704 17.16 39.6291L24.46 34.4275C26.7936 32.7606 28.6954 30.5602 30.0069 28.0094C31.3184 25.4586 32.0018 22.6313 32 19.7629V4.85823C32.001 4.55935 31.9351 4.26403 31.807 3.99399C31.6789 3.72395 31.492 3.48604 31.26 3.29774ZM28 19.7629C28.0015 21.9931 27.4706 24.1914 26.4513 26.1749C25.432 28.1584 23.9539 29.8698 22.14 31.1665L16 35.5478L9.86001 31.1665C8.04608 29.8698 6.56798 28.1584 5.54871 26.1749C4.52944 24.1914 3.99847 21.9931 4.00001 19.7629V7.15895C8.19286 7.51793 12.3921 6.5448 16 4.37808C19.6079 6.5448 23.8071 7.51793 28 7.15895V19.7629Z'
      fill='#7363F3'
    />
  </svg>
)
