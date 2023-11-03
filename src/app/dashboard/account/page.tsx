'use client'
import ChangePassword from './ChangePassword'
import ProfileForm from './ProfileForm'
import UploadImage from './UploadImage'

const Account = () => {
  return (
    <div className='w-full px-10 py-10'>
      <div className='flex w-full items-start justify-between gap-20'>
        <div className='flex w-1/2 flex-col items-start'>
          <h1 className='font-sans text-[40px] font-bold text-black'>My Account</h1>
          <UploadImage />
        </div>
        <div className='flex w-1/2 flex-col'>
          <ProfileForm />
          <ChangePassword />
        </div>
      </div>

      <div className='flex items-center justify-end pt-10'>
        <p className='font-rubik text-sm font-normal text-black'>© 2023 All Right Reserved by First Leads</p>
      </div>
    </div>
  )
}

export default Account
