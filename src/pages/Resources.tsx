
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, FileText, Book, Code, Download, ExternalLink, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Learning Resources</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Access our comprehensive collection of documentation, tutorials, cheat sheets, and reference guides to support your learning journey.
              </p>
              <div className="relative max-w-lg mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search resources..." className="pl-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="documentation" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
                  <TabsTrigger value="documentation">Documentation</TabsTrigger>
                  <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                  <TabsTrigger value="cheatsheets">Cheat Sheets</TabsTrigger>
                  <TabsTrigger value="community">Community</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="documentation" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Python Language Reference",
                      description: "Comprehensive reference for Python syntax, built-in functions and libraries.",
                      icon: Book
                    },
                    {
                      title: "JavaScript Guide",
                      description: "Complete reference manual for JavaScript features and syntax.",
                      icon: Book
                    },
                    {
                      title: "HTML & CSS Reference",
                      description: "Detailed documentation on HTML elements and CSS properties.",
                      icon: FileText
                    },
                    {
                      title: "React Documentation",
                      description: "Official guides and API reference for React library.",
                      icon: Code
                    },
                    {
                      title: "Data Science with Python",
                      description: "Documentation for NumPy, Pandas, and Matplotlib libraries.",
                      icon: BookOpen
                    },
                    {
                      title: "SQL Fundamentals",
                      description: "Reference for SQL syntax, commands, and database operations.",
                      icon: FileText
                    }
                  ].map((item, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <item.icon className="h-6 w-6 text-primary" />
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                        <CardTitle className="mt-2">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="ghost" className="w-full" asChild>
                          <Link to="#" className="flex items-center justify-center gap-2">
                            View Documentation
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center">
                  <Button variant="outline">View All Documentation</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="tutorials" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Building a Web Scraper with Python",
                      level: "Intermediate",
                      duration: "45 mins",
                      description: "Learn to extract data from websites using Beautiful Soup and Requests"
                    },
                    {
                      title: "Creating Your First React App",
                      level: "Beginner",
                      duration: "60 mins",
                      description: "Step-by-step guide to building a simple React application from scratch"
                    },
                    {
                      title: "Data Visualization with Matplotlib",
                      level: "Intermediate",
                      duration: "50 mins",
                      description: "Learn to create compelling visualizations from your data"
                    },
                    {
                      title: "Building RESTful APIs with Flask",
                      level: "Advanced",
                      duration: "75 mins",
                      description: "Create powerful APIs using Python and the Flask microframework"
                    },
                    {
                      title: "JavaScript ES6+ Features",
                      level: "Intermediate",
                      duration: "40 mins",
                      description: "Modern JavaScript features that every developer should know"
                    },
                    {
                      title: "CSS Flexbox and Grid Layout",
                      level: "Beginner",
                      duration: "55 mins",
                      description: "Master modern CSS layout techniques for responsive design"
                    }
                  ].map((item, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-sm font-medium text-primary">
                            {item.level}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {item.duration}
                          </div>
                        </div>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="ghost" className="w-full" asChild>
                          <Link to="#" className="flex items-center justify-center gap-2">
                            View Tutorial
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center">
                  <Button variant="outline">View All Tutorials</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="cheatsheets" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Python Cheat Sheet",
                      description: "Quick reference for Python syntax, built-in functions and common operations",
                      format: "PDF"
                    },
                    {
                      title: "Git Commands Cheat Sheet",
                      description: "Essential Git commands for version control workflows",
                      format: "PDF"
                    },
                    {
                      title: "CSS Flexbox Cheat Sheet",
                      description: "Visual guide to CSS flexbox properties and values",
                      format: "PNG"
                    },
                    {
                      title: "Regular Expressions Cheat Sheet",
                      description: "Common regex patterns and syntax for pattern matching",
                      format: "PDF"
                    },
                    {
                      title: "SQL Commands Cheat Sheet",
                      description: "Quick reference for common SQL queries and operations",
                      format: "PDF"
                    },
                    {
                      title: "JavaScript Array Methods",
                      description: "Comprehensive list of array methods with examples",
                      format: "PDF"
                    }
                  ].map((item, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <Link to="#" className="flex items-center justify-center gap-2">
                            <Download className="h-4 w-4 mr-1" />
                            Download {item.format}
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center">
                  <Button variant="outline">View All Cheat Sheets</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="community" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Community Forum</CardTitle>
                      <CardDescription>
                        Join our community forum to ask questions, share your projects, and connect with other learners.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link to="/forum">Visit Forum</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Code Review</CardTitle>
                      <CardDescription>
                        Get feedback on your code from experienced developers and fellow students.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link to="/code-review">Submit Code</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Showcase</CardTitle>
                      <CardDescription>
                        Browse projects created by our students and share your own work with the community.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link to="/projects">Explore Projects</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Study Groups</CardTitle>
                      <CardDescription>
                        Find or create study groups to learn together with others who share your interests.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link to="/study-groups">Find Groups</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-12 bg-primary/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="mb-6">
                Subscribe to our newsletter to receive updates on new resources, tutorials, and learning paths.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <Input placeholder="Your email address" type="email" className="sm:flex-1" />
                <Button type="submit">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
