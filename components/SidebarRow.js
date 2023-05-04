import React from 'react'


const SidebarRow = ({source, Icon, title}) => {
  return (
    <div>
      {Icon && (
        <Icon className="h-8 w-8 text-blue-500 hover:bg-gray-200 active:border-b-2 active:border-blue-500 rounded-full" />
        )}
    <p className='hidden sm:inline-flex font-medium'>{title}</p>
    </div>
  )
}

export default SidebarRow
