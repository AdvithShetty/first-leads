import BlogCards from './BlogCards'
import BlogCardsResponsive from './BlogCardsResponsive'

const LatestNews = () => {
  return (
    <div className='mx-auto flex w-[85%] flex-col gap-2 2xl:w-4/5'>
      <h1 className='font-sans text-xl font-bold uppercase tracking-[-0.6px] text-[#2A00FF]'>Latest news</h1>
      <h2 className='py-2 font-sans text-4xl font-bold tracking-[-0.5px] text-[#212529] xl:text-[57px]'>Blogs</h2>
      <p className='font-rubik text-xl font-normal text-[#757575] xl:text-2xl'>
        Explore how you can do more with less.
      </p>
      <div className='hidden grid-cols-3 grid-rows-2 gap-6 py-10 xl:grid'>
        {Array.from({ length: 5 }).map((_, i) => (
          <BlogCards
            link='#'
            image='/images/Landing/WhatMakesUsUnique.jpg'
            title='Ligula risus auctor tempus'
            description='Ligula risus auctor tempus magna feugiat lacinia.'
            rowSpan={i === 2 ? 'lg:row-span-2' : undefined}
            key={i}
          />
        ))}
      </div>
      <BlogCardsResponsive />
    </div>
  )
}

export default LatestNews
