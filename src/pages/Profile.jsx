import { getAuth, signOut, onAuthStateChanged , updateProfile } from "firebase/auth";
import { db } from "../firebase.js";
import { onSnapshot , collection } from "firebase/firestore";
import { Outlet, Link, NavLink, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Mobilenavbar from '../components/Mobilenavbar.jsx';
import { useContext, useEffect, useState , useRef } from 'react';
import { AuthContex } from "../Contex/AuthContex.jsx";



const auth = getAuth();



const Profile = () => {

  const navigate = useNavigate()

  const password = useRef()

  let {mainUser , setMainUser} = useContext(AuthContex)


  const handelsignOut = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/", { replace: true });
    }).catch((error) => {
      console.error('error yai hai: ', error)
    });

  }




  const myfirstLetter = mainUser?.displayName ? mainUser.displayName[0].toLocaleUpperCase() : ""
  // console.log(myfirstLetter)




  return (

    <>
      <Mobilenavbar />

      <Navbar />
      <div className='text-white flex  mt-[60px] pl-[20px'>

        <div className='box-border flex flex-wrap justify-center items-center gap-[50px]'>
          {/* <h1 className='text-3xl font-bold text-center mt-[20px]'>My Profile</h1> */}

          {mainUser.photoURL 

          ? <div className='h-[170px] w-[170px] rounded-[50%] bg-[#703bf7] flex items-center justify-center bg-cover bg-center' style={{backgroundImage: mainUser?.photoURL ? `url(${mainUser?.photoURL})` : ""}}></div>


          : <div className=' text-[clamp(40px,25vw,120px)] select-none h-[170px] w-[170px] rounded-[50%] bg-[#703bf7] flex items-center justify-center'>{myfirstLetter  }</div>
           }

          <div className=''>
            <h1 className='text-[30px] font-semibold mt-[10px]'>{mainUser?.displayName}</h1>
            <h1 className='text-[16px] font-semibold mt-[10px]'>Email : {mainUser?.email}</h1>
            <h1 className='text-[16px] font-semibold mt-[10px]'>Join : {mainUser?.metadata?.creationTime}</h1>
          </div>

          <div>
            <button onClick={handelsignOut} className='bg-[#703bf7] px-[18px] py-[9px] rounded-md text-[15px] cursor-pointer'>Logout</button>
          </div>
        </div>
      </div>

    </>
  )
}


export default Profile
