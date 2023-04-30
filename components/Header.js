"use client"

import React from "react";
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import { useSession,} from "next-auth/react"

import {
  BellIcon,
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/solid";

import {
  FlagIcon,
  MagnifyingGlassCircleIcon,
  PlayIcon,
  ShoppingCartIcon,
  FireIcon
} from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";

const Header = () => {

  const session = useSession();
  const source = session?.data?.user?.image;

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
          <HeaderIcon active Icon={HomeIcon}/>
          <HeaderIcon Icon={FlagIcon}/>
          <HeaderIcon Icon={PlayIcon}/>
          <HeaderIcon Icon={ShoppingCartIcon}/>
          <HeaderIcon Icon={UserGroupIcon}/>
        </div>
      </div>
      {/* right */}
      <div className="flex items-center justify-end sm: space-x-2">  
      {/* profilepic */}
      
      <Image src={source}
      width={40}
      height={40}
      alt="profilepic" 
      className="rounded-full"
      onClick={signOut} /> 

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
