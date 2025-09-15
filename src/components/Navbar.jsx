import React, { useContext } from 'react'
import logo from '../assets/mak-logo.png'
import { Outlet, Link, NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { AuthContex } from '../Contex/AuthContex';

const Navbar = () => {



  let {mainUser , setMainUser} = useContext(AuthContex)
  

  const firstLetter = mainUser?.displayName ? mainUser?.displayName[0].toLocaleUpperCase() : " "

  // console.log(firstLetter)




  return (
    <>
      {(!mainUser) ?
        <nav className='box-border w-screen h-[60px] bg-[#141414] border-b-[1px] border-[#262626]   hidden md:flex flex-col items-center justify-center pb-[20px] pt-[20px] fixed top-0 z-20 mb-[60px] '>

          <div className='h-full w-[90%]  flex items-center justify-between gap-[50px] max-w-7xl'>

            <Link to={"/"}><div className='w-[100px] h-[50px] bg-center  bg-contain bg-no-repeat' style={{backgroundImage: `url(${logo})`}}></div></Link>

            <ul className='flex items-center gap-4'>
              <NavLink to={"/"} className={({ isActive }) =>
                ` rounded-[8px] ease-in duration-150 hover:font-semibold hover:bg-white hover:text-[#703bf7]   ${isActive ? "bg-[#703bf7] text-white font-semibold  " : "text-white"
                }`
              }><li className=' px-[15px] py-[8px] rounded-[8px]'>Product</li></NavLink>


              <NavLink to={"/about"} className={({ isActive }) =>
                ` rounded-[8px] ease-in duration-150 hover:font-semibold hover:bg-white hover:text-[#703bf7]   ${isActive ? "bg-[#703bf7] text-white font-semibold  " : "text-white"
                }`
              }><li className=' px-[15px] py-[8px] rounded-[8px]'>About</li></NavLink>


              <NavLink to={"/contact"} className={({ isActive }) =>
                `rounded-[8px] ease-in duration-150 hover:font-semibold hover:bg-white hover:text-[#703bf7]   ${isActive ? "bg-[#703bf7] text-white font-semibold  " : "text-white"
                }`
              }><li className=' px-[15px] py-[8px] rounded-[8px]'>Contact</li></NavLink>


              <NavLink to={"/login"} className={({ isActive }) =>
                `rounded-[8px] ease-in duration-150 hover:font-semibold hover:bg-white hover:text-[#703bf7]   ${isActive ? "bg-[#703bf7] text-white font-semibold  " : "text-white"
                }`
              }><li className=' px-[15px] py-[8px] rounded-[8px]'>Login</li></NavLink>

            </ul>
          </div>
        </nav>
        :
        <nav className='box-border w-screen h-[60px] bg-[#141414] border-b-[1px] border-[#262626]   hidden md:flex flex-col items-center justify-center pb-[20px] pt-[20px] fixed top-0 z-20 mb-[60px] '>

          <div className='h-full w-[90%]  flex items-center justify-between gap-[50px] max-w-7xl'>

            <Link to={"/products"}><div className='w-[100px] h-[50px] bg-center  bg-contain bg-no-repeat' style={{backgroundImage: `url(${logo})`}}></div></Link>

            <ul className='flex items-center gap-4'>
              <NavLink to={"/products"} className={({ isActive }) =>
                ` rounded-[8px] ease-in duration-150 hover:font-semibold hover:bg-white hover:text-[#703bf7]   ${isActive ? "bg-[#703bf7] text-white font-semibold  " : "text-white"
                }`
              }><li className=' px-[15px] py-[8px] rounded-[8px]'>Product</li></NavLink>


              <NavLink to={"/about"} className={({ isActive }) =>
                ` rounded-[8px] ease-in duration-150 hover:font-semibold hover:bg-white hover:text-[#703bf7]   ${isActive ? "bg-[#703bf7] text-white font-semibold  " : "text-white"
                }`
              }><li className=' px-[15px] py-[8px] rounded-[8px]'>About</li></NavLink>


              <NavLink to={"/contact"} className={({ isActive }) =>
                `rounded-[8px] ease-in-out duration-150 hover:font-semibold hover:bg-white hover:text-[#703bf7]   ${isActive ? "bg-[#703bf7] text-white font-semibold  " : "text-white"
                }`
              }><li className=' px-[15px] py-[8px] rounded-[8px]'>Contact</li></NavLink>

              <NavLink to={"/"} className="bg-[#703bf7] text-white text-[25px] w-[40px] h-[40px] flex justify-center items-center  rounded-[50%] ease duration-200 hover:shadow-[0_1px_10px_rgba(255,255,255,0.4)] select-none bg-cover bg-center" 
              style={{backgroundImage: mainUser?.photoURL ? `url(${mainUser?.photoURL})` : ""}}>
                {!mainUser.photoURL 

                ? firstLetter

                : ""
             }
              </NavLink>

            </ul>
          </div>
        </nav>
      }

    </>
  )
}

export default Navbar
