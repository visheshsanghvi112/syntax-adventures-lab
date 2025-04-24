
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ArrowRight, Play, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tutorials = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Programming Tutorials</h1>
            <p className="text-lg text-muted-foreground">
              Step-by-step guides to help you master specific programming concepts and techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Building a Web Scraper with Python",
                level: "Intermediate",
                duration: "45 mins",
                description: "Learn to extract data from websites using Beautiful Soup and Requests",
                topics: ["Python", "Web Scraping", "Beautiful Soup", "Requests"]
              },
              {
                title: "Creating Your First React App",
                level: "Beginner",
                duration: "60 mins",
                description: "Step-by-step guide to building a simple React application from scratch",
                topics: ["React", "JavaScript", "Web Development", "Frontend"]
              },
              {
                title: "Data Visualization with Matplotlib",
                level: "Intermediate",
                duration: "50 mins",
                description: "Learn to create compelling visualizations from your data",
                topics: ["Python", "Data Science", "Matplotlib", "Visualization"]
              },
              {
                title: "Building RESTful APIs with Flask",
                level: "Advanced",
                duration: "75 mins",
                description: "Create powerful APIs using Python and the Flask microframework",
                topics: ["Python", "Flask", "API", "Backend", "RESTful"]
              },
              {
                title: "JavaScript ES6+ Features",
                level: "Intermediate",
                duration: "40 mins",
                description: "Modern JavaScript features that every developer should know",
                topics: ["JavaScript", "ES6", "Frontend", "Web Development"]
              },
              {
                title: "CSS Flexbox and Grid Layout",
                level: "Beginner",
                duration: "55 mins",
                description: "Master modern CSS layout techniques for responsive design",
                topics: ["CSS", "Flexbox", "Grid", "Responsive Design"]
              },
              {
                title: "Git & GitHub for Beginners",
                level: "Beginner",
                duration: "65 mins",
                description: "Version control fundamentals for developers",
                topics: ["Git", "GitHub", "Version Control", "Collaboration"]
              },
              {
                title: "Building a Todo App with Vue.js",
                level: "Intermediate",
                duration: "70 mins",
                description: "Create a fully functional todo application using Vue.js",
                topics: ["Vue.js", "JavaScript", "Frontend", "State Management"]
              },
              {
                title: "Introduction to Machine Learning with scikit-learn",
                level: "Advanced",
                duration: "90 mins",
                description: "Get started with ML using Python's scikit-learn library",
                topics: ["Python", "Machine Learning", "scikit-learn", "Data Science"]
              }
            ].map((tutorial, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={tutorial.level === "Beginner" ? "default" : tutorial.level === "Intermediate" ? "secondary" : "outline"}>
                      {tutorial.level}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      {tutorial.duration}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{tutorial.title}</CardTitle>
                  <CardDescription>{tutorial.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tutorial.topics.map((topic, i) => (
                      <Badge key={i} variant="secondary" className="font-normal">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link to="#" className="flex items-center justify-center gap-2">
                      <Play className="h-4 w-4" /> Start Tutorial
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Looking for more learning materials?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <Link to="/resources/documentation" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" /> Documentation
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/resources/cheat-sheets" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" /> Cheat Sheets
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/resources/community" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" /> Community
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tutorials;
