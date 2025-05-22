'use client'

import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import Navbar2 from "@/components/Navbar2"
import { useParams } from "next/navigation"
import { LayoutGrid, Users, List, Sparkles, Download, Briefcase, Send, Mail, Database, Calendar, House} from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const sectionIcons = {
  dashboard: House,
  investors: Users,
  lists: List,
  enrichment: Sparkles,
  exports: Download,
  raise: Briefcase,
  campaigns: Send,
  email: Mail,
}

const sectionTitles = {
  dashboard: "Dashboard",
  investors: "Investors",
  lists: "Lists",
  enrichment: "Enrichment",
  exports: "Exports",
  raise: "Raise",
  campaigns: "Campaigns",
  email: "Email Accounts",
}

export default function DashboardSection() {
  const params = useParams()
  const section = params.section as string
  const Icon = sectionIcons[section as keyof typeof sectionIcons]
  const title = sectionTitles[section as keyof typeof sectionTitles]

  // Placeholder data - replace with actual once granted access to the database
  const dashboardData = {
    totalLists: 3,
    totalInvestors: 3321,
    totalRecordsExported: 12,
    exportedSince: "May 2025",
    leadsEnriched: 1200,
    enrichedProcessed: "Total records processed",
    monthlyExportCredits: "0/200",
    exportCreditMonth: "May 2025",
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Navbar2 />
        {/* Main Content */}
        <div className="flex flex-1 flex-col gap-4 p-4">
          {section === 'dashboard' ? (
            <>
              {/* Dashboard Title */}
              <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Icon className="w-8 h-8" />
                {title}
              </h1>

              {/* Stats Cards Grid */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Lists
                    </CardTitle>
                    <List className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{dashboardData.totalLists}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Investors
                    </CardTitle>
                    <Database className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{dashboardData.totalInvestors}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Records Exported
                    </CardTitle>
                    <Download className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{dashboardData.totalRecordsExported}</div>
                    <p className="text-xs text-muted-foreground">
                      Since {dashboardData.exportedSince}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Leads Enriched
                    </CardTitle>
                    <Sparkles className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{dashboardData.leadsEnriched}</div>
                    <p className="text-xs text-muted-foreground">
                      {dashboardData.enrichedProcessed}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Monthly Export Credits
                    </CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{dashboardData.monthlyExportCredits}</div>
                    <p className="text-xs text-muted-foreground">
                      {dashboardData.exportCreditMonth}
                    </p>
                  </CardContent>
                </Card>
              </div>


              {/* Account Activity Card */}
              <Card className="mt-6 h-80">
                <CardHeader>
                  <CardTitle>Account Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-muted-foreground">No recent activity</div>
                  {/* Add actual account activity or have it dynamically update based on user activity */}
                </CardContent>
              </Card>
                           {/* Database Analytics Section */}
                           <h2 className="text-2xl font-semibold mt-8 mb-4">Database Analytics</h2>
              
                    {/* Geographic Distribution Card */}
                    <Card className="h-[900px] w-[1800px]">
                      <CardHeader>
                        <CardTitle>Geographic Distribution</CardTitle>
                        <p className="text-sm text-muted-foreground">Distribution of Limited Partners across North America</p>
                      </CardHeader>
                      <p className = "font-bold"> United States</p>
                      <CardContent className="flex">
                        <div className="w-1/2" style={{ height: '350px' }}>
                          <ComposableMap
                            projection="geoAlbers"
                            projectionConfig={{
                              scale: 1500, 
                              center: [0, 40],
                            }}
                            style={{
                              width: "100%",
                              height: "100%", 
                            }}
                          >
                            <Geographies geography="/north-america.json">
                              {({ geographies }) =>
                                geographies.map((geo) => (
                                  <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#EAEAEC"
                                    stroke="#6c719e"
                                    style={{
                                      default: {
                                        fill: "#90d4f4",
                                        outline: "none"
                                      },
                                      hover: {
                                        fill: "#10a4ec",
                                        outline: "none"
                                      },
                                      pressed: {
                                        fill: "#8cd4f4",
                                        outline: "none"
                                      }
                                    }}
                                  />
                                ))
                              }
                            </Geographies>
                          </ComposableMap>
                        </div>
                        <div className="w-1/2" style={{ height: '350px' }}>
                        <p className = "font-bold"> Canada</p>
                        <ComposableMap
                              projection="geoAlbers"
                              projectionConfig={{
                                scale: 1500,
                                center: [-15, 60],
                              }}
                              style={{
                                width: "100%",
                                height: "100%",

                              }}
                          >
                            <Geographies geography="/canada.json">
                              {({ geographies }) =>
                                geographies.map((geo) => (
                                  <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#EAEAEC"
                                    stroke="#6c719e"
                                    style={{
                                      default: {
                                        fill: "#90d4f4",
                                        outline: "none"
                                      },
                                      hover: {
                                        fill: "#10a4ec",
                                        outline: "none"
                                      },
                                      pressed: {
                                        fill: "#8cd4f4",
                                        outline: "none"
                                      }
                                    }}
                                  />
                                ))
                              }
                            </Geographies>
                          </ComposableMap>
                        </div>

                        <div className="w-1/2 pl-4 flex items-center">
      
                        </div>
                      </CardContent>
                    </Card>
                              {/* Account Activity Card */}
   
            </>
          ) : (
            <div className="bg-white shadow rounded-lg p-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Icon className="w-8 h-8" />
                {title}
              </h1>
              <h2 className="text-xl font-semibold mb-2">Account Activity</h2>
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 