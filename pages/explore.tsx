import { GET_SPACES } from '@/apollo/spaces';
import Card from '@/components/Card';
import FrontLayout from '@/layout/FrontLayout';
import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { useRouter } from 'next/router';

const Explore = () => {
  const [data, setData] = useState<any>([])
  const [list, setList] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const { query } = useRouter()
  const [location, setLocation] = useState<any>("")
  const [type, setType] = useState<any>("")

  useQuery(GET_SPACES, {
    onCompleted: (data) => {
      console.log(data);
      setData(data.spaces)
      setList(data.spaces)
      setLoading(false)
    },
  })

  const locationFilter = () => {
    if (location === "") {
      return list;
    }

    const matchLocationFilters = list.filter((space: { location: string; }) => {
      space.location.toLowerCase().includes(location?.toLowerCase())
    });

    return matchLocationFilters;
  };

  useEffect(() => {
    setType(query[0])
    setLocation(query[1])
    setData(locationFilter())
  }, [location, type])

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
            <div className={'lg:flex mx-auto lg:mt-32 bg-white px-5 py-6 justify-between lg:w-full rounded-md relative lg:bottom-10 shadow-lg'}>
              <div className="flex items-center lg:w-1/2">
                <img src="/images/map-pin.png" alt="" />
                <select
                  name="location"
                  className="bg-transparent pl-4 border-none"
                  value={location}
                  onChange={(e) => { }}
                >
                  <option hidden>Location</option>
                  <option>Port Harcourt</option>
                </select>
              </div>
              <div className="flex items-center lg:w-1/2">
                <img src="/images/price.png" alt="" />
                <select
                  name="location"
                  className="bg-transparent pl-4 border-none"
                  value={location}
                  onChange={(e) => { }}
                >
                  <option hidden>Price Range</option>
                  <option>10</option>
                  <option>20</option>
                </select>
              </div>
              <div className="flex items-center lg:w-1/2">
                <img src="/images/type.png" alt="" />
                <select
                  name="location"
                  className="bg-transparent pl-4 border-none"
                  value={location}
                  onChange={(e) => { }}
                >
                  <option hidden>Facility Type</option>
                  <option value="Indoor">Arcade/Video Games</option>
                  <option value="Outdoor">Park/Playground</option>
                  <option value="Mixed">Gym/Spa</option>
                  <option value="Mixed">Bar/Restaurant</option>
                  <option value="Mixed">Sports Field</option>
                  <option value="Mixed">Lodging</option>
                  <option value="Mixed">Arts/Music  </option>                </select>
              </div>
              <div className="flex items-center lg:w-1/2">
                <img src="/images/star2.png" alt="" />
                <select
                  name="location"
                  className="bg-transparent pl-4 border-none"
                  value={location}
                  onChange={(e) => { }}
                >
                  <option hidden>Rating</option>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className='flex flex-wrap mt-6 justify-between'>
              {
                data.map((space: any, index: React.Key | null | undefined) => (
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

export default Explore;