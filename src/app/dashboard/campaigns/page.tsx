'use client'

import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import Navbar2 from "@/components/Navbar2"
import { Send } from "lucide-react"

export default function CampaignsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Navbar2 />
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Send className="w-8 h-8" />
              Campaigns
            </h1>
            
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">Campaign Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Active Campaigns</h3>
                  <p className="text-3xl font-bold">0</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Total Sent</h3>
                  <p className="text-3xl font-bold">0</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Response Rate</h3>
                  <p className="text-3xl font-bold">0%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 