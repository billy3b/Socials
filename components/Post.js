import Image from 'next/image'
import React from 'react'
import {HandThumbUpIcon, ChatBubbleOvalLeftIcon, ShareIcon} from "@heroicons/react/24/outline";


const Post = ({name,message,timestamp,image,postImage }) => {
  return (
    <div className='flex flex-col overflow-scroll'>
      <div className='bg-white p-5 mt-5 rounded-t-2xl shadow-sm'>
        <div className='flex items-center space-x-2'>
          <div>
            <img src={image} alt='' width={40} height={40} />
          </div>
          <div>
            <p className='font-medium'>{name}</p>
            <p className='text-xs'>
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className='pt-4'>{message}</p>
      </div>
      {postImage && (
        <div className='md:h-96 bg-white'>
          <Image src={postImage} alt='imagepost' width="600" height="600"/>
        </div>
      )}
      {/* footer */}
      <div className='bg-white text-gray-300 shadow-md flex justify-between rounded-b-2xl border-t'>
        <div className='rounded-none inputIcon'>
          <HandThumbUpIcon className='h-4'/>
          <p className='text-xs sm:text-base'>Like</p>
        </div>
          
        <div className='rounded-none inputIcon'>
        <ChatBubbleOvalLeftIcon className='h-4'/>
          <p className='text-xs sm:text-base'>comment</p>
        </div>
        
        <div className='rounded-none inputIcon'>
          <ShareIcon className='h-4'/>
          <p className='text-xs sm:text-base'>share</p>
        </div>
      </div>
    </div>
  )
}

export default Post
