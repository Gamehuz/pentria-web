import React, { useEffect, useState } from 'react';
import FrontLayout from '@/layout/FrontLayout'
import router, { useRouter } from "next/router"
import { message } from 'antd';
import { useMutation, useQuery } from '@apollo/client';
import { SIGNUP_USER } from '@/apollo/auth';
import { GET_BANKS, VERIFY_BANK } from '@/apollo/banks';
import { deleteCookie } from 'cookies-next';
import Link from 'next/link';

const Signup = () => {
  const { query } = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [bName, setBusinessName] = useState("")
  const [bank, setBank] = useState<string>("")

  const [bankName, setBankName] = useState("")
  const [occupation, setOccupation] = useState("")
  const [acctNumber, setAcctNumber] = useState("")
  const [bankCode, setBankCode] = useState("")

  useEffect(() => {
    deleteCookie("token")
  }, [])

  const [banks, setBanks] = useState<any>([])

  useQuery(GET_BANKS, {
    onCompleted: (data) => {
      setBanks(data.getBanks)
    }
  })

  const [signup, { loading }] = useMutation(SIGNUP_USER, {
    variables: {
      input: {
        accountType: query.page === "vendor" ? "VENDOR" : query.page === "guest" ? "GUEST" : "",
        firstName,
        lastName,
        email,
        phone,
        address,
        city,
        state,
        password,
        ...(query.page === "vendor" && {
          bName,
          bank,
          bankName,
          occupation,
          acctNumber,
          bankCode
        })
      }
    },
    onCompleted: (data) => {
      console.log(data)
      router.push("/auth/login")
      messageApi.open({
        type: 'success',
        content: 'Signed up successfully!',
      });
    },
    onError: (error) => {
      messageApi.open({
        type: 'error',
        content: error.message,
      });
    }
  })
  const passwordChecker = () => {
    if (password === confirmPassword) {
      signup()
    } else {
      messageApi.open({
        type: 'error',
        content: "Passwords must match!",
      });
    }
  }

  const [verify] = useMutation(VERIFY_BANK, {
    variables: {
      accountNumber: acctNumber,
      code: bankCode
    },
    onCompleted: (data) => {
      console.log(data)
      setBankName(data.verifyBankAccount.account_name)
    },
    onError: (error) => {
      console.log(error)
    }
  })

  function checkAccount() {
    if (acctNumber.length >= 9) {
      banks.map((item: { name: any; code: React.SetStateAction<string>; }) => {
        if (item.name === bank) {
          setBankCode(item.code)
          verify()
        } else {
          return
        }
      })
      verify()
    }
  }

  return (
    <>
      {contextHolder}
      <main>
        <div className='lg:flex'>
          <div className='sm:hidden  w-1/2 p-10 bg-primaryColor text-white'>
            <div className='fixed'>
              <h1 className=' text-4xl my-4'>Welcome to Pentria</h1>
              <p>Register with your correct details to enjoy
                our premium services</p>
              <img src="/images/auth.png" className='my-10' alt="" />
            </div>
          </div>

          <div className='lg:mx-20 lg:w-1/2 my-auto'>
            <div className='text-center my-4'>
              <h5 className='font-bold text-xl'>Sign Up</h5>
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
                <div className='lg:flex justify-between'>
                  <div className='lg:w-[45%]'>
                    <label className="font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className='lg:w-[45%]'>
                    <label className="font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className='lg:flex justify-between'>
                  <div className='lg:w-[45%]'>
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
                  <div className='lg:w-[45%]'>
                    <label className="font-medium">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="font-medium">
                    Address
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className='lg:flex justify-between'>
                  <div className='lg:w-[45%]'>
                    <label className="font-medium">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className='lg:w-[45%]'>
                    <label className="font-medium">
                      State
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                </div>
                <div className='lg:flex justify-between'>
                  <div className='lg:w-[45%]'>
                    <label className="font-medium">
                      Password
                    </label>
                    <input
                      type="password"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className='lg:w-[45%]'>
                    <label className="font-medium">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
                {
                  query.page === "vendor" && (
                    <div>
                      <div className='my-1'>
                        <label className="font-medium">
                          Business Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                          onChange={(e) => setBusinessName(e.target.value)}
                        />
                      </div>
                      <div className='my-4'>
                        <label className="font-medium">
                          Select Bank
                        </label>
                        <select onChange={(e) => { setBank(e.target.value) }} className="w-full mt-2 px-3 py-3 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg">
                          {
                            banks.map((bank: any, index: React.Key | null | undefined) => (
                              <option key={index} value={bank.name}>{bank.name}</option>
                            ))
                          }
                        </select>
                      </div>
                      <div className='my-4'>
                        <label className="font-medium">
                          Account Number
                        </label>
                        <input
                          type="number"
                          required
                          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                          onChange={(e) => {
                            setAcctNumber(e.target.value);
                            checkAccount()
                          }}
                        />
                      </div>
                      <div className='my-4'>
                        <label className="font-medium">
                          Account Name
                        </label>
                        <input
                          type="text"
                          required
                          value={bankName}
                          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                          onChange={() => { }}
                          onFocus={() => checkAccount()}
                        />
                      </div>
                      <div className='my-4'>
                        <label className="font-medium">
                          Occupation
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                          onChange={(e) => setOccupation(e.target.value)}
                        />
                      </div>
                    </div>
                  )
                }
                <button
                  className="w-full px-4 py-2 text-white font-medium bg-primaryColor rounded-lg"
                  onClick={() => passwordChecker()}
                >
                  {loading ? "Loading..." : "Sign Up"}
                </button>
                <div className='flex justify-between text-sm'>
                  <p>Already have an account? <Link className='text-primaryColor' href={"/auth/login"}>Login</Link> </p>
                  {
                    query.page === "vendor" ? (
                    <>
                      <Link className='text-primaryColor' href={"/auth/signup?page=guest"}>Signup as Guest</Link>
                    </>
                    ) : (
                      <>
                        <Link className='text-primaryColor' href={"/auth/signup?page=vendor"}>Signup as Vendor</Link>
                      </>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;