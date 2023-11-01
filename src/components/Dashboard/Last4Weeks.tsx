'use client'
import Table from './Table'

const Last4Weeks = () => {
  return Table({
    columns,
    rows,
  })
}

export default Last4Weeks

const columns = [
  {
    title: 'File Name',
    className: 'col-span-3',
  },
  {
    title: 'Location',
    className: 'col-span-4',
  },
  {
    title: 'Date',
    className: 'col-span-2',
  },
  {
    title: 'Download',
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
  {
    fileName: 'October Week 4',
    leadType: 'Lead Type',
    date: '29 Sept 2023',
    status: 'Status',
  },
]
