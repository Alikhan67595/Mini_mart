import React from 'react'
import {getAuth ,signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth';
import {app} from "../firebase.js";
import { Link , Outlet, useNavigate } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import Navbar from "../components/Navbar.jsx";
import Subnavbar from '../components/Subnavbar.jsx';
import Product from './Product.jsx';
import Mobilenavbar from '../components/Mobilenavbar.jsx';
import Skeleton from '../components/Skeleton.jsx';



const auth = getAuth(app);

const Api = () => {

  const  [dataProduct , setData] = useState(['']);

  const navigate = useNavigate();
  
  

    // ye function Api call karega

    const fetchData = async () => {
      try { 
        const response = await fetch('https://dummyjson.com/products').then(res => res.json())
        

        // ye data kai andar api kai data set karega
        setData(response.products)

        const cardLength = response.products.length

        // console.log(cardLength);
        
        

      } catch (error) {
        
      }
    }

    useEffect(() => {
    fetchData()
    }, [])
  
  return (

    <>
    <Navbar/>
    <Mobilenavbar/>
    <div className='box-border flex flex-wrap justify-center gap-6 bg-[#141414] text-white max-w-7xl m-auto mt-[90px] '>

    <Subnavbar/>
<div>
  <Outlet/>
</div>


{/* <Skeleton /> */}

    </div>

    </>
  )
}

export default Api
