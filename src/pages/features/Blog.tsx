
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Book, BookOpen, Search, Tag, Calendar, User, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

// Sample blog data
const articles = [
  {
    id: 'understanding-react-hooks',
    title: 'Understanding React Hooks: A Comprehensive Guide',
    excerpt: 'React Hooks have revolutionized how we write React components. Learn how to leverage useState, useEffect, and custom hooks to write cleaner, more efficient code.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=800&auto=format&fit=crop',
    author: 'Jane Smith',
    date: '2023-06-15',
    category: 'web',
    tags: ['React', 'Hooks', 'Frontend', 'JavaScript'],
    readTime: '8 min read'
  },
  {
    id: 'python-data-science-libraries',
    title: 'Essential Python Libraries for Data Science in 2023',
    excerpt: 'Discover the most important Python libraries for data analysis, visualization, and machine learning that every data scientist should know.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?q=80&w=800&auto=format&fit=crop',
    author: 'Michael Johnson',
    date: '2023-05-28',
    category: 'data',
    tags: ['Python', 'Data Science', 'Libraries', 'Machine Learning'],
    readTime: '10 min read'
  },
  {
    id: 'mastering-git-workflows',
    title: 'Mastering Git Workflows for Team Collaboration',
    excerpt: 'Learn different Git workflows that can improve your team\'s collaboration, code quality, and deployment processes.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=800&auto=format&fit=crop',
    author: 'Alex Rodriguez',
    date: '2023-06-05',
    category: 'devops',
    tags: ['Git', 'Workflows', 'Team Collaboration', 'DevOps'],
    readTime: '7 min read'
  },
  {
    id: 'javascript-es6-features',
    title: 'JavaScript ES6 Features Every Developer Should Know',
    excerpt: 'Dive into the most useful ES6 features that have transformed JavaScript development and how to use them effectively in your projects.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=800&auto=format&fit=crop',
    author: 'Sarah Williams',
    date: '2023-05-20',
    category: 'web',
    tags: ['JavaScript', 'ES6', 'Web Development'],
    readTime: '6 min read'
  },
  {
    id: 'cybersecurity-best-practices',
    title: 'Cybersecurity Best Practices for Web Developers',
    excerpt: 'Protect your applications from common security threats with these essential cybersecurity practices every web developer should implement.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=800&auto=format&fit=crop',
    author: 'David Chen',
    date: '2023-06-12',
    category: 'security',
    tags: ['Cybersecurity', 'Web Development', 'Security', 'Best Practices'],
    readTime: '9 min read'
  },
  {
    id: 'docker-containers-explained',
    title: 'Docker Containers Explained for Beginners',
    excerpt: 'Demystifying Docker containers and showing you how to use them to streamline your development and deployment processes.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=800&auto=format&fit=crop',
    author: 'Mark Thompson',
    date: '2023-06-08',
    category: 'devops',
    tags: ['Docker', 'Containers', 'DevOps', 'Deployment'],
    readTime: '8 min read'
  }
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filter articles based on search query and category
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold mb-4">Technical Articles & Tips</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dive into our collection of in-depth articles, tutorials, and guides to master programming concepts
            </p>
          </div>
          
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full sm:w-auto">
              <TabsList className="w-full sm:w-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web Dev</TabsTrigger>
                <TabsTrigger value="data">Data Science</TabsTrigger>
                <TabsTrigger value="devops">DevOps</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div>
            {filteredArticles.length > 0 ? (
              <div className="space-y-8">
                {filteredArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto relative">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col flex-grow p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" /> {new Date(article.date).toLocaleDateString()}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <User className="h-3.5 w-3.5" /> {article.author}
                        </span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                      <p className="text-muted-foreground mb-4 flex-grow">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex flex-wrap gap-2">
                          {article.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="font-normal">
                              {tag}
                            </Badge>
                          ))}
                          {article.tags.length > 3 && (
                            <Badge variant="outline" className="font-normal">
                              +{article.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                        <Button variant="ghost" size="sm" className="gap-1">
                          Read More <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                  <Book className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  We couldn't find any articles matching your search criteria. Try adjusting your filters or search query.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {setSearchQuery(''); setActiveCategory('all');}}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
          
          <Separator className="my-16" />
          
          {/* Featured Articles Section */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Featured Articles</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {articles.slice(0, 3).map((article) => (
                <Card key={article.id} className="overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3 mr-1" /> {new Date(article.date).toLocaleDateString()}
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <CardDescription className="line-clamp-2">
                      {article.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="ghost" size="sm" className="gap-1 ml-auto">
                      Read More <ChevronRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Popular Tags Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Tag className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Popular Topics</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'Python', 'React', 'Data Science', 'Machine Learning', 'Web Development', 
                'DevOps', 'Docker', 'Git', 'Node.js', 'Frontend', 'Backend', 'Security', 'Cloud', 'Algorithms'].map((tag) => (
                <Button key={tag} variant="outline" size="sm">
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
