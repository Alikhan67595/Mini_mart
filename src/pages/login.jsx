import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {app} from "../firebase.js";
import React from 'react';
import Button from '../components/LoginBut.jsx';
import { Link, useNavigate } from 'react-router-dom';
import google from '../assets/google.svg';
import picture from '../assets/pexels.jpg';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [EmailFocus, setEmailFocus] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)


  const navigate = useNavigate();


  // ye login function hai 
  const signin = () => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/", { replace: true });
        // console.log(user)
        // ...
      })
      .catch((error) => {
        console.log(error)
      });


  }


  // continue with google Function

  const continueGoogle = () => {

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate("/", { replace: true });

      }).catch((error) => {
        console.log(error)
      });


  }


  return (
    <>
      <Navbar />
      <div className='h-screen w-screen flex flex-col justify-center items-center bg-[#141414] gap-[2px]'>
        {/* style={{ backgroundImage: `url(${picture})` }} */}

        <div className='h-[400px] w-[300px] rounded-3xl flex flex-col items-center justify-center gap-[5px]  border-[#262626] border-[1px]  bg-[#141414] shadow-[0_4px_30px_rgba(0,0,0,0.9)]'>
          <div className=' text-3xl mb-[20px] font-bold text-white'>
            <h1>Welcome Back</h1>
          </div>

          <div className='flex flex-col w-[100%] items-center'>
            <input className={`text-white bg-white/10 backdrop-blur shadow w-[90%] h-[40px] rounded-[8px] px-[10px]  outline-none ${email.length < 6 || !email.includes("@") || !email.includes(".") ? "focus:border-red-600 focus:border-[1px]" : "focus:border-green-500 focus:border-[1px]"}`} type="email" required placeholder='Enter Your Email' autoComplete="email" onChange={(e) => setEmail(e.target.value)} value={email} onBlur={() => setEmailFocus(false)} onFocus={() => setEmailFocus(true)} />

            <span className='w-[90%] text-[13px] text-red-700 h-[15px]'>{EmailFocus && (email.length < 6 ? "Incomplete Email" : "" || !email.includes("@") ? "@ is missing" : "" || !email.includes(".") ? " dot is missing" : "")}</span>
          </div>

          <div className='flex flex-col w-[100%] items-center'>
            <input className={`text-white bg-white/10 backdrop-blur shadow w-[90%] h-[40px] rounded-[8px] px-[10px] outline-none ${password.length < 6 ? "focus:border-red-600 focus:border-[1px]" : "focus:border-green-500 focus:border-[1px]"}`} type="Password" required placeholder='Enter Your Password' autoComplete="new-password" onChange={(e) => setPassword(e.target.value)} value={password} onBlur={() => setPasswordFocus(false)} onFocus={() => setPasswordFocus(true)} />

            <span className='w-[90%] text-[13px] text-red-700 h-[15px]'>{passwordFocus && (password.length < 1 ? "Enter Your Password" : "" || password.length < 6 ? "Your Password is less than 6" : "")}</span>
          </div>


          <Button type={"submit"} onClick={() => { (password.length < 6 || !email.includes("@") || !email.includes(".")) ? alert("Please enter your valid data. Your data is incomplete") : signin() }} className='mt-[10px]' text='Login' />

          <div className='text-[14px]  text-white'>Don't have an account?
            <Link to={"/signup"} className='font-semibold text-blue-300'> Signup</Link>
          </div>

          <div className='w-[80%] h-[2px] bg-white/10 backdrop-blur shadow flex justify-center items-center text-center my-[10px]' ><span className=' px-[5px] text-white bg-[#141414]'>or</span></div>

      
          <Button onClick={continueGoogle} text='Continue with Google' img={google} />


        </div>

          <div className='text-[14px]  text-white'>login as?
            <Link to={"/adminLogin"} className='font-semibold text-blue-300'> Admin</Link>
          </div>

      </div>
    </>
  )
}


export default Login
