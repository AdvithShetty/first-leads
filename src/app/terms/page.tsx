import { LinkWrapper } from '../privacy/common'

const Terms = () => {
  return (
    <div className='mx-auto flex w-full flex-col gap-8 p-4 font-sans lg:w-3/4 lg:p-10'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold'>First Leads Generation Terms of Services and Use Agreement</h1>
        <p>
          {`This Terms of Services and Use Agreement (“Agreement”) is entered into by and between First Leads Generation Inc., with offices located at 166 Geary St, STE 1500, San Francisco, CA 94108 (hereafter referred to as "Company"), and Subscriber (hereafter “Subscriber”).`}
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-bold'>RECITALS</h2>
        <p>
          {`Company is a provider of lead generation software, lead services, and other related technology solutions. Subscriber is a professional seeking to utilize Company's products and services.`}
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-bold'>AGREEMENT</h2>
        <p>
          NOW, THEREFORE, in consideration of the mutual covenants and benefits expressed herein, the parties agree as
          follows:
        </p>
        <p>Definitions</p>
        <ul className='list-disc px-10'>
          <li>
            <strong>{`"Software"`}</strong> refers to any and all software products provided by the Company.
          </li>
          <li>
            <strong>{`"Company Leads"`}</strong> refers to any and all leads sold or provided by the Company to
            Subscriber.
          </li>
          <li>
            <strong>{`"Subscriptions"`}</strong> represent all products and services purchased from the Company by the
            Subscriber.
          </li>
          <li>
            <strong>{`"Billing Cycle"`}</strong> is the period between invoices for products and services.
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-medium'>Modification of Terms</h2>
        <p>
          The Company reserves the right to modify the terms and conditions of this Agreement. Any changes will be
          communicated to Subscribers via their registered email address. It is the {`Subscriber's`} responsibility to
          regularly check their email for updates. Continued use of the {`Company's`} products and services after the
          effective date of any modifications indicates acceptance of the updated terms. If the Subscriber does not
          agree with the modifications, they have the right to terminate their subscription in accordance with the
          termination section of this Agreement.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-medium'>Limited Software License</h2>
        <p>
          The Company grants a limited, non-exclusive, non-transferable, revocable license to use the Software. The
          Subscriber agrees not to share, copy, or redistribute the Software without the express written consent of the
          Company.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-medium'>Company Leads</h2>
        <ul className='list-disc px-10'>
          <li>
            <strong>{`License:`}</strong> The Company grants a limited, non-exclusive, non-transferable, revocable
            license to Company Leads for which the Subscriber has purchased as part of their Subscriptions.
          </li>
          <li>
            <strong>{`Disclaimer:`}</strong> The Company makes reasonable efforts to provide accurate information in all
            Company Leads, but assumes no responsibility for errors or inaccuracies.
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-medium'>Copyright and Intellectual Property Rights</h2>
        <p>
          Subscriber acknowledges that Software and Company Leads are the {`Company'`}s trade secrets and proprietary
          products protected under U.S. copyright and intellectual property laws.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-medium'>Terms of Subscriptions</h2>
        <p>
          Subscriber authorizes the Company to invoice and process payments according to the chosen Billing Cycle. The
          agreement automatically renews unless canceled by the Subscriber. See our{' '}
          <LinkWrapper href='/privacy'>Privacy Policy</LinkWrapper> for more information on affiliate vendors utilized
          for payment processing.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-medium'>Payment Information and Charges</h2>
        <p>
          The Company charges for subscriptions, setup fees, and overages. All sales are final, and free trials
          automatically convert to paid subscriptions.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-medium'>Additional Services</h2>
        <p>Subscriber may engage the Company for additional services, adhering to MLS regulations and laws.</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-medium'>Confidentiality and Non-Compete</h2>
        <p>
          Subscriber agrees to keep confidential information obtained during the agreement. A non-compete clause
          restricts the use of Company information for a specified period after termination
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-medium'>Limitation of Liability</h2>
        <p>
          The {`Company's`} liability is limited to the license fee paid by the Subscriber. <br /> The Company is not
          liable for loss of profits or consequential damages.
          <br /> The Company reserves the right to utilize its data for business development purposes. The Company may
          exclude data from subscribed reports. <br /> The Company reserves the right to contact Subscriber via phone,
          email, and/or mailing address only upon subscriber opt-in. <br /> The Company does not sell the{' '}
          {`Subscriber's`} personal information.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-medium'>Accuracy of Data</h2>
        <p>
          Subscriber acknowledges that First Leads does not guarantee 100% accuracy of results but has made reasonable
          best efforts to ensure accurate information. Subscriber acknowledges that First Leads generates respective
          geographical data based on availability. Therefore, Subscriber understands there is no expectation of refunds
          due to inaccuracy of data, or unavailable data due to limited lead data in respective geographical locations
          for subscribed time period. In the event that First Leads is unable to resolve technical issues, Subscriber
          may terminate service at anytime with no expectation of a refund of fees.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-medium'>Indemnification</h2>
        <p>
          Subscriber agrees to indemnify and hold the Company harmless from any third-party claims relating to their
          account.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-medium'>Force Majeure</h2>
        <p>The Company is not responsible for disruptions caused by events beyond its control.</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-medium'>Survivorship</h2>
        <p>
          Warranties, representations, and agreements survive the termination of this Agreement, binding successors and
          assigns.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-medium'>Governing Law</h2>
        <p>This Agreement is governed by the laws of the State of California.</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-medium'>Termination</h2>
        <p>
          The Company reserves the right to terminate service at its discretion. Subscriber may terminate their
          subscription services directly in Dashboard or request termination of subscription via email.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-medium'>General</h2>
        <p>{`The correct spelling of the Company is "First Leads Generation."`}</p>
      </div>
      <h1 className='text-xl font-bold'>Copyright © 2023 First Leads Generation Inc. All rights reserved.</h1>
    </div>
  )
}

export default Terms
