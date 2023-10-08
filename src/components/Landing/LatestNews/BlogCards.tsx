import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface Props {
  image: string
  title: string
  description: string
  link: string
  /**
   * TailwindCSS grid row-span
   */
  rowSpan?: string
}

const BlogCards: FC<Props> = ({ link, image, title, description, rowSpan }) => {
  return (
    <Link
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className={`group relative z-0 col-span-1 overflow-hidden rounded-lg 2xl:h-[20rem] ${
        rowSpan ? rowSpan : 'h-[17rem]'
      }`}
    >
      <Image
        src={image}
        fill
        alt='Blog Cards'
        className='z-0 object-cover transition-transform ease-soft-spring group-hover:scale-105'
      />
      <div className='absolute z-[1] flex h-full w-full flex-col justify-end gap-1 bg-gradient-to-b from-transparent from-40% to-[#000000c2] p-4 2xl:gap-2'>
        <h1 className='font-sans text-3xl font-bold text-white 2xl:text-4xl'>{title}</h1>
        <p className='font-rubik text-base font-normal text-white 2xl:text-lg'>{description}</p>
        <p className='font-rubik text-base font-medium text-white 2xl:text-lg'>{`Read More >`}</p>
      </div>
    </Link>
  )
}

export default BlogCards
