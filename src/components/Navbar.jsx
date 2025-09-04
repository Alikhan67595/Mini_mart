import React from 'react'
 import { getAuth, signOut } from "firebase/auth";
import logo from '../assets/mak-logo.png'
import { Outlet , Link ,NavLink , useNavigate } from 'react-router-dom'
import logout from '../assets/log-out1.svg'
import { useState ,useEffect } from 'react';

const auth = getAuth();
const Navbar = () => {
    const navigate = useNavigate();


    const handelsignOut = () => {

signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/", { replace: true });
}).catch((error) => {
  // An error happened.
});
    }


  return (
    <>
    <nav className='w-screen h-[50px] bg-gray-500 flex items-center justify-center'>

        <div className='h-full w-[95%]  flex items-center justify-between gap-[50px]'>

        <div className='w-[100px]'><img width={'100%'} src={logo} alt={logo} /></div>

        <ul className='flex items-center gap-4'>
            <NavLink to={"/dashboard"} className={({ isActive }) => 
                ` rounded-[8px] ease-in duration-200 hover:bg-amber-900   ${
                  isActive ? "text-white bg-amber-900  " : "text-white"
                }`
              }><li className=' px-[15px] py-[8px] rounded-[8px]'>Dashboard</li></NavLink>


            <NavLink to={"about"} className={({ isActive }) => 
                ` rounded-[8px] ease-in duration-200 hover:bg-amber-900  ${
                  isActive ? "text-white bg-amber-900 " : "text-white"
                }`
              }><li className=' px-[15px] py-[8px] rounded-[8px]'>About</li></NavLink>

              
            <NavLink to={"contact"} className={({ isActive }) => 
                `rounded-[8px] ease-in duration-200 hover:bg-amber-900 ${
                  isActive ? " text-white bg-amber-900 " : "text-white"
                }`
              }><li className=' px-[15px] py-[8px] rounded-[8px]'>Contact</li></NavLink>

              <button onClick={handelsignOut} className=' w-[40px] h-[40px]  px-[8px] py-[8px] rounded-[50%] hover:bg-red-600 cursor-pointer ease-in duration-200'>
                <img src={logout} alt="logout" />
              </button>
        </ul>
</div>
    </nav>

    <div>
        <Outlet/>
    </div>
    </>
  )
}

export default Navbar
