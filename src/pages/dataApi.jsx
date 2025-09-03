import React from 'react'
import {getAuth ,signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth';
import app from "../firebase.js";
import { Link , useNavigate } from 'react-router-dom';
import { useState ,useEffect } from 'react';

const auth = getAuth(app);

const Api = () => {

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
    }, [navigate]);
  
  return (
    <div>
      Hello
    </div>
  )
}

export default Api
