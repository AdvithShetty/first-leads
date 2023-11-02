import Table from './Table'

const ArchivesTable = () => {
  return (
    <div className='pt-10'>
      <Table columns={columns} rows={rows} />
    </div>
  )
}

export default ArchivesTable

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
  {
    fileName: 'October Week 4',
    leadType: 'Lead Type',
    date: '29 Sept 2023',
    status: 'Status',
  },
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
