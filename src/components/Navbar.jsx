import React from 'react'
import logo from '../assets/mak-logo.png'
import { Outlet, Link, NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
// import {app} from "../firebase.js"

const auth = getAuth();
const Navbar = () => {

  const [user, setUser] = useState()
  const [userImage, setUserImage] = useState()



  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      {
        console.log(user)

        setTimeout(()=>{

          setUser(user)
          setUserImage(user?.photoURL)
  
          console.log(userImage)
        },500)
        // ...

      }

    });

  }, [])


  const firstLetter = (!userImage?.photoURL) ? user?.displayName[0].toLocaleUpperCase() : " "

  // console.log(firstLetter)




  return (
    <>
      {(!user) ?
        <nav className='box-border w-screen h-[60px] bg-[#141414] border-b-[1px] border-[#262626]   hidden md:flex flex-col items-center justify-center pb-[20px] pt-[20px] fixed top-0 z-20 mb-[60px] '>

          <div className='h-full w-[90%]  flex items-center justify-between gap-[50px] max-w-7xl'>

            <Link to={"/"}><div className='w-[100px]'><img width={'100%'} src={logo} alt={logo} /></div></Link>

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

            <Link to={"/products"}><div className='w-[100px]'><img width={'100%'} src={logo} alt={logo} /></div></Link>

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

              <NavLink to={"/"} className="bg-[#703bf7] text-white text-[25px] w-[40px] h-[40px] flex justify-center items-center  rounded-[50%] ease duration-200 hover:shadow-[0_1px_10px_rgba(255,255,255,0.4)]" >
                {!userImage 

                ? firstLetter

                : <img className='w-[40px] h-[40px] rounded-[50%]' src={userImage} alt="" />
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
