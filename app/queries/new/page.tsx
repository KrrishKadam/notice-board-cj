import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { MessageSquare, ArrowLeft, Send } from "lucide-react"
import Link from "next/link"

export default function NewQueryPage() {
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
            <h1 className="text-3xl font-bold text-gray-900">Ask a Question</h1>
            <p className="text-gray-600">Get help from your peers and faculty members</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Question Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-green-600" />
                    Post Your Question
                  </CardTitle>
                  <CardDescription>Be specific and clear to get the best answers from the community</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Question Title */}
                  <div className="space-y-2">
                    <Label htmlFor="title">Question Title</Label>
                    <Input
                      id="title"
                      placeholder="e.g., When is the deadline for semester project submission?"
                      className="text-base"
                    />
                  </div>

                  {/* Category Selection */}
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="academic">Academic</SelectItem>
                        <SelectItem value="hostel">Hostel</SelectItem>
                        <SelectItem value="library">Library</SelectItem>
                        <SelectItem value="career">Career</SelectItem>
                        <SelectItem value="facilities">Facilities</SelectItem>
                        <SelectItem value="events">Events</SelectItem>
                        <SelectItem value="general">General</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Question Details */}
                  <div className="space-y-2">
                    <Label htmlFor="content">Question Details</Label>
                    <Textarea
                      id="content"
                      placeholder="Provide more details about your question. Include any relevant context, deadlines, or specific information that might help others answer your question."
                      className="min-h-[150px] text-base"
                    />
                  </div>

                  {/* Author Name (Optional) */}
                  <div className="space-y-2">
                    <Label htmlFor="author">Your Name (Optional)</Label>
                    <Input id="author" placeholder="Leave blank to post anonymously" className="text-base" />
                    <p className="text-sm text-gray-500">You can choose to post anonymously or with your name</p>
                  </div>

                  {/* Submit Button */}
                  <Button className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Post Question
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Guidelines Sidebar */}
            <div className="space-y-6">
              {/* Posting Guidelines */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Posting Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm space-y-2">
                    <p>• Be specific and clear in your question</p>
                    <p>• Choose the most appropriate category</p>
                    <p>• Search existing questions first</p>
                    <p>• Use respectful language</p>
                    <p>• Provide context when necessary</p>
                    <p>• Thank those who help you</p>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Popular Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm space-y-1">
                    <p>
                      <strong>Academic:</strong> Assignments, exams, courses
                    </p>
                    <p>
                      <strong>Hostel:</strong> Room allocation, facilities
                    </p>
                    <p>
                      <strong>Library:</strong> Books, resources, timings
                    </p>
                    <p>
                      <strong>Career:</strong> Internships, placements
                    </p>
                    <p>
                      <strong>General:</strong> Campus life, events
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm space-y-2">
                    <div className="p-2 bg-green-50 rounded">
                      <p className="font-medium">Library hours extended</p>
                      <p className="text-gray-600">Answered 2 hours ago</p>
                    </div>
                    <div className="p-2 bg-green-50 rounded">
                      <p className="font-medium">Hostel Wi-Fi issues</p>
                      <p className="text-gray-600">3 new replies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
