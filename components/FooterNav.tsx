import Link from 'next/link';
import React from 'react';

const FooterNav = () => {
  return (
    <footer className='bg-primaryColor px-20'>
      <div className='p-20  flex text-white justify-between text-sm'>
        <div>
          <img src="/images/Pentria.png" alt="" />
          <div className='flex justify-between w-20 mt-6'>
            <img src="/images/link.png" alt="" />
            <img src="/images/twitter.svg" alt="" />
          </div>
        </div>
        <div>
          <h5 className='text-base font-bold'>Product</h5>
          <Link href={""}>
            <p className='my-2' >Vendors</p>
          </Link>
          <Link href={""}>
            <p className='my-2'>About</p>
          </Link>
          <Link href={""}>
            <p className='my-2'>Enquiries</p>
          </Link>
          <Link href={""}>
            <p className='my-2'>Blog</p>
          </Link>
        </div>
        <div>
          <h5 className='text-base font-bold'>Legal </h5>
          <Link href={""}>
            <p className='my-2' >Privacy Policy</p>
          </Link>
          <Link href={""}>
            <p className='my-2'>Terms of Use</p>
          </Link>
        </div>
        <div className='w-96'>
          <h5 className='text-base font-bold'>Subscribe to Our Newsletter </h5>
          <div className='relative my-2'>
            <input type="text" className='w-full p-3 bg-white rounded-md' placeholder='Enter Email Address' />
          </div>
        </div>
      </div>
      <div className='text-center text-sm p-3 text-white border-t border-white'>
        Copyright © 2023 by Gamehauz, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterNav;