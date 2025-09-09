import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Mobilenavbar from '../components/Mobilenavbar.jsx'

const Contact = () => {
  return (
   <div className='bg-[#0d0d0d] min-h-screen text-white flex flex-col'>
      <Mobilenavbar/>
      <Navbar/>
      <div className='pt-[80px] max-w-7xl mx-auto px-2.5 pb-10'>

      Contact page

      </div>
    </div>
  )
}

export default Contact
