import React from 'react'
import { signIn, signOut } from "next-auth/react"


const Login = () => {
  return (
    <div className='flex justify-center items-center'>
        <h1 onClick={signIn}
        className='text-4xl font-bold bg-blue-500 rounded-full 
        text-white text-center cursor-pointer'
        > 
        Login
        </h1>
      
    </div>
  )
}

export default Login
