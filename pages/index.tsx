import Card from '@/components/Card'
import FrontLayout from '@/layout/FrontLayout'
import { Josefin_Sans } from 'next/font/google'
import FaqsCard from '@/components/FaqsCard.jsx'
import Hero from '@/components/Hero'

const josefin_Sans = Josefin_Sans({ subsets: ['latin'] })


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
      q: "How can I reserve playtime in one click?",
      a: "From their freshly baked bread to their mouth-watering cakes and pastries, everything is just perfect. I have been a loyal customer for years, and I am never disappointed! I recently ordered a cake for my daughter's birthday, and it was the most delicious cake I have ever tasted! The frosting was so creamy and the cake was perfectly moist."
    },
    {
      q: "How can I reserve playtime in one click?",
      a: "From their freshly baked bread to their mouth-watering cakes and pastries, everything is just perfect. I have been a loyal customer for years, and I am never disappointed! I recently ordered a cake for my daughter's birthday, and it was the most delicious cake I have ever tasted! The frosting was so creamy and the cake was perfectly moist."
    },
    {
      q: "How can I reserve playtime in one click?",
      a: "From their freshly baked bread to their mouth-watering cakes and pastries, everything is just perfect. I have been a loyal customer for years, and I am never disappointed! I recently ordered a cake for my daughter's birthday, and it was the most delicious cake I have ever tasted! The frosting was so creamy and the cake was perfectly moist."
    },
    {
      q: "How can I reserve playtime in one click?",
      a: "From their freshly baked bread to their mouth-watering cakes and pastries, everything is just perfect. I have been a loyal customer for years, and I am never disappointed! I recently ordered a cake for my daughter's birthday, and it was the most delicious cake I have ever tasted! The frosting was so creamy and the cake was perfectly moist."
    },
  ]

  return (
    <div>
      <FrontLayout>
        <main>
          <Hero />
          <div className='px-20 bg-primaryColor py-8'>
            <div className='flex'>
              <div className='w-8 border-t border-white h-1 my-auto'></div>
              <p className='text-white text-sm'>EXPLORE</p>
            </div>
            <div className='flex justify-between'>
              <h4 className='text-xl my-1 font-bold text-white'>Spaces to Go</h4>
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
          </div>
          <div className='px-20 py-8'>
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
          </div>
          <div className='px-20 py-8'>
            <div className='flex'>
              <div className='w-6 border-t border-primaryColor h-1 my-auto'></div>
              <p className='text-primaryColor text-sm font-bold'>PARTNER</p>
            </div>
            <div className='flex justify-between'>
              <div className='w-96'>
                <h1 className='font-bold text-4xl my-4 text-primaryColor'>More Visibility,
                  Increased Sales,
                  Better Experience
                </h1>
                <p className='text-sm'>Manage time and streamline revenue better. Improve customer experience with one-click ticket reservations.</p>
              </div>
              <div className='flex'>
                <img src="/images/Frame.png" className='w-80 h-32 my-auto' alt="" />
                <img src="/images/partners.png" className='' alt="" />
              </div>
            </div>
          </div>
          <div className='px-20 py-8'>
            <div className='flex'>
              <div className='w-6 border-t border-primaryColor h-1 my-auto'></div>
              <p className='text-primaryColor text-sm font-bold'>Frequently Asked Questions (FAQs)</p>
            </div>
            <div className='flex justify-between'>
              <div>
                <img src="/images/questions.png" className='my-auto' alt="" />
              </div>
              <div className='w-1/2'>
                {
                  faqsList.map((item, idx) => (
                    <FaqsCard
                      idx={idx}
                      faqsList={item}
                    />
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
