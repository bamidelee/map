'use client'

import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import image2 from '@/public/Imag2.png'
import { usePathname } from "next/navigation";


export default function Header() {
    const pathname = usePathname()
    return (
        <header className="w-full h-[4rem] text-gray-100 px-6 justify-between  flex items-center border-b">
          { pathname === '/procurement/quotes'?  <div className="flex items-center gap-2">
                <Icon width="24" height="24" icon={'weui:back-filled'} />
                <span className="text-[0.875rem]">Back</span>
            </div> : <div></div>}
            <div className="flex items-center gap-4">
                <div className="flex relative items-center mr-4">
                    <Input className="w-[28rem] h-[2.5rem] border-[#E4E7EC] pl-10" placeholder="Search here..." />
                    <Icon className="absolute left-2" width="24" height="24" icon={'material-symbols:search'} />
                </div>
                <Icon width="24" height="24" icon={'mdi:bell-outline'} />
                <Icon width="24" height="24" icon={'token:chat'} />
                <div className="flex items-center gap-1">
                    <Avatar className="h-[2rem] w-[2rem]">
                        <AvatarImage src={image2.src} alt="user" />
                        <AvatarFallback className="bg-[#b2b2b2]">MB</AvatarFallback>
                    </Avatar>
                    <Icon width="24" height="24" icon={'ep:arrow-down'} />
                </div>
            </div>
        </header>
    )
}