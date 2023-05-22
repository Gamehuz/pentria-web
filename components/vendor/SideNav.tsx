import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router"

const SideNav = () => {
  const router = useRouter()

  return (
    <div className='w-[20%] h-screen shadow'>
      <div className='fixed w-[20%]'>
        <Link href={"/vendor/listing"}>
          <div className={router.pathname.includes("listing") ? "bg-primaryColor mt-28 flex w-full p-4 pl-10 text-white" : 'mt-28 flex w-full p-4 pl-10'}>
            <div className={router.pathname.includes("listing") ? 'w-8 h-8 bg-white p-1 rounded-full' : 'w-8 h-8 rounded-full'}>
              <img src="/images/folder-open.png" className='w-6 h-6' alt="" />
            </div>
            <p className='my-auto font-bold ml-6'>Listing</p>
          </div>
        </Link>
        <Link href={"/vendor/earning"} >
          <div className={router.pathname.includes("earning") ? "bg-primaryColor flex w-full p-4 pl-10 text-white" : ' flex w-full p-4 pl-10'}>
            <div className={router.pathname.includes("earning") ? 'w-8 h-8 bg-white p-1 rounded-full' : 'w-8 h-8 rounded-full'}>
              <img src="/images/money-recive.png" className='w-6 h-6' alt="" />
            </div>
            <p className='my-auto font-bold ml-6'>Earnings</p>
          </div>
        </Link>
        <Link href={"/vendor/withdrawal"}>
          <div className={router.pathname.includes("withdrawal") ? "bg-primaryColor flex w-full p-4 pl-10 text-white" : ' flex w-full p-4 pl-10'}>
            <div className={router.pathname.includes("withdrawal") ? 'w-8 h-8 bg-white p-1 rounded-full' : 'w-8 h-8 rounded-full'}>
              <img src="/images/moneys.png" className='w-6 h-6' alt="" />
            </div>
            <p className='my-auto font-bold ml-6'>Withdrawal</p>
          </div>
        </Link>
        <Link href={"/vendor/settings"}>
          <div className={router.pathname.includes("settings") ? "bg-primaryColor flex w-full p-4 pl-10 text-white" : ' flex w-full p-4 pl-10'}>
            <div className={router.pathname.includes("settings") ? 'w-8 h-8 bg-white p-1 rounded-full' : 'w-8 h-8 rounded-full'}>
              <img src="/images/setting-4.png" className='w-6 h-6' alt="" />
            </div>
            <p className='my-auto font-bold ml-6'>Settings</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;