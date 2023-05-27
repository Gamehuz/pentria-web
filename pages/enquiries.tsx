import FaqsCard from '@/components/FaqsCard';
import FrontLayout from '@/layout/FrontLayout';
import React from 'react';
type FaqType = {
  q: string;
  a: string;
}[];

const enquiries = () => {
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

  return (
    <FrontLayout>
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
            <div className='flex my-6'>
              <img src="/images/location_major.png" className='w-8 h-8' alt="" />
              <p className='my-auto ml-4'>2 Okuta Ave., 500102, Port Harcourt, Nigeria </p>
            </div>
          </div>
          <img src="/images/contact.png" className='lg:w-[40%]' alt="" />
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

export default enquiries;