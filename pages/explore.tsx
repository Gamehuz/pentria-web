import { GET_SPACES } from '@/apollo/spaces';
import Card from '@/components/Card';
import FrontLayout from '@/layout/FrontLayout';
import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Spin } from 'antd';


const explore = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useQuery(GET_SPACES, {
    onCompleted: (data) => {
      console.log(data);
      setData(data.spaces)
      setLoading(false)
    },
  })

  return (
    <FrontLayout>
      {
        loading ? (
          <div className='text-center p-32'>
            <Spin size="large" />
          </div>
        ) : (
          <main className='lg:px-20 p-4'>
            <input type="text" className='p-3 border rounded-full w-80 float-right' placeholder='Search' />
            <div className='flex flex-wrap mt-20 justify-between'>
              {
                data.map((space, index) => (
                  <Card space={space} key={index} />
                )
                )
              }
            </div>
          </main>
        )
      }

    </FrontLayout >
  );
};

export default explore;