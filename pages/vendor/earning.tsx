import { EARNINGS } from '@/apollo/vendor';
import VendorLayout from '@/layout/VendorLayout';
import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from "@/store/slices/userSlice.js"

const Earning = () => {
  const [earnings, setEarnings] = useState<any>([]);
  const user = useSelector(selectUser)

  // useEffect(() => {
  //   console.log(user);
  // }, [user])

  useQuery(EARNINGS, {
    variables: {
      vendorId: user._id
    },
    onCompleted: (data) => {
      console.log(data);
      setEarnings(data.bookingSold);
    }
  });
  return (
    <VendorLayout>
      <main className='mt-16 lg:w-[80%]'>
        <div className='bg-[#D8D1E9] w-full p-8 flex justify-between'>
          <div>
            <p>Total Income</p>
            <h4 className='text-2xl font-bol'>NGN 3,000,000 </h4>
          </div>
          <button className='p-4 bg-primaryColor text-white rounded-md'>Withdraw</button>
        </div>
        <div className=' p-6'>
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
                <td>Total</td>
                <td>Status</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {earnings.map((earning: {
                customer: string; author: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; amount: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; status: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined;
              }, index: number) => (
                <tr key={index}>
                  <td className='p-2'>{index + 1}</td>
                  <td>{earning.customer}</td>
                  <td>{earning.amount}</td>
                  <td>{earning.status}</td>
                  <td>
                    <img src="/images/trash.png" alt="" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </VendorLayout>
  );
};

export default Earning;