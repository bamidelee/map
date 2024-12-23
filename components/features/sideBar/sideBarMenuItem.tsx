
import {
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem
} from "@/components/ui/sidebar"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"



import { Icon } from "@iconify/react";
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { Key, useState } from "react"
import { usePathname } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SideBarMenuItem({ item }: any) {

    const [open, setopen] = useState(true)
    const pathname = usePathname()

    
    return(
        <SidebarMenu>
            <Collapsible open={open} onOpenChange={setopen} defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                    {item.collapsible ? <CollapsibleTrigger className="" asChild>
                        <SidebarMenuButton className={`flex items-center justify-between gap-2  ${pathname.startsWith(`/${item.title.toLowerCase()}`) && 'bg-[#E3EAFB]'} `} >

                            <div className="flex items-center gap-3">
                                <Icon  color={` ${pathname.startsWith(`/${item.title.toLowerCase()}`) ? '#175CFF': '#667185'}`} width="24" height="24" icon={item.icon} />
                                <span className="text-[#344054]">{item.title}</span>
                            </div>
                            {open ? <ChevronDown /> : <ChevronUp />}

                        </SidebarMenuButton>

                    </CollapsibleTrigger> :
                        <SidebarMenuButton className="" >
                            <Link href={item.url} className="flex items-center justify-between w-full h-full">
                                <div className="flex items-center gap-3">
                                    <Icon color="#667185" width="24" height="24" icon={item.icon} />
                                    <span className="text-[#344054]">{item.title}</span>
                                </div>
                                {item.badge &&
                                    <span className="rounded-full bg-blue-100 text-background py px-2 text-xs">{item.badge}</span>
                                }
                            </Link>
                        </SidebarMenuButton>
                    }
                    <CollapsibleContent>
                        <SidebarMenuSub>
                            {item.collapsible && item.subMenu.map((o: { title: string, url: string }, i: Key) => <SidebarMenuSubItem className="" key={i} >
                                <SidebarMenuSubButton className={`${pathname.startsWith(`/${item.title.toLowerCase()}/${o.title.toLowerCase()}`) && 'bg-[#E3EAFB]'}`} asChild><Link href={o.url}>{o.title}</Link></SidebarMenuSubButton>
                            </SidebarMenuSubItem>)}
                        </SidebarMenuSub>
                    </CollapsibleContent>
                </SidebarMenuItem>
            </Collapsible>
        </SidebarMenu>
    )
}