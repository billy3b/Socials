"use client"

import React from "react";
import { useSession,} from "next-auth/react"
import HeaderIcon from "./HeaderIcon";

import {
  BellIcon,
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/solid";

import {
  MagnifyingGlassCircleIcon,
  PlayIcon,
  FireIcon
} from "@heroicons/react/24/outline";


const Header = () => {

  const session = useSession();


  return (
    <div className="flex sticky top-0 z-50 bg-white lg:px-5 shadow-md items-center justify-start">
      {/* left */}
      <div >
        <FireIcon width={30} height={30}/>
      </div>
      <div className="flex ml-4 items-center rounded-full bg-gray-100 p-2">
        <MagnifyingGlassCircleIcon className="h-6 text-gray-600" />
        <input className='hidden md:inline-flex flex  items-center bg-transparent outline-none placeholder-gray-500; flex-shrink' type="text" placeholder="search here" />
      </div>
      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md: space-x-2">
          <HeaderIcon icons={HomeIcon}/>
          <HeaderIcon icons={PlayIcon}/>
          <HeaderIcon icons={UserGroupIcon}/>
        </div>
      </div>
      {/* right */}
      <div className="flex items-center justify-end sm: space-x-2">  
      {/* profilepic */}
      
      <HeaderIcon src={session?.data?.user?.image}
      alt="profilepic" 
      className="rounded-full"
       /> 

        <p className="whitespace-nowrap font-semibold pr-3 cursor-pointer"
          
        >{session?.data?.user?.name}
        </p>

        <BellIcon className="icon" />
        <ChatBubbleLeftIcon className="icon"/>
        <ChevronDownIcon className="icon" />
        <ViewColumnsIcon className="icon" />
      
      </div>
    </div>
  );
};

export default Header;
