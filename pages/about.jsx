import React from 'react';
import FrontLayout from '@/layout/FrontLayout';

const about = () => {
  return (
    <FrontLayout>
      <main>
        <div className='lg:flex justify-between lg:px-20 px-4'>
          <div className='lg:w-[35%] lg:my-auto sm:py-10'>
            <h1 className='lg:text-5xl text-4xl font-bold text-primaryColor'>One-Click Playtime,
              Like Never Before!</h1>
            <p className='my-3 sm:text-sm'>Pentria is Africa’s leading marketplace for all things recreation and leisure. A platform for ‘soft lifers’ and 'good vibers' to relish happy moments and create beautiful memories through leisure and play. Now you can more easily find and access your favorite hangout spots, games and events nearby, all in one place. Don't be late or left out anymore. Book funtime ahead in one click.</p>
            <p className='text-primaryColor font-bold text-lg'>App coming soon!</p>
          </div>
          <img src="/images/Wood-Hand.png" alt="" />
        </div>
        <div className='bg-primaryColor lg:px-20 px-4 py-8 sm:text-sm text-white'>
          <h2 className='font-bold text-xl'>OUR STORY</h2>
          <p>In 2021, Chidi, a public gaming lounge business owner in Southwest Nigeria, ran into two problems. Low visibility, one. Next, keen but unsatisfied customers who couldn’t access their favorite spots/games at no extra time or cost.
            <br /> <br />
            He conceived an idea. Why not create a seamless experience in which public recreation facility users can easily find nearby favorite spots and eliminate waiting time with discounted one-click ticket reservation at home, while also assisting leisure service providers in increasing visibility, boosting sales and improving customer experience/retention?
            <br /> <br />
            And so, Pentria was born - a brilliant solution by a team of tech-savvy 'soft-lifers' and 'good-vibers' passionate about solving social and business development problems in Africa.</p>
          <h2 className='font-bold text-xl mt-6'>OUR MISSION</h2>
          <p>Pentria employs a multi-sectoral approach to identifying and addressing real issues surrounding recreation, entertainment and tourism in Nigeria and Africa.</p>
          <h2 className='font-bold text-xl mt-6'>OUR PROMISE</h2>
          <p>Pentria is an easy-to-use digital marketplace to find and access the best quality, bespoke and pocket-friendly recreation and hospitality service providers in your locality. Enjoy:
            <br /> <br />
            {'>'} Custom search results <br />
            {'>'} Safe and comfy spaces <br />
            {'>'} Exclusive prices <br />
            {'>'} Simplified bookings <br />
            {'>'} Secure online transactions</p>
        </div>
        <div className='lg:p-20 p-4'>
          <h1 className='text-center text-primaryColor font-bold text-3xl mb-10'>Meet the Team</h1>
          <div className='flex flex-wrap justify-between'>
            <div className='lg:w-[20%]  w-[40%] text-center'>
              <img src="/images/team.png" alt="" />
              <h3 className='font-bold mt-4 text-xl'>Chidi Nkwocha</h3>
              <p className='text-sm'>CEO/Product lead</p>
            </div>
            <div className='lg:w-[20%] w-[40%] text-center'>
              <img src="/images/team.png" alt="" />
              <h3 className='font-bold mt-4 text-xl'>Chidi Nkwocha</h3>
              <p className='text-sm'>CEO/Product lead</p>
            </div>
            <div className='lg:w-[20%]  w-[40%] text-center'>
              <img src="/images/team.png" alt="" />
              <h3 className='font-bold mt-4 text-xl'>Chidi Nkwocha</h3>
              <p className='text-sm'>CEO/Product lead</p>
            </div>
            <div className='lg:w-[20%]  w-[40%] text-center'>
              <img src="/images/team.png" alt="" />
              <h3 className='font-bold mt-4 text-xl'>Chidi Nkwocha</h3>
              <p className='text-sm'>CEO/Product lead</p>
            </div>
          </div>
        </div>
      </main>
    </FrontLayout>
  );
};

export default about;