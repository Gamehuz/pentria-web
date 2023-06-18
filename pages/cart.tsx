import FrontLayout from '@/layout/FrontLayout';
import React, { ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { addTime, selectCart, setCount, selectTickets } from "@/store/slices/cartSlice.js"
import { useDispatch } from 'react-redux';
import { clearCart, removeCart, addDate, addTickets, clearTickets } from '@/store/slices/cartSlice';
import { SINGLE_SPACE, DISCOUNT, CREATE_BOOKING } from '@/apollo/spaces';
import { useQuery, useMutation } from '@apollo/client';
import { selectUser } from '@/store/slices/userSlice';
import { message } from 'antd';
import { CHECKOUT_TOTAL } from '@/types';


const Cart = () => {
  const cart = useSelector(selectCart)
  const tickets = useSelector(selectTickets)
  const user = useSelector(selectUser)

  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [space, setSpace] = useState<any>([])
  const [soecialRequest, setSpecialRequest] = useState('')
  const [checkout, setCheckout] = useState<CHECKOUT_TOTAL>({
    initalAmount: 0,
    discountPercentage: 0,
    discountAmount: 0,
    total: 0,
})
  const [messageApi, contextHolder] = message.useMessage();
  const clear = () => {
    dispatch(clearCart([]))
  }
  const remove = (num: React.Key | null | undefined) => {
    dispatch(removeCart(num))
  }

  const setDate = (date: string, index: any) => {
    dispatch(addDate({ date, index }))
  }

  const setTime = (time: string, index: any) => {
    dispatch(addTime({ time, index }))
  }

  const setCounter = (count: string, index: any) => {
    dispatch(setCount({ count, index }))
  }

  const [CalculateDiscount, { loading }] = useMutation(DISCOUNT, {
    variables: {
      tickets: tickets
    },
    onCompleted: (data) => {
      console.log(data)
      messageApi.open({
        type: 'success',
        content: `Hurray you've got a discount!!!`,
      });

      const payload:CHECKOUT_TOTAL = {
        initalAmount: data.calculateDiscount.initalAmount,
        discountPercentage: data.calculateDiscount.discountPercentage,
        discountAmount: data.calculateDiscount.discountAmount,
        total: data.calculateDiscount.total,
      }
      setCheckout(payload)
    },
    onError: (error) => {
      messageApi.open({
        type: 'error',
        content: error.message,
      });
    }
  })

  const [CreateBooking, { }] = useMutation(CREATE_BOOKING, {
    variables: {
      tickets: tickets,
      spaceId: cart[0]?.spaceId,
      specialRequest: soecialRequest,
      initalAmount: checkout.initalAmount,
      discountPercentage: checkout.discountPercentage,
      discountAmount: checkout.discountAmount,
      total: checkout.total,
    },
    onCompleted: (data) => {
      console.log(data)
      messageApi.open({
        type: 'success',
        content: `Booking successful `,
      });

      console.log(data)
      window.location.replace(data.createBooking.link)
    },
    onError: (error) => {
      messageApi.open({
        type: 'error',
        content: error.message,
      });
    }
  })

  useQuery(SINGLE_SPACE, {
    variables: {
      spaceId: cart[0]?.spaceId
    },
    onCompleted: data => {
      // console.log(data)
      setSpace(data.space)

    }
  })

  const getDiscount = async () => {
    dispatch(clearTickets([]))
    const values = cart.map(((item: any) => {
      const payload = {
        activityId: item._id,
        count: parseInt(item.count),
        date: item.date,
        duration: item.duration,
        name: item.name,
        price: item.price,
        spaceId: item.spaceId,
        time: item.time,
      }

      dispatch(addTickets(payload))

      return payload
    }))
    
    await CalculateDiscount()
    setModal(true)
  }

  return (
    <FrontLayout>
      {contextHolder}
      <main className='lg:px-20 py-10 px-6'>
        <h1 className='text-3xl text-primaryColor mt-8 font-bold'>Cart</h1>
        <p onClick={() => clear()} className='cursor-pointer float-right text-blue-500'>Clear Cart</p>

        {
          cart.map((item: {
            count: string | number | readonly string[] | undefined;
            currency: ReactNode;
            price: ReactNode;
            duration: ReactNode;
            counters: number;
            time: string;
            date: string;
            _id: string;
            name: ReactNode; image: string | undefined;
          }, index: React.Key | null | undefined) => (
            <div key={index} className=' my-6'>
              <div className='lg:flex justify-between'>
                <div className='flex'>
                  <img src={item.image} className='w-[40%] rounded-lg' alt="" />
                  <div className='my-auto ml-6'>
                    <p className='text-[#D78D06] font-bold'>{item.currency} {item.price} / <span className='text-xs'>{item.duration}</span></p>
                    <p className='font-bold text-xl'>{space.name}</p>
                    <p className='text-xs text-gray-500'>{space.location}</p>
                    <h1 className='text-lg font-bold my-3'>{item.name}</h1>
                  </div>
                </div>
                <button onClick={() => remove(index)} className='p-3 sm:my-3 border text-primaryColor px-6 my-auto rounded-md border-primaryColor flex'>
                  <img src="/images/cart.png" className='px-3' alt="" />
                  Remove
                </button>
              </div>
              <div className='flex mt-6 lg:w-[35%] justify-between'>
                <input onChange={(e) => setDate(e.target.value, index)} value={item.date} type="date" className='p-3 border rounded-md ' />
                <input type="time" onChange={(e) => setTime(e.target.value, index)} value={item.time} className='p-3 border rounded-md' />
              </div>
              <div className='mt-5'>
                <label htmlFor="">Number of tickets</label>
                <br />
                <input value={item.count} onChange={(e) => setCounter(e.target.value, index)} className='p-3 border rounded-md w-[14%]' type="number" />
              </div>
            </div>
          ))
        }
        <div>
          <h1 className='font-bold text-base'>Special Request</h1>
          <textarea className='w-full h-40 rounded-md' onChange={(e) => setSpecialRequest(e.target.value)}></textarea>
        </div>
        <div className='pb-10'>
          <button onClick={() => getDiscount()} className='float-right p-3 text-white rounded md bg-primaryColor'>Proceed to Checkout</button>
        </div>

        <div>
          {
            modal && <div className="fixed inset-0 z-20 overflow-y-auto">
              <div className="fixed inset-0 w-full h-full bg-black opacity-60" onClick={() => setModal(false)}></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-md shadow-lg">
                  <div className="flex justify-end">
                    <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                      onClick={() => setModal(false)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <div className=" mx-auto py-3 ">
                    <h4 className="text-lg font-medium text-center text-gray-800">
                      Checkout
                    </h4>
                  </div>
                  <div className='p-3'>
                    <p className='text-xl font-bold'>{space.name}</p>
                    <p>{space.location}</p>
                    <hr />
                    <p className='text-center text-sm my-2'>Details</p>
                    <div className='flex my-2 space-x-5'>
                      <p>Name: {user.firstName} {user.lastName}</p>
                      {soecialRequest !== "" && <p>Special Request: {soecialRequest}</p>}
                    </div>
                    <hr />
                    <table className='w-full my-4'>
                      <thead>
                        <tr className='font-bold'>
                          <td>S/N</td>
                          <td>Menu</td>
                          <td>Tickets</td>
                          <td>Date</td>
                          <td>Time</td>
                          <td>Duration</td>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((cartItem: any, index: number) =>
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{cartItem.name}</td>
                            <td>{cartItem.count}</td>
                            <td>{cartItem.date}</td>
                            <td>{cartItem.time}</td>
                            <td>{cartItem.duration}</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    {checkout.total && <div>
                      <div>
                        <span className='font-bold'>Sub Total: </span> <span>{ checkout.initalAmount }</span>
                      </div>
                      <div>
                        <span className='font-bold'>Discount: </span> <span>{ checkout.discountPercentage }%</span>
                      </div>
                      <div>
                        <span className='font-bold'>Total: </span> <span>{ checkout.total }</span>
                      </div>

                      <br />
                      <button onClick={() => CreateBooking()} className='p-3 border border-primaryColor text-primaryColor my-1 rounded-md ml-auto w-32'>Book Now</button>
                    </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          }
        </div >
      </main >
    </FrontLayout >
  );
};

export default Cart;