import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { CANCEL_BOOKING, CONFIRM_BOOKING, EARNINGS } from '@/apollo/vendor';
import VendorLayout from '@/layout/VendorLayout';
import { useQuery, useMutation } from '@apollo/client';
import { useSelector } from 'react-redux';
import { selectUser } from "@/store/slices/userSlice.js"
import { message } from 'antd';
import Withdraw from '@/components/dashboard/Withdraw';
import Link from 'next/link';

const Earning = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [earnings, setEarnings] = useState<any>([]);
  const user = useSelector(selectUser)
  const [bookingId, setId] = useState({
    id: '',
    option: ''
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
      confirmBookingId: bookingId.id
    },
    onCompleted: (data) => {
      messageApi.open({
        type: 'success',
        content: `Booking status updated `,
      });
      window.location.reload()
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
      cancleBookingId: bookingId.id
    },
    onCompleted: (data) => {
      messageApi.open({
        type: 'success',
        content: `Booking Cancelled`,
      });
      window.location.reload()
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
    setId({
      id,
      option: value
    })
  }

  useEffect(() =>{
    if (bookingId.id) {
      if (bookingId.option === 'Used') {
        ConfirmBooking()
        return
      }
      if (bookingId.option === 'Cancelled') {
          CancleBooking()
      }
    }
  }, [bookingId])
  return (
    <VendorLayout>
      {contextHolder}
      <main className='mt-16 lg:w-[80%]'>
      <Withdraw />
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
          <div className="sm:w-2/3 overflow-scroll lg:overflow-hidden mt-10">
            <Table striped>
              <Table.Head>
                <Table.HeadCell>
                  User
                </Table.HeadCell>
                <Table.HeadCell>
                  Total
                </Table.HeadCell>
                <Table.HeadCell>
                  Status
                </Table.HeadCell>
                <Table.HeadCell>
                  payment
                </Table.HeadCell>
                <Table.HeadCell>
                  View
                </Table.HeadCell>
                <Table.HeadCell>
                  Action
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
              { earnings.map((earning: any) => (
                <>
                  <Table.Row key={earning.bookingId}>
                    <Table.Cell>
                      {earning.customer}
                    </Table.Cell>
                    <Table.Cell>
                      {earning.currency} {earning.amount}
                    </Table.Cell>
                    <Table.Cell>
                       {earning.status}
                    </Table.Cell>
                    <Table.Cell>
                      {earning.payment}
                    </Table.Cell>
                    <Table.Cell>
                      <Link href={`/receipt?reference=${earning.tx_ref}`}>
                        View
                      </Link>
                    </Table.Cell>
                    <Table.Cell>
                    <select className='rounded-xl mt-1' name="" id={earning.bookingId} onChange={(e) => updateStatus(e.target.value, earning.bookingId)} >
                        <option value="">Selet status</option>
                        <option value="Used">Used</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </Table.Cell>
                  </Table.Row>
                </>
              ))

              } 
        
              </Table.Body>
            </Table>
          </div>
        </div>
      </main>
    </VendorLayout>
  );
};

export default Earning;