import { GET_SPACES } from '@/apollo/spaces';
import Card from '@/components/Card';
import FrontLayout from '@/layout/FrontLayout';
import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { useRouter } from 'next/router';
import { Space } from '@/types';
import { statesList } from "@/util/state";
import { facilityList } from "@/util/facility"; 

const Explore = () => {
  const [data, setData] = useState<any>([])
  const [listing, setListing] = useState<Space[]>([])
  const [backuplisting, setBackupListing] = useState<Space[]>([])
  const [loading, setLoading] = useState(true)
  const { query } = useRouter()
  const [location, setLocation] = useState<string>("")
  const [filterType, setFilterType] = useState<any>("")
  const [priceRange, setRange] = useState<number>(0)

  useQuery(GET_SPACES, {
    onCompleted: (data) => {
      setData(data.spaces)
      setListing(data.spaces)
      setBackupListing(data.spaces)
      setLoading(false)
    },
  })


  const filterSpaces = () => {
    const listingFiltered = listing.filter(item => item.location.includes(location) && item.facilityType === filterType && item.price >= priceRange )

    console.log(location, filterType)
    console.log(listingFiltered)

    if (!listingFiltered.length) {
      setListing(backuplisting)
    }
  }

  useEffect(() => {
    filterSpaces()
  }, [location, filterType, priceRange])

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
                  className="bg-transparent pl-4 border-none focus:shadow"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                <option hidden>Location</option>
                <option defaultValue={''}>
                  Select State
                  </option>
                  { statesList.map(state => 
                  <option key={state.code} value={state.name}>
                    {state.name}
                  </option>
                  )
                  }
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
                  name="filterType"
                  className="bg-transparent pl-4 border-none focus:shadow"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                <option hidden>Faciity</option>
                  { facilityList.map(item => 
                  <option key={item} value={item}>
                    {item}
                  </option>
                  )
                  }
          </select>
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