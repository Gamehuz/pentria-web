import Card from '@/components/Card'
import FrontLayout from '@/layout/FrontLayout'
import { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import FaqsCard from '@/components/FaqsCard.jsx'
import Hero from '@/components/Hero'
import { useState } from 'react'
import Link from 'next/link'
import { GET_SPACES } from '@/apollo/spaces'
import { useQuery } from '@apollo/client'

const josefin_Sans = Josefin_Sans({ subsets: ['latin'] })

 
export const metadata: Metadata = {
  title: 'Beat the queue with one-click ticket reservation. Enjoy seamless playtime at a recreation space near you.',
  description: 'Beat the queue with one-click ticket reservation. Enjoy seamless playtime at a recreation space near you.',
}


type FaqType = {
  q: string;
  a: string;
}[];

export default function Home() {
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

  const [exploreList, setExploreList] = useState([])

  useQuery(GET_SPACES, {
    variables: {
      approved: true
    },
    onCompleted: (data) => {
      console.log(data);
      setExploreList(data.spaces)
    },
  })
  return (
    <div>
      <FrontLayout>
        <main>
          <Hero />
          <div className='lg:px-20 px-4 bg-primaryColor py-8'>
            <div className='flex'>
              <div className='w-8 border-t border-white h-1 my-auto'></div>
              <p className='text-white text-sm'>EXPLORE</p>
            </div>
            <div className='flex justify-between'>
              <h4 className='text-xl my-1 font-bold text-white'>Spaces to Go</h4>
              <Link href={"/explore"}>
                <div className='flex'>
                  <p className='text-white text-sm my-auto'>Explore All</p>
                  <img src="/images/Arrow.png" className='w-4 h-2 ml-3 my-auto' alt="" />
                </div>
              </Link>
            </div>
            <div className='flex justify-between flex-wrap'>
              {
                exploreList.slice(0, 3).map((item, idx) => (
                  <Card space={item} key={idx} />
                ))
              }
            </div>
          </div>
          {/* <div className='lg:px-20 px-4 py-8'>
            <div className='flex justify-between'>
              <h4 className='text-xl my-1 font-bold text-primaryColor'>Upcoming Events</h4>
              <div className='flex'>
                <p className='text-white text-sm my-auto'>Explore All</p>
                <img src="/images/Arrow.png" className='w-4 h-2 ml-3 my-auto' alt="" />
              </div>
            </div>
            <div className='flex justify-between flex-wrap'>
              <Card />
              <Card />
              <Card />
            </div>
          </div> */}
          <div className='lg:px-20 px-4 py-8'>
            <div className='flex'>
              <div className='w-6 border-t border-primaryColor h-1 my-auto'></div>
              <p className='text-primaryColor text-sm font-bold'>PARTNER</p>
            </div>
            <div className='lg:flex justify-between'>
              <div className='w-96'>
                <h1 className='font-bold text-4xl my-4 text-primaryColor'>More Visibility,
                  Increased Sales,
                  Better Experience
                </h1>
                <p className='text-sm'>Manage time and streamline revenue better. Improve customer experience with one-click ticket reservations.</p>
              </div>
              <div className='flex'>
                <img src="/images/Frame.png" className='w-80 h-32 my-auto sm:hidden' alt="" />
                <img src="/images/partners.png" className='' alt="" />
              </div>
            </div>
          </div>
          <div className='lg:px-20 px-4 py-8'>
            <div className='flex'>
              <div className='w-6 border-t border-primaryColor h-1 my-auto'></div>
              <p className='text-primaryColor text-sm font-bold'>Frequently Asked Questions (FAQs)</p>
            </div>
            <div className='lg:flex justify-between'>
              <div>
                <img src="/images/questions.png" className='my-auto' alt="" />
              </div>
              <div className='lg:w-1/2'>
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
          </div>
        </main>
      </FrontLayout>
    </div>
  )
}
