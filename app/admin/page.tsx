import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Users, BarChart3, Shield, MessageSquare, Eye, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Manage polls, queries, and anonymous reports</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">Admin</Badge>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold">1,247</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Open Queries</p>
                  <p className="text-2xl font-bold">48</p>
                </div>
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Reports</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <Shield className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="queries" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="queries">Queries Management</TabsTrigger>
            <TabsTrigger value="reports">Anonymous Reports</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Queries Management */}
          <TabsContent value="queries" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Queries Management</h2>
              <div className="flex gap-2">
                <Input placeholder="Search queries..." className="w-64" />
                <Button variant="outline">Filter</Button>
              </div>
            </div>

            <div className="space-y-4">
              {[1, 2, 3, 4].map((query) => (
                <Card key={query}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold">When is the deadline for semester project submission?</h3>
                        <p className="text-sm text-gray-600 mt-1">Posted by Anonymous Student • 2 hours ago</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-gray-500">3 replies</span>
                          <span className="text-sm text-gray-500">12 likes</span>
                          <Badge variant="outline">Academic</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Reply
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Anonymous Reports */}
          <TabsContent value="reports" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Anonymous Reports</h2>
              <div className="flex gap-2">
                <Button variant="outline">Mark All as Reviewed</Button>
                <Button variant="outline">Export Reports</Button>
              </div>
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map((report) => (
                <Card key={report} className="border-l-4 border-l-red-500">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="destructive">High Priority</Badge>
                          <Badge variant="outline">Bullying</Badge>
                          <span className="text-sm text-gray-500">Submitted 2 hours ago</span>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">
                          Report regarding inappropriate behavior in the computer lab. Student feels unsafe and requests
                          immediate attention...
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">Unreviewed</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          Review
                        </Button>
                        <Button size="sm" variant="outline">
                          Mark Resolved
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-bold">Analytics & Reports</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Poll Participation</CardTitle>
                  <CardDescription>Voting activity over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
                    <BarChart3 className="h-12 w-12 text-gray-400" />
                    <span className="ml-2 text-gray-500">Chart placeholder</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Query Categories</CardTitle>
                  <CardDescription>Distribution of query types</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
                    <BarChart3 className="h-12 w-12 text-gray-400" />
                    <span className="ml-2 text-gray-500">Chart placeholder</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
