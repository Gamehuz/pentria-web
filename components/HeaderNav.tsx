import Link from 'next/link';
import React from 'react';

const HeaderNav = () => {
  return (
    <div className='shadow'>
      <div className='flex justify-between px-20 p-5 text-sm'>
        <img src="/images/Pentria.svg" alt="" />
        <div className='flex w-96 my-auto justify-between text-primaryColor'>
          <Link href={""}>
            <p>Explore</p>
          </Link>
          <Link href={""}>
            <p>About</p>
          </Link>
          <Link href={""}>
            <p>Partners</p>
          </Link>
          <Link href={""}>
            <p>Enquiries</p>
          </Link>
        </div>
        <div className='flex justify-between w-52'>
          <Link href={""}>
            <button className='bg-white border text-sm border-primaryColor p-3 px-4 text-primaryColor rounded-md'>
              Sign Up
            </button>
          </Link>
          <Link href={""}>
            <button className='bg-primaryColor text-white text-sm p-3 rounded-md px-6'>
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;