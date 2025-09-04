import React from 'react'
 import { getAuth, signOut } from "firebase/auth";
 import { Outlet , Link ,NavLink , useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Mobilenavbar from '../components/Mobilenavbar.jsx';



const auth = getAuth();
const Profile = () => {
      const navigate = useNavigate();



        const handelsignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/", { replace: true });
    }).catch((error) => {
      // An error happened.
    });
        }
    
    
    // ye function user ki image , name , email ko get karega
    const user = auth.currentUser;

      const UserName = [user.displayName]

  return (
    <>
    <Mobilenavbar/>
    <Navbar/>
    <div className='text-white flex mt-[60px] pl-[20px'>
     <div className='box-border flex items-center gap-[50px]'>
        {/* <h1 className='text-3xl font-bold text-center mt-[20px]'>My Profile</h1> */}
        <div><img className='h-[200px] w-[200px] rounded-[50%] bg-amber-300' src={user.photoURL} alt={user.displayName} /></div>

        <div className=''>
        <h1 className='text-[30px] font-semibold mt-[10px]'>{user?.displayName ? user.displayName : UserName[0]}</h1>
        <h1 className='text-[16px] font-semibold mt-[10px]'>Email : {user.email}</h1>
        <h1 className='text-[16px] font-semibold mt-[10px]'>Join : {user.metadata.creationTime}</h1>
        </div>

        <div>
            <button onClick={handelsignOut} className='bg-[#703bf7] px-[18px] py-[9px] rounded-md text-[15px] cursor-pointer'>Logout</button>
        </div>
     </div>
    </div>
</>  )
}

export default Profile
