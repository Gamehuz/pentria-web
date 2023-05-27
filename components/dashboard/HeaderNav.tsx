import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectUser } from "@/store/slices/userSlice.js"

const HeaderNav = ({ setToggle }: { setToggle: any }) => {
  const user = useSelector(selectUser)

  return (
    <div className='py-5 fixed w-full z-20 bg-white flex justify-between lg:px-20 px-4 shadow'>
      <img src="/images/hamburger.png" className='w-8 h-8 cursor-pointer lg:hidden' onClick={() => setToggle()} alt="" />
      <Link href={"/"}>
        <img src="/images/Pentria.svg" alt="" />
      </Link>
      {
        user.accountType === "VENDOR" ? <div className='flex justify-between w-24'>
          <Link href={"/vendor/settings"}>
            <img src="/images/setting-2.png" className='w-8 h-8 my-auto' alt="" />
          </Link>
          <Link href={"/vendor/listing"}>
            <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" className='w-10 h-10' alt="" />
          </Link>
        </div> : <div className='flex justify-between w-32'>
          <Link href={"/cart"}>
            <img src="/images/shopping-cart.png" className='w-8 h-8 my-auto' alt="" />
          </Link>
          <Link href={"/guest/settings"}>
            <img src="/images/setting-2.png" className='w-8 h-8 my-auto' alt="" />
          </Link>
          <Link href={"/guest/history"}>
            <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" className='w-8 h-8' alt="" />
          </Link>
        </div>
      }

    </div>
  );
};

export default HeaderNav;