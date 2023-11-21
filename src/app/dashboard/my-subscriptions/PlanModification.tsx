'use client'

import useSubscriptions from '@/hooks/useSubscriptions'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useQueryClient } from 'react-query'

const PlanModification = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { data: subscription, isLoading } = useSubscriptions()

  const isEmpty = !isLoading && !subscription?.items.length

  return (
    <div className='flex w-full flex-col items-center justify-between gap-4 pt-10 lg:flex-row'>
      <Button className='h-12 w-[220px] rounded-[10px] border border-[#0000001C] bg-[#7363F3] font-rubik text-[13px] font-normal text-white'>
        Add More Leads
      </Button>
      {isEmpty ? null : (
        <Button
          className='bg-white px-0 font-rubik text-[13px] font-normal text-[#CC2E2E]'
          disableRipple
          onClick={onOpen}
        >
          Cancel Subscription
        </Button>
      )}
      <ConfirmationModal isOpen={isOpen} onOpenChange={onClose} />
    </div>
  )
}

const ConfirmationModal = ({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: (open: boolean) => void }) => {
  const { data: subscription, isLoading } = useSubscriptions()

  const queryClient = useQueryClient()

  const [isCancelling, setIsCancelling] = useState<boolean>(false)

  const onCancelSubscription = async () => {
    try {
      setIsCancelling(true)
      await axios.delete('/api/subscriptions/cancel', {
        params: {
          subscriptionId: subscription?.id,
        },
      })

      await queryClient.refetchQueries('subscriptions')
      setIsCancelling(false)
      toast.success('Subscription cancelled successfully')
      onOpenChange(false)
    } catch (error) {
      console.error(error)
      setIsCancelling(false)
      toast.error('Something went wrong while cancelling subscription')
    }
  }

  if (isLoading) return null

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top-center'>
      <ModalContent>
        {(onClose) => (
          <div className='w-full'>
            <ModalHeader className='flex flex-col gap-1 font-inter text-lg font-semibold text-[#6941C6]'>
              Cancel Subscription
            </ModalHeader>
            <ModalBody>
              <div className='flex flex-col gap-4'>
                <h1 className='font-sans text-lg font-semibold'>Are you sure you want to cancel your subscription?</h1>
                <p className='font-sans text-base font-normal text-red-500'>
                  You will lose access to all your leads and will not be charged again.
                </p>
              </div>
            </ModalBody>
            <ModalFooter className='flex flex-col gap-4'>
              <Button
                className='h-12 w-full rounded-[10px] font-rubik text-base font-normal text-white'
                color='danger'
                isLoading={isCancelling}
                onClick={onCancelSubscription}
              >
                Cancel Subscription
              </Button>
              <Button
                color='success'
                variant='flat'
                onPress={onClose}
                className='h-12 w-full font-inter text-base font-medium'
              >
                No
              </Button>
            </ModalFooter>
          </div>
        )}
      </ModalContent>
    </Modal>
  )
}

export default PlanModification
