import { REQUEST_REST } from '@/apollo/auth';
import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Forgotten() {

  const [email, setEmail] = useState("")
  const [messageApi, contextHolder] = message.useMessage();

  const router = useRouter()

  const [resetPasswordRequest, { loading }] = useMutation(REQUEST_REST, {
    variables: {
      email
    },
    onCompleted: (data) => {
      console.log(data)
      messageApi.open({
        type: 'success',
        content: 'OTP sent to your email!!',
      });
      router.push('/auth/reset')
    },
    onError: (error) => {
      messageApi.open({
        type: 'error',
        content: error.message,
      });
    }
  })

  return (
    <>
      {contextHolder}
      <main>
        <div className='lg:flex justify-center mt-28'>

          <div className='lg:mx-20 lg:w-1/2 my-auto'>
            <div className='text-center my-4'>
              <h5 className='font-bold text-xl'>Forgot Password</h5>
              <p>Enter your email, an OTP will be sent to you</p>
            </div>
            <div className="w-full text-gray-600 sm:max-w-md">
              <div className="p-4 space-y-8 sm:p-6 sm:rounded-lg">
                <div>
                  <label className="font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  className="w-full px-4 py-2 text-white font-medium bg-primaryColor rounded-lg"
                  onClick={() => resetPasswordRequest()}
                >
                  {loading ? "Loading.." : "Send OTP"}
                </button>
                <div className=' text-center lg:flex justify-between text-sm'>
                  <p>Don&apos;t have an account? <Link className='text-primaryColor' href={"/auth/signup?page=vendor"}>Signup as Vendor</Link></p>
                  <Link className='text-primaryColor' href={"/auth/signup?page=guest"}>Signup as Guest</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Forgotten