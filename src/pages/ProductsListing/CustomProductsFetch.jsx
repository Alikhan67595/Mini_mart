import React, { useState , useEffect } from 'react'
import {collection , onSnapshot} from "firebase/firestore"
import {db} from '../../firebase.js'


const CustomProduct = () => {
    const [customPro , setCustomPro] = useState([])

    useEffect(() => {
      
       const productFetch = onSnapshot(collection(db,'products'), (snapshot)=>{

          const  users = snapshot.docs.map((doc)=>({
             id: doc.id,
        ...doc.data(),
          }))
          setCustomPro(users)
        })
        

    

      return () => productFetch();
    }, [])
    

  return (

    <div className='flex flex-wrap gap-6 justify-center items-center m-auto'>
        

     { customPro.map((item, index)=>(
           <div key={item.id} className='text-white box-border border-[#262626] border-[1px] bg-[#141414] flex flex-col  w-[300px] rounded-[15px] p-[25px] px-[25px] transform transition-transform ease-in duration-200 hover:scale-101 justify-between hover:bg-[#262626]'>
     
            <div className='bg-[#bab8b6] w-[100%] h-[250px] flex justify-center items-center rounded-[15px]'> 
             <img className='w-[100%] h-[100%] rounded-[15px] ' src={item.image} alt={item.image} />
           
            </div>
     
            <div className='flex flex-col gap-[5px] mt-[5px]'>
             <h1 className='text-[22px]'>{item.title}</h1>
             <div className='text-[12px] bg-[#1a1a1a] border-[#262626] border-[1px] rounded-[15px] py-[4px] px-[8px] w-max'>{item.category}</div>
           <h6 className='text-[12px] text-[#ffffffa9]'>{item.stock} in stock</h6>
     
           <div className='flex justify-between items-end '>
           <h6>$ {item.price}</h6>

           </div>
            </div>
     
           </div>
          ))}
          </div>
  )
}

export default CustomProduct
