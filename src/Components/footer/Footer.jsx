import React from 'react'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <footer className='bottom-0 grid grid-cols-2 bg-gray-300'>
      <div className='m-4'>
        <div>
          <h1 className='text-3xl underline font-semibold'>Created By :</h1>
          <a href="https://www.linkedin.com/feed/" className='text-2xl ml-4 font-semibold'>Asad Hussain</a>
        </div>
        <div className='mt-5'>
          <h1 className='text-3xl underline font-semibold'>Other Links :</h1>
          <ul className='text-2xl font-semibold'>
            <li><NavLink to='/about' className={({isActive})=>`${isActive?"text-orange-700 ": "text-black"}`}>About</NavLink></li>
                <li><NavLink to='/contact' className={({isActive})=>`${isActive?"text-orange-700 ": "text-black"}`}>Contact</NavLink></li>
                <li><NavLink to='/github' className={({isActive})=>`${isActive?"text-orange-700 ": "text-black"}`}>GitHub</NavLink></li>
          </ul>
        </div>
        <div className='flex mt-32'>
          <a href="#"><img src="https://img.icons8.com/?size=100&id=16318&format=png&color=000000" className="size-15" alt="" /></a>
          <a href='#'><img src="https://img.icons8.com/?size=100&id=16166&format=png&color=000000" className="size-15" alt="" /></a>
          <a href='#'><img src="https://img.icons8.com/?size=100&id=32320&format=png&color=000000" className="size-15" alt="" /></a>
        </div>
      </div>
      <div>
        <iframe
        title="IEM Ashram Building Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.123456789!2d88.4296927!3d22.5701392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b23d77ee27%3A0xcd498ec0d7bf6f54!2sInstitute%20of%20Engineering%20and%20Management%20(Ashram%20Building)!5e0!3m2!1sen!2sin!4v1690000000000"
        width="95%"
        height="400"
        className="rounded-xl shadow-lg m-5"
        loading="lazy"
      ></iframe>
      </div>
    </footer>
  )
}

export default Footer