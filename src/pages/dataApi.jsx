import React from 'react'
import {getAuth ,signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth';
import app from "../firebase.js";
import { Link , Outlet, useNavigate } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import Navbar from "../components/Navbar.jsx";
import Subnavbar from '../components/Subnavbar.jsx';
import Product from './Product.jsx';
import Mobilenavbar from '../components/Mobilenavbar.jsx';



const auth = getAuth(app);

const Api = () => {

  const  [dataProduct , setData] = useState(['']);

  const navigate = useNavigate();
  
  
  // ye real time use check karega kai user login hai ya nahi
    useEffect(() => {
      // Ye function har bar check karega jab auth state change ho
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          
          navigate("/", { replace: true });
        } 
        
      });
  
      // cleanup jab component destroy ho
      return () => unsubscribe();
    }, [navigate]);


    // ye function Api call karega

    const fetchData = async () => {
      try { 
        const response = await fetch('https://dummyjson.com/products').then(res => res.json())
        

        // ye data kai andar api kai data set karega
        setData(response.products)
        console.log(response);

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

    </div>

    </>
  )
}

export default Api
