
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, MessageSquare, Code, GitBranch, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Community = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Join Our Developer Community</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Connect with fellow programmers, share your projects, get help, and collaborate on exciting initiatives.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg">
                  <Users className="mr-2 h-4 w-4" /> Join Community
                </Button>
                <Button variant="outline" size="lg">
                  <MessageSquare className="mr-2 h-4 w-4" /> Browse Forums
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="forums" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
                  <TabsTrigger value="forums">Forums</TabsTrigger>
                  <TabsTrigger value="code-review">Code Review</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="forums" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "General Discussion",
                      description: "Chat about programming, share resources, and discuss industry news",
                      posts: 1243,
                      threads: 85,
                      lastActive: "10 minutes ago"
                    },
                    {
                      title: "Python Help",
                      description: "Get assistance with Python code, libraries, and frameworks",
                      posts: 856,
                      threads: 124,
                      lastActive: "1 hour ago"
                    },
                    {
                      title: "Web Development",
                      description: "Discuss HTML, CSS, JavaScript, and modern web frameworks",
                      posts: 1102,
                      threads: 97,
                      lastActive: "30 minutes ago"
                    },
                    {
                      title: "Data Science & ML",
                      description: "Explore topics in data analysis, visualization, and machine learning",
                      posts: 743,
                      threads: 68,
                      lastActive: "2 hours ago"
                    },
                    {
                      title: "Career & Learning",
                      description: "Share learning resources, career advice, and job opportunities",
                      posts: 521,
                      threads: 43,
                      lastActive: "4 hours ago"
                    },
                    {
                      title: "Show & Tell",
                      description: "Show off your projects and get feedback from the community",
                      posts: 389,
                      threads: 32,
                      lastActive: "12 hours ago"
                    }
                  ].map((forum, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{forum.title}</CardTitle>
                        <CardDescription>{forum.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{forum.posts} posts</span>
                          <span>{forum.threads} threads</span>
                          <span>Active {forum.lastActive}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <Link to="#" className="flex items-center justify-center gap-2">
                            Browse Forum
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="code-review" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Code Review</CardTitle>
                    <CardDescription>
                      Get feedback on your code from experienced developers and peers.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Our code review platform helps you improve your coding skills by receiving constructive 
                      feedback from other developers. Share your code snippets or entire projects and get 
                      suggestions for improvements.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Submit for Review</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Upload your code and describe what you'd like feedback on.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full" asChild>
                            <Link to="#">
                              <Code className="mr-2 h-4 w-4" />
                              Submit Code
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Review Others</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Help others by reviewing their code and providing feedback.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full" asChild>
                            <Link to="#">
                              <Code className="mr-2 h-4 w-4" />
                              Browse Submissions
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="projects" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Community Projects</h2>
                  <p className="text-muted-foreground">
                    Explore projects created by community members or start collaborating on open-source initiatives.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Weather Dashboard",
                      description: "A React-based weather application with beautiful visualizations",
                      tech: ["React", "OpenWeather API", "Chart.js"],
                      contributors: 4
                    },
                    {
                      title: "Task Tracker API",
                      description: "RESTful API for task management built with Flask",
                      tech: ["Python", "Flask", "SQLAlchemy"],
                      contributors: 6
                    },
                    {
                      title: "Markdown Note Editor",
                      description: "A simple but powerful markdown editor for note-taking",
                      tech: ["JavaScript", "Marked.js", "Local Storage"],
                      contributors: 3
                    },
                    {
                      title: "Recipe Finder",
                      description: "App to find recipes based on available ingredients",
                      tech: ["Vue.js", "Firebase", "Food API"],
                      contributors: 5
                    },
                    {
                      title: "Budget Tracker",
                      description: "Personal finance tracking application with visualization",
                      tech: ["React", "D3.js", "IndexedDB"],
                      contributors: 2
                    },
                    {
                      title: "Code Snippet Library",
                      description: "Store and search for useful code snippets",
                      tech: ["Django", "PostgreSQL", "Bootstrap"],
                      contributors: 7
                    }
                  ].map((project, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tech.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="font-normal">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="text-xs text-muted-foreground flex items-center mt-3">
                          <Users className="h-3 w-3 mr-1" /> {project.contributors} contributors
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm" asChild>
                          <Link to="#">
                            <Eye className="mr-1 h-3 w-3" /> View
                          </Link>
                        </Button>
                        <Button size="sm" asChild>
                          <Link to="#">
                            <GitBranch className="mr-1 h-3 w-3" /> Contribute
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <Button variant="outline" size="lg">View All Projects</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="events" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Upcoming Events</h2>
                  <p className="text-muted-foreground">
                    Join our virtual workshops, study groups, and coding challenges.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Python Web Scraping Workshop",
                      description: "Learn to scrape websites ethically using Beautiful Soup and Requests",
                      date: "May 2, 2025",
                      time: "7:00 PM - 9:00 PM EST",
                      format: "Virtual",
                      host: "Alex Kim"
                    },
                    {
                      title: "React Hooks Deep Dive",
                      description: "Master React's hooks pattern for functional components",
                      date: "May 10, 2025",
                      time: "6:30 PM - 8:30 PM EST",
                      format: "Virtual",
                      host: "Julia Chen"
                    },
                    {
                      title: "Algorithmic Coding Challenge",
                      description: "Test your problem-solving skills with timed coding challenges",
                      date: "May 15, 2025",
                      time: "All day",
                      format: "Online",
                      host: "Community Team"
                    },
                    {
                      title: "Data Visualization with D3.js",
                      description: "Create beautiful and interactive data visualizations",
                      date: "May 22, 2025",
                      time: "7:00 PM - 9:30 PM EST",
                      format: "Virtual",
                      host: "Michael Singh"
                    }
                  ].map((event, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <Badge variant="outline" className="bg-primary/10 text-primary font-normal">
                            {event.date}
                          </Badge>
                          <div className="text-sm text-muted-foreground">
                            {event.format}
                          </div>
                        </div>
                        <CardTitle className="mt-2">{event.title}</CardTitle>
                        <CardDescription>{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Time:</span>
                            <span>{event.time}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Host:</span>
                            <span>{event.host}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Register Now</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Host Your Own Event</CardTitle>
                    <CardDescription>
                      Share your knowledge with the community by hosting a workshop or study group.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">
                      If you have expertise in a particular technology or topic, consider hosting 
                      a virtual event. We provide the platform and help promote your event to our community.
                    </p>
                    <Button variant="outline" asChild>
                      <Link to="#">Propose an Event</Link>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-12 bg-primary/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Join Our Community Newsletter</h2>
              <p className="mb-6">
                Subscribe to receive weekly updates, event notifications, and community highlights.
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

export default Community;
