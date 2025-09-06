import {getAuth , createUserWithEmailAndPassword , onAuthStateChanged  ,GoogleAuthProvider , signInWithPopup} from 'firebase/auth';
import app from "../firebase.js";
import React from 'react'
import Button from '../components/LoginBut.jsx'
import { Link ,useNavigate } from 'react-router-dom'
import google from '../assets/google.svg'
import picture from '../assets/pexels.jpg'
import { useState , useEffect } from 'react';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


   const navigate = useNavigate();




// ye real time use check karega kai user login hai ya nahi
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        navigate("/products", { replace: true });
      } 
    });
    return () => unsubscribe();
  }, [navigate]);



  // ye signup function hai
  const signupUser = () => {

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    console.log(error.message);
  });


  }


    // continue with google Function
  
  const continueGoogle = () => {
  
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      navigate("/products", { replace: true });
    
    }).catch((error) => {
     console.log(error)
    });
  
  
  }

  return (
    <>
     <div className='h-screen w-screen flex justify-center items-center bg-cover bg-center  '
     style={{ backgroundImage: `url(${picture})` }}> 

      <div className='h-[400px] w-[300px] rounded-3xl flex flex-col items-center justify-center gap-[10px]  bg-white/10 backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.9)]'>
      <div className=' text-3xl mb-[20px] font-bold text-white'>
      <h1>Create Account</h1>
      </div>

      <input autoComplete="email" className='text-white bg-white/10 backdrop-blur shadow w-[90%] h-[40px] rounded-[8px] px-[10px]  outline-none border-none  ' type="email" required placeholder='Enter Your Email'  onChange={(e) => setEmail(e.target.value)} value={email}/>

      <input autoComplete="new-password" className='text-white bg-white/10 backdrop-blur shadow w-[90%] h-[40px] rounded-[8px] px-[10px] outline-none border-none ' type="Password" required placeholder='Enter Your Password'  onChange={(e) => setPassword(e.target.value)} value={password}/>

      <Button onClick={signupUser} className='mt-[10px]' text='Signup' />

      <div className='text-[14px]  text-white'>Already have an account?
        <Link to={"/"} className='font-semibold text-blue-300'> Login</Link>
      </div>

      <div className='w-[80%] h-[2px] bg-white/10 backdrop-blur shadow flex justify-center items-center text-center my-[10px]' ><span className=' px-[5px] text-white'>or</span></div>


    <Button onClick={continueGoogle}  text='Continue with Google' img={google} />


      </div>
     </div>
    </>
  )
}


export default Signup
