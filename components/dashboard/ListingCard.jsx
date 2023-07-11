import { DELETE_SPACE } from '@/apollo/vendor';
import { useLazyQuery, useMutation } from '@apollo/client';
import React, { useState, useRef } from 'react';
import { message } from 'antd';
import { ADD_MENU } from '@/apollo/guest';
import ListingModal from './ListingModal';

const ListingCard = ({ list }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModal, setEditModal] = useState(false)
  const [price, setPrice] = useState(0)
  const [currency, setCurrency] = useState("")
  const [previewImages, setPreviewImages] = useState("");
  const selectFile = useRef();
  const [name, setName] = useState("")
  const [duration, setDuration] = useState('')
  const [time, setTime] = useState('')
  const [modal, setModal] = useState(false)

  const [deleteSpace, { loading }] = useLazyQuery(DELETE_SPACE, {
    variables: { spaceId: list._id },
    onCompleted: (data) => {
      console.log(data)
      window.location.reload();
      messageApi.open({
        type: 'success',
        content: 'Space Deleted Successfully!',
      });
    }
  })
  const handleSelectFile = (e) => {
    const files = e.target?.files;
    if (files && files.length <= 6) {
      const fileArray = Array.from(files);

      fileArray.forEach((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setPreviewImages(reader.result);
        };
      });
    } else {
    }
    selectFile.current.value = null;
  };

  const handleDelSelected = (index) => {
    setPreviewImages((prev) => {
      const newPreviewImages = [...prev];
      newPreviewImages.splice(index, 1);
      return newPreviewImages;
    });
  };

  const [addMenu, { loading: menuLoading }] = useMutation(ADD_MENU, {
    variables: {
      spaceId: list._id,
      name: name,
      duration: parseInt(duration),
      timeUnit: time,
      price: parseFloat(price),
      currency: currency,
      image: previewImages,
    },
    onCompleted: (data) => {
      console.log(data)
      messageApi.open({
        type: 'success',
        content: 'Menu Added Successfully!',
      });
      setIsModalOpen(false)
    }
  })
  return (
    <div className='lg:flex my-2'>
      {contextHolder}
      <img src={list.image[0]} className='lg:w-52 w-full h-32 rounded-xl' alt="" />
      <div className='my-auto lg:w-72 lg:ml-4 sm:my-2'>
        <p className='font-bold'>{list.name}</p>
        <p className='text-sm my-3'>{list.location}</p>
        <div className='flex my-auto'>
          <img src="/images/star.png" className='w-4 h-4' alt="" />
          <img src="/images/star.png" className='w-4 h-4' alt="" />
          <img src="/images/star.png" className='w-4 h-4' alt="" />
          <img src="/images/star.png" className='w-4 h-4' alt="" />
          <img src="/images/star1.png" className='w-4 h-4' alt="" />
          <p className='text-xs ml-1'>4.0 Ratings </p>
        </div>
      </div>
      <div className='bg-[#D8D1E9] p-3 rounded-md lg:mx-4 sm:my-3 lg:w-72'>
        <p className='my-1'>Description</p>
        <p className='text-sm'>{list.description}</p>
      </div>
      <div className='lg:w-20 flex justify-between text-sm'>
        <button onClick={() => setIsModalOpen(true)} className='border border-primaryColor lg:mx-2 text-primaryColor p-3 h-12 rounded-md my-auto px-4'>+Menu</button>
        <button onClick={() => setModal(true)} className='border border-primaryColor lg:mx-2 text-primaryColor px-4 p-3 h-12 rounded-md my-auto'>Edit</button>
        <button onClick={() => deleteSpace()} className='bg-red-500 lg:mx-2 text-white p-3 px-4 h-12 rounded-md my-auto'> {loading ? "Deleting..." : "Delete"}</button>
      </div>

      {
        isModalOpen && <div className="fixed inset-0 z-20 overflow-y-auto">
          <div className="fixed inset-0 w-full h-full bg-black opacity-60" onClick={() => setIsModalOpen(false)}></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-md shadow-lg">
              <div className="flex justify-end">
                <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                  onClick={() => setIsModalOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className=" mx-auto py-3 ">
                <h4 className="text-lg font-medium text-center text-gray-800">
                  Add Menu
                </h4>
                <div className='my-6'>
                  <input type="text" onChange={(e) => setName(e.target.value)} className='p-3 rounded-md border w-full' placeholder='Enter Menu Name' />
                  <div className='lg:flex justify-between w-full my-4 space-x-4'>
                    <select onChange={(e) => setCurrency(e.target.value)} className='p-3 rounded-lg border lg:w-[45%] w-full sm:mb-4'>
                     <option value="">Select Currency</option>
                      <option value="NGN">NGN</option>
                      <option value="USD">USD</option>
                    </select>
                      <input onChange={(e) => setPrice(e.target.value)} className='p-3 rounded-lg border w-[55%]' type="number" placeholder='Price' />
                  </div>
                  <div className='lg:flex justify-between space-x-4'>
                    <select onChange={(e) => setDuration(e.target.value)} className='p-3 rounded-lg border w-full sm:mb-4'>
                     <option value="">Select Duration</option>
                      <option value="15">15</option>
                      <option value="30">30</option>
                    </select>
                    <select onChange={(e) => setTime(e.target.value)} className='p-3 rounded-lg border w-full sm:mb-4'>
                     <option value="">Select time Unit</option>
                      <option value="Mins">Mins</option>
                    </select>
                  </div>
                  <div className='my-4'>
                    <input
                      onChange={handleSelectFile}
                      type="file"
                      name="identification"
                      accept="image/*"
                      ref={selectFile}
                      hidden
                      multiple={false}
                    />
                    <div
                      className="w-full border border-primaryColor p-6 rounded-md flex justify-center items-center cursor-pointer"
                      onClick={() => selectFile.current.click()}
                    >
                      <img src="/images/gallery.png" className='mx-2' alt="upload" />
                      Click to choose
                    </div>
                    {previewImages !== "" && (
                      <div className="flex flex-wrap mt-2 w-full">
                        <div className="w-full h-[100px] m-[3px]">
                          <img
                            src={previewImages}
                            alt={`Preview`}
                            className=" object-cover w-full h-full"
                          />
                          <div
                            className="flex  cursor-pointer text-[red] justify-center items-center"
                            onClick={() => handleDelSelected(index)}
                          >
                            Delete
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <button onClick={() => addMenu()} className="border border-primaryColor text-primaryColor p-3 rounded-md w-44 float-right">
                    {menuLoading ? "Loading..." : "Upload Menu"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      <ListingModal modal={modal} setModal={() => setModal(!modal)} space={list} />
    </div>
  );
};

export default ListingCard;