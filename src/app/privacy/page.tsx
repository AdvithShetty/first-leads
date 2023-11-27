import { LinkWrapper } from './common'

const Privacy = () => {
  return (
    <div className='mx-auto flex w-3/4 flex-col gap-8 p-10 font-sans'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold'>Privacy Policy</h1>
        <p>
          Welcome to First Leads Generation Inc. {`("we," "us," or "our")`}. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you visit our website and use our services. By
          accessing or using our website, you consent to the practices described in this Privacy Policy.
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>Information We Collect and How We Use It</h2>
        <div className='flex w-full flex-col gap-1'>
          <h3 className='text-xl font-bold'>1. Information You Provide:</h3>
          <p>
            We collect information that you provide when you register on our site, place an order, subscribe to our
            newsletter, respond to a survey, and submit a question via the Contact Us page or by filling out any of the
            forms. This may include your name, email address, billing address, phone number, and credit card information
            for billing purposes.
          </p>
        </div>
        <div className='flex w-full flex-col gap-1'>
          <h3 className='text-xl font-bold'>2. Log Information</h3>
          <p>
            When you use First Leads Generation services, our servers automatically record information that your browser
            or our Dashboard sends while using our services. This includes computer identifying information, feedback,
            service usage information, and data from files you import into the Dashboard. Your financial information
            will not be sold, exchanged, transferred, or given to any other company for any reason without your consent,
            other than for delivering the purchased product or service requested.
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-bold'>How We Protect Your Information</h2>
        <p>
          We implement various security measures to maintain the safety of your personal information when you subscribe
          to our services or access your personal information. All supplied sensitive information, such as credit card
          numbers, is transmitted via Secure Socket Layer (SSL) technology and then encrypted and stored in a database
          with restricted access.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-bold'>Use of Cookies</h2>
        <p>
          Yes, we use cookies to track promotion discounts, keep track of advertisements, and compile aggregate data
          about site traffic. Cookies help us offer better site experiences and tools in the future. You can choose to
          have your computer warn you each time a cookie is being sent or turn off all cookies via your browser
          settings. Note that turning off cookies may affect the functionality of some services.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-bold'>Do We Disclose Any Information to Outside Parties</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personally identifiable information. Trusted third parties
          assist us in operating our website, conducting our business, or servicing you, under the condition that they
          keep this information confidential. We may release your information when we believe release is appropriate to
          comply with statutory law. In the event a subscriber is impacted by external events resulting in the
          subscriber being added to a First Lead report, the {`Subscriber's`} personally identifiable information may be
          added to the service.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-bold'>Third-Party Links</h2>
        <p>
          Occasionally, we may include third-party products or services on our website. These third-party sites have
          separate and independent privacy policies. We have no responsibility or liability for the content and
          activities of these linked sites.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-bold'>Third-Party Vendors</h2>
        <p>
          First Leads utilizes Tawk, <LinkWrapper href='http://tawk.to'>http://tawk.to</LinkWrapper>, for chat support
          services. Like most internet-service operators,
          <LinkWrapper href='http://tawk.to'>http://tawk.to</LinkWrapper> collects non-personally-identifying
          information of the sort that web browsers, apps and servers typically make available, such as the browser
          type, language preference, geographical location, referring site, and the date and time of each visitor
          request. <LinkWrapper href='http://tawk.to'>http://tawk.to</LinkWrapper>
          {`'`}s purpose in collecting non-personally identifying information is to better understand how{' '}
          <LinkWrapper href='http://tawk.to'>http://tawk.to</LinkWrapper> {`'`}s visitors use its services, and to
          provide <LinkWrapper href='http://tawk.to'>http://tawk.to</LinkWrapper> users the ability to understand how
          their visitors use their services. From time to time,{' '}
          <LinkWrapper href='http://tawk.to'>http://tawk.to</LinkWrapper> may release non-personally-identifying
          information in the aggregate, e.g., by publishing a report on trends in the usage of its services.{' '}
          <LinkWrapper href='http://tawk.to'>http://tawk.to</LinkWrapper> also collects potentially
          personally-identifying information like Internet Protocol (IP) addresses for users that use the services and
          visitors. See{' '}
          <LinkWrapper href='https://www.tawk.to/privacy-policy/'>https://www.tawk.to/privacy-policy/</LinkWrapper> for
          additional information for Tawk{`'`}s Privacy Policy. First Leads utilizes Stripe,{' '}
          <LinkWrapper href='https://stripe.com'>https://stripe.com</LinkWrapper>, for payment processing services.
          Stripe may collect and use Personal Data depending on whether you are acting as End User, End Customer,
          Representative or Visitor and our different Services. For example, if you are the sole owner of a business
          (i.e., sole proprietorship), we may collect Personal Data to onboard your business, but you may also be an End
          Customer that purchased goods from another Business User that uses Stripe{`'`}s Services for payment
          processing and you may also be an End User who uses Link to make those purchases. Transaction Data as define
          in Stripe{`'`}s Privacy Policy includes Personal Data, and may include the following: your name, email
          address, billing address, shipping address, payment method information (such as credit or debit card number,
          bank account information or payment card image selected by you), merchant and location, purchase amount, date
          of purchase, and in some cases, some information about what you have purchased and your phone number and past
          purchases. See <LinkWrapper href='https://stripe.com/privacy'>https://stripe.com/privacy</LinkWrapper> for
          additional information for Stripe
          {`'`}s Privacy Policy.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-bold'>{`Children's Online Privacy Protection Act Compliance`}</h2>
        <p>
          {`We comply with the requirements of COPPA (Children's Online Privacy Protection Act). We do not knowingly collect information from anyone under 13 years of age`}
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-bold'>Terms and Conditions</h2>
        <p>
          Please visit our <LinkWrapper href='https://www.firstleads.ai/terms'>Terms and Conditions</LinkWrapper>{' '}
          section establishing the use, disclaimers, and limitations of liability governing the use of our website.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-bold'>Your Consen</h2>
        <p>By using our site or subscribing to our service, you consent to our privacy policy.</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-bold'>California Residents - CCPA Privacy Policy</h2>
        <p>
          If you are a California resident, please{' '}
          <LinkWrapper href='https://oag.ca.gov/privacy/ccpa'>click here</LinkWrapper> to review your California Privacy
          Rights. By using our site or subscribing to our service, you also consent to our California Privacy Rights
          Policy.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-bold'>Changes to Our Privacy Policy</h2>
        <p>
          If we decide to change our privacy policy, we will post those changes on this page and update the modification
          date below.
        </p>
        <p>Last Modified: 1st December 2023</p>
        <p>
          For any questions regarding this Privacy Policy, please contact us at{' '}
          <LinkWrapper href='/support'>here</LinkWrapper>.
        </p>
      </div>
    </div>
  )
}

export default Privacy
