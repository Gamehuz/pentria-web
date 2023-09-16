import Link from 'next/link';
import React from 'react';

const FooterNav = () => {
  return (
    <footer className='bg-primaryColor lg:px-20 '>
      <div className='lg:p-20 p-4 lg:flex text-white justify-between text-sm'>
        <div>
          <img src="/images/Pentria.png" alt="" />
          <div className='flex justify-between w-20 mt-6'>
            <a href="https://www.linkedin.com/company/recspacesapp/" target="_blank" rel="noopener noreferrer">
              <img src="/images/link.png" alt="" />
            </a>
            <a href="https://twitter.com/pentriaapp" target="_blank" rel="noopener noreferrer">
              <img src="/images/twitter.svg" alt="" />
            </a>
          </div>
        </div>
        <div>
          <h5 className='text-base font-bold'>Product</h5>
          <Link href={"/partners"}>
            <p className='my-2' >Vendors</p>
          </Link>
          <Link href={"/about"}>
            <p className='my-2'>About</p>
          </Link>
          <Link href={"enquiries"}>
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
        <div className='lg:w-96'>
          <h5 className='text-base font-bold'>Subscribe to Our Newsletter </h5>
          <div className='relative my-2 text-black'>
            <input type="text" className='w-full p-3 bg-white rounded-md' placeholder='Enter Email Address' />
            <button className='absolute top-1.5 right-1.5 bg-primaryColor p-1 rounded-md'>
              <img src="/images/send.png" alt="" />
            </button>
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