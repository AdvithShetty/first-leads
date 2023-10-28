'use client'
import Input from '@/components/Onboarding/Input'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import { useFormContext } from 'react-hook-form'
import { CheckoutDetailsType } from './page'

const CheckoutDetails = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutDetailsType>()

  return (
    <div className='flex flex-col'>
      <Button className='mx-auto flex h-14 max-w-min items-center gap-2 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB] px-5 font-inter text-base font-semibold text-[#1D2939]'>
        <GoogleIcon /> Sign In with Google
      </Button>
      <div className='flex items-center gap-4 py-8'>
        <div className='h-[1px] w-[16rem] bg-[#0000001A]' />
        <p className='font-inter text-[11px] font-normal text-[#000000B5]'>or sign up with email</p>
        <div className='h-[1px] w-[16rem] bg-[#0000001A]' />
      </div>
      <div className='grid w-full grid-cols-4 gap-x-10 gap-y-8 pb-16'>
        <Input
          label='Your First Name'
          inputProps={{ ...register('firstName') }}
          error={errors.firstName}
          className='col-span-2'
        />
        <Input
          label='Your Last Name'
          inputProps={{ ...register('lastName') }}
          error={errors.lastName}
          className='col-span-2'
        />
        <Input
          label='Email Address'
          inputProps={{ ...register('email') }}
          error={errors.email}
          className='col-span-4'
        />
        <Input
          label='Phone Number'
          inputProps={{ ...register('phoneNumber') }}
          error={errors.phoneNumber}
          className='col-span-4'
        />
        <Input label='City' inputProps={{ ...register('city') }} error={errors.city} className='col-span-4' />
        <div className='col-span-full flex items-center gap-4'>
          <div className='grid h-5 w-5 place-items-center rounded-full border border-[#d1d1d1]'>
            <div className='h-[14px] w-[14px] rounded-full bg-[#7363F3]' />
          </div>
          <h2 className='font-quicksand text-xl font-bold text-black'>Enter your card</h2>
        </div>
        <Input
          label='Card Number'
          inputProps={{ ...register('cardNumber') }}
          error={errors.cardNumber}
          className='col-span-4'
        />
        <Input
          label='Expiry Date'
          inputProps={{ ...register('expiryDate') }}
          error={errors.expiryDate}
          className='col-span-2'
        />
        <Input label='CVV' inputProps={{ ...register('cvv') }} error={errors.cvv} className='col-span-2' />
        <Input
          label='Name on Card'
          inputProps={{ ...register('nameOnCard') }}
          error={errors.nameOnCard}
          className='col-span-4'
        />
        <div className='col-span-full flex items-center gap-4'>
          <div className='grid h-[18px] w-4 place-items-center rounded-sm bg-[#EFECFF]'>
            <div className='h-[10px] w-2 rounded-sm bg-[#7363F3]' />
          </div>
          <p className='font-inter text-[11px] font-normal text-[#000000B5]'>
            I have read and agree to the website {/* //TODO: Add Correct Link */}
            <a href='#' target='_blank' rel='noopener noreferrer' className='underline'>
              terms and conditions
            </a>{' '}
            *
          </p>
        </div>
        <Image
          src='/images/Onboarding/PoweredByStripe.png'
          width={600}
          height={200}
          alt='Checkout'
          className='col-span-full -translate-x-6'
        />
      </div>
    </div>
  )
}

export default CheckoutDetails

const GoogleIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' className='h-8 w-8' viewBox='0 0 48 48'>
    <path
      fill='#FFC107'
      d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
    ></path>
    <path
      fill='#FF3D00'
      d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
    ></path>
    <path
      fill='#4CAF50'
      d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
    ></path>
    <path
      fill='#1976D2'
      d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
    ></path>
  </svg>
)
