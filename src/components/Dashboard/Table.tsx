'use client'
import { Button } from '@nextui-org/react'
import { Fragment } from 'react'
import { DownloadReportIcon } from './icons'

interface TableProps {
  columns: {
    title: string
    className: string
  }[]
  rows: {
    fileName: string
    leadType: string
    date: string
  }[]
}

const Table = ({ columns, rows }: TableProps) => {
  return (
    <div
      className='grid w-full grid-cols-11 gap-6 rounded-md bg-white px-6 py-4'
      style={{
        boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
      }}
    >
      {columns.map((column, i) => (
        <h1 className={`pt-3 font-rubik text-lg font-medium text-black ${column.className}`} key={i}>
          {column.title}
        </h1>
      ))}
      <div className='col-span-full h-[1px] rounded-full bg-[#F5F5F5]' />
      {rows.map((row, i) => (
        <Fragment key={i}>
          <h1 className='col-span-3 py-2 font-rubik text-[15px] font-normal text-[#686868]'>{row.fileName}</h1>
          <h1 className='col-span-4 py-2 font-rubik text-[15px] font-normal text-[#686868]'>{row.leadType}</h1>
          <h1 className='col-span-2 py-2 font-rubik text-[15px] font-normal text-[#686868]'>{row.date}</h1>
          <div className='col-span-2 pb-2'>
            <Button
              type='button'
              className='flex h-11 w-3/4 items-center gap-2 rounded-[10px] border border-[#0000001C] bg-[#7363F3] px-4 font-rubik text-[13px] font-normal text-white'
            >
              <DownloadReportIcon />
              Download
            </Button>
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default Table
