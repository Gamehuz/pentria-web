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
      q: "How can I reserve playtime in one click?",
      a: "From their freshly baked bread to their mouth-watering cakes and pastries, everything is just perfect. I have been a loyal customer for years, and I am never disappointed! I recently ordered a cake for my daughter's birthday, and it was the most delicious cake I have ever tasted! The frosting was so creamy and the cake was perfectly moist."
    },
    {
      q: "Why should I pay online?",
      a: "From their freshly baked bread to their mouth-watering cakes and pastries, everything is just perfect. I have been a loyal customer for years, and I am never disappointed! I recently ordered a cake for my daughter's birthday, and it was the most delicious cake I have ever tasted! The frosting was so creamy and the cake was perfectly moist."
    },
    {
      q: "What payment methods can I use?",
      a: "From their freshly baked bread to their mouth-watering cakes and pastries, everything is just perfect. I have been a loyal customer for years, and I am never disappointed! I recently ordered a cake for my daughter's birthday, and it was the most delicious cake I have ever tasted! The frosting was so creamy and the cake was perfectly moist."
    },
    {
      q: "Can I cancel my bookings?",
      a: "From their freshly baked bread to their mouth-watering cakes and pastries, everything is just perfect. I have been a loyal customer for years, and I am never disappointed! I recently ordered a cake for my daughter's birthday, and it was the most delicious cake I have ever tasted! The frosting was so creamy and the cake was perfectly moist."
    },
    {
      q: "What else can I do on Pentria?",
      a: "From their freshly baked bread to their mouth-watering cakes and pastries, everything is just perfect. I have been a loyal customer for years, and I am never disappointed! I recently ordered a cake for my daughter's birthday, and it was the most delicious cake I have ever tasted! The frosting was so creamy and the cake was perfectly moist."
    },
  ]

  const [exploreList, setExploreList] = useState([])

  useQuery(GET_SPACES, {
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
