import React from 'react'
import { FaTrash } from "react-icons/fa6";
import CartCard from '../Cards/CartCard';
export default function Cart() {
  return (
    <div className='bg-white w-[30rem] absolute top-full right-0 z-50 px-4 py-2 flex flex-col gap-2'>
        <div className='text-xl font-semibold mb-2'>Product in your cart</div>
        <CartCard></CartCard>
        <CartCard></CartCard>
        <div className='flex justify-between font-semibold'>
            <p>SUBTOTAL</p>
            <p>$19.9</p>
        </div> 
        <button className='bg-blue-500 text-white text-xs px-10 py-2 w-fit'>PROCEED TO CHECKOUT</button>
        <p className='text-red-500 text-sm'>Reset Cart</p>
    </div>
  )
}
