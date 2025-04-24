
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Code, Play, CheckCircle } from 'lucide-react';

const PythonBasics = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Python Programming Fundamentals</h1>
            <div className="flex items-center gap-4 mb-4">
              <Badge>Beginner</Badge>
              <span className="text-muted-foreground">42 Lessons</span>
              <span className="text-muted-foreground">10 Hours</span>
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
                  <p>Master the fundamentals of Python programming through hands-on practice and real-world examples. This course is designed for complete beginners and will teach you everything you need to know to start coding in Python.</p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What You'll Learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Python syntax and basic concepts</li>
                      <li>Variables and data types</li>
                      <li>Control flow (if statements, loops)</li>
                      <li>Functions and modules</li>
                      <li>Basic error handling</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Prerequisites</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>No prior programming experience required</li>
                      <li>Basic computer skills</li>
                      <li>Willingness to learn and practice</li>
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
                      <li>Interactive coding exercises</li>
                      <li>Practice projects</li>
                      <li>Quizzes and assessments</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="space-y-6">
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Module 1: Getting Started with Python</CardTitle>
                    <CardDescription>Learn the basics of Python programming</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4">
                        <CheckCircle className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Introduction to Python</p>
                          <p className="text-sm text-muted-foreground">What is Python and why learn it?</p>
                        </div>
                      </li>
                      <li className="flex items-center gap-4">
                        <Play className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Setting Up Your Development Environment</p>
                          <p className="text-sm text-muted-foreground">Installing Python and choosing an IDE</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Additional modules would go here */}
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
                        <span>Course Textbook</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <Code className="h-5 w-5 text-primary" />
                        <span>Code Examples</span>
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

export default PythonBasics;
