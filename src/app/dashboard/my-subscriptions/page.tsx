import PlanModification from './PlanModification'

const MySubscriptions = () => {
  return (
    <div className='w-full px-10 py-6'>
      <h1 className='pb-10 font-sans text-[40px] font-bold text-black'>Subscription</h1>
      <div
        className='rounded-md px-12 py-6'
        style={{
          boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
        }}
      >
        <div className='ml-auto flex w-max items-center justify-end gap-2 rounded-full bg-[#DFFFE2] px-4 py-1.5'>
          <div className='h-2 w-2 rounded-full bg-[#00FF1A]' />
          <h3 className='font-quicksand text-[17px] font-semibold text-black'>Active Plans</h3>
        </div>
        <div className='flex flex-col gap-8 divide-y divide-[#0000001F]'>
          {[1, 2, 3].map((_, i) => (
            <div className='flex w-full flex-col gap-5 pt-8' key={i}>
              <div className='grid w-full grid-cols-10'>
                <h1 className='col-span-4 font-sans text-2xl font-bold text-black'>Lead Type</h1>
                <h1 className='col-span-4 font-sans text-2xl font-bold text-black'>Renewal</h1>
              </div>
              {[1, 2].map((_, i) => (
                <div className='grid w-full grid-cols-10' key={i}>
                  <p className='col-span-4 font-sans text-lg font-medium text-black'>Location (Basic Plan)</p>
                  <p className='col-span-4 font-sans text-lg font-medium text-black'>Renews at 02 Dec 2023</p>
                  <p className='col-span-2 text-right font-sans text-xl font-bold text-black'>$29</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <PlanModification />
      </div>
      <div className='flex items-center justify-end pt-14'>
        <p className='font-rubik text-sm font-normal text-black'>© 2023 All Right Reserved by First Leads</p>
      </div>
    </div>
  )
}

export default MySubscriptions
