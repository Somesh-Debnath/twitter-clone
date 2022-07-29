import React from 'react'
import Image from 'next/image'
import SidebarLink from './SidebarLink'
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[320px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-16">
        <Image src="https://rb.gy/ogau5a" width={30} height={30} />
      </div>
      <div className="mt-1 mb-2 xl:ml-16 max-h-[70%]">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} active={false} />
        <SidebarLink text="Notifications" Icon={BellIcon} active={false} />
        <SidebarLink text="Messages" Icon={InboxIcon} active={false} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} active={false} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} active={false} />
        <SidebarLink text="Profile" Icon={UserIcon} active={false} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} active={false} />
      </div>
      <button className="hidden xl:inline ml-[70px] bg-[#1d9bf0] text-white text-lg rounded-full w-48 h-[51px]  font-bold shadow-md hover:bg-[#1a8cd8]">
        Tweet
      </button>
      <div className='flex items-center text-[#d9d9d9] justify-center
      hoverAnimation xl:ml-16 xl:-mr-2 mt-auto' >
        <img src="https://rb.gy/ogau5a" alt=""
        className='h-8 w-8 rounded-full xl:mr-2.5' />
        <div className='hidden xl:inline leading-5'>
            <h4 className='font-bold '>Test User</h4>
            <p className='text-[#6e767d]'>@testUser2675</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-6" />
      </div>
    </div>
  )
}

export default Sidebar