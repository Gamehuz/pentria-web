import { useState } from "react"

const Hero = () => {
  const [filter, setFilter] = useState({
    recreationName: "",
    location: ""
  });
  // const navigate = useNavigate();

  const handleFilter = (e) => {
    const { name, value } = e.target;

    setFilter({
      ...filter,
      [name]: value
    })
  };

  const explore = () => {
    navigate(`/explore?${filter.recreationName}=${filter.location}`);
  }
  return (
    <div className="m-auto px-16 pt-32 bg-[#FAFAFA] lg:h-[120vh]">
      <div className='lg:flex justify-between'>
        <div>
          <div className='text-primaryColor text-[48px] font-extrabold ml-10'>
            <h1 >Enter the </h1>
            <div className="md:flex">
              <span className="circle-play h-[115px] w-[300px]  text-center"> {'PLAY >>'} </span>
              <img className="hidden lg:block lg:relative top-[190px] lg:-top-5 left-[30px] lg:left-[-340px] w-[300px]" src="/images/play.png" alt="" />
            </div>
          </div>
          <p className={`font-semibold text-[18px] pt-8`}>
            Beat the queue with one-click playtime reservation.
          </p>
          <div className={`md:flex text-center lg:space-x-6 py-8`}>
            <button className="bg-primaryColor text-white rounded-md w-48 ">Explore</button>
            <button className="border border-primaryColor p-3 rounded-md text-primaryColor w-48 ">Become a Vendor</button>
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
        <div className="flex items-center w-1/2">
          <img src="/images/map-pin.png" alt="" />
          <select
            name="location"
            className="bg-transparent pl-4"
            value={filter.location}
            onChange={(e) => handleFilter(e)}
          >
            <option hidden>Location</option>
            <option>Port Harcourt</option>
          </select>
        </div>
        <div className="flex items-center lg:border-l border-gray lg:pl-8 w-1/2">
          <img src="/images/search.png" alt="" />
          <input
            className=" bg-transparent focus-within:outline-none p-5 lg:w-[500px]"
            placeholder={"Enter facility type or recreation space"}
            type={"text"}
            value={filter.recreationName}
            name={"recreationName"}
            onChange={(e) => handleFilter(e)}
          />
        </div>
        <div className="w-44 my-auto">
          <button className="bg-primaryColor px-6 py-3 rounded-md text-sm text-white" onClick={() => explore()}>Get Tickets</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;