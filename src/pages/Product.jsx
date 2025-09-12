import React from 'react'
import {getAuth ,signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth';
import {app} from "../firebase.js";
import { Link , useNavigate, useParams } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import Skeleton from '../components/Skeleton.jsx';
import axios from 'axios';

const Product = () => {

const auth = getAuth(app);


const  [dataProduct , setData] = useState([null]);
const  [loading , setLoading] = useState(true);
const [user,setUser] = useState()


let { id } = useParams() // get params
  
  
onAuthStateChanged(auth, (currentUser) => {{
    setUser(currentUser)
    // ...
  }
  
});
  
  
  

    // ye function Api call karega

    const fetchData = async () => {
      try { 
        const response = await axios.get('https://dummyjson.com/products')
        

        // ye data kai andar api kai data set karega
        setData(response.data.products)
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
      <div key={item.id} className='box-border border-[#262626] border-[1px] bg-[#141414] flex flex-col  w-[300px] rounded-[15px] p-[25px] px-[25px] transform transition-transform ease-in duration-200 hover:scale-101 justify-between hover:bg-[#262626]'>

       <div className='bg-[#bab8b6] w-[100%] h-[250px] flex justify-center items-center rounded-[15px]'> <img className='w-[200px]' src={item.thumbnail} alt={item.thumbnail} /></div>

       <div className='flex flex-col gap-[5px] mt-[5px]'>
        <h1 className='text-[22px]'>{item.title}</h1>
        <div className='text-[12px] bg-[#1a1a1a] border-[#262626] border-[1px] rounded-[15px] py-[4px] px-[8px] w-max'>{item.category}</div>
      <h6 className='text-[12px] text-[#ffffffa9]'>{item.stock} in stock</h6>

      <div className='flex justify-between items-end '>
      <h6>$ {item.price}</h6>
{(!user)
?
<Link to={`/products/${item.id}`}><button className='bg-[#703bf7] px-[7px] py-[6px] rounded-md text-[15px] cursor-pointer'>More Detail</button></Link>
:
<Link to={`${item.id}`}><button className='bg-[#703bf7] px-[7px] py-[6px] rounded-md text-[15px] cursor-pointer'>More Detail</button></Link>
}
      </div>
       </div>

      </div>
     ))
      }
</div>
  )
}

export default Product
