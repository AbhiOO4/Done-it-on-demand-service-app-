import React from 'react'
import { Link } from 'react-router-dom';

function Navbar({posticon, homeicon, profileicon}) {
  return (
    <div className='bg-yellow-400 h-20 fixed bottom-0 w-full z-50'>
        <ul className='flex items-center justify-self-center'>
            <li className='px-10 '><Link to='/'><img src={homeicon} alt="home" /></Link></li>
            <li className='px-10 pb-4'><Link to='/Post'><img src={posticon} alt="post" /></Link></li>
            <li className='px-10 '><Link to='/Profile'><img src={profileicon} alt="profile" /></Link></li>
        </ul>
    </div>
  )
}

export default Navbar