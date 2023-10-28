'use client'
import { OnboardingDetails } from '@/components/Onboarding/OnboardingDetailsForm'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useSessionStorage } from 'usehooks-ts'
import { z } from 'zod'
import AddedToCart from './AddedToCart'
import CheckoutDetails from './CheckoutDetails'

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  city: z.string().min(1, 'City is required'),
  cardNumber: z.string().regex(/^\d{5}$/, 'Invalid card number'),
  expiryDate: z.string().min(1, 'Expiry date is required'),
  cvv: z.string().min(1, 'CVV is required'),
  nameOnCard: z.string().min(1, 'Name on card is required'),
})

export type CheckoutDetailsType = z.infer<typeof schema>

const Checkout = () => {
  const [sessionValue, setSessionValue] = useSessionStorage<OnboardingDetails | null>('onboardingDetails', null)

  const methods = useForm<CheckoutDetailsType>({
    defaultValues: {
      firstName: sessionValue?.firstName || '',
      lastName: sessionValue?.lastName || '',
      email: sessionValue?.email || '',
      phoneNumber: '',
      city: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      nameOnCard: '',
    },
    resolver: zodResolver(schema),
  })

  const onSubmit = useCallback((data: CheckoutDetailsType) => {
    console.log(data)
  }, [])

  return (
    <div className='h-screen w-full bg-[#160042]'>
      <div className='flex items-center justify-between py-4 pl-20 pr-10'>
        <h1 className='font-sans text-[29px] font-bold text-white'>Checkout</h1>
        <Image src='/images/LogoWhite.png' width={250} height={100} alt='Logo' />
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className='grid h-full grid-cols-4 rounded-tl-[15px] bg-white'>
          <div className='col-span-3 flex flex-col items-start pl-36 pt-20'>
            <CheckoutDetails />
          </div>
          <div className='col-span-1 h-full bg-[#7363F30D]'>
            <AddedToCart />
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default Checkout
