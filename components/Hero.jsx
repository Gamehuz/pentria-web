import Link from "next/link";
import { useState } from "react"
import router from 'next/router'
import { message } from 'antd';
import { statesList } from "@/util/state";
import { facilityList } from "@/util/facility";

const Hero = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [filter, setFilter] = useState({
    facility: "",
    location: ""
  });

  const handleFilter = (e) => {
    const { name, value } = e.target;

    setFilter({
      ...filter,
      [name]: value
    })
  };

  const explore = () => {
    if (filter.facility === "" || filter.location === "") return messageApi.open({
      type: 'warning',
      content: "Please fill all fields",
    });

    router.push(`/explore?location=${filter.location}&facility=${filter.facility}`);
  }
  return (
    <div className="m-auto lg:px-16 p-4 sm:pt-10 lg:pt-32 bg-[#FAFAFA] lg:h-[120vh]">
      {contextHolder}
      <div className='lg:flex justify-between'>
        <div>
          <div className='text-primaryColor text-[48px] sm:text-center sm:uppercase font-extrabold ml-10'>
            <h1 >Book Your</h1>
            <div className="md:flex">
              <span className="circle-play h-[115px] w-[300px]  text-center"> {'Space >>'} </span>
              <img className="hidden lg:block lg:relative top-[190px] lg:-top-5 left-[30px] lg:left-[-340px] w-[300px]" src="/images/play.png" alt="" />
            </div>
          </div>
          <p className={`font-semibold text-[18px] pt-8`}>
            Beat the queue with one-click playtime reservation.
          </p>
          <div className={`md:flex text-center lg:space-x-6 py-8`}>
            <Link href={"/explore"}>
              <button className="bg-primaryColor text-white rounded-md lg:w-48 w-full sm:my-1 p-3">Explore</button>
            </Link>
            <Link href={"/auth/signup?page=vendor"}>
              <button className="border border-primaryColor p-3 rounded-md text-primaryColor sm:my-1 lg:w-48 w-full ">Become a Vendor</button>
            </Link>
          </div>
        </div>
        <div className={`flex`}>
          <img className="w-[140px] h-[75px] relative right-24  hidden lg:block" src="/images/Frame.png" alt="Fancy Arrow" />
          <div>
            <img className="" src="/images/hero.png" alt="A fancy city" />
            <img className="hidden lg:block absolute top-80 right-80" src="/images/hero1.png" alt="" />
          </div>
        </div>
      </div>

      <div className={'lg:flex mx-auto lg:mt-60 bg-white px-5 py-3 justify-between lg:w-[986px] rounded-md bottom-[-20px] relative lg:bottom-10 shadow-lg'}>
        <div className="flex items-center lg:w-1/2">
          <img src="/images/map-pin.png" alt="" />
          <select
            name="location"
            className="bg-transparent pl-4 border-none focus:shadow"
            value={filter.location}
            onChange={(e) => handleFilter(e)}
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
        <div className="flex items-center lg:border-l border-gray lg:pl-8 lg:w-1/2">
          <img src="/images/search.png" alt="" />
              
          <select
            name="facility"
            className="bg-transparent pl-4 border-none focus:shadow"
            value={filter.facility}
            onChange={(e) => handleFilter(e)}
          >
            <option hidden>Facility</option>
              { facilityList.map(item => 
              <option key={item} value={item}>
                {item}
              </option>
              )
              }
          </select>
        </div>
        <div className="lg:w-44 my-auto">
          <button className="bg-primaryColor px-6 py-3 rounded-md text-sm sm:w-full text-white" onClick={() => explore()}>Get Spaces</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;