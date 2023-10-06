import BlogCards from './BlogCards'

const LatestNews = () => {
  return (
    <div className='mx-auto flex w-[85%] flex-col 2xl:w-4/5'>
      <h1 className='font-sans text-xl font-bold uppercase tracking-[-0.6px] text-[#2A00FF]'>Latest news</h1>
      <h2 className='py-2 font-sans text-[57px] font-bold tracking-[-0.5px] text-[#212529]'>Blogs</h2>
      <p className='font-rubik text-2xl font-normal text-[#757575]'>
        Ligula risus auctor tempus magna feugiat lacinia.
      </p>
      <div className='grid grid-cols-3 gap-6 py-10'>
        {Array(6).fill(
          <BlogCards
            link='#'
            image='/images/Landing/WhatMakesUsUnique.jpg'
            title='Ligula risus auctor tempus'
            description='Ligula risus auctor tempus magna feugiat lacinia.'
          />
        )}
      </div>
    </div>
  )
}

export default LatestNews
