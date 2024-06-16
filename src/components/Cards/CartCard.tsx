import React from 'react'
import { FaTrash } from 'react-icons/fa6'

export default function CartCard() {
  return (
    <div className='flex gap-4 border-b py-4 '>
            <div className=' flex items-center'><img className='w-14 h-20 bg-red-600' src="" alt="" /></div>
            <div className='flex-grow flex flex-col gap-2'>
                <div>Long Sleeve Graphic T-Shirt</div>
                <div className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas quibusdam doloribus neque, quam repudiandae expedita velit blanditiis distinctio excepturi!</div>
                <div className='text-blue-400'>1 x $ 19.9 </div>
            </div>
            <div className=' flex items-center'>
                <FaTrash className='text-lg text-red-500'/>
            </div>
        </div>
  )
}
