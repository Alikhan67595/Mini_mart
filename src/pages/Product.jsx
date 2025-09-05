import React from 'react'
import {getAuth ,signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth';
import app from "../firebase.js";
import { Link , useNavigate } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import Skeleton from '../components/Skeleton.jsx';

const Product = () => {

const auth = getAuth(app);

  const  [dataProduct , setData] = useState(['']);
  const  [loading , setLoading] = useState(true);

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
    }, [navigate , setLoading]);


    // ye function Api call karega

    const fetchData = async () => {
      try { 
        const response = await fetch('https://dummyjson.com/products').then(res => res.json())
        

        // ye data kai andar api kai data set karega
        setData(response.products)
        // console.log(response);
        setLoading(false)

      } catch (error) {
        setLoading(false)
      }
    }

    useEffect(() => {
    fetchData()
    }, [setLoading])
  

  return (

    <div className='box-border flex flex-wrap justify-center gap-6 bg-[#141414] text-white max-w-7xl m-auto '>
      {
        loading ?(
          <Skeleton/>
        ):
     dataProduct.map((item, index)=>(
      <div key={index} className='box-border border-[#262626] border-[1px] bg-[#141414] flex flex-col  w-[300px] rounded-[15px] p-[25px] px-[25px] transform transition-transform ease-in duration-200 hover:scale-101 justify-between hover:bg-[#262626]'>

       <div className='bg-[#bab8b6] w-[100%] h-[250px] flex justify-center items-center rounded-[15px]'> <img className='w-[200px]' src={item.thumbnail} alt={item.thumbnail} /></div>

       <div className='flex flex-col gap-[5px] mt-[5px]'>
        <h1 className='text-[22px]'>{item.title}</h1>
        <div className='text-[12px] bg-[#1a1a1a] border-[#262626] border-[1px] rounded-[15px] py-[4px] px-[8px] w-max'>{item.category}</div>
      <h6 className='text-[12px] text-[#ffffffa9]'>{item.stock} in stock</h6>

      <div className='flex justify-between items-end '>
      <h6>$ {item.price}</h6>

      <button className='bg-[#703bf7] px-[7px] py-[6px] rounded-md text-[15px] cursor-pointer'>Add To Cart</button>

      </div>
       </div>

      </div>
     ))
      }
</div>
  )
}

export default Product
