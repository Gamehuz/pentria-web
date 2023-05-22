import FrontLayout from '@/layout/FrontLayout';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from "swiper";

type PatnersType = {
  title: string;
  desc: string;
}[];

const partners = () => {
  const reasons: PatnersType = [
    {
      title: "Value-Added Spaces",
      desc: "Do you own a facility or property which could be used for recreation purposes? Add value to such by listing it on Pentria."
    },
    {
      title: "Increased Exposure",
      desc: "Become visible to thousands of potential customers who are eager to get the unique experiences you offer."
    },
    {
      title: "Seamless & Safe Bookings",
      desc: "Our intuitive UI/UX design and strict online security measures ensures a simple and secure booking experience for real customers to keep ‘em coming"
    },
    {
      title: "Marketing Conversions",
      desc: "Generate more sales using Pentria via targeted marketing campaigns on our email lists, website and social media channels."
    },
    {
      title: "Revenue Tracking",
      desc: "Know how much you’re making per time. Visualize your income progress, gauge your returns, and level up your business."
    },
    {
      title: "Free Withdrawals",
      desc: "Withdraw your earnings at enytime from your pentria wallet to your local bank account. Get credited within minutes. And smiles, it’s free!"
    },
  ]
  return (
    <FrontLayout>
      <main className='lg:p-20 sm:px-4 sm:py-10'>
        <div className='lg:flex justify-between'>
          <div className='lg:w-[35%] my-auto'>
            <h1 className='lg:text-5xl text-4xl font-bold text-primaryColor'>Enter the SALES!</h1>
            <p className='my-4'>Take advantage of our marketing and payment solution to optimize and scale your recreation business or brand. Become the go-to leisure service provider for amazing guests in your area, only on Pentria.
            </p>
            <button className='bg-primaryColor rounded-md flex px-10 text-white p-3'>Get Started <img src="/images/Arrow.png" className='my-auto ml-3' alt="" /></button>
            <div className='my-6 flex justify-between'>
              <div>
                <p className='font-bold text-xl'>1,000 +</p>
                <p className='text-sm text-primaryColor'>Active guests since 2023</p>
              </div>
              <div>
                <p className='font-bold text-xl'>20 +</p>
                <p className='text-sm text-primaryColor'>Active vendors since 2023</p>
              </div>
            </div>
          </div>
          <img src="/images/img.png" alt="" />
        </div>
        <div>
          <h1 className='text-center text-primaryColor text-3xl my-8 font-bold'>Why use Pentria?</h1>
          <div className='flex flex-wrap justify-between lg:w-[80%] mx-auto'>
            {
              reasons.map((reason, index) => (
                <div key={index} className='card rounded-md p-6 lg:w-[47%] w-full text-center lg:my-8 my-4'>
                  <h4 className='text-xl text-[#D78D06] py-4 font-bold'>{reason.title}</h4>
                  <p>{reason.desc}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div>
          <h1 className='text-center text-primaryColor text-3xl my-8 font-bold'>Testimonials</h1>
          <div className=''>
            <Swiper
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <div className='p-6 flex card m-2 rounded-md'>
                  <img src="/images/team.png" className='w-10 h-10' alt="" />
                  <div className='ml-3'>
                    <p className='text-primaryColor'>Amazing platform, didn’t know how I could get more customers easily until I found Pentria.</p>
                    <div className='flex my-4'>
                      <img src="/images/star.png" className='w-4 h-4' alt="" />
                      <img src="/images/star.png" className='w-4 h-4' alt="" />
                      <img src="/images/star.png" className='w-4 h-4' alt="" />
                      <img src="/images/star.png" className='w-4 h-4' alt="" />
                      <img src="/images/star1.png" className='w-4 h-4' alt="" />
                      <p className='text-xs ml-1'>4.0 Ratings </p>
                    </div>
                    <p className='font-bold text-[#D78D06]'>Victoria Ekpo (Hugly Ent., Lagos)</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='p-6 flex card m-2 rounded-md'>
                  <img src="/images/team.png" className='w-10 h-10' alt="" />
                  <div className='ml-3'>
                    <p className='text-primaryColor'>Amazing platform, didn’t know how I could get more customers easily until I found Pentria.</p>
                    <div className='flex my-4'>
                      <img src="/images/star.png" className='w-4 h-4' alt="" />
                      <img src="/images/star.png" className='w-4 h-4' alt="" />
                      <img src="/images/star.png" className='w-4 h-4' alt="" />
                      <img src="/images/star.png" className='w-4 h-4' alt="" />
                      <img src="/images/star1.png" className='w-4 h-4' alt="" />
                      <p className='text-xs ml-1'>4.0 Ratings </p>
                    </div>
                    <p className='font-bold text-[#D78D06]'>Victoria Ekpo (Hugly Ent., Lagos)</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='p-6 flex card m-2 rounded-md'>
                  <img src="/images/team.png" className='w-10 h-10' alt="" />
                  <div className='ml-3'>
                    <p className='text-primaryColor'>Amazing platform, didn’t know how I could get more customers easily until I found Pentria.</p>
                    <div className='flex my-4'>
                      <img src="/images/star.png" className='w-4 h-4' alt="" />
                      <img src="/images/star.png" className='w-4 h-4' alt="" />
                      <img src="/images/star.png" className='w-4 h-4' alt="" />
                      <img src="/images/star.png" className='w-4 h-4' alt="" />
                      <img src="/images/star1.png" className='w-4 h-4' alt="" />
                      <p className='text-xs ml-1'>4.0 Ratings </p>
                    </div>
                    <p className='font-bold text-[#D78D06]'>Victoria Ekpo (Hugly Ent., Lagos)</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </main>
    </FrontLayout>
  );
};

export default partners;