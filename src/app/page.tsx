import Faq from '@/components/Landing/Faq/Faq'
import Footer from '@/components/Landing/Footer/Footer'
import Hero from '@/components/Landing/Hero'
import HowItWorks from '@/components/Landing/HowItWorks'
import LatestNews from '@/components/Landing/LatestNews/LatestNews'
import Navbar from '@/components/Landing/Navbar'
import Pricing from '@/components/Landing/Pricing/Pricing'
import UseCases from '@/components/Landing/UseCases'
import WhatMakesUsUnique from '@/components/Landing/WhatMakesUsUnique'
import WhatWeOffer from '@/components/Landing/WhatWeOffer'
import WhyUs from '@/components/Landing/WhyUs'
import TwakWrapper from '@/components/TwakWrapper'

export default function Home() {
  return (
    <main className='relative z-0 flex min-h-screen w-full flex-col items-center'>
      <div className='absolute z-[-1] h-[47rem] w-full overflow-hidden 2xl:h-[85vh]'>
        <div className='z-0 h-full w-[110vw] skew-x-6 rounded-bl-[7rem] bg-[#160042]'></div>
        <div
          className='absolute bottom-0 right-0 z-[1] h-0 w-0'
          style={{
            borderBottom: '85px solid #7363F3',
            borderLeft: '85vw solid transparent',
          }}
        />
      </div>
      <div className='z-0 w-full'>
        <Navbar />
        <Hero />
        <UseCases />
        <WhatMakesUsUnique />
        <WhatWeOffer />
        <HowItWorks />
        <WhyUs />
        <Pricing />
        <Faq />
        <LatestNews />
        <Footer />
        <TwakWrapper />
      </div>
    </main>
  )
}
