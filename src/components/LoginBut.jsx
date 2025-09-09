import React from 'react'
import picture from '../assets/pexels.jpg'

const LoginBut = ({ text, img , className , onClick ,type , onSubmit}) => {
    return (
        <button onSubmit={onSubmit} type={type} onClick={onClick} className={`w-[90%] h-[40px] rounded-[8px] cursor-pointer flex justify-center items-center bg-[#703bf7]  ${className} text-white transition duration-300 ease-in-out hover:bg-[#4f3396] `}  >
            
            {img && <img className='w-[20px] h-[20px] inline-block mr-[10px]' src={img} alt="google" />}
            {text}
        </button>
    )
}

export default LoginBut
