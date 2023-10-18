'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const BlogCardsResponsive = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(-1) // 1 for right, -1 for left
  const [isAnimating, setIsAnimating] = useState(false)

  const moveCardsLeft = async () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setDirection(1)
      await new Promise((resolve) => setTimeout(resolve, 200)) // Adjust the duration to match your animation duration
      setIndex((prevIndex) => (prevIndex === 0 ? numbers.length - 1 : prevIndex - 1))
      setIsAnimating(false)
    }
  }

  const moveCardsRight = async () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setDirection(-1)
      await new Promise((resolve) => setTimeout(resolve, 200)) // Adjust the duration to match your animation duration
      setIndex((prevIndex) => (prevIndex + 1) % numbers.length)
      setIsAnimating(false)
    }
  }

  return (
    <div className='flex w-full flex-col gap-10 pt-10 xl:hidden'>
      <AnimatePresence mode='wait'>
        {
          numbers.map((_, i) => (
            <motion.a
              key={i}
              className='relative z-0 col-span-3 h-[17rem] overflow-hidden rounded-lg bg-pink-600'
              initial={{ x: direction === 1 ? '-100%' : '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === 1 ? '100%' : '-100%', opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src='/images/Landing/WhatMakesUsUnique.jpg'
                fill
                alt='Blog Cards'
                className='z-0 object-cover transition-transform ease-soft-spring group-hover:scale-105'
              />
              <div className='absolute z-[1] flex h-full w-full flex-col justify-end gap-1 bg-gradient-to-b from-transparent from-40% to-[#000000c2] p-4 2xl:gap-2'>
                <h1 className='font-sans text-3xl font-bold text-white 2xl:text-4xl'>
                  Ligula risus auctor tempus {index}
                </h1>
                <p className='font-rubik text-base font-normal text-white 2xl:text-lg'>
                  Ligula risus auctor tempus magna feugiat lacinia.
                </p>
                <p className='font-rubik text-base font-medium text-white 2xl:text-lg'>{`Read More >`}</p>
              </div>
            </motion.a>
          ))[index]
        }
      </AnimatePresence>
      <div className='flex w-full items-center justify-center gap-10'>
        <button onClick={moveCardsLeft}>
          <PurpleLeftArrowIcon />
        </button>
        <button onClick={moveCardsRight}>
          <PurpleRightArrowIcon />
        </button>
      </div>
    </div>
  )
}

const PurpleLeftArrowIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48' fill='none'>
    <path
      d='M24 48C37.2 48 48 37.2 48 24C48 10.8 37.2 0 24 0C10.8 0 0 10.8 0 24C0 37.2 10.8 48 24 48ZM15.12 22.32L22.32 15.12C23.28 14.16 24.72 14.16 25.68 15.12C26.64 16.08 26.64 17.52 25.68 18.48L22.56 21.6H31.2C32.64 21.6 33.6 22.56 33.6 24C33.6 25.44 32.64 26.4 31.2 26.4H22.56L25.68 29.52C26.64 30.48 26.64 31.92 25.68 32.88C24.72 33.84 23.28 33.84 22.32 32.88L15.12 25.68C14.16 24.72 14.16 23.28 15.12 22.32Z'
      fill='#2A00FF'
    />
  </svg>
)

const PurpleRightArrowIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48' fill='none'>
    <path
      d='M24 0C10.8 0 0 10.8 0 24C0 37.2 10.8 48 24 48C37.2 48 48 37.2 48 24C48 10.8 37.2 0 24 0ZM32.88 25.68L25.68 32.88C24.72 33.84 23.28 33.84 22.32 32.88C21.36 31.92 21.36 30.48 22.32 29.52L25.44 26.4H16.8C15.36 26.4 14.4 25.44 14.4 24C14.4 22.56 15.36 21.6 16.8 21.6H25.44L22.32 18.48C21.36 17.52 21.36 16.08 22.32 15.12C23.28 14.16 24.72 14.16 25.68 15.12L32.88 22.32C33.84 23.28 33.84 24.72 32.88 25.68Z'
      fill='#2A00FF'
    />
  </svg>
)

const numbers = [1, 2, 3, 4, 5]

export default BlogCardsResponsive
