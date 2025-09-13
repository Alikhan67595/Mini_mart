import {useState , useContext} from 'react'
import menu from '../assets/menu.svg'
import logo from '../assets/mak-logo.png'
import { AuthContex } from '../Contex/AuthContex'
import { NavLink } from 'react-router-dom'


const Mobilenavbar = () => {

  const [open , setOpen] = useState(false)
  let {mainUser , setMainUser} = useContext(AuthContex)

  // console.log(mainUser)

    const firstLetter = mainUser?.displayName ? mainUser?.displayName[0].toLocaleUpperCase() : " "


  return (
    <>
    
    <div className='flex md:hidden w-screen justify-around h-[70px]  items-center pt-[20px]'>
      
      
      <img className='w-[40vw]' src={logo} alt="" />
      <div className='flex justify-around w-[35%]'>
      {mainUser ? <NavLink to={'/'} className='w-[50px] h-[50px] rounded-[50%] bg-[#703bf7] text-[25px] text-white flex justify-center items-center bg-cover bg-center' 
       style={{backgroundImage:  mainUser?.photoURL ?`url(${mainUser?.photoURL})` : ""}}>
    {
      !mainUser?.photoURL
      ? firstLetter : ""
    }
      </NavLink> : ""}
      
       <button className='p-2 bg-gray-200 rounded-[10px] flex justify-center items-center' onClick={()=>setOpen(!open)}>
        <img className='w-[90%]' src={menu} alt={menu} />
      </button>
      </div>
    </div>



    <div className={` h-[100vh] w-[70vw] bg-amber-200 fixed left-0 top-0 bottom-0 z-100 transition-translate duration-300 ${open ? "translate-x-0 ": "-translate-x-full"}`}>
      
    </div>

    
    </>
  )
}

export default Mobilenavbar