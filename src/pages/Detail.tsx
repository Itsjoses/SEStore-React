import React from 'react'
import DynamicLayout from '../components/Layouts/DyanmicLayout'
import Navbar from '../components/Layouts/Navbar'
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
export default function Detail() {

    const images = [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7WhARuM3CotmHg2bQyZASosQRbeSJBtNoFfkXlJ26vrWbCUQl2wPLXO432nW0kWYd54&usqp=CAU"
    ]


  return (
    <>
    <Navbar/>
    <DynamicLayout border={false}>

    <div className='flex my-4'>
      <div className='flex flex-1 gap-4'>
        <div className='flex-1 flex flex-col gap-4'>
            <img className='h-[100px] w-full object-cover cursor-pointer' src={images[0]} alt="" />
            <img className='h-[100px] w-full object-cover cursor-pointer' src={images[1]} alt="" />
        </div>
        <div className='flex-[5]'>
            <img className='w-full max-h-[800px] object-cover bg-black' src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
      </div>
      <div className='right flex-1 px-8 flex flex-col gap-6' >
        <p className='text-3xl font-bold'>Long Sleeve Graphic T-Shirt</p>
        <p className='text-blue-500 text-2xl font-semibold'>$ 19.9</p>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sequi non, ad adipisci iste delectus ratione repellat esse dolorem tempora?</p>
        <div className='flex gap-2 items-center'>
          <button className=' py-1 px-4 bg-gray-400'>-</button>
          {1}
          <button className=' py-1 px-4 bg-gray-400'>+</button>
        </div>
        <button className='text-xs bg-blue-500 px-12 py-1.5 font-semibold flex items-center gap-3 w-fit text-white'>
          <FaCartPlus className='text-lg'/> ADD TO CART
        </button>
        <div className='flex text-xs gap-6'>
        <div className='flex items-center gap-2 text-blue-500'><FaHeart className='text-lg '/>ADD TO WISH LIST</div>
        <div className='flex items-center gap-2 text-blue-500'><FaBalanceScale className='text-lg'/>ADD TO COMPARE</div>
        </div>
        <div className='text-xs flex flex-col text-gray-400 mt-4'>
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className='text-xs flex flex-col text-gray-400 gap-2 mt-4 w-fit'>
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
    </DynamicLayout>
    </>

  )
}
