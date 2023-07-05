import React, { useEffect, useState } from 'react';
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import FrontLayout from '@/layout/FrontLayout'
import router, { useRouter } from "next/router"
import { message } from 'antd';
import { useMutation, useQuery } from '@apollo/client';
import { SIGNUP_USER } from '@/apollo/auth';
import { GET_BANKS, VERIFY_BANK } from '@/apollo/banks';
import { deleteCookie } from 'cookies-next';
import Link from 'next/link';
import States from '@/components/States';
import SocialAuth from '@/components/SocialAuth';

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
  const [show, setShow] = useState(false)

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

  const getState = (e: string) => {
    setState(e)
  }
  const changeCity = (e: string) => {
    setCity(e)
  }

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
              <Link className='text-white' href={"/"}>{'<'} Return to Homepage</Link>
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
                
                <SocialAuth />

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
               <States changeState={getState}  changeCity={changeCity}/>
                <div className='lg:flex justify-between'>
                  <div className='lg:w-[45%]'>
                    <label className="font-medium">
                      Password
                    </label>
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
                  <div className='lg:w-[45%]'>
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