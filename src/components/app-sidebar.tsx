"use client"
import * as React from "react"
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
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"

const databaseItems = [
  { key: "dashboard", label: "Dashboard", icon: LayoutGrid, path: "/dashboard/dashboard" },
  { key: "investors", label: "Investors", icon: Users, path: "/dashboard/investors" },
  { key: "lists", label: "Lists", icon: List, path: "/dashboard/lists" },
  { key: "enrichment", label: "Enrichment", icon: Sparkles, path: "/dashboard/enrichment" },
  { key: "exports", label: "Exports", icon: Download, path: "/dashboard/exports" },
]

const outreachItems = [
  { key: "raise", label: "Raise", icon: Briefcase, path: "/dashboard/raise" },
  { key: "campaigns", label: "Campaigns", icon: Send, path: "/dashboard/campaigns" },
  { key: "email", label: "Email Accounts", icon: Mail, path: "/dashboard/email" },
]

const user = {
  name: "John Doe",
  email: "johndoe@capitalninja.ai",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg", // Placeholder avatar
}

const userMenuItems = [
  { key: "profile", label: "Profile", icon: UserIcon },
  { key: "settings", label: "Settings", icon: SettingsIcon },
  { key: "darkmode", label: "Dark Mode", icon: Moon },
  { key: "logout", label: "Log Out", icon: LogOut, danger: true },
]

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter()
  const pathname = usePathname()
  const [activeTab, setActiveTab] = React.useState("dashboard")
  const [userMenuOpen, setUserMenuOpen] = React.useState(false)
  const userMenuRef = React.useRef<HTMLDivElement>(null)

  // Close menu on outside click
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(e.target as Node)
      ) {
        setUserMenuOpen(false)
      }
    }
    if (userMenuOpen) {
      document.addEventListener("mousedown", handleClick)
    } else {
      document.removeEventListener("mousedown", handleClick)
    }
    return () => document.removeEventListener("mousedown", handleClick)
  }, [userMenuOpen])

  return (
    <Sidebar {...props}>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-muted-foreground px-3 pt-4 pb-2 tracking-widest">DATABASE</SidebarGroupLabel>
          <SidebarMenu>
            {databaseItems.map((item) => (
              <SidebarMenuItem key={item.key}>
                <Link href={item.path} className="w-full">
                  <SidebarMenuButton
                    isActive={pathname === item.path}
                    className={`mt-2 w-full justify-start cursor-pointer transition-colors text-base px-3 flex items-center
                      ${pathname === item.path
                        ? 'bg-black text-white font-bold rounded-xl py-3.5'
                        : 'text-foreground hover:bg-muted rounded-lg py-3'}
                    `}
                  >
                    <item.icon className="mr-3 w-5 h-5" />
                    {item.label}
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="mt-2 text-xs text-muted-foreground px-3 pt-6 pb-2 tracking-widest">OUTREACH</SidebarGroupLabel>
          <SidebarMenu>
            {outreachItems.map((item) => (
              <SidebarMenuItem key={item.key}>
                <Link href={item.path} className="w-full">
                  <SidebarMenuButton
                    isActive={pathname === item.path}
                    className={`mt-2 w-full justify-start cursor-pointer transition-colors text-base px-3 flex items-center
                      ${pathname === item.path
                        ? 'bg-black text-white font-bold rounded-xl py-3.5'
                        : 'text-foreground hover:bg-muted rounded-lg py-3'}
                    `}
                  >
                    <item.icon className="mr-3 w-5 h-5" />
                    {item.label}
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="relative" ref={userMenuRef}>
          {userMenuOpen && (
            <div
            className={`absolute bottom-16 left-1/2 -translate-x-1/2 mb-2 w-56 rounded-xl bg-muted/30 shadow-lg border border-muted-foreground/10 backdrop-blur z-50 flex flex-col p-2 transition-all duration-200 ease-out
              ${userMenuOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'}`}
                          style={{
                transformOrigin: 'bottom center',
              }}
            >
              {userMenuItems.map((item) => (
                <button
                  key={item.key}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-left transition-colors hover:bg-muted/60 ${item.danger ? "text-red-500 hover:bg-red-50" : "text-foreground"}`}
                  onClick={() => {
                    setUserMenuOpen(false)
                    // Add logic for each action here
                  }}
                >
<item.icon className={`w-5 h-5 ${item.danger ? "text-red-500" : ""}`} />
{item.label}
                </button>
              ))}
            </div>
          )}
          <div
            className="flex items-center gap-3 p-4 border-t border-muted-foreground/10 cursor-pointer select-none"
            onClick={() => setUserMenuOpen((v) => !v)}
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full object-cover border"
            />
            <div className="flex flex-col min-w-0">
              <span className="font-medium truncate">{user.name}</span>
              <span className="text-xs text-muted-foreground truncate">{user.email}</span>
            </div>
            <span className={`ml-auto text-muted-foreground transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`}>

              <ChevronUp />
            </span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
