
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Code, Play, CheckCircle } from 'lucide-react';

const WebDevelopment = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Web Development Fundamentals</h1>
            <div className="flex items-center gap-4 mb-4">
              <Badge>Beginner to Intermediate</Badge>
              <span className="text-muted-foreground">40 Lessons</span>
              <span className="text-muted-foreground">14 Hours</span>
            </div>
            <Progress value={0} className="w-full" />
          </div>

          <Tabs defaultValue="overview">
            <TabsList className="mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Learn modern web development from the ground up. This comprehensive course covers HTML, CSS, JavaScript, and introduces you to React.js for creating dynamic and responsive web applications.</p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What You'll Learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>HTML5 structure and semantics</li>
                      <li>CSS3 styling and responsive design</li>
                      <li>JavaScript fundamentals</li>
                      <li>DOM manipulation</li>
                      <li>React.js basics</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Prerequisites</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>No prior experience required</li>
                      <li>Basic computer skills</li>
                      <li>Willingness to practice regularly</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Course Format</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Video lectures</li>
                      <li>Coding exercises</li>
                      <li>Website building projects</li>
                      <li>Interactive challenges</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="space-y-6">
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Module 1: HTML Foundations</CardTitle>
                    <CardDescription>Building the structure of web pages</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4">
                        <Play className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">HTML Basics</p>
                          <p className="text-sm text-muted-foreground">Elements, attributes, and document structure</p>
                        </div>
                      </li>
                      <li className="flex items-center gap-4">
                        <Play className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Semantic HTML</p>
                          <p className="text-sm text-muted-foreground">Using the right elements for content</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Module 2: CSS Styling</CardTitle>
                    <CardDescription>Making websites visually appealing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4">
                        <Play className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">CSS Selectors and Properties</p>
                          <p className="text-sm text-muted-foreground">Targeting elements and applying styles</p>
                        </div>
                      </li>
                      <li className="flex items-center gap-4">
                        <Play className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Responsive Design</p>
                          <p className="text-sm text-muted-foreground">Creating layouts that work on all devices</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="resources" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Materials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <span>Web Development Handbook</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <Code className="h-5 w-5 text-primary" />
                        <span>Project Starter Files</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
