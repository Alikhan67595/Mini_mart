import { Routes, Route } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { AuthContex } from './Contex/AuthContex.jsx'
import Login from './pages/Auth/login.jsx'
import Signup from './pages/Auth/Signup.jsx'
import Error from './pages/Error/Error.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Movies from './pages/Movies.jsx'
import Clothes from './pages/Clothes.jsx'
import Profile from './pages/dashboard/Profile.jsx'
import Electronic from './pages/Electronic.jsx'
import Api from './pages/API_Products/dataApi.jsx'
import Product from './pages/API_Products/Product.jsx'
import Product_info from './pages/API_Products/Product_info.jsx'
import AdminLogin from './pages/Admin/AdminLogin.jsx'
import Admin from './pages/Admin/Admin.jsx'
import Navbar from './components/Navbar.jsx'
import Loader from './components/Loader.jsx'
import AddProduct from './pages/ProductsListing/Add_Product.jsx'



function App() {

  let {mainUser, setMainUser} = useContext(AuthContex)
  let {loading ,setLoading} = useContext(AuthContex)


  let routes;

  if (mainUser?.email === "admin@gmail.com") {
    routes = (
      <Routes>
        <Route path='/' element={<Admin />} />
        <Route path='*' element={<Error />} />
      </Routes>
    )}

  else if (mainUser) {
    
    routes = (<Routes>
      <Route path='/' element={<Profile />} />
      <Route path='/products' element={<Api />}>

        <Route index element={<Product />} />
        <Route path=':id' element={<Product_info />} />
        <Route path='electronics' element={<Electronic />} />
        <Route path='clothes' element={<Clothes />} />
        <Route path='movies' element={<Movies />} />
      </Route>
      <Route path='/add_Product' element={<AddProduct/>} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<><Navbar/> <br /><br /><br /> <br /> <Product /> </> } />
    </Routes>)
  }

 

  else {
    routes = (<Routes>

      <Route path='/' element={<Api />}>

        <Route index element={<Product />} />
        <Route path='/products/:id' element={<Product_info />} />
        <Route path='/products/electronics' element={<Electronic />} />
        <Route path='/products/clothes' element={<Clothes />} />
        <Route path='/products/movies' element={<Movies />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/profile' element={<Login />} />
      <Route path='/adminLogin' element={<AdminLogin />} />
      <Route path='*' element={<Error />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>)
  }


  return (
    <>
    {
    loading 
   ? <Loader/>
    : routes
    }
    </>
  )
}

export default App
