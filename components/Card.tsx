import { calcAvgRating } from '@/util/helper';
import Link from 'next/link';
import React from 'react';

const Card = ({ space }: { space: any }) => {
  const [review, setReview] = React.useState(calcAvgRating(space.reviews))

  return (
    <div className='card rounded-md relative lg:w-[32%] bg-[#FAFAFA] my-6'>
      <Link href={`/space?page=${space._id}`}>
        <img src={space.image[0]} className='rounded-t-md h-[300px] w-[500px]' alt="" />
        {/* <img src="/images/Featured.png" className='absolute top-20 -left-5' alt="" /> */}
        <div className='p-4'>
          {/* <div className='flex justify-between my-3'>
            <h5 className='font-bold text-xl text-[#D78D06] my-auto'> {space.currency} {space.price}</h5>
            <img src="/images/favourite.png" alt="" />
          </div> */}
          <p className='font-bold text-lg'>{space.name}</p>
          <p className='text-sm text-[#C4C4C4]'>{space.location}</p>
          <div className='flex justify-between my-3'>
            <div className='flex justify-between'>
              <div className={review >= 1 ? 'text-primaryColor' : 'text-gray-400 '}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div className={review >= 2 ? 'text-primaryColor' : 'text-gray-400'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div className={review >= 3 ? 'text-primaryColor ' : 'text-gray-400'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div className={review >= 4 ? 'text-primaryColor ' : 'text-gray-400'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div className={review >= 5 ? 'text-primaryColor' : 'text-gray-400'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <p className='ml-2'>{review}.0 Reviews</p>
            </div>
            <button className='p-3 bg-primaryColor rounded-md text-white text-sm px-6'>Get tickets </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;