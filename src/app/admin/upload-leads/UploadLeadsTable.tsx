import { SearchIcon } from '@/components/Dashboard/icons'
import { Input, useDisclosure } from '@nextui-org/react'
import { Fragment } from 'react'

const UploadLeadsTable = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div
      className='mt-10 grid w-full grid-cols-10 gap-6 rounded-md bg-white px-6 py-6'
      style={{
        boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
      }}
    >
      {columns.map((column, i) => (
        <h1 className={`pt-3 font-rubik text-lg font-medium text-black ${column.className}`} key={i}>
          {column.title}
        </h1>
      ))}
      <Input
        isClearable
        radius='lg'
        startContent={
          <SearchIcon className='pointer-events-none mb-0.5 flex-shrink-0 text-black/50 text-slate-400 dark:text-white/90' />
        }
        variant='bordered'
        classNames={{
          label: 'text-[#667085] font-inter text-base font-normal',
          input: 'font-inter text-base font-normal',
          inputWrapper: 'border border-[#D0D5DD] rounded-lg h-12',
        }}
        placeholder='Search'
        className='col-span-2'
      />
      <div className='col-span-full h-[1px] rounded-full bg-[#F5F5F5]' />
      {rows.map((row, i) => (
        <Fragment key={i}>
          <h1 className='col-span-2 py-2 font-rubik text-[15px] font-normal text-[#686868]'>{row.leadType}</h1>
          <h1 className='col-span-1 py-2 font-rubik text-[15px] font-normal text-[#686868]'>{row.basic}</h1>
          <h1 className='col-span-2 py-2 font-rubik text-[15px] font-normal text-[#686868]'>{row.premium}</h1>
          <h1 className='col-span-3 py-2 font-rubik text-[15px] font-normal text-[#686868]'>{row.description}</h1>
          <div className='col-span-2 flex items-center justify-end gap-10 pr-4'>
            <button className='font-rubik text-[15px] font-normal text-purple-2' onClick={onOpen}>
              Download
            </button>
            <button className='font-rubik text-[15px] font-normal text-[#F10A0A]'>Delete</button>
          </div>
        </Fragment>
      ))}
      {/* <AddNewLeadsModal isOpen={isOpen} onClose={onOpenChange} /> */}
    </div>
  )
}

const columns = [
  {
    title: 'Lead Type',
    className: 'col-span-2',
  },
  {
    title: 'Basic',
    className: 'col-span-1',
  },
  {
    title: 'Premium ',
    className: 'col-span-2',
  },
  {
    title: 'Description',
    className: 'col-span-3',
  },
]

const rows = [
  {
    leadType: 'Lead Type',
    basic: '$ 29',
    premium: '$ 49',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
  },
  {
    leadType: 'Lead Type',
    basic: '$ 29',
    premium: '$ 49',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
  },
  {
    leadType: 'Lead Type',
    basic: '$ 29',
    premium: '$ 49',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
  },
  {
    leadType: 'Lead Type',
    basic: '$ 29',
    premium: '$ 49',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
  },
  {
    leadType: 'Lead Type',
    basic: '$ 29',
    premium: '$ 49',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
  },
  {
    leadType: 'Lead Type',
    basic: '$ 29',
    premium: '$ 49',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
  },
  {
    leadType: 'Lead Type',
    basic: '$ 29',
    premium: '$ 49',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
  },
]

export default UploadLeadsTable
