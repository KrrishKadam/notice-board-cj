import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageSquare, Shield, Users, Clock, ThumbsUp, Plus, ArrowRight } from "lucide-react"
import Link from "next/link"

const recentQueries = [
  {
    id: 1,
    title: "When is the deadline for semester project submission?",
    content:
      "I need to know the exact deadline for submitting our final semester projects. Is there any extension available?",
    author: "Anonymous Student",
    category: "Academic",
    timestamp: "2 hours ago",
    replies: 3,
    likes: 12,
    status: "answered",
  },
  {
    id: 2,
    title: "Hostel room allocation process for next semester",
    content: "Can someone explain the process for hostel room allocation? What documents are required?",
    author: "John D.",
    category: "Hostel",
    timestamp: "5 hours ago",
    replies: 7,
    likes: 8,
    status: "active",
  },
  {
    id: 3,
    title: "Library book renewal procedure",
    content: "How can I renew library books online? The website seems to be down.",
    author: "Sarah M.",
    category: "Library",
    timestamp: "1 day ago",
    replies: 2,
    likes: 5,
    status: "active",
  },
  {
    id: 4,
    title: "Internship opportunities for CS students",
    content: "Are there any internship programs available through the college placement cell?",
    author: "Alex R.",
    category: "Career",
    timestamp: "2 days ago",
    replies: 15,
    likes: 23,
    status: "answered",
  },
  {
    id: 5,
    title: "Campus Wi-Fi password for guest network",
    content: "What's the current password for the guest Wi-Fi network in the main building?",
    author: "Maria L.",
    category: "General",
    timestamp: "3 days ago",
    replies: 1,
    likes: 4,
    status: "answered",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Digital Notice Board</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ask questions, get answers, and stay connected with your college community
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <MessageSquare className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">48</div>
              <div className="text-sm text-gray-600">Active Queries</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">1,247</div>
              <div className="text-sm text-gray-600">Active Students</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">Safe</div>
              <div className="text-sm text-gray-600">Anonymous Reporting</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Ask Question */}
          <Card className="hover:shadow-lg transition-shadow border-2 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <MessageSquare className="h-6 w-6" />
                Ask a Question
              </CardTitle>
              <CardDescription>Get help from your peers and faculty members</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/queries/new">
                <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Post Your Question
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Anonymous Report */}
          <Card className="hover:shadow-lg transition-shadow border-2 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-700">
                <Shield className="h-6 w-6" />
                Anonymous Report
              </CardTitle>
              <CardDescription>Submit confidential feedback or report issues safely</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/anonymous">
                <Button className="w-full bg-purple-600 hover:bg-purple-700" size="lg">
                  <Shield className="h-4 w-4 mr-2" />
                  Submit Anonymously
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Recent Queries Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Questions</h2>
            <Link href="/queries">
              <Button variant="outline">
                View All Questions
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {recentQueries.map((query) => (
              <Card key={query.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">{query.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{query.content}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 ml-4">
                      <Badge variant={query.status === "answered" ? "default" : "secondary"}>{query.status}</Badge>
                      <Badge variant="outline">{query.category}</Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">{query.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-gray-600">{query.author}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        {query.timestamp}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MessageSquare className="h-4 w-4" />
                        {query.replies} replies
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <ThumbsUp className="h-4 w-4" />
                        {query.likes}
                      </div>
                      <Link href={`/queries/${query.id}`}>
                        <Button size="sm">View Details</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Help Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help Getting Started?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Browse existing questions to see if your query has already been answered, or post a new question to get
              help from the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/queries">
                <Button variant="outline" size="lg">
                  Browse All Questions
                </Button>
              </Link>
              <Link href="/queries/new">
                <Button size="lg">Ask Your First Question</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Admin Access */}
        <div className="text-center mt-12">
          <Link href="/admin">
            <Button variant="outline" size="lg">
              Faculty/Admin Panel
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
