import { useSession } from 'next-auth/react'
import React from 'react'

import {
    ChevronDownIcon,
    UsersIcon,
    CalendarIcon,
    ClockIcon,
    ComputerDesktopIcon
  } from "@heroicons/react/24/solid";
  
  import {
    ShoppingBagIcon,
  } from "@heroicons/react/24/outline";

import SidebarRow from './SidebarRow';


const Sidebar = () => {
    const session = useSession();

  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
        <SidebarRow source= {session?.data?.user?.name} />
        <SidebarRow Icon = {UsersIcon} title="Users" />
        <SidebarRow Icon = {ShoppingBagIcon} title = "Shopping" />
        <SidebarRow Icon = {ComputerDesktopIcon} title = "Desktop" />
        <SidebarRow Icon = {CalendarIcon} title="Calendar" />
        <SidebarRow Icon = {ClockIcon} title="Clock" />
        <SidebarRow Icon = {ChevronDownIcon} title ="ChevronDown" />
      
    </div>
  )
}

export default Sidebar;
