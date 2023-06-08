import { GET_USER, LOGIN_USER } from '@/apollo/auth';
import FrontLayout from '@/layout/FrontLayout';
import { useLazyQuery, useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { message } from 'antd';
import router from 'next/router';
import { setCookie } from 'cookies-next';
import { deleteCookie } from 'cookies-next';
import Link from 'next/link';

const Login = () => {
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
        <div className='lg:flex'>
          <div className='sm:hidden h-screen w-1/2 p-10 bg-primaryColor text-white'>
          <Link className='text-white' href={"/"}>{'<'} Return to Homepage</Link>
            <h1 className=' text-4xl my-4'>Hello, Welcome Back </h1>
            <p>Login with your correct details to enjoy
              our premium services</p>
            <img src="/images/auth.png" className='my-10' alt="" />
          </div>

          <div className='lg:mx-20 lg:w-1/2 my-auto'>
            <div className='text-center my-4'>
              <h5 className='font-bold text-xl'>Login</h5>
              <p>Please enter your valid details below</p>
            </div>
            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
              <div className="p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
                <div className="grid grid-cols-2 gap-x-2">
                  <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                    <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_17_40)">
                        <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                        <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                        <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                        <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                      </g>
                      <defs>
                        <clipPath id="clip0_17_40">
                          <rect width="48" height="48" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                    <img src="/images/facebook.png" className='w-6 h-6' alt="" />
                  </button>
                </div>
                <div className="relative">
                  <span className="block w-full h-px bg-gray-300"></span>
                  <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">Or continue with</p>
                </div>
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
  );
};

export default Login;