import React from 'react'
import {getAuth ,signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth';
import app from "../firebase.js";
import { Link , useNavigate } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import Navbar from "../components/Navbar.jsx";


const auth = getAuth(app);

const Api = () => {

  const  [data , setData] = useState(['']);

  const navigate = useNavigate();
  
  
  // ye real time use check karega kai user login hai ya nahi
    useEffect(() => {
      // Ye function har bar check karega jab auth state change ho
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          
          navigate("/dashboard", { replace: true });
        } 
        else{
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
        console.log(data);

      } catch (error) {
        
      }
    }

    useEffect(() => {
    fetchData()
    }, [])
  
  return (
    <div className='h-screen w-screen flex'>
      
    </div>
  )
}

export default Api
