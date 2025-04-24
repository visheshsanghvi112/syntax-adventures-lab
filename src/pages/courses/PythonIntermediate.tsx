
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Code, Play, CheckCircle } from 'lucide-react';

const PythonIntermediate = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Intermediate Python Programming</h1>
            <div className="flex items-center gap-4 mb-4">
              <Badge>Intermediate</Badge>
              <span className="text-muted-foreground">38 Lessons</span>
              <span className="text-muted-foreground">12 Hours</span>
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
                  <p>Take your Python skills to the next level with this intermediate course. Learn object-oriented programming, file handling, exception management, and more to become a more proficient Python developer.</p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What You'll Learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Object-Oriented Programming</li>
                      <li>File I/O operations</li>
                      <li>Exception handling</li>
                      <li>Regular expressions</li>
                      <li>Working with databases</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Prerequisites</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Basic Python knowledge</li>
                      <li>Familiarity with programming concepts</li>
                      <li>Completion of Python Basics course (recommended)</li>
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
                      <li>Real-world projects</li>
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
                    <CardTitle>Module 1: Object-Oriented Programming</CardTitle>
                    <CardDescription>Master Python's OOP features</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4">
                        <Play className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Classes and Objects</p>
                          <p className="text-sm text-muted-foreground">Creating and using classes in Python</p>
                        </div>
                      </li>
                      <li className="flex items-center gap-4">
                        <Play className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Inheritance and Polymorphism</p>
                          <p className="text-sm text-muted-foreground">Extending and modifying class behavior</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Module 2: File Operations</CardTitle>
                    <CardDescription>Working with files and directories</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4">
                        <Play className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Reading and Writing Files</p>
                          <p className="text-sm text-muted-foreground">Text and binary file operations</p>
                        </div>
                      </li>
                      <li className="flex items-center gap-4">
                        <Play className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Working with CSV and JSON</p>
                          <p className="text-sm text-muted-foreground">Handling structured data formats</p>
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
                        <span>Intermediate Python eBook</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <Code className="h-5 w-5 text-primary" />
                        <span>Code Examples Repository</span>
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

export default PythonIntermediate;
