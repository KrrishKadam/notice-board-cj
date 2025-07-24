import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Digital Notice Board - College Portal",
  description: "Interactive digital notice board for college announcements, polls, queries, and anonymous feedback",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-8">
                <h1 className="text-xl font-bold text-gray-900">Digital Notice Board</h1>
                <div className="hidden md:flex items-center gap-6">
                  <a href="/" className="text-gray-600 hover:text-gray-900">
                    Home
                  </a>
                  <a href="/queries" className="text-gray-600 hover:text-gray-900">
                    All Questions
                  </a>
                  <a href="/queries/new" className="text-gray-600 hover:text-gray-900">
                    Ask Question
                  </a>
                  <a href="/anonymous" className="text-gray-600 hover:text-gray-900">
                    Anonymous Report
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a href="/admin" className="text-sm text-gray-600 hover:text-gray-900">
                  Admin
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-4">Digital Notice Board</h3>
                <p className="text-gray-400 text-sm">
                  Your central hub for college communication, feedback, and community engagement.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2 text-sm">
                  <a href="/polls" className="block text-gray-400 hover:text-white">
                    Polls & Voting
                  </a>
                  <a href="/queries" className="block text-gray-400 hover:text-white">
                    Q&A Forum
                  </a>
                  <a href="/anonymous" className="block text-gray-400 hover:text-white">
                    Anonymous Reports
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-400">Campus Security: 911</p>
                  <p className="text-gray-400">IT Support: (555) 123-4570</p>
                  <p className="text-gray-400">help@college.edu</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2024 College Digital Notice Board. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
