import VendorLayout from '@/layout/VendorLayout';
import React from 'react';

const settings = () => {
  return (
    <VendorLayout>
      <main className='mt-20 lg:w-[80%] p-6'>
        <h3 className='text-4xl font-bold'>Account Settings</h3>
        <div className='flex'>
          <div className='w-full'>
            <div className='flex flex-wrap justify-between'>
              <input type="text" placeholder='First Name' className='border p-3 my-2 rounded-md w-[45%]' />
              <input type="text" placeholder='First Name' className='border p-3 my-2 rounded-md w-[45%]' />
              <input type="text" placeholder='Address' className='border p-3 my-2 rounded-md w-full' />

              <input type="text" placeholder='City' className='border p-3 my-2 rounded-md w-[45%]' />
              <input type="text" placeholder='State' className='border p-3 my-2 rounded-md w-[45%]' />

              <input type="text" placeholder='Occupation' className='border p-3 my-2 rounded-md w-[45%]' />
              <input type="text" placeholder='Email' className='border p-3 my-2 rounded-md w-[45%]' />

              <input type="number" placeholder='Phone Number' className='border p-3 my-2 rounded-md w-[45%]' />
              <input type="email" placeholder='Bank Name' className='border p-3 my-2 rounded-md w-[45%]' />

              <input type="text" placeholder='Account Name' className='border p-3 my-2 rounded-md w-[45%]' />
              <input type="number" placeholder='Account Number' className='border p-3 my-2 rounded-md w-[45%]' />

              <input type="number" placeholder='BVN' className='border p-3 my-2 rounded-md w-[45%]' />
            </div>
            <p className='text-primaryColor float-right text-sm my-6'>Change Password</p>
            <div className='flex justify-between mt-16 w-full'>
              <input type="password" placeholder='Password' className='border p-3 my-2 rounded-md w-[45%]' />
              <input type="password" placeholder='Confirm Password' className='border p-3 my-2 rounded-md w-[45%]' />
            </div>
          </div>
          <div className='w-[20%] text-center'>
            <img src="/images/team.png" className='w-32 h-32 mx-auto' alt="" />
            <button className='bg-primaryColor p-3 px-6 text-white mx-auto w-40 my-4 rounded-md'>Update</button>
            <p className='cursor-pointer text-red-500'>Delete Account</p>
          </div>
        </div>
      </main>
    </VendorLayout>
  );
};

export default settings;