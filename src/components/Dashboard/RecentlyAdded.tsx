'use client'
import { Button } from '@nextui-org/react'
import { Fragment } from 'react'
import { DownloadReportIcon } from './icons'

const RecentlyAdded = () => {
  return (
    <>
      <h2 className='pb-6 pt-8 font-sans text-2xl font-semibold text-black'>Recently Added</h2>
      <div
        className='grid w-full grid-cols-11 gap-4 rounded-md bg-white px-6 py-4'
        style={{
          boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
        }}
      >
        {columns.map((column, i) => (
          <h1 className={`pt-2 font-rubik text-lg font-medium text-black ${column.className}`} key={i}>
            {column.title}
          </h1>
        ))}
        <div className='col-span-full mb-4 h-[1px] rounded-full bg-[#F5F5F5]' />
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
    </>
  )
}

export default RecentlyAdded

const columns = [
  {
    title: 'File Name',
    className: 'col-span-3',
  },
  {
    title: 'Lead Type',
    className: 'col-span-4',
  },
  {
    title: 'Date',
    className: 'col-span-2',
  },
  {
    title: 'Status',
    className: 'col-span-2',
  },
]

const rows = [
  {
    fileName: 'October Week 1',
    leadType: 'Lead Type',
    date: '29 Sept 2023',
    status: 'Status',
  },
  {
    fileName: 'October Week 2',
    leadType: 'Lead Type',
    date: '29 Sept 2023',
    status: 'Status',
  },
  {
    fileName: 'October Week 3',
    leadType: 'Lead Type',
    date: '29 Sept 2023',
    status: 'Status',
  },
]
