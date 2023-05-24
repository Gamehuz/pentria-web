import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router"
import { useSelector } from 'react-redux';
import { selectUser } from "@/store/slices/userSlice.js"

const SideNav = ({ toggle }: { toggle: boolean }) => {
  const router = useRouter()
  const user = useSelector(selectUser)

  useEffect(() => {
    console.log(user)
  }, [])

  return (
    <div className={toggle ? 'lg:w-[20%] w-[80%]' : ""}>
      {
        toggle && <div className='sm:absolute sm:z-10 h-screen bg-white shadow'>
          <div className='lg:fixed lg:w-[20%]'>
            {
              user.accountType === "GUEST" ? (
                <div>
                  <Link href={"/guest/history"}>
                    <div className={router.pathname.includes("history") ? "bg-primaryColor mt-28 flex w-full p-4 pl-10 text-white" : 'mt-28 flex w-full p-4 pl-10'}>
                      <div className={router.pathname.includes("history") ? 'w-8 h-8 bg-white p-1 rounded-full' : 'w-8 h-8 rounded-full'}>
                        <img src="/images/folder-open.png" className='w-6 h-6' alt="" />
                      </div>
                      <p className='my-auto font-bold ml-6'>History</p>
                    </div>
                  </Link>
                  <Link href={"/guest/favourite"} >
                    <div className={router.pathname.includes("favourite") ? "bg-primaryColor flex w-full p-4 pl-10 text-white" : ' flex w-full p-4 pl-10'}>
                      <div className={router.pathname.includes("favourite") ? 'w-8 h-8 bg-white p-1 rounded-full' : 'w-8 h-8 rounded-full'}>
                        <img src="/images/money-recive.png" className='w-6 h-6' alt="" />
                      </div>
                      <p className='my-auto font-bold ml-6'>Favorite</p>
                    </div>
                  </Link>
                  <Link href={"/guest/settings"}>
                    <div className={router.pathname.includes("settings") ? "bg-primaryColor flex w-full p-4 pl-10 text-white" : ' flex w-full p-4 pl-10'}>
                      <div className={router.pathname.includes("settings") ? 'w-8 h-8 bg-white p-1 rounded-full' : 'w-8 h-8 rounded-full'}>
                        <img src="/images/setting-4.png" className='w-6 h-6' alt="" />
                      </div>
                      <p className='my-auto font-bold ml-6'>Settings</p>
                    </div>
                  </Link>
                </div>
              ) : (
                <div>
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
              )
            }

            <Link href={"/auth/login"}>
              <div className="flex w-full mt-32 p-4 pl-10 ">
                <div className="text-red-500">
                  <img src="/images/logout.png" className='w-6 h-6' alt="" />
                </div>
                <p className='my-auto font-bold ml-6'>Logout</p>
              </div>
            </Link>
          </div>
        </div>
      }
    </div>
  );
};

export default SideNav;