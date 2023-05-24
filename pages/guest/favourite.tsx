import { ADD_FAVOURITE, GET_FAVOURITES } from '@/apollo/guest';
import VendorLayout from '@/layout/VendorLayout';
import { useMutation, useQuery } from '@apollo/client';
import { Spin } from 'antd';
import React, { ReactNode, SetStateAction, useState } from 'react';
import { message } from 'antd';

const Favourite = () => {
  const [lists, setList] = useState<any>([])
  const [messageApi, contextHolder] = message.useMessage();
  const [id, setId] = useState("")

  const { loading } = useQuery(GET_FAVOURITES, {
    onCompleted: (data) => {
      console.log(data)
      setList(data.user.favouriteSpace)
    }
  })

  const [favourite] = useMutation(ADD_FAVOURITE, {
    variables: {
      spaceId: id
    },
    onCompleted: data => {
      console.log(data)
      messageApi.open({
        type: 'success',
        content: data.addToFavourite,
      });
    }
  })

  return (
    <VendorLayout>
      {contextHolder}
      <main className='mt-20 lg:w-[80%] p-6'>
        <div className='lg:flex justify-between'>
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            />
          </div>
          <button className='p-3 px-10 border border-primaryColor sm:w-full sm:mt-4 text-primaryColor rounded-md'>
            Explore
          </button>
        </div>
        <div>
          {loading ? <div className='text-center p-32'>
            <Spin size="large" />
          </div> : <div className='mt-6'>
            {lists.length >= 1 ? <div>
              <table className='w-full'>
                <thead>
                  <tr>
                    <td className='p-2'>Space</td>
                    <td>Image</td>
                    <td>Description</td>
                    <td>Price</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {lists.map((list: {
                    _id: SetStateAction<string>;
                    description: ReactNode;
                    image: any;
                    currency: ReactNode;
                    price: ReactNode; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined;
                  }, index: React.Key | null | undefined) => <tr key={index}>
                      <td className='p-2'>{list.name}</td>
                      <td className='p-2'><img src={list.image[0]} className='w-10 h-10' alt="" /></td>
                      <td>{list.description}</td>
                      <td>{list.currency} {list.price}</td>
                      <td className='w-20'>
                        <div className='flex justify-between'>
                          <img onClick={() => { setId(list._id), favourite }} src="/images/favourite.png" className='cursor-pointer w-8 h-8 mx-2' alt="" />
                        </div>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div> : <div className='text-center text-3xl mt-28'>
              There is no Favourite</div>}
          </div>}
        </div>
      </main>
    </VendorLayout>
  );
};

export default Favourite;