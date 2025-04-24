
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Code, Search, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

// Course data structure
const courses = [
  {
    id: 'python-basics',
    title: 'Python Programming Fundamentals',
    description: 'Learn the core concepts of Python programming from scratch.',
    category: 'python',
    level: 'Beginner',
    lessons: 42,
    duration: '10 hours',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=500&auto=format&fit=crop',
    topics: ['Variables', 'Data Types', 'Control Flow', 'Functions', 'Modules']
  },
  {
    id: 'python-intermediate',
    title: 'Intermediate Python Programming',
    description: 'Take your Python skills to the next level with advanced concepts and techniques.',
    category: 'python',
    level: 'Intermediate',
    lessons: 38,
    duration: '12 hours',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=500&auto=format&fit=crop',
    topics: ['Object-Oriented Programming', 'File I/O', 'Exception Handling', 'Regular Expressions']
  },
  {
    id: 'python-advanced',
    title: 'Advanced Python Programming',
    description: 'Master complex Python concepts including generators, decorators, and metaprogramming.',
    category: 'python',
    level: 'Advanced',
    lessons: 35,
    duration: '15 hours',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=500&auto=format&fit=crop',
    topics: ['Decorators', 'Generators', 'Context Managers', 'Metaclasses', 'Async Programming']
  },
  {
    id: 'html-css-basics',
    title: 'HTML & CSS Fundamentals',
    description: 'Build the foundation of web development by mastering HTML and CSS.',
    category: 'web',
    level: 'Beginner',
    lessons: 30,
    duration: '8 hours',
    image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=500&auto=format&fit=crop',
    topics: ['HTML Structure', 'CSS Selectors', 'Box Model', 'Flexbox', 'Responsive Design']
  },
  {
    id: 'javascript-basics',
    title: 'JavaScript Essentials',
    description: 'Add interactivity to your websites with JavaScript fundamentals.',
    category: 'web',
    level: 'Beginner',
    lessons: 36,
    duration: '9 hours',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop',
    topics: ['Variables', 'Functions', 'DOM Manipulation', 'Events', 'Asynchronous JS']
  },
  {
    id: 'react-basics',
    title: 'React.js for Beginners',
    description: 'Learn the most popular JavaScript library for building user interfaces.',
    category: 'web',
    level: 'Intermediate',
    lessons: 40,
    duration: '14 hours',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=500&auto=format&fit=crop',
    topics: ['Components', 'Props', 'State', 'Hooks', 'Context API']
  },
  {
    id: 'data-analysis-python',
    title: 'Data Analysis with Python',
    description: 'Learn to analyze and visualize data using Python libraries like Pandas and Matplotlib.',
    category: 'data',
    level: 'Intermediate',
    lessons: 32,
    duration: '11 hours',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop',
    topics: ['NumPy', 'Pandas', 'Data Cleaning', 'Data Visualization', 'Statistical Analysis']
  },
  {
    id: 'machine-learning-basics',
    title: 'Introduction to Machine Learning',
    description: 'Get started with machine learning concepts and techniques using scikit-learn.',
    category: 'data',
    level: 'Intermediate',
    lessons: 38,
    duration: '16 hours',
    image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=500&auto=format&fit=crop',
    topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Feature Engineering']
  },
  {
    id: 'algorithms-fundamentals',
    title: 'Algorithms and Data Structures',
    description: 'Learn essential algorithms and data structures for efficient programming.',
    category: 'cs',
    level: 'Intermediate',
    lessons: 45,
    duration: '18 hours',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=500&auto=format&fit=crop',
    topics: ['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Sorting Algorithms', 'Search Algorithms']
  }
];

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  // Filter courses based on search query and selected category
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeTab === 'all' || course.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <div className="container py-8 px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-lg text-muted-foreground">
            Dive into our comprehensive learning paths designed to take you from beginner to expert in various programming domains.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="w-full md:w-1/3 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search courses..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="web">Web Dev</TabsTrigger>
              <TabsTrigger value="data">Data Science</TabsTrigger>
              <TabsTrigger value="cs">CS Fundamentals</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden flex flex-col h-full">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      {course.level}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Book className="h-3 w-3 mr-1" />
                      {course.lessons} lessons
                    </div>
                  </div>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.topics.slice(0, 4).map((topic, index) => (
                      <Badge key={index} variant="secondary" className="font-normal">
                        {topic}
                      </Badge>
                    ))}
                    {course.topics.length > 4 && (
                      <Badge variant="outline" className="font-normal">
                        +{course.topics.length - 4} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to={`/courses/${course.id}`} className="flex items-center justify-center gap-2">
                      Start Learning
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <BookOpen className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">No courses found</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              We couldn't find any courses matching your search. Try adjusting your filters or search query.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {setSearchQuery(''); setActiveTab('all');}}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
