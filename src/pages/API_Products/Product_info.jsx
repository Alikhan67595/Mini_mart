import React, { use } from 'react'
import { useParams , useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Product from './Product'
import ProductNot from '../../components/ProductNot.jsx'



const Product_info = () => {

  const [product , setProduct] = useState(null);
  const {id} = useParams();
  const navigate = useNavigate();

  const fetchProduct = async()=>{
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);

      setProduct(response?.data)
  
      
    } catch (error) {
      console.error("Ye error hai",error)
      setTimeout(() => {
        navigate("/products", { replace: true });
      },2000)
        
    }
  }
  
  useEffect(() => {
    fetchProduct()
    
    ,[]})



  return (
    <>
  {!product ? (
    <ProductNot/>) :


   ( <div className='bg-[#141414]   flex gap-[25px]  max-w-7xl m-auto rounded-[15px]  border-[#262626] border-[1px] border-box p-[25px]'>

    <div className='bg-[#bab8b6] w-[500px] h-[500px] rounded-[15px]'>
{/* <img className=' h-full w-full' src={product?.thumbnail} alt="" /> */}
<div className='bg-center bg-cover h-full w-full' style={{backgroundImage: `url(${product?.thumbnail})`}}></div>
    </div>

    <div className=' w-[500px] h-[500px] rounded-[15px] border-[#262626] border-[1px] border-box py-[25px]'>
    <h1 className='text-[30px]'>{product?.title}</h1>
    <p className=' mt-[15px] text-[14px] text-[#ffffff5d]'>{product?.description}</p>
    <p className=' mt-[15px] text-[14px] text-[#ffffff5d]'>Category: {product?.category}</p>
    <h2 className='mt-[10px] text-[20px]'>Price: ${product?.price}</h2>
    <button className='bg-[#703bf7] px-[7px] py-[6px] rounded-md text-[15px] cursor-pointer' onClick={()=>{console.log(product)}}>Add To Cart</button>
    </div>


    </div>)
}
</>
  )
}

export default Product_info