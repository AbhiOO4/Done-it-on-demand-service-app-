import React from 'react'
import homefull from '../images/home-full.png'
import post from '../images/post.png'
import profile from '../images/profile.png'

function Navbar() {
  return (
    <div className='bg-yellow-400 h-20 fixed bottom-0 w-full z-50'>
        <ul className='flex items-center justify-self-center'>
            <li className='px-10 '><img src={homefull} alt="home" /></li>
            <li className='px-10 pb-4'><img src={post} alt="post" /></li>
            <li className='px-10 '><img src={profile} alt="profile" /></li>
        </ul>
    </div>
  )
}

export default Navbar