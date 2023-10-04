import Hero from '@/components/Landing/Hero'
import Navbar from '@/components/Landing/Navbar'
import UseCases from '@/components/Landing/UseCases'

export default function Home() {
  return (
    <main className='relative z-0 flex min-h-screen w-full flex-col items-center'>
      <div className='absolute z-[-1] h-[47rem] w-full overflow-hidden'>
        <div className='z-0 h-full w-[110vw] skew-x-6 rounded-bl-[7rem] bg-[#160042]'></div>
        <div
          className='absolute bottom-0 right-0 z-[1] h-0 w-0'
          style={{
            borderBottom: '85px solid #7363F3',
            borderLeft: '85vw solid transparent',
          }}
        ></div>
      </div>
      <div className='z-0 w-full'>
        <Navbar />
        <Hero />
        <UseCases />
      </div>
    </main>
  )
}
