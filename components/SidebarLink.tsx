import React from 'react'

function SidebarLink({text,Icon,active}:{text:string,Icon:any,active:boolean}) {
  return (
    <div
    className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-base leading-3 space-x-2 hoverAnimation ${
      active && "font-bold"
    }`}
    
  >
    <Icon className="h-5" />
    <span className="hidden xl:inline">{text}</span>
  </div>
  )
}

export default SidebarLink