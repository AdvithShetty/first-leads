import useCartId from '@/hooks/useCartId'
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useQueryClient } from 'react-query'
import { DeleteIcon } from '../Dashboard/icons'

interface SelectedLeadRowProps {
  leadType: string
  plans: {
    title: string
    price: number
  }[]
  itemId: number
}

const SelectedLeadRow = ({ leadType, plans, itemId }: SelectedLeadRowProps) => {
  const queryClient = useQueryClient()
  const { cartId } = useCartId()
  const [isDeleting, setIsDeleting] = useState(false)

  const deleteHandler = async () => {
    setIsDeleting(true)
    try {
      const res = await axios.delete(`/api/cart/delete`, {
        params: {
          cartId,
          itemId,
        },
      })

      await queryClient.invalidateQueries(['cart', cartId])

      if (res) {
        setIsDeleting(false)
        toast.success('Item deleted from cart')
      }
    } catch (error) {
      setIsDeleting(false)
      console.error(error)
      toast.error('Error while deleting item from cart')
    }
  }

  return (
    <div className={`flex flex-col gap-4 pt-8 font-sans ${isDeleting ? 'select-none text-gray-500' : 'text-black'}`}>
      <div className='flex w-full items-center justify-between'>
        <h2 className='w-4/5 truncate text-2xl font-bold capitalize'>{leadType}</h2>
        {!isDeleting ? (
          <button disabled={isDeleting} onClick={deleteHandler}>
            <DeleteIcon className='h-6 w-6 hover:fill-[#CC2E2E]' />
          </button>
        ) : null}
      </div>
      {plans.map((p, i) => (
        <div className='flex items-center justify-between' key={i}>
          <h3 className='text-lg font-medium capitalize'>{p.title}</h3>
          <p className='text-[20px] font-bold'>${p.price}</p>
        </div>
      ))}
      <div className='h-[1px] w-full bg-[#0000001F]' />
    </div>
  )
}

export default SelectedLeadRow
