import Navbar from '@/components/Landing/Navbar'

export default function Home() {
  return (
    <main className='relative z-0 flex min-h-screen w-full flex-col items-center'>
      <div className='absolute z-[-1] h-screen w-full overflow-hidden'>
        <div className='-mt-40 h-screen w-[120vw] -rotate-[5deg] rounded-bl-[7rem] bg-[#160042]'></div>
      </div>
      <div className='z-0'>
        <Navbar />
      </div>
    </main>
  )
}
