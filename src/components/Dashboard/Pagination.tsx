'use client'
import { motion } from 'framer-motion'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  // Function to handle page change
  const handlePageChange = (newPage: number) => {
    // Ensure the newPage is within valid bounds
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage)
    }
  }

  return (
    <div className='flex items-center gap-4'>
      <motion.svg
        className='h-8 w-8 cursor-pointer outline-none'
        xmlns='http://www.w3.org/2000/svg'
        width='25'
        height='25'
        viewBox='0 0 25 25'
        fill='none'
        whileTap={{
          scale: 0.9,
        }}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <path
          d='M12.5 25C19.375 25 25 19.375 25 12.5C25 5.625 19.375 0 12.5 0C5.625 0 0 5.625 0 12.5C0 19.375 5.625 25 12.5 25ZM7.875 11.625L11.625 7.875C12.125 7.375 12.875 7.375 13.375 7.875C13.875 8.375 13.875 9.125 13.375 9.625L11.75 11.25H16.25C17 11.25 17.5 11.75 17.5 12.5C17.5 13.25 17 13.75 16.25 13.75H11.75L13.375 15.375C13.875 15.875 13.875 16.625 13.375 17.125C12.875 17.625 12.125 17.625 11.625 17.125L7.875 13.375C7.375 12.875 7.375 12.125 7.875 11.625Z'
          fill='#7363F3'
        />
      </motion.svg>
      <h1 className='select-none font-rubik text-[15px] text-black'>{`${currentPage} out of ${totalPages}`}</h1>
      <motion.svg
        className='h-8 w-8 cursor-pointer outline-none'
        xmlns='http://www.w3.org/2000/svg'
        width='25'
        height='25'
        viewBox='0 0 25 25'
        fill='none'
        whileTap={{
          scale: 0.9,
        }}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <path
          d='M12.5 0C5.625 0 0 5.625 0 12.5C0 19.375 5.625 25 12.5 25C19.375 25 25 19.375 25 12.5C25 5.625 19.375 0 12.5 0ZM17.125 13.375L13.375 17.125C12.875 17.625 12.125 17.625 11.625 17.125C11.125 16.625 11.125 15.875 11.625 15.375L13.25 13.75H8.75C8 13.75 7.5 13.25 7.5 12.5C7.5 11.75 8 11.25 8.75 11.25H13.25L11.625 9.625C11.125 9.125 11.125 8.375 11.625 7.875C12.125 7.375 12.875 7.375 13.375 7.875L17.125 11.625C17.625 12.125 17.625 12.875 17.125 13.375Z'
          fill='#7363F3'
        />
      </motion.svg>
    </div>
  )
}

export default Pagination
