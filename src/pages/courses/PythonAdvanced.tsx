
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Code, Play, CheckCircle } from 'lucide-react';

const PythonAdvanced = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Advanced Python Programming</h1>
            <div className="flex items-center gap-4 mb-4">
              <Badge>Advanced</Badge>
              <span className="text-muted-foreground">35 Lessons</span>
              <span className="text-muted-foreground">15 Hours</span>
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
                  <p>Master complex Python concepts and techniques used by professional developers. This advanced course covers decorators, generators, metaclasses, concurrency, and other sophisticated Python features.</p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What You'll Learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Decorators and closures</li>
                      <li>Generators and iterators</li>
                      <li>Context managers</li>
                      <li>Metaclasses</li>
                      <li>Async programming</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Prerequisites</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Solid Python programming skills</li>
                      <li>Experience with object-oriented programming</li>
                      <li>Completion of Intermediate Python (recommended)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Course Format</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Deep-dive video lectures</li>
                      <li>Advanced coding challenges</li>
                      <li>Complex project implementations</li>
                      <li>Performance optimization exercises</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="space-y-6">
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Module 1: Advanced Functions</CardTitle>
                    <CardDescription>Mastering Python's function capabilities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4">
                        <Play className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Decorators</p>
                          <p className="text-sm text-muted-foreground">Creating and chaining decorators</p>
                        </div>
                      </li>
                      <li className="flex items-center gap-4">
                        <Play className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Closures and Scopes</p>
                          <p className="text-sm text-muted-foreground">Advanced variable scoping techniques</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Module 2: Generators and Iterators</CardTitle>
                    <CardDescription>Efficient data processing techniques</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4">
                        <Play className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Generator Functions and Expressions</p>
                          <p className="text-sm text-muted-foreground">Creating memory-efficient iterables</p>
                        </div>
                      </li>
                      <li className="flex items-center gap-4">
                        <Play className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Custom Iterators</p>
                          <p className="text-sm text-muted-foreground">Building iterable objects from scratch</p>
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
                        <span>Advanced Python Programming Guide</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <Code className="h-5 w-5 text-primary" />
                        <span>GitHub Repository with Examples</span>
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

export default PythonAdvanced;
