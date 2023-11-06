import RecentPurchases from './RecentPurchases'

const Page = () => {
  return (
    <div className='w-full px-10 py-6'>
      <h1 className='font-sans text-[40px] font-bold text-black'>Dashboard</h1>
      <h2 className='pb-6 pt-4 font-sans text-2xl font-semibold text-black'>Analytics</h2>
      <div className='flex items-center gap-10'>
        {analyticsData.map((data, i) => (
          <div
            className='flex w-1/4 flex-col rounded-md bg-white px-8 py-7 font-quicksand'
            style={{
              boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
            }}
          >
            <div className='flex items-center gap-4 pb-2'>
              <h3 className='text-base font-bold tracking-[0.16px] text-[#343434]'>{data.title}</h3>
            </div>
            <h1 className='text-[28px] font-bold tracking-[0.28px] text-[#6A7ADA]'>{data.value}</h1>
          </div>
        ))}
      </div>
      <RecentPurchases />
    </div>
  )
}

const analyticsData = [
  {
    title: 'Total User',
    value: '856',
  },
  {
    title: 'Basic Plan Users',
    value: '342',
  },
  {
    title: 'Premium Plan Users',
    value: '82',
  },
  {
    title: 'Total Revenue',
    value: '$ 3,380',
  },
]

export default Page
