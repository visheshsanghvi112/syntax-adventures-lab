
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Code, Play, CheckCircle, BarChart } from 'lucide-react';

const DataScience = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Data Science with Python</h1>
            <div className="flex items-center gap-4 mb-4">
              <Badge>Intermediate</Badge>
              <span className="text-muted-foreground">32 Lessons</span>
              <span className="text-muted-foreground">11 Hours</span>
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
                  <p>Learn to analyze and visualize data using Python's powerful data science libraries. This course covers data manipulation with Pandas, visualization with Matplotlib, and introductory statistical analysis techniques.</p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What You'll Learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>NumPy for numerical computing</li>
                      <li>Pandas for data manipulation</li>
                      <li>Data cleaning techniques</li>
                      <li>Data visualization with Matplotlib</li>
                      <li>Basic statistical analysis</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Prerequisites</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Basic Python programming knowledge</li>
                      <li>Familiarity with basic math concepts</li>
                      <li>No prior data science experience needed</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Course Format</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Hands-on video tutorials</li>
                      <li>Data analysis exercises</li>
                      <li>Real-world datasets</li>
                      <li>Data visualization projects</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="space-y-6">
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Module 1: Introduction to Data Analysis</CardTitle>
                    <CardDescription>Getting started with Python data tools</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4">
                        <Play className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">NumPy Fundamentals</p>
                          <p className="text-sm text-muted-foreground">Working with arrays and numerical computations</p>
                        </div>
                      </li>
                      <li className="flex items-center gap-4">
                        <Play className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Pandas Introduction</p>
                          <p className="text-sm text-muted-foreground">DataFrames and Series for structured data</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Module 2: Data Visualization</CardTitle>
                    <CardDescription>Creating insightful visual representations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4">
                        <Play className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Matplotlib Basics</p>
                          <p className="text-sm text-muted-foreground">Creating various types of plots</p>
                        </div>
                      </li>
                      <li className="flex items-center gap-4">
                        <Play className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Advanced Visualizations</p>
                          <p className="text-sm text-muted-foreground">Interactive and customized charts</p>
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
                        <span>Data Science with Python eBook</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <BarChart className="h-5 w-5 text-primary" />
                        <span>Sample Datasets</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <Code className="h-5 w-5 text-primary" />
                        <span>Jupyter Notebook Templates</span>
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

export default DataScience;
