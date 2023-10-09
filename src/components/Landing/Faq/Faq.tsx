import QuestionAndAnswer from './QuestionAndAnswer'

const Faq = () => {
  return (
    <div className='flex w-full flex-col items-center gap-4 pb-20' id='faq'>
      <h1 className='font-sans text-[20px] font-bold uppercase tracking-[-0.6px] text-[#2A00FF]'>FAQS</h1>
      <h2 className='font-sans text-[57px] font-bold tracking-[-0.5px] text-[#212529]'>Questions & Answers</h2>
      <QuestionAndAnswer />
    </div>
  )
}

export default Faq
