import React from 'react';
import Link from 'next/link';

const HeaderNav = ({ setToggle }: { setToggle: any }) => {
  return (
    <div className='py-5 fixed w-full z-20 bg-white flex justify-between lg:px-20 px-4 shadow'>
      <img src="/images/hamburger.png" className='w-8 h-8 cursor-pointer lg:hidden' onClick={() => setToggle()} alt="" />
      <Link href={"/"}>
        <img src="/images/Pentria.svg" alt="" />
      </Link>
      <div className='flex justify-between w-24'>
        <img src="/images/setting-2.png" className='w-8 h-8 my-auto' alt="" />
        <img src="/images/team.png" className='w-10 h-10' alt="" />
      </div>
    </div>
  );
};

export default HeaderNav;