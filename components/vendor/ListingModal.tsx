import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';

const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const ListingModal = ({ modal, setModal }: { modal: boolean, setModal: any }) => {
  // const [fileList, setFileList] = useState<UploadFile[]>([])

  return (
    <div>
      <div>
        {
          modal && <div className="fixed inset-0 z-20 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-60" onClick={() => setModal()}></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="flex justify-end">
                  <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                    onClick={() => setModal()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className=" mx-auto py-3 ">
                  <h4 className="text-lg font-medium text-center text-gray-800">
                    Create Listing
                  </h4>
                  <div className='flex justify-between my-4'>
                    <input type="text" placeholder='Name' className='p-3 rounded-lg border w-[48%]' />
                    <input type="text" placeholder='Location' className='p-3 rounded-lg border w-[48%]' />
                  </div>
                  <div className='my-4'>
                    <select className='p-4 rounded-lg border w-full'>
                      <option value="">Category</option>
                      <option value="exclusive">Exclusive</option>
                      <option value="non-exclusive">Non - Exclusive</option>
                    </select>
                  </div>
                  <div className='my-4'>
                    <select className='p-4 rounded-lg border w-full'>
                      <option value="">Facility Type</option>
                      <option value="exclusive">Exclusive</option>
                      <option value="non-exclusive">Non - Exclusive</option>
                    </select>
                  </div>
                  <div className='flex justify-between my-4'>
                    <textarea className='p-3 h-32 rounded-lg border w-[48%]' placeholder='Description'></textarea>
                    <textarea className='p-3 h-32 rounded-lg border w-[48%]' placeholder='Policy'></textarea>
                  </div>
                  <div>
                    <p>Featured</p>
                    <div>
                      <input type="checkbox" className='p-3' />
                    </div>
                  </div>
                  <div className='flex justify-between my-4'>
                    <select className='p-4 rounded-lg border w-[48%]'>
                      <option value="usd">NGN</option>
                      <option value="ngn">USD</option>
                    </select>
                    <div className='flex justify-between w-[48%]'>
                      <input className='p-3 rounded-lg border' type="number" placeholder='Price' />
                      <button className='p-3 bg-[#D8D1E9] rounded-md'>hrs</button>
                      <button className='p-3 bg-[#D8D1E9] rounded-md'>min</button>
                    </div>
                  </div>
                  <div className='my-4'>
                    <Dragger {...props}>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">Click to choose or Drag and Drop</p>
                    </Dragger>
                  </div>
                  <button className="border border-primaryColor text-primaryColor p-3 rounded-md w-44 float-right">
                    Upload List
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default ListingModal;