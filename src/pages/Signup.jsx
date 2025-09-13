import {getAuth , createUserWithEmailAndPassword , onAuthStateChanged  ,GoogleAuthProvider , signInWithPopup , updateProfile} from 'firebase/auth';
import {collection, addDoc , setDoc, doc , serverTimestamp } from 'firebase/firestore';
import {app , db} from "../firebase.js";
import { AuthContex } from '../Contex/AuthContex.jsx';
import Button from '../components/LoginBut.jsx'
import { Link ,useNavigate } from 'react-router-dom'
import google from '../assets/google.svg'
import picture from '../assets/pexels.jpg'
import { useState , useEffect, useContext } from 'react';
import Navbar from '../components/Navbar.jsx';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Signup = () => {

  const [email, setEmail] = useState('');
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');


  const [nameFocus , setNameFocus] = useState(false) 
  const [EmailFocus , setEmailFocus] = useState(false) 
  const [passwordFocus , setPasswordFocus] = useState(false) 
  

  const navigate = useNavigate();
  
  let {mainUser , setMainUser} = useContext(AuthContex)
  
  
  // ye signup function hai

  const signupUser = async() => {

    try {
   const Signupdata = await  createUserWithEmailAndPassword(auth, email, password)

   const user = Signupdata.user;
// console.log(user);

      setMainUser(user)


   await updateProfile(user, {
      displayName: name
    })
    
      await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name: name,
      password: password,
      email: email,      
      createdAt: serverTimestamp(),
    });

     navigate("/");


  }
    
     catch (error) {
      console.log(error.message);
    }
  
}



    // continue with google Function
  
  const continueGoogle = () => {
  
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      navigate("/", { replace: true });
      setMainUser(user)
    
    }).catch((error) => {
     console.log(error)
    });
  }

 
  return (
    <>
    <Navbar/>
     <div className='h-screen w-screen flex justify-center items-center bg-[#141414]  '>
      {/* style={{ backgroundImage: `url(${picture})` }} */}

      <form onSubmit={(e)=> e.preventDefault()} className='h-[450px] w-[300px] rounded-3xl flex flex-col items-center justify-center gap-[5px] border-[#262626] border-[1px]  bg-[#141414] shadow-[0_4px_30px_rgba(0,0,0,0.9)] pb-[15px]'>
      <div className=' text-3xl mb-[10px] mt-[10px] font-bold text-white'>
      <h1>Create Account</h1>
      </div>

<div className='flex flex-col w-[100%] items-center'>
      <input autoComplete="name" className={`text-white bg-white/10 backdrop-blur shadow w-[90%] h-[40px] rounded-[8px] px-[10px]  outline-none ${name.length < 3 ? "focus:border-red-600 focus:border-[1px]" : "focus:border-green-500 focus:border-[1px]"} `} type="text" required placeholder='Enter Your Name'  onChange={(e) => setname(e.target.value.toLocaleUpperCase())} value={name} onBlur={()=>setNameFocus(false)} onFocus={()=>setNameFocus(true)}/>
      <span className='w-[90%] h-[15px] text-[13px] relative top-0 text-red-700'>{nameFocus && name.length < 3 ? "At least minimun 3 letters" : ""}</span>

      </div>
      

      <div className='flex flex-col w-[100%] items-center'>
      <input autoComplete="email" className={`text-white bg-white/10 backdrop-blur shadow w-[90%] h-[40px] rounded-[8px] px-[10px] outline-none ${email.length < 6 || !email.includes("@") || !email.includes(".") 
      ? " focus:border-red-600 focus:border-[1px]" 
      :  "focus:border-green-500 focus:border-[1px]"}`} type="email" required placeholder='Enter Your Email'  onChange={(e) => setEmail(e.target.value)} value={email} onBlur={()=>setEmailFocus(false)} onFocus={()=>setEmailFocus(true)}/>

      <span className='w-[90%] text-[13px] text-red-700 h-[15px]'>{EmailFocus && ( email.length < 6 ? "Incomplete Email" : ""  || !email.includes("@") ? "@ is missing" : "" || !email.includes(".") ? " dot is missing" : "")}</span>
      </div>
      

      <div className='flex flex-col w-[100%] items-center'>
      <input autoComplete="new-password" className={`text-white bg-white/10 backdrop-blur shadow w-[90%] h-[40px] rounded-[8px] px-[10px]  outline-none ${password.length < 6 ? "focus:border-red-600 focus:border-[1px]" : "focus:border-green-500 focus:border-[1px]"}`}   type="password" required placeholder='Enter Your Password'  onChange={(e) => setPassword(e.target.value)} value={password} onBlur={()=>setPasswordFocus(false)} onFocus={()=>setPasswordFocus(true)}/>
      <span className='w-[90%] text-[13px] text-red-700 h-[15px]'>{passwordFocus && (password.length < 6 ? "You can set password at least 6 letters" : "")}</span>
      </div>


      <Button type={"submit"} onClick={()=>{password.length < 6 || name.length < 3 || !email.includes("@") ? alert("Please enter your valid data. Your data is incomplete"): signupUser()}} className='mt-[10px]' text='Signup' />

      <div className='text-[14px]  text-white'>Already have an account?
        <Link to={"/login"} className='font-semibold text-blue-300'> Login</Link>
      </div>

      <div className='w-[80%] h-[2px] bg-white/10 backdrop-blur shadow flex justify-center items-center text-center my-[10px]' ><span className=' px-[5px] text-white bg-[#141414]'>or</span></div>


    <Button onClick={continueGoogle}  text='Continue with Google' img={google} />


      </form>


     </div>
    </>
  )
}


export default Signup
