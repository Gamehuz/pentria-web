import { SOCIAL_AUTH } from '@/apollo/auth';
import { useMutation } from '@apollo/client';
import { useGoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
import { message } from 'antd';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

function SocialAuth() {

  const {query} = useRouter()
  const [messageApi, contextHolder] = message.useMessage();
  const [authData, setAuthData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    googleId: '',
    facebookId: '',
    accountType: ''
  })

  const responseFacebook = (response: any) => {
    console.log(response);
  }

  const [social_login, { loading }] = useMutation(SOCIAL_AUTH, {
    variables: {
      input: authData
    },
    onCompleted: (data) => {
      console.log(data)
      setCookie('token', data.socialAuth.token);
      messageApi.open({
        type: 'success',
        content: 'Logged in successfully!',
      });
      if (data.socialAuth.accountType === "VENDOR") {
        window.location.href = "/vendor/listing"
        // router.push("/vendor/listing")
      } else if (data.socialAuth.accountType === "GUEST") {
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

  useEffect(() => {
    if(authData.firstName) {
      social_login()
    }
  }, [authData])

  

  const getuserFromgoogle = async (access_token: string) => {
    const { data } = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        Accept: 'application/json'
      }
    })
    // const authValues = {
      //   firstName: data.given_name,
      //   lastName: data.family_name,
    //   googleId: data.id,
    //   email: data.email,
    //   facebookId: ''
    // }
    await setAuthData( {
      firstName: data.given_name,
      lastName: data.family_name,
      googleId: data.id,
      email: data.email,
      facebookId: '',
      accountType: query.page === "vendor" ? "VENDOR" : query.page === "guest" ? "GUEST" : "",
    })
  }

  const callGoogle = useGoogleLogin({
    onSuccess: codeResponse => getuserFromgoogle(codeResponse.access_token)
  })
  return (
    <div>
      {contextHolder}
      <div className="grid grid-cols-2 place-items-center w-1/2 m-auto">
                  <button onClick={() => callGoogle()} className="flex justify-center w-[120px] py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
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
                  <FacebookLogin
                    appId=" 171352182602769"
                    autoLoad={true}
                    fields="name,email,picture,first_name,last_name"
                    callback={responseFacebook}
                    textButton=''
                    cssClass="flex justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100 w-[120px]"
                    icon={
                    <>
                    <img src="/images/facebook.png" className='w-6 h-6' alt="" />
                    </>}
                  />
                  
      </div>
      <div className="relative top-5 pb-5">
        <span className="block w-full h-px bg-gray-300"></span>
        <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">Or continue with</p>
      </div>
    </div>
  )
}

export default SocialAuth