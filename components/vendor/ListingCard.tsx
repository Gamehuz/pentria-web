import React from 'react';

const ListingCard = () => {
  return (
    <div className='lg:flex my-2'>
      <img src="/images/pic.jpg" className='lg:w-52 w-full h-32 rounded-xl' alt="" />
      <div className='my-auto lg:ml-4 sm:my-2'>
        <p className='font-bold'>Platinum Game Center & Bar</p>
        <p className='text-sm my-3'>Platinum Game Center & Bar</p>
        <div className='flex my-auto'>
          <img src="/images/star.png" className='w-4 h-4' alt="" />
          <img src="/images/star.png" className='w-4 h-4' alt="" />
          <img src="/images/star.png" className='w-4 h-4' alt="" />
          <img src="/images/star.png" className='w-4 h-4' alt="" />
          <img src="/images/star1.png" className='w-4 h-4' alt="" />
          <p className='text-xs ml-1'>4.0 Ratings </p>
        </div>
      </div>
      <div className='bg-[#D8D1E9] p-3 rounded-md lg:mx-4 sm:my-3 lg:w-80'>
        <p className='my-1'>Description</p>
        <p className='text-sm'>Varieties of Games are availables coupled with free coupon
          for the winners of various games</p>
      </div>
      <div className='lg:w-20 flex justify-between text-sm'>
        <button className='border border-primaryColor lg:mx-6 text-primaryColor px-10 p-3 h-12 rounded-md my-auto'>Edit</button>
        <button className='bg-red-500 lg:mx-6 text-white p-3 px-10 h-12 rounded-md my-auto'>Delete</button>
      </div>
    </div>
  );
};

export default ListingCard;