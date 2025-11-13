
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { MessageCircle, Users, TrendingUp, Plus, Eye, ThumbsUp, Mail, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default async function ForumsPage() {
  const session = await getServerSession(authOptions);
  
  // Get forum categories with post counts
  const categories = await prisma.forumCategory.findMany({
    where: { isActive: true },
    orderBy: { order: 'asc' },
    include: {
      _count: {
        select: { posts: true }
      }
    }
  });

  // Get recent posts
  const recentPosts = await prisma.forumPost.findMany({
    where: { isApproved: true },
    take: 5,
    orderBy: { createdAt: 'desc' },
    include: {
      author: {
        select: { name: true, avatar: true }
      },
      category: {
        select: { name: true, color: true }
      },
      _count: {
        select: { comments: true }
      }
    }
  });

  const totalPosts = await prisma.forumPost.count();
  const totalUsers = await prisma.user.count();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-blue-800 mb-6">
              Community Forums
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with fellow moringa enthusiasts, share experiences, ask questions, 
              and learn from our growing community of farmers and health advocates.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{totalPosts}</div>
              <div className="text-gray-600">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{totalUsers}</div>
              <div className="text-gray-600">Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{categories.length}</div>
              <div className="text-gray-600">Categories</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!session ? (
          /* Not logged in - show sign up prompt */
          <div className="text-center bg-blue-50 rounded-lg p-8 mb-12">
            <MessageCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Join the Conversation
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Sign up or sign in to participate in our community forums, ask questions, 
              share your moringa experiences, and connect with other enthusiasts.
            </p>
            <div className="space-x-4">
              <Link href="/auth/signup">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Create Account
                </Button>
              </Link>
              <Link href="/auth/signin">
                <Button variant="outline">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        ) : !(session.user as any)?.emailVerified ? (
          /* Logged in but email not verified */
          <Alert variant="destructive" className="mb-12 bg-yellow-50 border-yellow-300">
            <AlertCircle className="h-5 w-5 text-yellow-600" />
            <AlertTitle className="text-yellow-900 font-bold">Email Verification Required</AlertTitle>
            <AlertDescription className="text-yellow-800">
              <p className="mb-4">
                Your email address has not been verified yet. To participate in the forums and access full features, 
                please verify your email by clicking the link we sent to <strong>{session.user?.email}</strong>.
              </p>
              <div className="space-y-2">
                <p className="text-sm font-medium">Didn't receive the email?</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Check your spam or junk folder</li>
                  <li>Make sure you're checking the correct email address</li>
                  <li>Wait a few minutes for the email to arrive</li>
                </ul>
              </div>
            </AlertDescription>
          </Alert>
        ) : (
          /* Logged in and verified - show create post button */
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Welcome back, {session.user?.name}</h2>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/forums/create">
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Link>
            </Button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Categories */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Forum Categories</h2>
            
            <div className="space-y-4">
              {categories.map((category) => (
                <Card key={category.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: category.color || '#3b82f6' }}
                        >
                          <MessageCircle className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">
                            {category.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-800">
                          {category._count.posts}
                        </div>
                        <div className="text-sm text-gray-500">posts</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Recent Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Recent Posts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentPosts.length > 0 ? (
                  recentPosts.map((post) => (
                    <div key={post.id} className="border-b border-gray-200 last:border-0 pb-3 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <Badge 
                          style={{ backgroundColor: post.category.color || '#3b82f6' }}
                          className="text-white text-xs"
                        >
                          {post.category.name}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {new Date(post.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <h4 className="font-medium text-gray-800 text-sm mb-1 line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>by {post.author.name}</span>
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            {post.viewCount}
                          </span>
                          <span className="flex items-center">
                            <MessageCircle className="h-3 w-3 mr-1" />
                            {post._count.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm text-center py-4">
                    No posts yet. Be the first to start a discussion!
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card className="bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800">Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-green-700 space-y-2">
                  <li>• Be respectful and supportive to all members</li>
                  <li>• Share accurate information about moringa</li>
                  <li>• Use appropriate language and stay on-topic</li>
                  <li>• No spam or self-promotion</li>
                  <li>• Help create a welcoming environment</li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
