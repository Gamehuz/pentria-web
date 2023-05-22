import Link from 'next/link';
import React from 'react';

const SignupModal = ({ modal, setModal }: { modal: boolean, setModal: any }) => {
  return (
    <div>
      {
        modal && <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="fixed inset-0 w-full h-full bg-black opacity-60" onClick={() => setModal()}></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
              <div className="flex justify-end">
                <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                  onClick={() => setModal()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="max-w-sm mx-auto py-3 text-center">
                <h4 className="text-lg font-medium text-gray-800">
                  Sign up
                </h4>
                <Link href={"/auth/signup?page=vendor"}>
                  <div onClick={() => setModal()} className='flex cursor-pointer bg-primaryColor justify-between p-2 rounded-md my-6'>
                    <div className='flex'>
                      <img src="/images/user.png" className='w-5 h-5' alt="" />
                      <h3 className='text-white my-auto ml-4'>Vendor</h3>
                    </div>
                    {/* <input type="radio" /> */}
                  </div>
                </Link>
                <Link href={"/auth/signup?page=guest"}>
                  <div onClick={() => setModal()} className='flex bg-primaryColor cursor-pointer justify-between p-2 rounded-md my-6'>
                    <div className='flex'>
                      <img src="/images/profile-2user.png" className='w-5 h-5' alt="" />
                      <h3 className='text-white my-auto ml-4'>Guest</h3>
                    </div>
                    {/* <input type="radio" /> */}
                  </div>
                </Link>
                {/* <button className="border border-primaryColor text-primaryColor p-3 rounded-md w-44 float-right">
                  Proceed
                </button> */}
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default SignupModal;