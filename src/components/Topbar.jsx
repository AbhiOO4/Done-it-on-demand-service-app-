import React from 'react'

function Topbar() {
  return (
    <div className='flex justify-center items-center m-4 border border-gray-500/30 rounded-xl shadow-sm'>
        <button className='px-10 w-full py-3 bg-yellow-400 rounded-l-xl font-semibold'>Services</button>
        <button className='px-10 w-full py-3 font-semibold'>Workers</button>
    </div>
  )
}

export default Topbar