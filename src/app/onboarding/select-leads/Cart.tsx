'use client'
import SelectedLeadRow from '@/components/Onboarding/SelectedLeadRow'
import useCart from '@/hooks/useCart'
import { Button, Skeleton } from '@nextui-org/react'
import axios from 'axios'
import toast from 'react-hot-toast'

const Cart = () => {
  const { data: cart, isLoading } = useCart()

  const total = cart?.items.reduce((acc, item) => acc + Number(item.price), 0)

  return (
    <div className='fixed flex h-full w-1/4 flex-col items-center font-sans'>
      <div className='no-scroll-bar h-4/5 w-full overflow-y-auto px-8 pt-10'>
        <h1 className='text-[38px] font-bold text-black'>Your Cart</h1>
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className='mt-8 h-1/5 w-full rounded-lg' />)
          : cart
          ? cart.items.map((item, i) => (
              <SelectedLeadRow
                key={i}
                leadType={item.name}
                //TODO: Ask for plan data like basic or premium
                plans={[{ title: `${item.areaValue} (${item.price})`, price: Number(item.price) }]}
                itemId={item.id}
              />
            ))
          : null}
      </div>
      <div className='h-1/5 w-full text-white'>
        <div className='flex h-3/5 w-full items-center justify-between bg-[#160042] px-8 py-4'>
          <div className='flex w-1/2 flex-col'>
            <h1 className='text-[30px] font-bold'>Sub Total</h1>
            <p className='text-sm font-medium'>(Exclusive Tax)</p>
          </div>
          <div className='flex w-1/2 flex-col items-end'>
            <h1 className='text-[26px] font-bold'>${total} /mo</h1>
            <p className='text-sm font-medium'>(Billed Monthly)</p>
          </div>
        </div>
        <Button
          className='flex h-2/5 w-full items-center justify-center gap-3 rounded-none bg-[#6941C6] p-0  text-2xl font-bold text-white'
          type='button'
          disabled={!total}
          onClick={async (e) => {
            e.stopPropagation()

            try {
              const res = await axios.get('/api/cart/checkout', {
                params: {
                  cartId: cart?.id,
                },
              })

              if (res.data.id) {
                toast.success('Checkout successful: Redirecting to payment page')
                console.log('res.data.url', res.data.url)

                window.location.href = res.data.url
              }
            } catch (error) {
              toast.error('Error while checking out')
            }
          }}
        >
          Checkout
          <svg
            className='mt-1'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='15'
            viewBox='0 0 16 15'
            fill='none'
          >
            <path
              d='M6.80281 1.00469L7.59558 0.242157C7.93126 -0.080719 8.47405 -0.080719 8.80616 0.242157L15.7482 6.91608C16.0839 7.23895 16.0839 7.76105 15.7482 8.08049L8.80616 14.7578C8.47048 15.0807 7.92769 15.0807 7.59558 14.7578L6.80281 13.9953C6.46356 13.669 6.47071 13.1366 6.8171 12.8172L11.1202 8.87394H0.857047C0.3821 8.87394 0 8.50641 0 8.04958V6.95042C0 6.49359 0.3821 6.12606 0.857047 6.12606H11.1202L6.8171 2.18285C6.46714 1.86341 6.45999 1.33101 6.80281 1.00469Z'
              fill='white'
            />
          </svg>
        </Button>
      </div>
    </div>
  )
}

export default Cart
