import React from 'react';

const Card = () => {
  return (
    <div className='card rounded-md relative w-[30%] bg-[#FAFAFA] my-6'>
      <img src="/images/pic.jpg" className='rounded-t-md' alt="" />
      <img src="/images/Featured.png" className='absolute top-20 -left-5' alt="" />
      <div className='p-4'>
        <div className='flex justify-between my-3'>
          <h5 className='font-bold text-xl text-[#D78D06] my-auto'>₦2,000</h5>
          <img src="/images/favourite.png" alt="" />
        </div>
        <p className='font-bold text-lg'>Platinum Game Center & Bar</p>
        <p className='text-sm text-[#C4C4C4]'>Eliozu Rd, Rukpakulusi, Port Harcourt, RI</p>
        <div className='flex justify-between my-3'>
          <div className='flex my-auto'>
            <img src="/images/star.png" className='w-4 h-4' alt="" />
            <img src="/images/star.png" className='w-4 h-4' alt="" />
            <img src="/images/star.png" className='w-4 h-4' alt="" />
            <img src="/images/star.png" className='w-4 h-4' alt="" />
            <img src="/images/star1.png" className='w-4 h-4' alt="" />
            <p className='text-xs ml-1'>4.0 Ratings </p>
          </div>
          <button className='p-3 bg-primaryColor rounded-md text-white text-sm px-6'>Get tickets </button>
        </div>
      </div>
    </div>
  );
};

export default Card;