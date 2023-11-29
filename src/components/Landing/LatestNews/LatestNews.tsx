'use client'
import useBlogs from '@/hooks/useBlogs'
import { fadeVariants } from '@/utils/variants'
import { Skeleton } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import BlogCards from './BlogCards'
import BlogCardsResponsive from './BlogCardsResponsive'

const LatestNews = () => {
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
    fallbackInView: true,
  })

  const { data, isLoading } = useBlogs()

  return (
    <motion.div
      variants={fadeVariants}
      initial='hidden'
      animate={inView && 'visible'}
      ref={ref}
      className='mx-auto flex w-[85%] flex-col gap-2 pb-10 lg:pb-0 2xl:w-4/5'
    >
      <h1 className='font-sans text-xl font-bold uppercase tracking-[-0.6px] text-[#2A00FF]'>Latest news</h1>
      <h2 className='py-2 font-sans text-4xl font-bold tracking-[-0.5px] text-[#212529] xl:text-[57px]'>Blogs</h2>
      <p className='font-rubik text-xl font-normal text-[#757575] xl:text-2xl'>
        Explore how you can do more with less.
      </p>
      <div className='hidden auto-rows-auto grid-cols-3 gap-6 py-10 xl:grid'>
        {isLoading ? (
          <>
            <Skeleton className='h-[17rem] rounded-lg 2xl:h-[20rem]' />
            <Skeleton className='h-[17rem] rounded-lg 2xl:h-[20rem]' />
            <Skeleton className='h-[17rem] rounded-lg 2xl:h-[20rem]' />
          </>
        ) : (
          data?.blogs
            .slice(0, 5)
            .map((blog, i) => (
              <BlogCards
                link={blog.url}
                image={blog.coverImageUrl || '/images/Landing/WhatMakesUsUnique.jpg'}
                title={blog.title}
                description={blog.title}
                rowSpan={i === 2 ? 'lg:row-span-2' : undefined}
                key={i}
              />
            ))
        )}
      </div>
      <BlogCardsResponsive />
    </motion.div>
  )
}

export default LatestNews
