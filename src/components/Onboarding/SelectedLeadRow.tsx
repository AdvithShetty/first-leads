interface SelectedLeadRowProps {
  leadType: string
  plans: {
    title: string
    price: number
  }[]
}

const SelectedLeadRow = ({ leadType, plans }: SelectedLeadRowProps) => {
  return (
    <div className='flex flex-col gap-4 pt-8 font-sans text-black'>
      <div className='flex w-full items-center justify-between'>
        <h2 className='w-4/5 truncate text-2xl font-bold'>{leadType}</h2>
        <button className='group h-4 w-4'>
          <div className='h-[3px] w-4 rounded-lg bg-[#000000ce] transition-all group-hover:h-1.5 group-hover:bg-[#000000ae]' />
        </button>
      </div>
      {plans.map((p, i) => (
        <div className='flex items-center justify-between' key={i}>
          <h3 className='text-lg font-medium'>{p.title}</h3>
          <p className='text-[20px] font-bold'>${p.price}</p>
        </div>
      ))}
      <div className='h-[1px] w-full bg-[#0000001F]' />
    </div>
  )
}

export default SelectedLeadRow
