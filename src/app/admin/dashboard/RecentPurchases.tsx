import { Fragment } from 'react'

const RecentPurchases = () => {
  return (
    <div className='mt-10 flex w-full flex-col gap-8'>
      <h1 className='font-sans text-2xl font-semibold text-black'>Recent Purchases</h1>
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
            <div className='col-span-3'>
              <h1 className='font-rubik text-sm font-normal text-black'>{row.user.name}</h1>
              <h2 className='font-rubik text-[11px] font-medium text-[#848484]'>{row.user.email}</h2>
            </div>
            {row.package.map((item, i2) => (
              <Fragment key={i2}>
                <div className='col-start-4 col-end-7 flex flex-col gap-2'>
                  <h1 className='pb-2 font-rubik text-base font-medium text-black'>{item.leadType}</h1>
                  {item.plans.map((plan, i3) => (
                    <h2 key={i3} className='font-sans text-xs font-medium text-black'>
                      {plan}
                    </h2>
                  ))}
                </div>
                <div className='col-span-3'>
                  <h1 className='font-sans text-xs font-medium text-black'>{item.date}</h1>
                </div>
                <div className='col-span-2'>
                  <h1 className='font-sans text-xl font-bold text-purple-2'>{item.revenue.total}</h1>
                  <h2 className='font-sans text-[15px] font-medium text-black'>(Billed {item.revenue.billedPeriod})</h2>
                </div>
              </Fragment>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

interface TableProps {
  columns: {
    title: string
    className: string
  }[]
  rows: {
    user: {
      name: string
      email: string
    }
    package: {
      leadType: string
      plans: string[]
      date: string
      revenue: {
        total: string
        billedPeriod: 'Annually' | 'Monthly'
      }
    }[]
  }[]
}

const columns: TableProps['columns'] = [
  {
    title: 'User',
    className: 'col-span-3',
  },
  {
    title: 'Package',
    className: 'col-span-3',
  },
  {
    title: 'Date of Purchase',
    className: 'col-span-3',
  },
  {
    title: 'Revenue',
    className: 'col-span-2',
  },
]

const rows: TableProps['rows'] = [
  {
    user: {
      name: 'Indica Watson',
      email: 'indicawatson@example.com',
    },
    package: [
      {
        leadType: 'Lead Type',
        plans: ['Location (Basic Plan)', 'Location (Basic Plan)'],
        date: '05 Oct 2023',
        revenue: {
          total: '$199',
          billedPeriod: 'Annually',
        },
      },
      {
        leadType: 'Lead Type',
        plans: ['Location (Basic Plan)', 'Location (Basic Plan)'],
        date: '05 Oct 2023',
        revenue: {
          total: '$199',
          billedPeriod: 'Annually',
        },
      },
    ],
  },
  {
    user: {
      name: 'Indica Watson',
      email: 'indicawatson@example.com',
    },
    package: [
      {
        leadType: 'Lead Type',
        plans: ['Location (Basic Plan)', 'Location (Basic Plan)'],
        date: '05 Oct 2023',
        revenue: {
          total: '$199',
          billedPeriod: 'Annually',
        },
      },
    ],
  },
]

export default RecentPurchases
