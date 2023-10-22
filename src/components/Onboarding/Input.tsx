import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps {
  label: string
  error?: FieldError
  className?: string
  inputProps?: InputHTMLAttributes<HTMLInputElement>
}

const Input = ({ label, inputProps, className, error }: InputProps) => {
  return (
    <div className={`relative ${className}`}>
      <label className='font-inter absolute -mt-[10px] ml-4 bg-white px-1.5 text-[13px] font-normal text-[#000000B5]'>
        {label}
      </label>
      <p className='font-inter absolute right-0 -mt-[10px] mr-4 bg-white px-1.5 text-[13px] font-normal text-red-500'>
        {error?.message}
      </p>
      <input
        {...inputProps}
        className={`h-[52px] w-full shrink-0 rounded-[10px] border border-[#E7E7E7] p-2 font-outfit text-lg outline-none transition-all placeholder:text-[#a1a1a1] focus:border-2 focus:border-[#a1a1a1] ${inputProps?.className}`}
      />
    </div>
  )
}

export default Input
