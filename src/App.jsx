import { Routes, Route } from 'react-router-dom'
import { useState ,useEffect } from 'react'
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
import app from "./firebase.js";
import {getAuth , onAuthStateChanged} from 'firebase/auth';


const auth = getAuth(app);
function App() {
  const [user , setUser] = useState(null);


  useEffect(() => {
     onAuthStateChanged(auth, (currentLogin) => {
       setUser(currentLogin);
      });
      
    },);

    


  return (
    <>
      {(!user)?
        <Routes>

        <Route path='/' element={<Api/>}>

        <Route index element={<Product/>}/>
        <Route path='/products/:id' element={<Product_info/>}/>
        <Route path='/products/electronics' element={<Electronic/>}/>
        <Route path='/products/clothes' element={<Clothes/>}/>
        <Route path='/products/movies' element={<Movies/>}/>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/profile' element={<Login/>}/>
        <Route path='*' element={<Error />} />
      </Routes>
      
      :
      <Routes>
        <Route path='/' element={<Profile/>}/>
        <Route path='/products' element={<Api/>}>

        <Route index element={<Product/>}/>
        <Route path=':id' element={<Product_info/>}/>
        <Route path='electronics' element={<Electronic/>}/>
        <Route path='clothes' element={<Clothes/>}/>
        <Route path='movies' element={<Movies/>}/>
        </Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<Profile />} />
        <Route path='/login' element={<Profile />} />
        <Route path='*' element={<Error />} />
      </Routes>
    }

    

    </>
  )
}

export default App
