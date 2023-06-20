import { useQuery, useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { Modal, Button, TextInput } from 'flowbite-react';

import { BALANCE } from '@/apollo/vendor';
import { message } from 'antd';

function Withdraw() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [open, setModal] =useState(false)
  const props = { openModal, setOpenModal };
  const [bal, setBal] = useState(0)
  const [request, setAmount] = useState(0)
  const [messageApi, contextHolder] = message.useMessage();


  useQuery(BALANCE, {
    onCompleted(data) {
      console.log(data);
      const balance = Math.round(data.walletBalance)
      setBal(balance)
    },
  })

  const handleChange = (e: any) => {
    setAmount(e.target.value)
  }
  const sentRequest = () => {
    if (request > bal) {
      messageApi.open({
        type: 'error',
        content: `Don't have enough balance`,
      });
      return
    }

    if (request < 50) {
      messageApi.open({
        type: 'error',
        content: `Min amount is NGN 50`,
      });
      return 
    }

    console.log('request sent')
  }
  return (
    <div>
      {contextHolder}


      <div className='bg-[#D8D1E9] w-full p-8 flex justify-between'>
        <div>
          <p>Total Earnings</p>
          <h4 className='text-2xl font-bol'>NGN {bal} </h4>
        </div>
        <button onClick={() => setModal(true)} className='p-4 bg-primaryColor text-white rounded-md'>Withdraw</button>
      </div>


      {/* Withdraw request */}
          {open &&
            <div className="fixed inset-0 z-20 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-60" onClick={() => setModal(false)}></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="flex justify-end">
                  <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                    onClick={() => setModal(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="text-center">
                {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Withdrawal may take awhile ?
                </h3>
                <label id='amount' htmlFor="amount">Enter Withdraw Amount</label>
                <br />
                <form >
                  <input type="number" value={request} className='mb-5 mt-2 rounded-xl' onChange={(e) => setAmount(parseInt(e.target.value))} />
                </form>
                <div className="flex justify-center gap-4">
                  <Button color="success" onClick={() => sentRequest()}>
                    Send Withdrawal request
                  </Button>
                  <Button color="gray" onClick={() => setModal(false)}>
                    No, cancel
                  </Button>
                </div>
               </div>
              </div>
              </div>
            </div>
          

          }
    </div>
  )
}

export default Withdraw