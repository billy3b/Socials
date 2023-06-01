import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import { FaceSmileIcon } from '@heroicons/react/24/solid';
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/24/outline";
import { useRef } from 'react';
import { setDoc ,addDoc, collection, serverTimestamp,doc} from "firebase/firestore";
import { db, storage } from '../firebase';
import { ref, getDownloadURL, uploadString  } from "firebase/storage";
import HeaderIcon from './HeaderIcon';

const Inputboxs = () => {

  const session = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [ImageToPost, setImageToPost] = useState(null); 

  const sendPost = (event) => {
    event.preventDefault();
    if(!inputRef.current.value) return;
    try{  
    addDoc(collection(db, 'posts'), {
      message:inputRef.current.value,
      name:session?.data?.user?.name,
      email:session?.data?.user?.email,
      image:session?.data?.user?.image,   
      timestamp:serverTimestamp()
  })
  
  .then((docRef)=>{
    const postId = docRef.id;
    if(ImageToPost){
      const storageRef = ref(storage, `posts/${postId}`);
      const uploadTask = uploadString(storageRef, ImageToPost, 'data_url');
      uploadTask.then((snapshot) =>{
        getDownloadURL(snapshot.ref).then((url) =>{
          setDoc(doc(db, 'posts', postId),{
            postImage:url,
          },{ merge: true });
        })
      })
    }
  })
  
  inputRef.current.value=" ";
  removeImage();
  
} catch(e){
  console.log(e);
}
  }

  const addImageToPost = (event) => {
    const reader = new FileReader();
    if(event.target.files[0]){
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.onloadend = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    }

  }

  const removeImage= ( ) => {
    setImageToPost(null);
  }

  return (
    <div className='mt-6 bg-white sm:flex rounded-2xl font-medium shadow-lg text-gray-500'>
      <div className='flex p-4 mt-2 items-center'>
        <HeaderIcon src={session?.data?.user?.image}
          className="rounded-full"
          alt="profile-pic" />
        <form className='flex flex-1 flex-grow'>
          <input type="text" placeholder={`How do you feel today,${session?.data?.user?.name}`}
            ref={inputRef}
            className='rounded-full h-12 bg-gray-200 px-5 focus:outline-none flex-grow w-full ' />
          <button type='submit'
            onClick={sendPost}
            className='hidden'>
            submit
          </button>
        </form>

      {ImageToPost && (
        <div onClick={removeImage} className='flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-120 cursor-pointer'> 
          <img src={ImageToPost} alt = 'image-to-post' className='h-10 object-contain' />
          <p className='text-xs text-red text-center'>Remove</p>
        </div>
      )}

    </div><div className='flex justify-evenly p-4 border-t'>
        <div className='inputIcon'>
          <VideoCameraIcon className='h-4 text-red-500' />
          <p className='text-xs sm:text-sm xl: text-base'>Live Video</p>
        </div>
        <div onClick={() => filePickerRef.current.click()} className='inputIcon'>
          <CameraIcon className='h-4 text-green-500' />
          <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
          <input ref={filePickerRef} onChange={addImageToPost} type='file' hidden />
        </div>
        <div className='inputIcon'>
          <FaceSmileIcon className='h-4 text-yellow-500' />
          <p className='text-xs sm:text-sm xl:text-base'>Feelings</p>
        </div>
      </div>
    </div>
  )
}

export default Inputboxs;
