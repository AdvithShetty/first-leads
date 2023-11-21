'use client'
import { SearchDropdownModal } from '@/components/Onboarding/SelectLead/LeadTypeCard'
import { LeadPlanPopover, LeadTypeTitle } from '@/components/Onboarding/SelectLead/common'
import useSubscriptions from '@/hooks/useSubscriptions'
import useUser from '@/hooks/useUser'
import { LeadType } from '@/utils/interface'
import { Button, useDisclosure } from '@nextui-org/react'
import axios from 'axios'
import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import { useQueryClient } from 'react-query'
import { useInterval } from 'usehooks-ts'

const LeadTypeCard = ({ description, id, name, premiumPrice, basicPrice }: LeadType) => {
  const [plan, setPlan] = useState<'basic' | 'premium'>('basic')
  const [areaValue, setAreaValue] = useState<{
    areaType: string
    areaValue: string
  } | null>(null)

  const [addedToSubscription, setAddedToSubscription] = useState(false)
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure()
  const { data: user } = useUser()
  const [isAddingToSubscription, setIsAddingToSubscription] = useState(false)

  const queryClient = useQueryClient()

  useInterval(() => setAddedToSubscription(false), 3000)

  const { data: subscription } = useSubscriptions()

  const onAddToSubscription = useCallback(async () => {
    if (!user) return

    if (!areaValue?.areaValue) return toast.error('Please select a location')

    setIsAddingToSubscription(true)

    try {
      const res = await toast.promise(
        axios.post(
          '/api/subscriptions/add',
          {
            itemId: plan === 'basic' ? basicPrice.id : premiumPrice.id,
            areaType: areaValue?.areaType,
            areaValue: areaValue?.areaValue,
          },
          {
            params: {
              subscriptionId: subscription?.id,
            },
          }
        ),
        {
          loading: 'Adding to Subscription',
          error: 'Error adding Subscription',
          success: 'Added to Subscription',
        }
      )

      await queryClient.refetchQueries('subscriptions')

      if (res) {
        setAddedToSubscription(true)
        setIsAddingToSubscription(false)
      }
    } catch (error) {
      setIsAddingToSubscription(false)
    }
  }, [areaValue?.areaType, areaValue?.areaValue, id, queryClient, subscription?.id, user])

  return (
    <div
      className='col-span-full flex flex-col rounded-[10px] bg-white px-6 py-4 lg:col-span-2'
      style={{
        boxShadow: '0px 0px 30px 3px rgba(0, 0, 0, 0.07)',
      }}
    >
      <LeadTypeTitle title={name} description={description} />
      <div className='flex flex-col items-start justify-between gap-2 pt-4 lg:flex-row lg:items-center lg:gap-0'>
        <div className='flex gap-2'>
          <button
            type='button'
            className='grid h-5 w-5 place-items-center rounded-full bg-[#7363F33B]'
            onClick={() => setPlan('basic')}
          >
            {plan === 'basic' ? <div className='h-[14px] w-[14px] rounded-full bg-[#7363F3]' /> : null}
          </button>
          <div className='font-quicksand text-sm font-medium text-black'>
            Basic Plan
            <span className='inline-flex items-center gap-2 pl-1 font-bold text-black'>
              ${basicPrice.price} <LeadPlanPopover plan='basic' />
            </span>
          </div>
        </div>
        <div className='flex gap-2'>
          <button
            type='button'
            className='grid h-5 w-5 place-items-center rounded-full bg-[#7363F33B]'
            onClick={() => setPlan('premium')}
          >
            {plan === 'premium' ? <div className='h-[14px] w-[14px] rounded-full bg-[#7363F3]' /> : null}
          </button>
          <div className='font-quicksand text-sm font-medium text-black'>
            Premium Plan
            <span className='inline-flex items-center gap-2 pl-1 font-bold text-black'>
              ${premiumPrice.price} <LeadPlanPopover plan='premium' />
            </span>
          </div>
        </div>
      </div>
      {/* ----------------------------- Location Search ---------------------------- */}
      <button className='relative z-10 flex w-full items-center gap-2 border-b border-[#D8D8D8] pt-4' onClick={onOpen}>
        <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'>
          <path
            d='M11.8368 10.3748L9.49987 8.03836C9.39441 7.93289 9.25144 7.8743 9.10144 7.8743H8.71941C9.36628 7.04695 9.75065 6.00656 9.75065 4.87453C9.75065 2.1818 7.5684 0 4.87544 0C2.18249 0 0 2.1818 0 4.87453C0 7.56727 2.18225 9.74906 4.87544 9.74906C6.00747 9.74906 7.04832 9.36469 7.87566 8.71781V9.09984C7.87566 9.24984 7.93426 9.39281 8.03973 9.49828L10.3767 11.8348C10.597 12.0551 10.9532 12.0551 11.1712 11.8348L11.8345 11.1715C12.0548 10.9512 12.0548 10.5952 11.8368 10.3748ZM4.87544 8.24906C3.01123 8.24906 1.50046 6.74109 1.50046 4.87453C1.50046 3.01055 3.00866 1.5 4.87544 1.5C6.73965 1.5 8.25043 3.00797 8.25043 4.87453C8.25043 6.73852 6.74223 8.24906 4.87544 8.24906ZM4.87591 2.625C3.92014 2.625 3.1453 3.39961 3.1453 4.35539C3.1453 5.12789 4.27638 6.53625 4.70974 7.04742C4.73007 7.07174 4.75548 7.0913 4.7842 7.10473C4.81291 7.11815 4.84422 7.12511 4.87591 7.12511C4.90761 7.12511 4.93892 7.11815 4.96763 7.10473C4.99634 7.0913 5.02176 7.07174 5.04208 7.04742C5.47544 6.53625 6.60653 5.12813 6.60653 4.35539C6.60653 3.39961 5.83169 2.625 4.87591 2.625ZM4.87591 4.875C4.56513 4.875 4.31342 4.62305 4.31342 4.3125C4.31342 4.00172 4.56537 3.75 4.87591 3.75C5.18646 3.75 5.43841 4.00172 5.43841 4.3125C5.43841 4.62305 5.18646 4.875 4.87591 4.875Z'
            fill='#8E8E8E'
          />
        </svg>
        <input
          type='text'
          placeholder='Location'
          className='h-10 w-full font-inter text-sm font-medium text-[#8E8E8E] outline-none'
          value={areaValue?.areaValue || ''}
          readOnly
        />
      </button>
      <Button
        onClick={onAddToSubscription}
        className={`mt-6 h-12 rounded-lg bg-[#6941C6] font-inter text-[15px] font-semibold text-white transition-colors ${
          addedToSubscription ? 'bg-[#0B8A00]' : ''
        }`}
        isLoading={isAddingToSubscription}
        isDisabled={isAddingToSubscription}
      >
        {addedToSubscription ? (
          <svg xmlns='http://www.w3.org/2000/svg' width='21' height='21' viewBox='0 0 21 21' fill='none'>
            <path
              d='M21 10.5C21 16.299 16.299 21 10.5 21C4.70099 21 0 16.299 0 10.5C0 4.70099 4.70099 0 10.5 0C16.299 0 21 4.70099 21 10.5ZM9.28547 16.0597L17.0758 8.26934C17.3403 8.00481 17.3403 7.57588 17.0758 7.31134L16.1178 6.35335C15.8533 6.08877 15.4243 6.08877 15.1598 6.35335L8.80645 12.7066L5.84024 9.7404C5.57571 9.47587 5.14678 9.47587 4.8822 9.7404L3.92421 10.6984C3.65967 10.9629 3.65967 11.3919 3.92421 11.6564L8.32743 16.0596C8.59201 16.3242 9.0209 16.3242 9.28547 16.0597Z'
              fill='white'
            />
          </svg>
        ) : (
          'Add to Subscription'
        )}
      </Button>
      {isOpen ? (
        <SearchDropdownModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          leadTypeId={id}
          onClose={onClose}
          setAreaValue={setAreaValue}
        />
      ) : null}
    </div>
  )
}

export default LeadTypeCard
