


import { SidebarProvider} from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sideBar"
import Header from "../header"


export default function SideBar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <Header/>
        <main>
          {/* <SidebarTrigger /> */}
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}
