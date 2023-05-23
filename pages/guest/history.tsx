import VendorLayout from '@/layout/VendorLayout';
import React, { useState } from 'react';

const history = () => {
  const [lists, setList] = useState([])
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
          <button className='p-3 px-10 border border-primaryColor sm:w-full sm:mt-4 text-primaryColor rounded-md'>
            Explore
          </button>
        </div>
        <div className='mt-6'>
          {lists.length >= 1 ? <div>
            <table>
              <thead>
                <tr>
                  <td>Space</td>
                  <td>Ticket</td>
                  <td>Total</td>
                  <td>Ticket Code</td>
                  <td>Status</td>
                  <td></td>
                </tr>
              </thead>
            </table>
          </div> : <div className='text-center text-3xl mt-28'>
            There is no History</div>}
        </div>
      </main>
    </VendorLayout>
  );
};

export default history;