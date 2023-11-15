import { PurpleCheckIcon } from '@/components/Landing/Pricing/PlanCards'
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'

export const LeadTypeTitle = ({ title, description }: { title: string; description?: string }) => {
  return (
    <div className='flex items-center gap-2'>
      <h1 className='font-quicksand text-xl font-bold capitalize text-black lg:text-[25px]'>{title}</h1>
      {description ? (
        <Popover
          placement='top'
          showArrow
          className='bg-white outline-none'
          classNames={{
            base: 'w-[500px] rounded-[15px] bg-white',
            arrow: 'bg-white w-8 h-8',
          }}
        >
          <PopoverTrigger>
            <div>
              <PopoverIcon className='h-[18px] w-[18px]' />
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <div className='flex w-full flex-col rounded-[15px] px-6 pb-6 pt-2'>
              <h1 className='w-full font-sans text-[44px] font-extrabold capitalize leading-[72px] tracking-[-0.6px] text-black'>
                {title}
              </h1>
              <div
                className='my-2 h-[1px] w-full'
                style={{
                  background:
                    'linear-gradient(0deg, rgba(0, 0, 0, 0.07) 0%, rgba(0, 0, 0, 0.07) 100%), rgba(0, 0, 0, 0.15)',
                }}
              />
              <p className='pt-4 font-outfit text-[21px] font-normal text-black'>{description}</p>
            </div>
          </PopoverContent>
        </Popover>
      ) : null}
    </div>
  )
}

const PopoverIcon = ({ className }: { className: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='18'
    viewBox='0 0 18 18'
    fill='none'
    className={`shrink-0 cursor-pointer ${className}`}
  >
    <path
      d='M18 9C18 13.9717 13.9702 18 9 18C4.02979 18 0 13.9717 0 9C0 4.03124 4.02979 0 9 0C13.9702 0 18 4.03124 18 9ZM9.24151 2.97581C7.2638 2.97581 6.00242 3.80892 5.01191 5.2896C4.88359 5.48144 4.92652 5.74015 5.11044 5.87961L6.36968 6.83441C6.55857 6.97765 6.8277 6.94357 6.97446 6.7574C7.62275 5.93514 8.06727 5.45832 9.054 5.45832C9.79537 5.45832 10.7124 5.93546 10.7124 6.65438C10.7124 7.19786 10.2637 7.47697 9.53173 7.88737C8.67803 8.36594 7.54839 8.96157 7.54839 10.4516V10.5968C7.54839 10.8373 7.74337 11.0323 7.98387 11.0323H10.0161C10.2566 11.0323 10.4516 10.8373 10.4516 10.5968V10.5484C10.4516 9.5155 13.4705 9.4725 13.4705 6.67742C13.4705 4.57251 11.2871 2.97581 9.24151 2.97581ZM9 11.9758C8.0795 11.9758 7.33065 12.7247 7.33065 13.6452C7.33065 14.5656 8.0795 15.3145 9 15.3145C9.9205 15.3145 10.6694 14.5656 10.6694 13.6452C10.6694 12.7247 9.9205 11.9758 9 11.9758Z'
      fill='black'
    />
  </svg>
)

export const LeadPlanPopover = ({ plan }: { plan: 'basic' | 'premium' }) => (
  <Popover
    placement='top'
    showArrow
    className='bg-white outline-none'
    classNames={{
      base: 'w-[500px] rounded-[15px] bg-white',
      arrow: 'bg-white h-6 w-6',
    }}
  >
    <PopoverTrigger>
      <div>
        <PopoverIcon className='h-3 w-3' />
      </div>
    </PopoverTrigger>
    <PopoverContent>
      <div className='flex w-full flex-col rounded-[15px] px-6 pb-6 pt-2'>
        <h1 className='w-full font-sans text-[44px] font-extrabold capitalize leading-[72px] tracking-[-0.6px] text-black'>
          {plan} Plan
        </h1>
        <div
          className='my-2 h-[1px] w-full'
          style={{
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.07) 0%, rgba(0, 0, 0, 0.07) 100%), rgba(0, 0, 0, 0.15)',
          }}
        />
        <p className='pt-4 font-outfit text-[21px] font-normal text-black'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
        <div className='flex flex-col gap-5 pb-2 pt-8'>
          {(plan === 'basic'
            ? ['Weekly Report', 'Industry Specific', 'Geo Area Coverage', 'List of Addresses']
            : ['Basic Plan +', 'Contact Phone Numbers', 'Emails', 'Contact Name', 'Do Not Call (DNC) Verification']
          ).map((feature, i) => (
            <div className='flex items-center gap-6' key={i}>
              <PurpleCheckIcon />
              <p className='font-outfit text-[21px] font-medium'>{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </PopoverContent>
  </Popover>
)
