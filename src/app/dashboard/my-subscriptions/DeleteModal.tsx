import useLeadType from '@/hooks/useLeadType'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useQueryClient } from 'react-query'

interface DeleteModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  subscriptionId: number
  leadTypeId: number
  areaValue: string
  coverageType: string
  itemId: number
}

const DeleteModal = ({
  isOpen,
  onOpenChange,
  subscriptionId,
  areaValue,
  leadTypeId,
  coverageType,
  itemId,
}: DeleteModalProps) => {
  const { data: leadType } = useLeadType({ id: leadTypeId })

  const queryClient = useQueryClient()

  const [deleteComplete, setDeleteComplete] = useState<boolean>(false)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  const onDeleteSubscription = async () => {
    try {
      setIsDeleting(true)
      await axios.delete('/api/subscriptions/delete', {
        params: {
          subscriptionId,
          itemId,
        },
      })

      await queryClient.refetchQueries('subscriptions')
      setDeleteComplete(true)
      setIsDeleting(false)
      toast.success('Subscription deleted successfully')
    } catch (error) {
      console.log(error)
      setIsDeleting(false)
      toast.error('Something went wrong while deleting subscription')
    }
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top-center'>
      <ModalContent>
        {(onClose) => (
          <div className='w-full'>
            <ModalHeader className='flex flex-col gap-1 font-inter text-lg font-semibold text-[#6941C6]'>
              Delete Subscription
            </ModalHeader>
            <ModalBody>
              <h1 className='w-full font-sans text-lg font-bold capitalize text-black lg:text-2xl'>{leadType?.name}</h1>
              <div className='flex flex-col justify-between lg:flex-row lg:items-center'>
                <p className='font-sans text-base font-medium capitalize text-black'>
                  {areaValue} ({coverageType} Plan)
                </p>
                <h2 className='font-sans text-xl font-bold'>${leadType?.basicPrice.price}</h2>
              </div>
              <p className='font-inter text-sm'>
                Are you sure you want to delete this subscription? This action cannot be undone.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color='success' variant='flat' onPress={onClose} className='w-1/2 font-inter text-sm'>
                No
              </Button>
              <Button
                color='danger'
                className='w-1/2 font-inter text-sm font-medium text-white'
                onClick={onDeleteSubscription}
                isDisabled={isDeleting && deleteComplete}
                isLoading={isDeleting}
              >
                Delete
              </Button>
            </ModalFooter>
          </div>
        )}
      </ModalContent>
    </Modal>
  )
}

export default DeleteModal
