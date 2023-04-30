import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import { FaceSmileIcon } from '@heroicons/react/24/solid';
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/24/outline";
import { useRef } from 'react';
import {  addDoc, collection  } from "firebase/firestore";
import { db } from '../firebase';

const Inputboxs = () => {

  const session = useSession();
  const inputRef = useRef(null);
  
  const sendPost = (event) => {
    event.preventDefault();
    if(!inputRef.current.value) return;
    try{  
    addDoc(collection(db, 'posts'), {
      message:inputRef.current.value,
      name:session?.data?.user?.name,
      email:session?.data?.user?.email,
      image:session?.data?.user?.image,    
  })
  .then(() => {
    inputRef.current.value=" ";
  })
} catch(e){
  console.log(e);
}
  }
  return (
    <div className='mt-6 bg-white sm:flex rounded-2xl font-medium shadow-lg text-gray-500'> 
      <div className='flex p-4 mt-2 items-center'>
        <Image src={session?.data?.user?.image}
        width={40}
        height={40}
        className="rounded-full"
        alt="profile-pic"
        />
        <form className='flex flex-1'>
          <input type="text" placeholder={`How do you feel today,${session?.data?.user?.name}`} 
            ref={inputRef}
            className='rounded-full h-12 bg-gray-200 px-5 focus:outline-none flex-grow w-full ' 
          />
          <button type='submit'
           onClick={sendPost}
            className='hidden'>
            submit
          </button>
        </form>
      </div>
      <div className='flex justify-evenly p-4 border-t'>
        <div className='inputIcon'>
          <VideoCameraIcon className='h-4 text-red-500'/>
          <p className='text-xs sm:text-sm xl: text-base'>Live Video</p>
        </div>
        <div className='inputIcon'>
          <CameraIcon className='h-4 text-green-500'/>
          <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
        </div>
        <div className='inputIcon'>
          <FaceSmileIcon className='h-4 text-yellow-500'/>
          <p className='text-xs sm:text-sm xl:text-base'>Feelings</p>
        </div>
      </div>
    </div>
  )
}

export default Inputboxs;
