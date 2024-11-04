import React from 'react'
import cleaning from '../images/cleaning-service.png'
import { Rating } from "@material-tailwind/react";
import rating from '../images/rating.png'

function Showservice({ image, title, price }) {
  return (
    <div className='m-4 border border-gray-500/30 rounded-xl shadow-sm'>
        <a href="" className='flex'>
            <img src={image} alt={title} className='w-28'/>
            <div className='m-4'>
                <h1 className='font-semibold'>{title}</h1>
                <p className='text-green-600'>{price}</p>
                <hr className='border-t border-gray-300 pt-'/>
                <img src={rating} alt="" className='pt-2'/>
                
            </div>
        </a>
    </div>
  )
}

export default Showservice