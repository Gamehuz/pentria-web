import Link from 'next/link';
import React from 'react';

const Card = ({ space }: { space: any }) => {
  return (
    <div className='card rounded-md relative lg:w-[32%] bg-[#FAFAFA] my-6'>
      <Link href={`/space?page=${space._id}`}>
        <img src={space.image[0]} className='rounded-t-md' alt="" />
        {/* <img src="/images/Featured.png" className='absolute top-20 -left-5' alt="" /> */}
        <div className='p-4'>
          <div className='flex justify-between my-3'>
            <h5 className='font-bold text-xl text-[#D78D06] my-auto'> {space.currency} {space.price}</h5>
            <img src="/images/favourite.png" alt="" />
          </div>
          <p className='font-bold text-lg'>{space.name}</p>
          <p className='text-sm text-[#C4C4C4]'>{space.location}</p>
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
      </Link>
    </div>
  );
};

export default Card;