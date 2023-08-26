import { GET_USER, LOGIN_USER } from '@/apollo/auth';
import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { message } from 'antd';
import { setCookie } from 'cookies-next';
import { deleteCookie } from 'cookies-next';
import Link from 'next/link';
import SocialAuth from '@/components/SocialAuth';

function Reset() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [messageApi, contextHolder] = message.useMessage();
  const [show, setShow] = useState(false)


  useEffect(() => {
    deleteCookie("token")
    window.localStorage.clear()
  }, [])

  const [login, { loading }] = useMutation(LOGIN_USER, {
    variables: {
      email,
      password
    },
    onCompleted: (data) => {
      console.log(data)
      setCookie('token', data.login.token);
      messageApi.open({
        type: 'success',
        content: 'Logged in successfully!',
      });
      if (data.login.accountType === "VENDOR") {
        window.location.href = "/vendor/listing"
        // router.push("/vendor/listing")
      } else if (data.login.accountType === "GUEST") {
        // router.push("/guest/history")
        window.location.href = "/guest/history"

      }
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
        <div className='lg:flex justify-center'>

          <div className='lg:mx-20 lg:w-1/2 my-auto'>
            <div className='text-center my-4'>
              <h5 className='font-bold text-xl'>Login</h5>
              <p>Please enter your valid details below</p>
            </div>
            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
              <div className="p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
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
                <button
                  className="w-full px-4 py-2 text-white font-medium bg-primaryColor rounded-lg"
                  onClick={() => login()}
                >
                  {loading ? "Loading.." : "Login"}
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