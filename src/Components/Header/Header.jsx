import React from 'react'
import iemLogo from '../Assets/iemLogo.png'
import { Link,NavLink } from 'react-router-dom'
function Header() {
  return (
    <>
        <nav className="top-10 sticky z-50 mx-auto w-[90%] rounded-2xl backdrop-blur-xl bg-gray-500/50 shadow-lg shadow-black text-white p-4 flex text-xl font-semibold justify-between">
          <img src={iemLogo} alt="" className='h-[50px]'/>
          <div className='flex'>
            <ul className='hidden sm:flex gap-5 m-2 text-black'>
                <li><NavLink to='' className={({isActive})=>`${isActive?"text-orange-700 ": "text-black"}`}>Home</NavLink></li>
                <li><NavLink to='/about' className={({isActive})=>`${isActive?"text-orange-700 ": "text-black"}`}>About</NavLink></li>
                <li><NavLink to='/contact' className={({isActive})=>`${isActive?"text-orange-700 ": "text-black"}`}>Contact</NavLink></li>
                <li><NavLink to='/github' className={({isActive})=>`${isActive?"text-orange-700 ": "text-black"}`}>GitHub</NavLink></li>
                <li><NavLink to='/user' className={({isActive})=>`${isActive?"text-orange-700 ": "text-black"}`}>User</NavLink></li>
                
            </ul>
            <div className='gap-2 flex'>
              <button className='bg-gray-700 px-4 py-3 rounded-lg'>Login</button>
              <button className='bg-gray-700 px-4 py-3 rounded-lg'>Register</button>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Header