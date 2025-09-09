import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { Outlet, Link, NavLink, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Mobilenavbar from '../components/Mobilenavbar.jsx';
import { useEffect, useState } from 'react';



const auth = getAuth();



const Profile = () => {

  const navigate = useNavigate()

  const [myUser, setMyUser] = useState(null)
  // const [myfirstLetter, setFirstLetter] = useState("")


  const handelsignOut = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/", { replace: true });
    }).catch((error) => {
      console.error('error yai hai: ', error)
    });

  }

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        // ye current user ko variable mai save kar raha hai 
        setMyUser(user)
        // console.log(myUser)

        
        
      }
      
    });
    
  }, [])
  
  const  myfirstLetter = myUser?.displayName ? myUser.displayName[0].toLocaleUpperCase() : ""
  // console.log(myfirstLetter)




  return (

    <>
      <Mobilenavbar />

      <Navbar />
      <div className='text-white flex  mt-[60px] pl-[20px'>
        <div className='box-border flex flex-wrap justify-center items-center gap-[50px]'>
          {/* <h1 className='text-3xl font-bold text-center mt-[20px]'>My Profile</h1> */}
          <div className=' text-[clamp(40px,15vw,120px)] h-[170px] w-[170px] rounded-[50%] bg-[#703bf7] flex items-center justify-center'>{ myUser?.photoURL 
          ?( <img className="h-[170px] w-[170px] rounded-[50%]" src={myUser?.photoURL} />)
            : ( myfirstLetter ) }</div>

          <div className=''>
            <h1 className='text-[30px] font-semibold mt-[10px]'>{myUser?.displayName}</h1>
            <h1 className='text-[16px] font-semibold mt-[10px]'>Email : {myUser?.email}</h1>
            <h1 className='text-[16px] font-semibold mt-[10px]'>Join : {myUser?.metadata?.creationTime}</h1>
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
