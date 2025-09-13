import React, { Children, createContext, useState, useEffect } from 'react'
import {getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from '../firebase'


const auth = getAuth(app);
 
export const AuthContex = createContext()

const AuthContexProvider = ({children}) => {

    const [mainUser , setMainUser] = useState(null)
    const [loading , setLoading] = useState(true)

    useEffect(() => {

      const authCurrentUser =  onAuthStateChanged(auth, (user) => {

        setMainUser(user)
        setLoading(false)
        
        });
    
      return () =>  authCurrentUser()

    }, [auth])
    




  return (
    <AuthContex.Provider value={{mainUser , setMainUser, setLoading , loading}}>
        {children}
    </AuthContex.Provider>
  )
}

export default AuthContexProvider
