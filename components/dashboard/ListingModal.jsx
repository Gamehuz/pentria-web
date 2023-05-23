import React, { useState, useRef } from 'react';
import { message } from 'antd';
import { useMutation } from '@apollo/client';
import { CREATING_LISTING } from '@/apollo/vendor';

const ListingModal = ({ modal, setModal }) => {
  const selectFile = useRef();
  const [previewImages, setPreviewImages] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  const [pool, setPool] = useState(false)
  const [ac, setAc] = useState(false)
  const [beds, setBeds] = useState(false)
  const [outdoor, setOutdoor] = useState(false)
  const [kitchen, setKitchen] = useState(false)
  const [kidFriendly, setKidFriendly] = useState(false)
  const [restroom, setRestroom] = useState(false)
  const [games, setGames] = useState(false)
  const [petFriendly, setPetFriendly] = useState(false)
  const [parking, setParking] = useState(false)
  const [wifi, setWifi] = useState(false)
  const [cleaning, setCleaningSupplies] = useState(false)
  const [workspace, setWorkspace] = useState(false)

  const [name, setName] = useState("")
  const [location, setLoaction] = useState("")
  const [description, setDescription] = useState("")
  const [policy, setPolicy] = useState("")
  const [category, setCategory] = useState("")
  const [type, setType] = useState("")
  const [price, setPrice] = useState(0)
  const [currency, setCurrency] = useState("")

  const handleSelectFile = (e) => {
    const files = e.target?.files;
    if (files && files.length <= 6) {
      const fileArray = Array.from(files);

      fileArray.forEach((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setPreviewImages((prev) => [...prev, reader.result]);
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

  const [creatListing, { loading }] = useMutation(CREATING_LISTING, {
    variables: {
      name: name,
      location: location,
      description: description,
      policies: policy,
      category: category,
      facilityType: type,
      price: parseFloat(price),
      currency: currency,
      image: previewImages,
      pool: pool,
      beds: 0,
      ac: ac,
      outdoorSpace: outdoor,
      kitchen: kitchen,
      kidFriendly: kidFriendly,
      restRoome: restroom,
      videoGames: games,
      petFriendly: petFriendly,
      parking: parking,
      wifi,
      cleaningSupplies: cleaning,
      workspace: workspace
    },
    onCompleted: (data) => {
      console.log(data)
      setModal()
      messageApi.open({
        type: 'success',
        content: 'Listing created successfully!',
      });
    },
    onError: (error) => {
      messageApi.open({
        type: 'error',
        content: error.message,
      });
    }
  })

  return (
    <div>
      {contextHolder}
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
                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Name' className='p-3 rounded-lg border w-[48%]' />
                    <input type="text" onChange={(e) => setLoaction(e.target.value)} placeholder='Location' className='p-3 rounded-lg border w-[48%]' />
                  </div>
                  <div className='my-4'>
                    <select onChange={(e) => setCategory(e.target.value)} className='p-4 rounded-lg border w-full'>
                      <option value="">Category</option>
                      <option value="Indoor">Indoor</option>
                      <option value="Outdoor">Outdoor</option>
                      <option value="Mixed">Mixed</option>
                    </select>
                  </div>
                  <div className='my-4'>
                    <select onChange={(e) => setType(e.target.value)} className='p-4 rounded-lg border w-full'>
                      <option value="">Facility Type</option>
                      <option value="Indoor">Arcade/Video Games</option>
                      <option value="Outdoor">Park/Playground</option>
                      <option value="Mixed">Gym/Spa</option>
                      <option value="Mixed">Bar/Restaurant</option>
                      <option value="Mixed">Sports Field</option>
                      <option value="Mixed">Lodging</option>
                      <option value="Mixed">Arts/Music  </option>
                    </select>
                  </div>
                  <div className='flex justify-between my-4'>
                    <textarea onChange={(e) => setDescription(e.target.value)} className='p-3 h-32 rounded-lg border w-[48%]' placeholder='Description'></textarea>
                    <textarea onChange={(e) => setPolicy(e.target.value)} className='p-3 h-32 rounded-lg border w-[48%]' placeholder='Policy'></textarea>
                  </div>
                  <div>
                    <p>Featured</p>
                    <div className='flex flex-wrap justify-between'>
                      <div className='flex'>
                        <input type="checkbox" onChange={(e) => setPool(e.target.checked)} className='my-auto border-2 border-primaryColor checked:bg-primaryColor p-3' />
                        <p className='p-3 my-auto'>Pool</p>
                      </div>
                      <div className='flex'>
                        <input type="checkbox" onChange={(e) => setBeds(e.target.checked)} className='my-auto border-2 border-primaryColor checked:bg-primaryColor p-3' />
                        <p className='p-3 my-auto'>Beds</p>
                      </div>
                      <div className='flex'>
                        <input type="checkbox" onChange={(e) => setRestroom(e.target.checked)} className='my-auto border-2 border-primaryColor checked:bg-primaryColor p-3' />
                        <p className='p-3 my-auto'>Restroom</p>
                      </div>
                      <div className='flex'>
                        <input type="checkbox" onChange={(e) => setOutdoor(e.target.checked)} className='my-auto border-2 border-primaryColor checked:bg-primaryColor p-3' />
                        <p className='p-3 my-auto'>Outdoor Space</p>
                      </div>
                      <div className='flex'>
                        <input type="checkbox" onChange={(e) => setKitchen(e.target.checked)} className='my-auto border-2 border-primaryColor checked:bg-primaryColor p-3' />
                        <p className='p-3 my-auto'>Kitchen</p>
                      </div>
                      <div className='flex'>
                        <input type="checkbox" onChange={(e) => setAc(e.target.checked)} className='my-auto border-2 border-primaryColor checked:bg-primaryColor p-3' />
                        <p className='p-3 my-auto'>AC</p>
                      </div>
                      <div className='flex'>
                        <input type="checkbox" onChange={(e) => setGames(e.target.checked)} className='my-auto border-2 border-primaryColor checked:bg-primaryColor p-3' />
                        <p className='p-3 my-auto'>Video Games</p>
                      </div>
                      <div className='flex'>
                        <input type="checkbox" onChange={(e) => setPetFriendly(e.target.checked)} className='my-auto border-2 border-primaryColor checked:bg-primaryColor p-3' />
                        <p className='p-3 my-auto'>Pet Friendly</p>
                      </div>
                      <div className='flex'>
                        <input type="checkbox" onChange={(e) => setCleaningSupplies(e.target.checked)} className='my-auto border-2 border-primaryColor checked:bg-primaryColor p-3' />
                        <p className='p-3 my-auto'>Cleaning Supplies</p>
                      </div>
                      <div className='flex'>
                        <input type="checkbox" onChange={(e) => setKidFriendly(e.target.checked)} className='my-auto border-2 border-primaryColor checked:bg-primaryColor p-3' />
                        <p className='p-3 my-auto'>Kid Friendly</p>
                      </div>
                      <div className='flex'>
                        <input type="checkbox" onChange={(e) => setWorkspace(e.target.checked)} className='my-auto border-2 border-primaryColor checked:bg-primaryColor p-3' />
                        <p className='p-3 my-auto'>Workspace</p>
                      </div>
                      <div className='flex'>
                        <input type="checkbox" onChange={(e) => setWifi(e.target.checked)} className='my-auto border-2 border-primaryColor checked:bg-primaryColor p-3' />
                        <p className='p-3 my-auto'>WIFI</p>
                      </div>
                      <div className='flex'>
                        <input type="checkbox" onChange={(e) => setParking(e.target.checked)} className='my-auto border-2 border-primaryColor checked:bg-primaryColor p-3' />
                        <p className='p-3 my-auto'>Parking</p>
                      </div>
                    </div>
                  </div>
                  <div className='lg:flex justify-between my-4'>
                    <select onChange={(e) => setCurrency(e.target.value)} className='p-4 rounded-lg border lg:w-[48%] w-full sm:mb-4'>
                      <option value="NGN">NGN</option>
                      <option value="USD">USD</option>
                    </select>
                    <div className='flex justify-between lg:w-[48%]'>
                      <input onChange={(e) => setPrice(e.target.value)} className='p-3 rounded-lg border w-full' type="number" placeholder='Price' />
                      {/* <button className='p-3 bg-[#D8D1E9] rounded-md'>hrs</button>
                      <button className='p-3 bg-[#D8D1E9] rounded-md'>min</button> */}
                    </div>
                  </div>
                  <div className='my-4'>
                    <input
                      onChange={handleSelectFile}
                      type="file"
                      name="identification"
                      accept="image/*"
                      ref={selectFile}
                      hidden
                      multiple={true}
                    />
                    {previewImages?.length <= 3 && (
                      <div
                        className="w-full border border-primaryColor p-6 rounded-md flex justify-center items-center cursor-pointer"
                        onClick={() => selectFile.current.click()}
                      >
                        <img src="/images/gallery.png" className='mx-2' alt="upload" />
                        Click to choose
                      </div>
                    )}

                    {previewImages.length > 0 && (
                      <div className="flex flex-wrap mt-2 w-full">
                        {previewImages.map((url, index) => (
                          <div className="w-[100px] h-[100px] m-[3px]" key={index}>
                            <img
                              src={url}
                              alt={`Preview ${index}`}
                              className=" object-cover w-full h-full"
                            />
                            <div
                              className="flex  cursor-pointer text-[red] justify-center items-center"
                              onClick={() => handleDelSelected(index)}
                            >
                              Delete
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <button onClick={() => creatListing()} className="border border-primaryColor text-primaryColor p-3 rounded-md w-44 float-right">
                    {loading ? "Loading..." : "Upload List"}
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