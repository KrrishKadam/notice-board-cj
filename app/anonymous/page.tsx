import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, Lock, Eye, ArrowLeft, Send } from "lucide-react"
import Link from "next/link"

export default function AnonymousPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100">
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
            <h1 className="text-3xl font-bold text-gray-900">Anonymous Reports</h1>
            <p className="text-gray-600">Submit confidential feedback or report issues safely</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Submission Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-purple-600" />
                    Submit Anonymous Report
                  </CardTitle>
                  <CardDescription>
                    Your identity will remain completely confidential. Only authorized faculty members can view
                    submissions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Category Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Report Category</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bullying">Bullying/Harassment</SelectItem>
                        <SelectItem value="mental-health">Mental Health Concern</SelectItem>
                        <SelectItem value="academic">Academic Issue</SelectItem>
                        <SelectItem value="facility">Facility Problem</SelectItem>
                        <SelectItem value="discrimination">Discrimination</SelectItem>
                        <SelectItem value="safety">Safety Concern</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Urgency Level */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Urgency Level</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - General feedback</SelectItem>
                        <SelectItem value="medium">Medium - Needs attention</SelectItem>
                        <SelectItem value="high">High - Urgent issue</SelectItem>
                        <SelectItem value="critical">Critical - Immediate action required</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Message</label>
                    <Textarea
                      placeholder="Describe your concern or feedback in detail. Be as specific as possible to help us address the issue effectively."
                      className="min-h-[150px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Submit Anonymously
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Information Sidebar */}
            <div className="space-y-6">
              {/* Privacy Assurance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Lock className="h-5 w-5 text-green-600" />
                    Privacy Guaranteed
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm">Complete Anonymity</h4>
                      <p className="text-xs text-gray-600">No personal information is collected or stored</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Eye className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm">Authorized Access Only</h4>
                      <p className="text-xs text-gray-600">Only designated faculty members can view reports</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm">Secure Storage</h4>
                      <p className="text-xs text-gray-600">All data is encrypted and securely stored</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Guidelines */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Submission Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm space-y-2">
                    <p>• Be specific and detailed in your report</p>
                    <p>• Include dates, times, and locations when relevant</p>
                    <p>• Avoid false or malicious reports</p>
                    <p>• Use appropriate language</p>
                    <p>• For emergencies, contact campus security directly</p>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contacts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Emergency Contacts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">
                    <p>
                      <strong>Campus Security:</strong> 911
                    </p>
                    <p>
                      <strong>Counseling Center:</strong> (555) 123-4567
                    </p>
                    <p>
                      <strong>Dean's Office:</strong> (555) 123-4568
                    </p>
                    <p>
                      <strong>Student Affairs:</strong> (555) 123-4569
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Success Message */}
          <Alert className="mt-8 border-green-200 bg-green-50 hidden">
            <Shield className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Your anonymous report has been submitted successfully. It will be reviewed by authorized faculty members
              within 24-48 hours.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
}
