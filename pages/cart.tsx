import FrontLayout from '@/layout/FrontLayout';
import React, { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from "@/store/slices/cartSlice.js"
import { useDispatch } from 'react-redux';
import { clearCart, removeCart } from '@/store/slices/cartSlice';


const Cart = () => {
  const cart = useSelector(selectCart)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(cart)
  }, [cart])

  const clear = () => {
    dispatch(clearCart([]))
  }
  const remove = (num: React.Key | null | undefined) => {
    dispatch(removeCart(num))
  }

  return (
    <FrontLayout>
      <main className='px-20 py-10'>
        <h1 className='text-3xl text-primaryColor mt-8 font-bold'>Cart</h1>
        <p onClick={() => clear()} className='cursor-pointer float-right text-blue-500'>Clear Cart</p>

        {
          cart.map((item: {
            count: string | number | readonly string[] | undefined;
            currency: ReactNode;
            price: ReactNode;
            duration: ReactNode;
            counters: number;
            name: ReactNode; image: string | undefined;
          }, index: React.Key | null | undefined) => (
            <div key={index} className=' my-6'>
              <div className='flex justify-between'>
                <div className='flex'>
                  <img src={item.image} className='w-[40%] rounded-lg' alt="" />
                  <div className='my-auto ml-6'>
                    <p className='text-[#D78D06] font-bold'>{item.currency} {item.price} / <span className='text-xs'>{item.duration}</span></p>
                    <h1 className='text-lg font-bold my-3'>{item.name}</h1>
                  </div>
                </div>
                <button onClick={() => remove(index)} className='p-3 border text-primaryColor px-6 my-auto rounded-md border-primaryColor flex'>
                  <img src="/images/cart.png" className='px-3' alt="" />
                  Remove
                </button>
              </div>
              <div className='flex mt-6 w-[35%] justify-between'>
                <input type="date" className='p-3 border rounded-md ' />
                <input type="time" className='p-3 border rounded-md' />
              </div>
              <div className='mt-5'>
                <label htmlFor="">Number of tickets</label>
                <br />
                <input value={item.count} className='p-3 border rounded-md w-[14%]' type="number" />
              </div>
            </div>
          ))
        }
      </main>
    </FrontLayout>
  );
};

export default Cart;