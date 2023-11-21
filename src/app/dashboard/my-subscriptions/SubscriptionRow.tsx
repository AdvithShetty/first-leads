import { DustbinIcon, PencilIcon } from '@/components/Dashboard/icons'
import { SubscriptionsItem } from '@/hooks/useSubscriptions'
import { Tooltip, useDisclosure } from '@nextui-org/react'
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'

const SubscriptionRow = ({
  areaType,
  areaValue,
  coverageType,
  id,
  leadType,
  price,
  leadTypeId,
  subscriptionId,
}: SubscriptionsItem & {
  subscriptionId: number
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const {
    isOpen: isDeleteModalOpen,
    onOpen: onDeleteModalOpen,
    onOpenChange: onDeleteModalOpenChange,
  } = useDisclosure()

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
          <Tooltip content='Delete' placement='top' color='danger' className='font-inter'>
            <button type='button' className='outline-none' onClick={onDeleteModalOpen}>
              <DustbinIcon className='fill-[#DC4141]' />
            </button>
          </Tooltip>
        </div>
      </div>
      <div className='flex flex-col justify-between lg:flex-row lg:items-center'>
        <p className='font-sans text-base font-medium capitalize text-black'>
          {areaValue} ({coverageType} Plan)
        </p>
        <h2 className='font-sans text-xl font-bold'>${price}</h2>
      </div>
      {isOpen && (
        <EditModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          subscriptionId={subscriptionId}
          leadTypeId={leadTypeId}
          areaValue={areaValue}
          areaType={areaType}
          coverageType={coverageType}
          itemId={id}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onOpenChange={onDeleteModalOpenChange}
          subscriptionId={subscriptionId}
          leadTypeId={leadTypeId}
          areaValue={areaValue}
          coverageType={coverageType}
          itemId={id}
        />
      )}
    </div>
  )
}

export default SubscriptionRow
