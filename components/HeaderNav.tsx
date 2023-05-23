import Link from 'next/link';
import React from 'react';
import { useState } from "react"
import SignupModal from './SignupModal';

const HeaderNav = () => {
  const [toggle, setToggle] = useState(false)
  const [modal, setModal] = useState(false)

  return (
    <div className='shadow'>
      <div className='sm:hidden lg:flex justify-between px-20 p-5 text-sm'>
        <Link href={"/"}>
          <img src="/images/Pentria.svg" alt="" />
        </Link>
        <div className='flex w-96 my-auto justify-between text-primaryColor'>
          <Link href={"/explore"}>
            <p>Explore</p>
          </Link>
          <Link href={"/about"}>
            <p>About</p>
          </Link>
          <Link href={"/partners"}>
            <p>Vendors</p>
          </Link>
          <Link href={"/enquiries"}>
            <p>Enquiries</p>
          </Link>
        </div>
        <div className='flex justify-between w-52'>
          <button onClick={() => setModal(true)} className='bg-white border text-sm border-primaryColor p-3 px-4 text-primaryColor rounded-md'>
            Sign Up
          </button>
          <Link href={"/auth/login"}>
            <button className='bg-primaryColor text-white text-sm p-3 rounded-md px-6'>
              Login
            </button>
          </Link>
        </div>
      </div>
      <div className='sm:flex justify-between lg:hidden p-3'>
        <Link href={"/"}>
          <img src="/images/Pentria.svg" alt="" />
        </Link>
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
          <Link href={"/partners"}>
            <p className='my-3'>Vendors</p>
          </Link>
          <Link href={"/enquiries"}>
            <p className='my-3'>Enquiries</p>
          </Link>
          <button onClick={() => setModal(true)} className='bg-white border text-sm my-3 border-primaryColor p-3 w-full px-4 text-primaryColor rounded-md'>
            Sign Up
          </button>
          <br />
          <Link href={"/auth/login"}>
            <button className='bg-primaryColor w-full my-3 text-white text-sm p-3 rounded-md px-6'>
              Login
            </button>
          </Link>
        </div>
      }
      <SignupModal modal={modal} setModal={() => setModal(!modal)} />
    </div>
  );
};

export default HeaderNav;