
'use client'

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader
} from "@/components/ui/sidebar"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Icon } from "@iconify/react";


import Image from "next/image"
import logo from '@/public/logo.png'
import SideBarMenuItem from "./sideBarMenuItem"
import image1 from '@/public/Image1.png'



export function AppSidebar() {
    
    // Menu items.
    const items = [
        {
            title: "Dashboard",
            url: "#",
            icon: 'material-symbols:team-dashboard',
        },
        {
            title: "Inventory",
            url: "#",
            icon: 'fluent:box-24-filled',
        },
        {
            title: "Procurement",
            collapsible: true,
            icon: 'fluent:cart-16-filled',
            subMenu: [
                {
                    title: "Quotes",
                    url: "/procurement/quotes",

                },
                {
                    title: "Orders",
                    url: "/",

                },
            ]
        },
        {
            title: "Finance",
            url: "/",
            icon: 'fa-solid:money-bill',
            collapsible: true,
            subMenu: []
        },
        {
            title: "Communication",
            url: "/",
            icon: 'ph:chat-circle-dots-fill',
            badge: 10
        },

        {
            title: "Calendar",
            url: "/",
            icon: 'fa6-solid:calendar-minus',
            badge: 10
        },

        {
            title: "Contracts",
            url: "/",
            icon: 'iconamoon:file-document-fill',
        },
    ]

    const menuFoot = [
        {
            title: "Support",
            url: "/",
            icon: 'mingcute:question-fill',
        },

        {
            title: "Settings",
            url: "/",
            icon: 'material-symbols:settings-rounded',
        },
    ]



    return (
        <Sidebar className="" >
            <SidebarHeader className="justify-center" >
                <Image alt="logo" src={logo} className="mx-auto" />
            </SidebarHeader>
            <SidebarContent className="">
                <SidebarGroup >
                    <SidebarGroupContent>
                        {items.map((item, i) =>
                            <SideBarMenuItem item={item} key={i} />

                        )}
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup />

                <SidebarGroup >
                    <SidebarGroupContent>
                        {menuFoot.map((item, i) =>
                            <SideBarMenuItem item={item} key={i} />

                        )}
                    </SidebarGroupContent>
                </SidebarGroup>
              

            </SidebarContent>
            <SidebarFooter className="py-8"  >
                <div className="flex gap-2 items-center px-4">
                    <Avatar className="h-[2.5rem] w-[2.5rem">
                        <AvatarImage src={image1.src}  alt="user"/>
                        <AvatarFallback className="bg-[#b2b2b2]">MB</AvatarFallback>
                    </Avatar>
                    <div className="grow overflow-hidden text-ellipsis text-[0.875rem]">
                        <span className="font-[700] flex" >
                            Mark Benson
                        </span>
                        <span className=" ">
                            markbenson@coremed.com
                        </span>
                    </div>
                    <Icon className="" color="#667185" width="30" height="24" icon={'radix-icons:exit'} />
                </div>

            </SidebarFooter>
        </Sidebar>
    )
}
