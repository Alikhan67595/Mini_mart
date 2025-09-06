import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login'
import Signup from './pages/Signup.jsx'
import Api from './pages/dataApi.jsx'
import Error from './pages/Error.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Profile from './pages/Profile.jsx'
import Electronic from './pages/Electronic.jsx'
import Product from './pages/Product.jsx'
import Clothes from './pages/Clothes.jsx'
import Movies from './pages/Movies.jsx'
import Product_info from './pages/Product_info.jsx'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='/products' element={<Api/>}>

        <Route index element={<Product/>}/>
        <Route path=':id' element={<Product_info/>}/>
        <Route path='electronics' element={<Electronic/>}/>
        <Route path='clothes' element={<Clothes/>}/>
        <Route path='movies' element={<Movies/>}/>
        </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='*' element={<Error />} />
      </Routes>
    

    </>
  )
}

export default App
