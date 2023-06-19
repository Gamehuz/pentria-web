import { BALANCE, CANCEL_BOOKING, CONFIRM_BOOKING, EARNINGS } from '@/apollo/vendor';
import VendorLayout from '@/layout/VendorLayout';
import { useQuery, useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from "@/store/slices/userSlice.js"
import { message } from 'antd';

const Earning = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [earnings, setEarnings] = useState<any>([]);
  const user = useSelector(selectUser)
  const [bal, setBal] = useState(0)
  const [bookingId, setId] = useState('')

  useQuery(BALANCE, {
    onCompleted(data) {
      console.log(data);
      const balance = Math.round(data.walletBalance)
      setBal(balance)
    },
  })

  useQuery(EARNINGS, {
    variables: {
      vendorId: user._id
    },
    onCompleted: (data) => {
      console.log(data);
      setEarnings(data.bookingSold);
    }
  });

  const [ConfirmBooking, { }] = useMutation(CONFIRM_BOOKING, {
    variables: {
      confirmBookingId: bookingId
    },
    onCompleted: (data) => {
      messageApi.open({
        type: 'success',
        content: `Booking status updated `,
      });

      // const index = earnings.findIndex( (item:any) => item.bookingId === bookingId)
      // const bookings = earnings
      // const updatedEarnings = bookings[index].status = data.confirmBooking.status
      // console.log(data.confirmBooking.status, index)
      // setEarnings(updatedEarnings)
    },
    onError: (error) => {
      // console.log(error)
      messageApi.open({
        type: 'error',
        content: error.message,
      });
    }
  })

  const [CancleBooking, { }] = useMutation(CANCEL_BOOKING, {
    variables: {
      cancleBookingId: bookingId
    },
    onCompleted: (data) => {
      messageApi.open({
        type: 'success',
        content: `Booking Cancelled`,
      });
      // const index = earnings.findIndex( (item:any) => item.bookingId === bookingId)
      // const bookings = earnings
      // const updatedEarnings = bookings[index].status = data.cancleBooking.status
      // console.log(data.cancleBooking.status, index)
      // setEarnings(updatedEarnings)
    },
    onError: (error) => {
      // console.log(error)
      messageApi.open({
        type: 'error',
        content: error.message,
      });
    }
  })

  const updateStatus = (value:string, id: string) => {
    console.log(value, id)
    setId(id)
    if (value === 'Used') {
      ConfirmBooking()
      return
    }
    CancleBooking()
  }
  return (
    <VendorLayout>
      {contextHolder}
      <main className='mt-16 lg:w-[80%]'>
        <div className='bg-[#D8D1E9] w-full p-8 flex justify-between'>
          <div>
            <p>Total Earnings</p>
            <h4 className='text-2xl font-bol'>NGN {bal} </h4>
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
          <div className="overflow-scroll lg:overflow-hidden">
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
                  customer: string; bookingId: string; author: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; amount: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; status: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined;
                }, index: number) => (
                  <tr key={index}>
                    <td className='p-2'>{index + 1}</td>
                    <td>{earning.customer}</td>
                    <td>{earning.amount}</td>
                    <td>{earning.status}</td>
                    <td >
                      <select className='rounded-xl mt-1' name="" id={earning.bookingId} onChange={(e) => updateStatus(e.target.value, earning.bookingId)} >
                        <option value="">Selet status</option>
                        <option value="Used">Used</option>
                        <option value="Cancelled">Cancelled</option>
                        {/* <option value="Active">Active</option> */}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </VendorLayout>
  );
};

export default Earning;