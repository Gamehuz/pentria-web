import FrontLayout from '@/layout/FrontLayout';
import React, { ReactNode, useState } from 'react';
import router, { useRouter } from "next/router"
import { useMutation, useQuery } from '@apollo/client';
import { GET_SPACES, SINGLE_SPACE } from '@/apollo/spaces';
import { Spin } from 'antd';
import Card from '@/components/Card';
import Link from 'next/link';
import { ADD_FAVOURITE } from '@/apollo/guest';
import { message } from 'antd';

const Space = () => {
  const { query } = useRouter();
  const [space, setSpace] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [exploreList, setExploreList] = useState<any>([])
  const [messageApi, contextHolder] = message.useMessage();

  useQuery(SINGLE_SPACE, {
    variables: {
      spaceId: query.page
    },
    onCompleted: data => {
      console.log(data)
      setLoading(false)
      setSpace(data.space)
    }
  })

  const [favourite] = useMutation(ADD_FAVOURITE, {
    variables: {
      spaceId: query.page
    },
    onCompleted: data => {
      console.log(data)
      messageApi.open({
        type: 'success',
        content: data.addToFavourite,
      });
    }
  })

  useQuery(GET_SPACES, {
    onCompleted: (data) => {
      console.log(data);
      data.map((item: any) => {
        if (item.category === space.category) {
          setExploreList([...exploreList, item])
        }
      })
    },
  })

  function replaceWhitespaceWithPercent(str: string) {
    // Use a regular expression to match whitespace
    var regex = /\s/g;

    // Replace the whitespace with "%20"
    var replacedStr = str.replace(regex, "%20");

    return replacedStr;
  }

  return (
    <FrontLayout>
      {contextHolder}
      {
        loading ? (
          <div className='text-center p-32'>
            <Spin size="large" />
          </div>
        ) : <main className='lg:px-20 px-4 py-10'>
          <div onClick={() => router.back()} className='font-bold flex cursor-pointer'> <img src="/images/back.svg" className='mr-4' alt="" /> Back to results</div>
          <h3 className='font-bold text-2xl my-4'>{space.name}</h3>
          <div className='flex justify-between'>
            <div className='flex w-full'> <img src="/images/map-pin.png" className='mr-4 w-8 h-8 my-auto' alt="" /> <p className='my-auto text-lg'>{space.location}</p></div>
            <div className='flex cursor-pointer' onClick={() => favourite()}> <img src="/images/favourite.png" className='mr-4' alt="" /> <p className='my-auto text-[#D78D06] text-base'>Favourite</p></div>
          </div>
          <div className='flex my-3'>
            <div className='w-full'>
              <img src={space.image[0]} className='rounded-md h-[95%] w-full' alt="" />
            </div>
            {
              space.image.length > 1 && <div className='w-[30%]'>
                <img src={space.image[1]} className='rounded-md lg:ml-4 mb-4' alt="" />
                <img src={space.image[2]} className='rounded-md lg:ml-4' alt="" />
              </div>
            }
          </div>
          <div></div>
          <div className='flex justify-between text-[#150831]'>
            <div className='w-[68%]'>
              <div className='my-4'>
                <h3 className='font-bold text-2xl'>Description</h3>
                <p>{space.description}</p>
              </div>
              <div className='my-4'>
                <h3 className='font-bold text-2xl'>Guidelines/Policy</h3>
                <p>{space.policies}</p>
              </div>
            </div>
            <div className='w-[30%]'>
              <h3 className='font-bold mb-4 text-2xl'>Menu</h3>
              {
                space.activities.map((activity: {
                  duration: ReactNode;
                  name: ReactNode;
                  currency: ReactNode;
                  price: ReactNode; image: string | undefined;
                }, index: React.Key | null | undefined,) => (
                  <div key={index} className='flex justify-between'>
                    <img className='w-[40%] h-32' src={activity.image} alt="" />
                    <div className='w-1/2 my-auto'>
                      <p className='text-[#D78D06] font-bold'>{activity.currency} {activity.price} / <span className='text-xs'>{activity.duration}</span></p>
                      <h4 className='font-bold my-2'>{activity.name}</h4>
                      <button className='p-3 bg-primaryColor text-white rounded-md'>Add to cart</button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          {/* <div>
            <div><iframe width="100%" height="600" src={`https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${replaceWhitespaceWithPercent(space.location)}+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`}><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe></div>
          </div> */}
          <div>
            {exploreList.length > 0 && <div>
              <div className='flex'>
                <div className='w-8 border-t border-white h-1 my-auto'></div>
                <p className='text-primaryColor text-sm'>Similar Spaces</p>
              </div>
              <div className='flex justify-between'>
                <h4 className='text-xl my-1 font-bold text-white'>Spaces to Go</h4>
                <Link href={"/explore"}>
                  <div className='flex'>
                    <p className='text-white text-sm my-auto'>Explore All</p>
                    <img src="/images/Arrow.png" className='w-4 h-2 ml-3 my-auto' alt="" />
                  </div>
                </Link>
              </div>
              <div className='flex justify-between flex-wrap'>
                {
                  exploreList.slice(0, 3).map((item: any, idx: React.Key | null | undefined) => (
                    <Card space={item} key={idx} />
                  ))
                }
              </div>
            </div>}
          </div>
        </main >
      }

    </FrontLayout >
  );
};

export default Space;