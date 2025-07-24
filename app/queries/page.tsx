import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageSquare, ThumbsUp, Clock, ArrowLeft, Plus } from "lucide-react"
import Link from "next/link"

const queries = [
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
]

const categories = ["All", "Academic", "Hostel", "Library", "Career", "General"]

export default function QueriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
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
              <h1 className="text-3xl font-bold text-gray-900">Q&A Forum</h1>
              <p className="text-gray-600">Ask questions and get answers from the community</p>
            </div>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Ask Question
          </Button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
              {category}
            </Button>
          ))}
        </div>

        {/* Queries List */}
        <div className="space-y-6">
          {queries.map((query) => (
            <Card key={query.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-lg">{query.title}</CardTitle>
                      <Badge variant={query.status === "answered" ? "default" : "secondary"}>{query.status}</Badge>
                    </div>
                    <CardDescription className="text-base">{query.content}</CardDescription>
                  </div>
                  <Badge variant="outline">{query.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
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
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Queries
          </Button>
        </div>
      </div>
    </div>
  )
}
