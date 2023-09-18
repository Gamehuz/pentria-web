import { useLazyQuery, useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { Pagination, Table } from 'flowbite-react';

import VendorLayout from '@/layout/VendorLayout';
import { USER_WITHDRAWALS } from '@/apollo/vendor';
import { useSelector } from 'react-redux';
import { selectUser } from "@/store/slices/userSlice.js"
import { message } from 'antd';
import Withdraw from '@/components/dashboard/Withdraw';

export interface IWithdraw {
  _id?: any;
  amount: number;
  userId: string;
  account_bank: number;
  bank_name: string;
  status: string;
  tx_ref: string;
  account_number: string;
  account_name: string;
  deletedAt?: string;
  createdAt: string;
  updatedAt?: string;
}

const Withdrawal = () => {
  
  const user = useSelector(selectUser)
  const [messageApi, contextHolder] = message.useMessage();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setPages] = useState(0)
  const [withdrawals, setWithdrawals] = useState<IWithdraw[]>()
  const onPageChange = (page: number) => setCurrentPage(page);

  const [userWithdraws, { loading }] = useLazyQuery(USER_WITHDRAWALS, {
    variables: { userId: user._id, page: currentPage, limit: 10 },
    onCompleted: (data) => {
      setWithdrawals(data.userWithdraws.withdrawals)
      const pages = parseInt(data.userWithdraws.pages) === 0 ? 1 : parseInt(data.userWithdraws.pages)
      setPages(pages)
    }
  })

  useEffect(() => {
    if (currentPage) {
      userWithdraws()
    }
  }, [currentPage])
  

  return (
    <VendorLayout>
      {contextHolder}
      <main className='mt-16 lg:w-[80%]'>
        <Withdraw />
        <div className='lg:flex justify-between p-8'>
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
        </div>

        <div className='p-8 sm:w-2/3 overflow-scroll lg:overflow-hidden'>
        <Table striped>
        <Table.Head>
          <Table.HeadCell>
            Bank
          </Table.HeadCell>
          <Table.HeadCell>
            account name
          </Table.HeadCell>
          <Table.HeadCell>
            account number
          </Table.HeadCell>
          <Table.HeadCell>
            Amount
          </Table.HeadCell>
          <Table.HeadCell>
            payment
          </Table.HeadCell>
          <Table.HeadCell>
          tx ref
          </Table.HeadCell>
          <Table.HeadCell>
            Date
          </Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">

          {withdrawals && withdrawals.map((item: IWithdraw, i:number) => (
            <>
              <Table.Row key={i}>
                <Table.Cell>
                  {item.bank_name}
                </Table.Cell>
                <Table.Cell>
                  {item.account_name}
                </Table.Cell>
                <Table.Cell>
                  {item.account_number}
                </Table.Cell>
                <Table.Cell>
                  NGN {item.amount}
                </Table.Cell>
                <Table.Cell className={item.status === 'success' ? 'text-green-600': 'text-red-600'}>
                  {item.status}
                </Table.Cell>
                <Table.Cell>
                  {item.tx_ref}
                </Table.Cell>
                <Table.Cell>
                  {new Date(item.createdAt).toDateString()}
                </Table.Cell>
              </Table.Row>
            </>
          ))

          }

        </Table.Body>

        </Table>
        </div>


        <div className='m-auto w-52'>
          <Pagination
            
            currentPage={currentPage}
            onPageChange={page=>{setCurrentPage(page)}}
            totalPages={totalPages}
          />
        </div>

      </main>
    </VendorLayout>
  );
};

export default Withdrawal;