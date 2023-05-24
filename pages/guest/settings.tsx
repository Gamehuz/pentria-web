import VendorLayout from '@/layout/VendorLayout';
import React, { useEffect, useState } from 'react';
import { selectUser } from "@/store/slices/userSlice.js"
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { UPDATE_PASSWORD, UPDATE_USER } from '@/apollo/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/slices/userSlice';
import { message } from 'antd';

const Settings = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const user = useSelector(selectUser)
  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)
  const [address, setAddress] = useState(user.address)
  const [city, setCity] = useState(user.city)
  const [state, setState] = useState(user.state)
  const dispatch = useDispatch();
  const [dob, setDob] = useState(user.dob)
  const [sex, setSex] = useState(user.sex)

  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const [updateUser, { loading }] = useMutation(UPDATE_USER, {
    variables: {
      firstName: firstName,
      lastName: lastName,
      // email: email,
      phone: phone,
      address: address,
      city: city,
      state: state,
      dob: dob,
      sex: sex,
    },
    onCompleted: (data) => {
      console.log(data)
      dispatch(setUser(data.editUserInfo))
      messageApi.open({
        type: 'success',
        content: 'User Info Updated Successfully!',
      });
    }
  })

  const [updatePassword, { loading: passwordLoading }] = useMutation(UPDATE_PASSWORD, {
    variables: {
      oldPassword: password,
      newPassword: newPassword
    },
    onCompleted: (data) => {
      console.log(data)
      messageApi.open({
        type: 'success',
        content: 'User Passsword Updated Successfully!',
      });
    }
  })
  return (
    <VendorLayout>
      {contextHolder}
      <main className='mt-20 lg:w-[80%] p-6'>
        <h3 className='text-4xl font-bold'>Account Settings</h3>
        <div className='flex'>
          <div className='w-full'>
            <div className='flex flex-wrap justify-between'>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' className='border p-3 my-2 rounded-md w-[45%]' />
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='First Name' className='border p-3 my-2 rounded-md w-[45%]' />
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address' className='border p-3 my-2 rounded-md w-full' />

              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='City' className='border p-3 my-2 rounded-md w-[45%]' />
              <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder='State' className='border p-3 my-2 rounded-md w-[45%]' />

              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='border p-3 my-2 rounded-md w-[45%]' />

              <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone Number' className='border p-3 my-2 rounded-md w-[45%]' />
              <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} placeholder='Dirth of Birth' className='border p-3 my-2 rounded-md w-[45%]' />
              <div className='w-[45%]'>
                <select value={sex} onChange={(e) => setSex(e.target.value)} className='border p-4 my-2 rounded-md w-[45%]'>
                  <option value="male">Male</option>
                  <option value="female">FeMale</option>
                </select>
              </div>
            </div>
            <p className='text-primaryColor float-right text-sm my-6 cursor-pointer' onClick={() => updatePassword()}> {passwordLoading ? "Loading..." : "Change Password"}</p>
            <div className='flex justify-between mt-16 w-full'>
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Old Password' className='border p-3 my-2 rounded-md w-[45%]' />
              <input type="password" onChange={(e) => setNewPassword(e.target.value)} placeholder='New Password' className='border p-3 my-2 rounded-md w-[45%]' />
            </div>
          </div>
          <div className='w-[20%] text-center'>
            <img src="/images/team.png" className='w-32 h-32 mx-auto' alt="" />
            <button onClick={() => updateUser()} className='bg-primaryColor p-3 px-6 text-white mx-auto w-40 my-4 rounded-md'>{loading ? "Loading..." : "Update"}</button>
            <p className='cursor-pointer text-red-500'>Delete Account</p>
          </div>
        </div>
      </main>
    </VendorLayout>
  );
};

export default Settings;