'use client'
import { useIsClient } from '@/hooks/useIsClient'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useSessionStorage } from 'usehooks-ts'
import { z } from 'zod'
import Input from '../Input'

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  industry: z.string().min(1, 'Industry is required'),
  zipCode: z.string().regex(/^\d{5}$/, 'Invalid zip code'),
})

export type OnboardingDetails = z.infer<typeof schema>

const OnboardingDetailsForm = () => {
  const isClient = useIsClient()
  const [sessionValue, setSessionValue] = useSessionStorage<OnboardingDetails | null>('onboardingDetails', null)

  const router = useRouter()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<OnboardingDetails>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: sessionValue?.firstName || '',
      lastName: sessionValue?.lastName || '',
      email: sessionValue?.email || '',
      industry: sessionValue?.industry || '',
      zipCode: sessionValue?.zipCode || '',
    },
  })

  const onSubmit = (data: OnboardingDetails) => {
    console.log(data)
    setSessionValue(data)

    router.push('/onboarding/select-leads')
  }

  if (!isClient) return null

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid w-[800px] grid-cols-4 gap-x-10 gap-y-8 pt-16'>
      <Input
        label='Your First Name'
        className='col-span-2'
        inputProps={{ ...register('firstName') }}
        error={errors.firstName}
      />
      <Input
        label='Your Last Name'
        className='col-span-2'
        inputProps={{ ...register('lastName') }}
        error={errors.lastName}
      />
      <Input label='Email Address' className='col-span-4' inputProps={{ ...register('email') }} error={errors.email} />
      <Input label='Industry' className='col-span-4' inputProps={{ ...register('industry') }} error={errors.industry} />
      <Input label='Zip Code' className='col-span-4' inputProps={{ ...register('zipCode') }} error={errors.zipCode} />
      <Button
        type='submit'
        className='col-span-4 h-14 w-full rounded-md bg-[#7363F3] text-center font-sans text-lg font-medium text-white'
      >
        Next Step
        <svg xmlns='http://www.w3.org/2000/svg' width='13' height='12' viewBox='0 0 13 12' fill='none'>
          <path
            d='M5.52729 0.803755L6.17141 0.193726C6.44415 -0.0645752 6.88517 -0.0645752 7.15501 0.193726L12.7954 5.53286C13.0682 5.79116 13.0682 6.20884 12.7954 6.46439L7.15501 11.8063C6.88227 12.0646 6.44125 12.0646 6.17141 11.8063L5.52729 11.1962C5.25165 10.9352 5.25745 10.5093 5.53889 10.2537L9.03515 7.09915H0.696351C0.310456 7.09915 0 6.80513 0 6.43966V5.56034C0 5.19487 0.310456 4.90085 0.696351 4.90085H9.03515L5.53889 1.74628C5.25455 1.49073 5.24874 1.0648 5.52729 0.803755Z'
            fill='white'
          />
        </svg>
      </Button>
    </form>
  )
}

export default OnboardingDetailsForm
