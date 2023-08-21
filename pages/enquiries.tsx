import FaqsCard from '@/components/FaqsCard';
import FrontLayout from '@/layout/FrontLayout';
import { useState } from 'react';
import { message } from 'antd';
type FaqType = {
  q: string;
  a: string;
}[];

const Enquiries = () => {
  const faqsList: FaqType = [
    {
      q: "How can I reserve playtime in one-click?",
      a: "You can reserve playtime by purchasing entry tickets to recreation spaces listed on the Pentria website. Simply search or click on a space of your choice. Choose an available item or facility from the given menu. Select your playtime and number of tickets you want to purchase. Sign up or sign in to continue. Confirm or edit your ticket details, then click on “book now” to make payment. After payment, you may print or download your ticket, and use it to access the facility at your reserved playtime."
    },
    {
      q: "Why should I pay online? Is the amount cheaper offline?",
      a: "Thanks to our valuable partners, all prices listed on our website are indeed slightly cheaper than their offline rates. Pentria offers you the best rates you can get to reserve playtime in one-click at your own convenience. Save money for fun sake. Eliminate waiting time. Beat the offline queue by booking ahead for your favorite game times on the Pentria website. Work smart, play smart!"
    },
    {
      q: "What payment methods can I use?",
      a: "You can use a variety of payment methods, including Card payments, bank transfers and internet banking."
    },
    {
      q: "Can I cancel my booking or resell my ticket?",
      a: "Yes, you can cancel your booking, provided it is done at least 2 hours before your reserved playtime is to start. However, you will only be refunded 50% of your ticket amount upon cancellation at any point in time. Please note that tickets purchased on Pentria are NOT transferable, and so, you cannot resell your ticket offline to someone else to use on your behalf. To cancel your booking, simply go to the “tickets history” menu on your dashboard. Select the active ticket you wish to cancel, enter your details, and then click on “cancel”."
    },
    {
      q: "What else can I do on Pentria?",
      a: "Apart from reserving playtime at recreation spaces, soon you can also purchase tickets to upcoming events nearest to you. Coming soon: join membership clubs (e.g. gym, yoga, car race, sport clubs, cooking or swimming classes, etc.), get legacy points and more. Expect more custom solutions to all your recreation needs only on Pentria."
    },
    {
      q: "I own or manage a recreation space. How does Pentria help?",
      a: "If you own or manage a recreation space in Nigeria, you can become one of our highly esteemed vendors or partners. As a vendor/partner, you get to list your facilities for free on the Pentria website, as well as receive benefits such as more visibility to your target customers, more conversions, and improved business experience. More information on the “vendors” page. Contact us to get started."
    },
  ]

  const [messageApi, contextHolder] = message.useMessage();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMail = async (e:any) => {
    setLoading(true)
    e.preventDefault()
    if (!name.length || !email.length || !subject.length || !msg.length) {
      messageApi.open({
        type: 'error',
        content: 'Fill the form',
      });
      setLoading(false)
      return
    }

    const payload = {
      name,
      email,
      subject: `Pentria - ${subject}`,
      message: msg
    }

    const response = await fetch('https://formsubmit.co/ajax/gamehauzltd@gmail.com', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload) // body data type must match "Content-Type" header
      });
      console.log(response)
      setLoading(false)
  }

  return (
    <FrontLayout>
      {contextHolder}
      <main className='lg:p-20 sm:px-4 sm:py-10'>
        <div className='lg:flex justify-between'>
          <div className='lg:w-1/2'>
            <h1 className='text-4xl font-bold text-primaryColor sm:text-center my-8'>Contact us</h1>
            <div className='flex my-6'>
              <img src="/images/phone_major.png" className='w-8 h-8' alt="" />
              <p className='my-auto ml-4'>+2348103183852</p>
            </div>
            <div className='flex my-6'>
              <img src="/images/email_major.png" className='w-8 h-8' alt="" />
              <p className='my-auto ml-4'>hello@gamehauz.com</p>
            </div>
          </div>
          <div className='lg:w-1/2 text-primaryColor'>
            <h1 className='text-[30px] font-bold'>Send us a Message</h1>
            <p className='text-[20px]'>Please fill in the form below to get in touch with us.</p>
            <form>
            <input
                type="text"
                placeholder='Full name'
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <input
                type="email"
                placeholder='Email Address'
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                type="text"
                placeholder='Subject'
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e) => setSubject(e.target.value)}
              />
              <br />
              <textarea className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" name="message" id="1" cols={10} rows={10} placeholder='Message......' onChange={(e) => setMsg(e.target.value)} ></textarea>

              <button disabled={loading} onClick={(e) => sendMail(e)} className='w-full text-white bg-primaryColor rounded-lg py-4'>{loading ? 'Sending....' : 'Send'}</button>
            </form>
          </div>
          
        </div>
        <div className='mt-20'>
          <h1 className='text-center text-4xl font-bold text-primaryColor'>Frequently Asked Questions (FAQs)</h1>
          <div className='lg:w-[80%] mx-auto'>

            {
              faqsList.map((item, idx) => (
                <div key={idx}>
                  <FaqsCard
                    idx={idx}
                    faqsList={item}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </main>
    </FrontLayout>
  );
};

export default Enquiries;