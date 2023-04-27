import React from 'react'

const SidebarRow = ({source, Icon, title}) => {
  return (
    <div>
      {source && (
        <Image 
        className="rounded-full"
        src={source}
        alt={title}
        width={20}
        height={20}

        />
      )}

      {Icon && (
        <Icon className="h-8 w-8 text-blue-500" />
        )}
    <p className='hidden sm:inline-flex font-medium'>{title}</p>
    </div>
  )
}

export default SidebarRow
