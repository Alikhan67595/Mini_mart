import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import {app} from "../firebase.js";
import Button from '../components/LoginBut.jsx'
import { Link, Navigate, replace, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';

const auth = getAuth(app);

const AdminLogin = () => {

    const navigate = useNavigate();


    const [name, setname] = useState('');
    const [password, setPassword] = useState('');


    const [nameFocus, setNameFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)


    const userEmail = "admin@gmail.com"
    const userName = "admin"


    const adminLoginHandel = () => {

        signInWithEmailAndPassword(auth, userEmail, password)
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




    return (
        <>
            <Navbar />
            <div className='h-screen w-screen flex justify-center items-center bg-[#141414]  '>


                <form onSubmit={(e) => e.preventDefault()} className='h-[300px] w-[250px] rounded-3xl flex flex-col items-center justify-center gap-[5px] border-[#262626] border-[1px]  bg-[#141414] shadow-[0_4px_30px_rgba(0,0,0,0.9)] pb-[15px]'>
                    <div className=' text-3xl mb-[10px] mt-[10px] font-bold text-white'>
                        <h1>Admin</h1>
                    </div>

                    <div className='flex flex-col w-[100%] items-center'>
                        <input autoComplete="name" className={`text-white bg-white/10 backdrop-blur shadow w-[90%] h-[40px] rounded-[8px] px-[10px]  outline-none ${name.length < 5 ? "focus:border-red-600 focus:border-[1px]" : "focus:border-green-500 focus:border-[1px]"} `} type="text" required placeholder='Enter Your Username' onChange={(e) => setname(e.target.value)} value={name} onBlur={() => setNameFocus(false)} onFocus={() => setNameFocus(true)} />
                        <span className='w-[90%] h-[15px] text-[13px] relative top-0 text-red-700'>{nameFocus && (name.length < 1 ? "Enter your User Name" : "" || name.length < 5 ? "Your user name is wrong" : "")}</span>

                    </div>



                    <div className='flex flex-col w-[100%] items-center'>
                        <input autoComplete="new-password" className={`text-white bg-white/10 backdrop-blur shadow w-[90%] h-[40px] rounded-[8px] px-[10px]  outline-none ${password.length < 6 ? "focus:border-red-600 focus:border-[1px]" : "focus:border-green-500 focus:border-[1px]"}`} type="password" required placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} value={password} onBlur={() => setPasswordFocus(false)} onFocus={() => setPasswordFocus(true)} />
                        <span className='w-[90%] text-[13px] text-red-700 h-[15px]'>{passwordFocus && (password.length < 1 ? "Enter Your Admin Passwod" : "" || password.length < 6 ? "You can set password at least 6 letters" : "")}</span>
                    </div>


                    <Button type={"submit"} onClick={()=>{name === userName &&  password === "123456" ? adminLoginHandel() : alert("Please Enter Correct data")}} className='mt-[10px]' text='Login as Admin' />

                </form>


            </div>
        </>
    )
}


export default AdminLogin
