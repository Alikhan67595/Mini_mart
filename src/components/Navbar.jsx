import React from 'react'
import logo from '../assets/mak-logo.png'
import { Outlet , Link ,NavLink , useNavigate } from 'react-router-dom'
import { useState ,useEffect } from 'react';

const Navbar = () => {
  




  return (
    <>
    <nav className='box-border w-screen h-[60px] bg-[#141414] border-b-[1px] border-[#262626]   hidden md:flex flex-col items-center justify-center pb-[20px] pt-[20px] fixed top-0 z-20 mb-[60px] '>

        <div className='h-full w-[90%]  flex items-center justify-between gap-[50px] max-w-7xl'>

        <div className='w-[100px]'><img width={'100%'} src={logo} alt={logo} /></div>

        <ul className='flex items-center gap-4'>
            <NavLink to={"/products"} className={({ isActive }) => 
                ` rounded-[8px] ease-in duration-150 hover:bg-white hover:text-[#703bf7]   ${
                  isActive ? "bg-[#703bf7] text-white font-semibold  " : "text-white"
                }`
              }><li className=' px-[15px] py-[8px] rounded-[8px]'>Product</li></NavLink>


            <NavLink to={"/about"} className={({ isActive }) => 
                ` rounded-[8px] ease-in duration-150 hover:bg-white hover:text-[#703bf7]   ${
                  isActive ? "bg-[#703bf7] text-white font-semibold  " : "text-white"
                }`
              }><li className=' px-[15px] py-[8px] rounded-[8px]'>About</li></NavLink>

              
            <NavLink to={"/contact"} className={({ isActive }) => 
                `rounded-[8px] ease-in duration-150 hover:bg-white hover:text-[#703bf7]   ${
                  isActive ? "bg-[#703bf7] text-white font-semibold  " : "text-white"
                }`
              }><li className=' px-[15px] py-[8px] rounded-[8px]'>Contact</li></NavLink>

            <NavLink to={"/profile"} className={({ isActive }) => 
                `rounded-[8px] ease-in duration-150 hover:bg-white hover:text-[#703bf7]   ${
                  isActive ? "bg-[#703bf7] text-white font-semibold  " : "text-white"
                }`
              }><li className=' px-[15px] py-[8px] rounded-[8px]'>Profile</li></NavLink>

        </ul>
</div>
    </nav>

    </>
  )
}

export default Navbar
