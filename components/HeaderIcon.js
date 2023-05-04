import React from 'react'
import { signOut } from "next-auth/react";


const HeaderIcon = ({icons, active, src}) => {
  return (

    <div> 
      {src &&  
        <img src={src} alt='profilepic' className='mt-9 flex justify-end justify-center w-10 h-10 rounded-xl'  onClick={signOut}/>}
        <div className=' cursor-pointer md:hover:bg-gray-100 px-10 sm:h-14 rounded-xl active:border-b-2 active:border-blue-500'>
        <icons className='h-5 text-gray-500 group-hover:text-blue-500 sm:h-7 mx-auto '/>
      </div>
    </div>
  
  )
}

export default HeaderIcon;
