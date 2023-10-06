import { Button, Link } from '@nextui-org/react'
import { FC } from 'react'

const PlanCards = () => {
  return (
    <div className='flex flex-wrap items-start gap-10'>
      <Card
        title='Basic Plan'
        price={29}
        buttonText='14 Day Free Trial'
        buttonLink='#'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
        features={['Weekly Report', 'Industry Specific', 'Geo Area Coverage', 'List of Addresses']}
        isWhite={false}
      />
      <Card
        title='Premium Plan'
        price={49}
        buttonText='14 Day Free Trial'
        buttonLink='#'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
        features={[
          'Basic Plan +',
          'Contact Phone Numbers',
          'Contact Emails',
          'Contact Name',
          'Do Not Call (DNC) Verification',
        ]}
        isWhite
      />
    </div>
  )
}

export default PlanCards

interface CardProps {
  title: string
  price: number
  description: string
  features: string[]
  buttonText: string
  buttonLink: string
  isWhite: boolean
}

const Card: FC<CardProps> = ({ title, price, buttonLink, buttonText, description, features, isWhite }) => {
  return (
    <div
      className={`flex w-[35rem] flex-col gap-2 rounded-[15px] px-10 py-8 ${
        isWhite ? 'bg-white text-black' : 'bg-[#0C1E1B] text-white'
      }`}
      style={{
        boxShadow: '0px 0px 15px 4px rgba(0, 0, 0, 0.07)',
      }}
    >
      <h1 className='font-sans text-[51px] font-extrabold'>{title}</h1>
      <p className='pt-2 font-sans text-base font-normal'>Starting From</p>
      <h2 className='font-sans text-[51px] font-extrabold leading-tight'>${price}/mo</h2>
      <div className={`mb-4 mt-8 h-[1px] w-full ${isWhite ? 'bg-[#00000045]' : 'bg-[#ffffff45]'}`} />
      <p className='font-outfit text-[21px] font-normal'>{description}</p>
      <div className='flex flex-col gap-3 py-4'>
        {features.map((feature, i) => (
          <div className='flex items-center gap-6'>
            <PurpleCheckIcon />
            <p className='font-outfit text-[21px] font-medium'>{feature}</p>
          </div>
        ))}
      </div>
      <Button className='my-4 h-12 w-max rounded-lg p-0'>
        <Link
          className='flex h-full w-full items-center justify-center gap-2 bg-purple-2 px-8 font-outfit text-sm font-semibold uppercase tracking-[0.7px] text-white'
          href={buttonLink}
        >
          {buttonText} <ArrowIcon />
        </Link>
      </Button>
    </div>
  )
}

const PurpleCheckIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
    <path
      d='M16 9.5C16 12.5376 13.5376 15 10.5 15C7.46243 15 5 12.5376 5 9.5C5 6.46243 7.46243 4 10.5 4C13.5376 4 16 6.46243 16 9.5Z'
      fill='white'
    />
    <path
      d='M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM14.3 7.61L9.73 13.61C9.63685 13.731 9.51721 13.8291 9.38027 13.8967C9.24333 13.9643 9.09272 13.9996 8.94 14C8.78811 14.0008 8.63803 13.967 8.50115 13.9012C8.36426 13.8353 8.24418 13.7392 8.15 13.62L5.71 10.51C5.62924 10.4063 5.5697 10.2876 5.53479 10.1609C5.49988 10.0341 5.49027 9.90172 5.50652 9.77126C5.52277 9.64079 5.56456 9.5148 5.6295 9.40049C5.69444 9.28617 5.78126 9.18576 5.885 9.105C6.09453 8.94189 6.36026 8.8687 6.62375 8.90152C6.75421 8.91777 6.8802 8.95955 6.99452 9.02449C7.10884 9.08943 7.20924 9.17626 7.29 9.28L8.92 11.36L12.7 6.36C12.7801 6.25494 12.8801 6.16669 12.9943 6.10029C13.1086 6.03388 13.2347 5.99062 13.3657 5.97298C13.4966 5.95534 13.6297 5.96365 13.7574 5.99746C13.8851 6.03126 14.0049 6.08989 14.11 6.17C14.2151 6.25011 14.3033 6.35012 14.3697 6.46433C14.4361 6.57855 14.4794 6.70472 14.497 6.83565C14.5147 6.96658 14.5063 7.0997 14.4725 7.22742C14.4387 7.35514 14.3801 7.47494 14.3 7.58V7.61Z'
      fill='#7363F3'
    />
  </svg>
)

const ArrowIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10' fill='none'>
    <path
      d='M0.534789 0.677015C0.547679 0.457886 0.657244 0.348322 0.863483 0.348321L8.96483 0.367656C9.18396 0.354766 9.28708 0.457886 9.27419 0.677015L9.29352 8.77836C9.29352 8.9846 9.18396 9.09416 8.96483 9.10705H8.19143C8.11409 9.10705 8.0432 9.07483 7.97875 9.01038C7.9143 8.94593 7.87563 8.86859 7.86274 8.77836V2.78453L1.26952 9.37774C1.11484 9.53242 0.960158 9.53242 0.805478 9.37774L0.2641 8.83637C0.10942 8.68169 0.10942 8.52701 0.2641 8.37233L6.85732 1.77911H0.863483C0.644354 1.76622 0.534789 1.65665 0.534789 1.45041V0.677015Z'
      fill='white'
    />
  </svg>
)
