import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ThumbsUp, Clock, ArrowLeft, Send, Heart } from "lucide-react"
import Link from "next/link"

const queryData = {
  id: 1,
  title: "When is the deadline for semester project submission?",
  content:
    "I need to know the exact deadline for submitting our final semester projects. Is there any extension available? I'm working on a complex machine learning project and could use a few extra days to polish it. Has anyone else requested an extension this semester?",
  author: "Anonymous Student",
  category: "Academic",
  timestamp: "2 hours ago",
  likes: 12,
  status: "answered",
  replies: [
    {
      id: 1,
      content:
        "The deadline is February 28th, 2024. No extensions are typically granted unless there are exceptional circumstances. You should contact your project supervisor directly.",
      author: "Dr. Sarah Johnson",
      timestamp: "1 hour ago",
      likes: 8,
      isAnswer: true,
    },
    {
      id: 2,
      content:
        "I'm in the same boat! Working on a data science project and it's taking longer than expected. Maybe we can form a study group to help each other?",
      author: "Mike Chen",
      timestamp: "45 minutes ago",
      likes: 3,
      isAnswer: false,
    },
    {
      id: 3,
      content:
        "Check the student portal - there was an announcement last week about possible extensions for technical projects. You might still be able to apply.",
      author: "Lisa Park",
      timestamp: "30 minutes ago",
      likes: 5,
      isAnswer: false,
    },
  ],
}

export default function QueryDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Question Details</h1>
            <p className="text-gray-600">View and respond to community questions</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Original Question */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-3">{queryData.title}</CardTitle>
                  <CardDescription className="text-base text-gray-700">{queryData.content}</CardDescription>
                </div>
                <div className="flex flex-col items-end gap-2 ml-4">
                  <Badge variant={queryData.status === "answered" ? "default" : "secondary"}>{queryData.status}</Badge>
                  <Badge variant="outline">{queryData.category}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{queryData.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{queryData.author}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        {queryData.timestamp}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {queryData.likes}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Replies Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Replies ({queryData.replies.length})</h2>

            <div className="space-y-4">
              {queryData.replies.map((reply) => (
                <Card key={reply.id} className={reply.isAnswer ? "border-l-4 border-l-blue-500 bg-blue-50/50" : ""}>
                  <CardContent className="p-6">
                    {reply.isAnswer && <Badge className="mb-3 bg-blue-600">✓ Accepted Answer</Badge>}
                    <p className="text-gray-700 mb-4">{reply.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">{reply.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{reply.author}</p>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            {reply.timestamp}
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        {reply.likes}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Add Reply */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Add Your Reply</CardTitle>
              <CardDescription>Help answer this question or add additional information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Share your knowledge or experience to help answer this question..."
                className="min-h-[120px]"
              />
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Be respectful and constructive in your response</p>
                <Button>
                  <Send className="h-4 w-4 mr-2" />
                  Post Reply
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Related Questions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Related Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <Link href="/queries/2" className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <p className="font-medium text-sm">How to submit project documentation?</p>
                  <p className="text-xs text-gray-500">Academic • 3 replies</p>
                </Link>
                <Link href="/queries/3" className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <p className="font-medium text-sm">Project presentation guidelines</p>
                  <p className="text-xs text-gray-500">Academic • 7 replies</p>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
