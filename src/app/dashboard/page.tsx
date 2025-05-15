'use client'

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  LayoutGrid,
  Users,
  List,
  Sparkles,
  Download,
  Briefcase,
  Send,
  Mail,
  ChevronUp,
  ChevronDown,
  User as UserIcon,
  Settings as SettingsIcon,
  Moon,
  LogOut,
  House,
} from "lucide-react"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Navbar2 from "@/components/Navbar2";
export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
      <Navbar2 />


        {/* Main Content */}
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-2">
    <House className="w-8 h-8" />
    Dashboard
  </h1>            <h2 className="text-xl font-semibold mb-2">Account Activity</h2>

          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
