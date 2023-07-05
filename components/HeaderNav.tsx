import Link from 'next/link';
import React from 'react';
import { useState } from "react"
import SignupModal from './SignupModal';
import { useSelector } from 'react-redux';
import { selectUser } from "@/store/slices/userSlice.js"
import { selectCart } from '@/store/slices/cartSlice';

const HeaderNav = () => {
  const [toggle, setToggle] = useState(false)
  const [modal, setModal] = useState(false)
  const user = useSelector(selectUser)
  const cart = useSelector(selectCart)

  return (
    <div className='shadow'>
      <div className='sm:hidden lg:flex justify-between px-20 p-5 text-sm'>
        <Link href={"/"}>
          <div className='flex space-x-2'>
            <img src="/images/Pentria.svg" alt="" /> 
            <small className='beta'>Beta</small>
          </div>
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

        {
          user.accountType === "GUEST" ? <Link href={"/guest/history"}>
            <div className='flex w-24 justify-between'>
              <div className='relative'>
                <Link href={"/cart"}>
                  <img src="/images/shopping-cart.png" className='w-8 h-8 my-auto' alt="" />
                </Link>
                <div className='absolute -top-1 -right-1 bg-red-500 rounded-full px-1 text-xs text-white h-4 w-4 text-center'>{cart.length}</div>
              </div>
              <Link href={"/guest/history"}>
                <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" className='w-8 h-8' alt="" />
              </Link>
            </div>          </Link>
            : user.accountType === "VENDOR" ?
              <Link href={"/vendor/listing"}>
                <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" className='w-8 h-8' alt="" />
              </Link>
              : <div className='flex justify-between w-52'>
                <button onClick={() => setModal(true)} className='bg-white border text-sm border-primaryColor p-3 px-4 text-primaryColor rounded-md'>
                  Sign Up
                </button>
                <Link href={"/auth/login"}>
                  <button className='bg-primaryColor text-white text-sm p-3 rounded-md px-6'>
                    Login
                  </button>
                </Link>
              </div>
        }
      </div>
      <div className='sm:flex justify-between lg:hidden p-3'>
        <Link href={"/"}>
          <img src="/images/Pentria.svg" alt="" />
          <small className='beta'>Beta</small>
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
          {!user.firstName ? <div>
            <button onClick={() => setModal(true)} className='bg-white border text-sm my-3 border-primaryColor p-3 w-full px-4 text-primaryColor rounded-md'>
              Sign Up
            </button>
            <br />
            <Link href={"/auth/login"}>
              <button className='bg-primaryColor w-full my-3 text-white text-sm p-3 rounded-md px-6'>
                Login
              </button>
            </Link>
          </div> : user.accountType === "GUEST" ?
            <div className='flex w-32 justify-between'>
              <div className='relative'>
                <Link href={"/cart"}>
                  <img src="/images/shopping-cart.png" className='w-8 h-8 my-auto' alt="" />
                </Link>
                <div className='absolute -top-1 -right-1 bg-red-500 rounded-full px-1 text-xs text-white h-4 w-4 text-center'>{cart.length}</div>
              </div>
              <Link href={"/guest/history"}>
                <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" className='w-8 h-8' alt="" />
              </Link>
            </div> : user.accountType === "VENDOR" ? <Link href={"/vendor/listing"}>
              <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" className='w-8 h-8' alt="" />
            </Link> : null}
        </div>
      }
      <SignupModal modal={modal} setModal={() => setModal(!modal)} />
    </div>
  );
};

export default HeaderNav;