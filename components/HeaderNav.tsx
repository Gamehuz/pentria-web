import Link from 'next/link';
import React from 'react';
import { useState } from "react"

const HeaderNav = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='shadow'>
      <div className='sm:hidden lg:flex justify-between px-20 p-5 text-sm'>
        <img src="/images/Pentria.svg" alt="" />
        <div className='flex w-96 my-auto justify-between text-primaryColor'>
          <Link href={"/explore"}>
            <p>Explore</p>
          </Link>
          <Link href={"/about"}>
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
      <div className='sm:flex justify-between lg:hidden p-3'>
        <img src="/images/Pentria.svg" alt="" />
        <img src="/images/hamburger.png" className='w-8 h-8 cursor-pointer' onClick={() => setToggle(!toggle)} alt="" />
      </div>
      {
        toggle && <div className='bg-white p-6'>
          <Link href={"/explore"}>
            <p className='my-3'>Explore</p>
          </Link>
          <Link href={"/about"}>
            <p className='my-3'>About</p>
          </Link>
          <Link href={""}>
            <p className='my-3'>Partners</p>
          </Link>
          <Link href={""}>
            <p className='my-3'>Enquiries</p>
          </Link>
          <Link href={""}>
            <button className='bg-white border text-sm my-3 border-primaryColor p-3 w-full px-4 text-primaryColor rounded-md'>
              Sign Up
            </button>
          </Link> <br />
          <Link href={""}>
            <button className='bg-primaryColor w-full my-3 text-white text-sm p-3 rounded-md px-6'>
              Login
            </button>
          </Link>
        </div>
      }
    </div>
  );
};

export default HeaderNav;