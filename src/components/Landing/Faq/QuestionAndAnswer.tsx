'use client'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { FC } from 'react'

const QuestionAndAnswer = () => {
  return (
    <div className='w-[90vw] py-8 md:w-[80vw] xl:w-[80rem]'>
      <Accordion
        showDivider={false}
        itemClasses={{
          heading: 'border border-[#E2E2E2] rounded-lg px-6 xl:px-10',
          content: 'pb-4',
        }}
      >
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i + 1}
            aria-label={faq.question}
            title={
              <h1 className='py-2 font-sans text-[1.3rem] font-bold tracking-[-0.5px] text-[#212529] xl:text-[30px]'>
                {faq.question}
              </h1>
            }
            indicator={({ isOpen }) => (
              <ArrowHeadIcon
                className={`h-6 w-6 transition-transform ease-soft-spring ${isOpen ? '-rotate-180' : 'rotate-0'}`}
              />
            )}
            disableIndicatorAnimation
            textValue={faq.answer}
            className='mb-6'
          >
            <p className='px-6 pt-2 font-outfit text-lg font-normal text-[#5F5F5F] xl:px-10 xl:pt-4 xl:text-[21px]'>
              {faq.answer}
            </p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

const ArrowHeadIcon: FC<{ className: string }> = ({ className }) => (
  <svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 15' fill='none'>
    <path
      d='M0.701506 14.3017C1.14585 14.749 1.74692 15 2.37345 15C2.99998 15 3.60106 14.749 4.0454 14.3017L12.5593 5.80108L20.9546 14.3017C21.3989 14.749 22 15 22.6265 15C23.2531 15 23.8542 14.749 24.2985 14.3017C24.5208 14.0785 24.6972 13.8129 24.8176 13.5203C24.938 13.2277 25 12.9138 25 12.5968C25 12.2798 24.938 11.9659 24.8176 11.6733C24.6972 11.3807 24.5208 11.1151 24.2985 10.8919L14.2431 0.710303C14.0226 0.485232 13.7603 0.306589 13.4713 0.184678C13.1823 0.0627661 12.8724 0 12.5593 0C12.2462 0 11.9362 0.0627661 11.6472 0.184678C11.3582 0.306589 11.096 0.485232 10.8755 0.710303L0.701506 10.8919C0.479223 11.1151 0.302794 11.3807 0.182392 11.6733C0.0619926 11.9659 1.90735e-06 12.2798 1.90735e-06 12.5968C1.90735e-06 12.9138 0.0619926 13.2277 0.182392 13.5203C0.302794 13.8129 0.479223 14.0785 0.701506 14.3017Z'
      fill='#6721FF'
    />
  </svg>
)

const faqs = [
  {
    question: 'How often is the data updated?',
    answer:
      'We update our lead data on a daily basis to ensure that you have access to the most current information available. This frequency allows you to stay ahead in your lead generation efforts.',
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer:
      'Yes, you have the flexibility to cancel your subscription at any time with no long-term commitments or hidden fees. We believe in providing you with a hassle-free experience.',
  },
  {
    question: 'What industries can benefit from your lead data?',
    answer:
      'Our lead data caters to a wide range of industries, including real estate, construction, legal, insurance, and many more.',
  },
  {
    question: 'How do I access premium features like phone numbers and emails?',
    answer:
      'Premium features, includes lead names, phone numbers, emails, and more. Simply choose this plan to unlock these valuable details for your lead generation efforts.',
  },
  {
    question: 'How do I select the location for lead acquisition?',
    answer: `The subscription allows you to specify geographic areas of interest for lead acquisition. With this feature, you can focus your efforts on specific regions, ensuring that you're reaching your target audience effectively.`,
  },
  {
    question: 'How do I maximize my subscription using your service?',
    answer:
      'To maximize your return on investment, consider our Premium Subscription, which provides comprehensive lead details. Additionally, take advantage of our expert support and analytics dashboard to fine-tune your lead generation strategies.',
  },
  {
    question: 'Are there any discounts for high-volume users or historical data?',
    answer: `Yes, we offer volume discounts for high-volume users and historical data. Contact our sales team to discuss custom pricing options that align with your specific business needs.`,
  },
  {
    question: 'What if I have technical issues or need assistance?',
    answer: `Our dedicated support team is here to assist you with any technical issues or questions you may have. Feel free to reach out to our support team, and we'll provide prompt assistance.`,
  },
  {
    question: 'Do you offer a free trial for your premium plans?',
    answer:
      'Yes, we offer a 14 days free trial for our Basic and Premium Subscriptions. This allows you to experience the benefits of our premium features before committing to a subscription.',
  },
]

export default QuestionAndAnswer
