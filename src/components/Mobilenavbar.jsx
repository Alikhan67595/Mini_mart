import React from 'react'
import menu from '../assets/menu.svg'
import logo from '../assets/mak-logo.png'

const Mobilenavbar = ({ setOpen }) => {
    // const [open, setOpen] = useState(false);
  return (
    <>
    <div className='flex md:hidden w-screen justify-around h-[70px]  items-center pt-[20px]'>
      
      
      <img className='w-[40vw]' src={logo} alt="" />
      <div className='flex justify-around w-[35%]'>
      <button className='w-[50px] h-[50px] bg-gray-200 rounded-[50%]'>

      </button>
      
      <button className='p-2 bg-gray-200 rounded-[10px] flex justify-center items-center'>
        <img className='w-[90%]' src={menu} alt={menu} />
      </button>
      </div>
    </div>

    
    </>
  )
}

export default Mobilenavbar