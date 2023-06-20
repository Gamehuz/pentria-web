import { Table } from 'flowbite-react';
import { useRouter } from 'next/router'
import { GET_HISTORY } from '@/apollo/guest';
import VendorLayout from '@/layout/VendorLayout';
import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from "@/store/slices/userSlice.js"
import { Spin } from 'antd';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/slices/userSlice';
import { GET_USER } from '@/apollo/auth';

const History = () => {
  const [lists, setList] = useState([])
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  const router = useRouter()

  const { loading } = useQuery(GET_HISTORY, {
    variables: {
      customerId: user._id
    },
    onCompleted: (data) => {
      console.log(data)
      setList(data.customerBookings)
    }
  })

  useQuery(GET_USER, {
    onCompleted: (data) => {
      console.log(data)
      dispatch(setUser(data.user))
    }
  })

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
          <button onClick={() => router.push('/explore')} className='p-3 px-10 border border-primaryColor sm:w-full sm:mt-4 text-primaryColor rounded-md'>
            Explore
          </button>
        </div>
        {loading ? <div className='text-center p-32'>
          <Spin size="large" />
        </div> : <div className='mt-6'>
          {lists.length >= 1 ? <div>
            <Table striped>
              <Table.Head>
                <Table.HeadCell>
                  Space
                </Table.HeadCell>
                <Table.HeadCell>
                Ticket
                </Table.HeadCell>
                <Table.HeadCell>
                  Total
                </Table.HeadCell>
                <Table.HeadCell>
                payment
                </Table.HeadCell>
                <Table.HeadCell>
                  Status
                </Table.HeadCell>
                {/* <Table.HeadCell>
                  Date
                </Table.HeadCell> */}
              </Table.Head>
              <Table.Body className="divide-y">
              { lists.map((list: any) => (
                <>
                  <Table.Row key={list._id}>
                    <Table.Cell>
                      {list.spaceId.name}
                    </Table.Cell>
                    <Table.Cell>
                      {list.tickets.length}
                    </Table.Cell>
                    <Table.Cell>
                      {list.currency} {list.total}
                    </Table.Cell>
                    <Table.Cell>
                      {list.payment}
                    </Table.Cell>
                    <Table.Cell>
                      {list.status}
                    </Table.Cell>
                  </Table.Row>
                </>
              ))

              } 
        
              </Table.Body>
            </Table>
          </div> : <div className='text-center text-3xl mt-28'>
            There is no History</div>}
        </div>}
      </main>
    </VendorLayout>
  );
};

export default History;