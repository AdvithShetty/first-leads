import { DustbinIcon, PencilIcon } from '@/components/Dashboard/icons'
import { SubscriptionsItem } from '@/hooks/useSubscriptions'
import { Tooltip, useDisclosure } from '@nextui-org/react'
import EditModal from './EditModal'

const SubscriptionRow = ({ areaType, areaValue, coverageType, id, leadType }: SubscriptionsItem) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <div className='flex w-full flex-col gap-5 pt-8'>
      <div className='flex w-full flex-col justify-between lg:flex-row lg:items-center'>
        <h1 className='w-full font-sans text-lg font-bold capitalize text-black lg:w-1/2 lg:text-2xl'>{leadType}</h1>
        <div className='flex items-center justify-end gap-4 pt-4 lg:justify-start lg:pt-0'>
          <Tooltip content='Edit' placement='top' color='secondary' className='font-inter'>
            <button type='button' onClick={onOpen} className='outline-none'>
              <PencilIcon className='text-purple-1' />
            </button>
          </Tooltip>
          <Tooltip content='Delete' placement='top' color='secondary' className='font-inter'>
            <button type='button' className='outline-none'>
              <DustbinIcon className='fill-[#DC4141]' />
            </button>
          </Tooltip>
        </div>
      </div>
      <p className='font-sans text-base font-medium capitalize text-black'>
        {areaValue} ({coverageType} Plan)
      </p>
      <EditModal isOpen={isOpen} onOpenChange={onOpenChange} subscriptionId={id} />
    </div>
  )
}

export default SubscriptionRow
