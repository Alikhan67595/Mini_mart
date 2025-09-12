import {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {getAuth , onAuthStateChanged} from 'firebase/auth';
import {app} from "../firebase.js"





const auth = getAuth();

const Subnavbar = () => {
    
      const [user,setUser] = useState()
      
    onAuthStateChanged(auth, (currentUser) => {{
        setUser(currentUser)
        // ...
      }
      
    });
    
    return (
<>
       {(!user) ? 
        <div className='w-full flex gap-[10px] pl-2.5 max-w-7xl'>
            <NavLink to={"/"} className={({ isActive }) =>
                `  ease-in duration-150 hover:text-[#703bf7]  ${isActive ? " text-[#703bf7]" : "text-white"
                }`
            } end>Products</NavLink>
            <span>/</span>
            <NavLink to={"/products/electronics"} className={({ isActive }) =>
                `  ease-in duration-150 hover:text-[#703bf7]  ${isActive ? " text-[#703bf7]" : "text-white"
                }`
            }>Electronics</NavLink>
            <span>/</span>
            <NavLink to={"/products/clothes"} className={({ isActive }) =>
                `  ease-in duration-150 hover:text-[#703bf7]  ${isActive ? " text-[#703bf7]" : "text-white"
                }`
            }>Clothes</NavLink>
            <span>/</span>
            <NavLink to={"/products/movies"} className={({ isActive }) =>
                `  ease-in duration-150 hover:text-[#703bf7]  ${isActive ? " text-[#703bf7]" : "text-white"
                }`
            }>Movies</NavLink>
        </div>
        :

        <div className='w-full flex gap-[10px] pl-2.5 max-w-7xl'>
            <NavLink to={"/products"} className={({ isActive }) =>
                `  ease-in duration-150 hover:text-[#703bf7]  ${isActive ? " text-[#703bf7]" : "text-white"
                }`
            } end>Products</NavLink>
            <span>/</span>
            <NavLink to={"/products/electronics"} className={({ isActive }) =>
                `  ease-in duration-150 hover:text-[#703bf7]  ${isActive ? " text-[#703bf7]" : "text-white"
                }`
            }>Electronics</NavLink>
            <span>/</span>
            <NavLink to={"/products/clothes"} className={({ isActive }) =>
                `  ease-in duration-150 hover:text-[#703bf7]  ${isActive ? " text-[#703bf7]" : "text-white"
                }`
            }>Clothes</NavLink>
            <span>/</span>
            <NavLink to={"/products/movies"} className={({ isActive }) =>
                `  ease-in duration-150 hover:text-[#703bf7]  ${isActive ? " text-[#703bf7]" : "text-white"
                }`
            }>Movies</NavLink>
        </div>
        
        }
        </>
    )
}

export default Subnavbar
