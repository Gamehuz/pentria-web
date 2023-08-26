import { RESET_PASSWORD } from '@/apollo/auth';
import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Reset() {

  const [otp, setotp] = useState(0)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [messageApi, contextHolder] = message.useMessage();
  const [show, setShow] = useState(false)

  const router = useRouter()

  const [resetPassword, { loading }] = useMutation(RESET_PASSWORD, {
    variables: {
      otp,
      password
    },
    onCompleted: (data) => {
      console.log(data)
      messageApi.open({
        type: 'success',
        content: 'Password Reset successful!!!',
      });
      router.push('/auth/login')
    },
    onError: (error) => {
      messageApi.open({
        type: 'error',
        content: error.message,
      });
    }
  })

  const reset = () => {
    if (!otp) {
      messageApi.open({
        type: 'error',
        content: 'Add OTP',
      });
      return
    }

    if ( password !== confirmPassword) {
      messageApi.open({
        type: 'error',
        content: 'Passwords must match!!!',
      });
      return
    }

    resetPassword()
  }

  return (
    <>
      {contextHolder}
      <main>
        <div className='lg:flex justify-center mt-14'>

          <div className='lg:mx-20 lg:w-1/2 my-auto'>
            <div className='text-center my-4'>
              <h5 className='font-bold text-xl'>Reset Password</h5>
              <p>OTP code has been sent to your email</p>
            </div>
            <div className="w-full text-gray-600 sm:max-w-md">
              <div className="p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
                <div>
                  <label className="font-medium">
                    OTP
                  </label>
                  <input
                    type="number"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    onChange={(e) => setotp(parseInt(e.target.value))}
                  />
                </div>
                <div>
                  <label className="font-medium">
                    Password
                  </label>
                  <div className='w-full'>
                    <input
                      type={show ? "text" : "password"}
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {show ? 

                      (
                        <>
                          <EyeSlashIcon className='w-5 cursor-pointer relative right-3 top-[-30px] float-right' onClick={() => setShow(!show)} />
                        </>
                      ) :

                      (
                        <>
                          <EyeIcon className='w-5 cursor-pointer relative right-3 top-[-30px] float-right' onClick={() => setShow(!show)} />
                        </>
                      )

                    }
                  </div>
                </div>
                <div className='w-full'>
                    <label className="font-medium">
                      Confirm Password
                    </label>
                    <input
                      type={show ? "text" : "password"}
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {show ? 

                      (
                        <>
                          <EyeSlashIcon className='w-5 cursor-pointer relative right-3 top-[-30px] float-right' onClick={() => setShow(!show)} />
                        </>
                      ) :

                      (
                        <>
                          <EyeIcon className='w-5 cursor-pointer relative right-3 top-[-30px] float-right' onClick={() => setShow(!show)} />
                        </>
                      )

                    }
                  </div>
                <button
                  className="w-full px-4 py-2 text-white font-medium bg-primaryColor rounded-lg"
                  onClick={() => reset()}
                >
                  {loading ? "Loading.." : "Reset password"}
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

export default Reset