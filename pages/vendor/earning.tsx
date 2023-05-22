import VendorLayout from '@/layout/VendorLayout';
import React from 'react';

const earning = () => {
  return (
    <VendorLayout>
      <main className='mt-20 lg:w-[80%] p-6'>
        <div className='lg:flex justify-between'>
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            />
          </div>
          <button className='p-3 border border-primaryColor px-10 sm:w-full sm:mt-4 text-primaryColor rounded-md'>
            Print Statement
          </button>
        </div>
        <table className="table-auto w-full mt-6">
          <thead className='bg-gray-300'>
            <tr>
              <td className='p-2'>S/N</td>
              <td>User</td>
              <td>Hours</td>
              <td>Rate</td>
              <td>Total</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='p-2'>1</td>
              <td>John Doe</td>
              <td>2</td>
              <td>NGN 2,000</td>
              <td>NGN 6,000</td>
              <td>Confirmed</td>
              <td>
                <img src="/images/trash.png" alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </VendorLayout>
  );
};

export default earning;