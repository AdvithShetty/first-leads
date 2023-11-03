const UploadImage = () => {
  return (
    <div className='mt-10 flex items-center gap-8'>
      <img
        src='/images/Landing/WhatMakesUsUnique.jpg'
        alt='profile'
        className='h-[180px] w-[180px] rounded-full bg-pink-500 object-cover'
      />
      <div className='flex flex-col gap-4'>
        <h1 className='font-sans text-base font-bold text-black'>Upload your Profile Photo</h1>
        <button type='button' className='w-max font-sans text-base font-bold text-purple-2'>
          Upload Now
        </button>
      </div>
    </div>
  )
}

export default UploadImage
