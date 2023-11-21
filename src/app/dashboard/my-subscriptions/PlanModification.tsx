'use client'

import { Button, Checkbox, Modal, ModalContent, ModalFooter, useDisclosure } from '@nextui-org/react'

const PlanModification = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <div className='flex w-full flex-col items-center justify-between gap-4 pt-10 lg:flex-row'>
      <Button className='h-12 w-[220px] rounded-[10px] border border-[#0000001C] bg-[#7363F3] font-rubik text-[13px] font-normal text-white'>
        Add More Leads
      </Button>
      <Button className='bg-white px-0 font-rubik text-[13px] font-normal text-[#CC2E2E]' disableRipple>
        Cancel Subscription
      </Button>
      <DowngradeModal isOpen={isOpen} onClose={onOpenChange} />
    </div>
  )
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const DowngradeModal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent className='rounded-lg bg-white p-10'>
        <h1 className='font-sans text-[40px] font-bold text-black'>Are you sure?</h1>
        <div className='w-full gap-4 py-4'>
          <Checkbox color='danger' className='font-sans text-lg font-medium text-black'>
            Location (Premium Plan)
          </Checkbox>
        </div>
        <ModalFooter className='mt-10 flex items-center justify-between gap-10 p-0'>
          <Button onPress={onClose} className='h-12 w-full rounded-[10px] bg-purple-2 font-rubik text-base text-white'>
            No
          </Button>
          <Button onPress={onClose} className='h-12 w-full rounded-[10px] bg-[#DC4141] font-rubik text-base text-white'>
            Downgrade
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default PlanModification
