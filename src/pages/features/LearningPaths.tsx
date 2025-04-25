
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Book, CheckCircle, ChevronRight, Code, FileText, GraduationCap, Map, Monitor, TerminalSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const learningPaths = [
  {
    id: 'full-stack',
    title: 'Full-Stack Developer',
    description: 'Become a versatile developer capable of working on both front-end and back-end aspects of web applications.',
    progress: 40,
    stages: [
      { name: 'HTML & CSS Fundamentals', complete: true },
      { name: 'JavaScript Essentials', complete: true },
      { name: 'React Frontend Development', complete: false },
      { name: 'Node.js Backend Development', complete: false },
      { name: 'Database Integration', complete: false },
      { name: 'Full-Stack Projects', complete: false }
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    icon: Monitor
  },
  {
    id: 'data-science',
    title: 'Data Science & ML Engineer',
    description: 'Master data analysis, visualization, and machine learning techniques to extract insights and build intelligent systems.',
    progress: 20,
    stages: [
      { name: 'Python Programming', complete: true },
      { name: 'Data Analysis with Pandas', complete: false },
      { name: 'Data Visualization', complete: false },
      { name: 'Statistical Analysis', complete: false },
      { name: 'Machine Learning Basics', complete: false },
      { name: 'Deep Learning', complete: false }
    ],
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-Learn', 'TensorFlow'],
    icon: TerminalSquare
  },
  {
    id: 'devops',
    title: 'DevOps Engineer',
    description: 'Learn to bridge development and operations with continuous integration, delivery, and infrastructure as code.',
    progress: 10,
    stages: [
      { name: 'Linux Fundamentals', complete: true },
      { name: 'Version Control (Git)', complete: false },
      { name: 'CI/CD Pipelines', complete: false },
      { name: 'Docker & Containerization', complete: false },
      { name: 'Kubernetes', complete: false },
      { name: 'Cloud Infrastructure', complete: false }
    ],
    skills: ['Linux', 'Git', 'Docker', 'Jenkins', 'Kubernetes', 'AWS'],
    icon: Code
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Developer',
    description: 'Create native and cross-platform mobile applications for iOS and Android devices.',
    progress: 5,
    stages: [
      { name: 'JavaScript Essentials', complete: true },
      { name: 'React Fundamentals', complete: false },
      { name: 'React Native Basics', complete: false },
      { name: 'Mobile UI/UX Design', complete: false },
      { name: 'Mobile State Management', complete: false },
      { name: 'Publishing & Deployment', complete: false }
    ],
    skills: ['JavaScript', 'React', 'React Native', 'Redux', 'Mobile UI/UX', 'API Integration'],
    icon: Map
  }
];

const LearningPaths = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold mb-4">Learning Path Roadmaps</h1>
            <p className="text-xl text-muted-foreground">
              Structured learning journeys to guide you toward your career goals
            </p>
          </div>
          
          <div className="grid gap-8">
            {learningPaths.map((path) => (
              <Card key={path.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-primary/10">
                        <path.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{path.title}</CardTitle>
                        <CardDescription className="mt-1">{path.description}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="mt-1">
                      {path.progress}% Complete
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <Progress value={path.progress} className="h-2 mb-6" />
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3 text-muted-foreground">Learning Stages</h3>
                    <div className="space-y-3">
                      {path.stages.map((stage, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className={`rounded-full p-1 ${stage.complete ? 'bg-green-100 text-green-600' : 'bg-muted text-muted-foreground'}`}>
                            {stage.complete ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : (
                              <span className="flex h-4 w-4 items-center justify-center text-xs font-bold">{index + 1}</span>
                            )}
                          </div>
                          <div className="text-sm font-medium">{stage.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-3 text-muted-foreground">Skills You'll Learn</h3>
                    <div className="flex flex-wrap gap-2">
                      {path.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                <Separator />
                
                <CardFooter className="p-4">
                  <Button asChild>
                    <Link to={`/learning-paths/${path.id}`} className="flex items-center gap-1">
                      View Path <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 bg-muted/30 border rounded-lg p-6 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Not sure which path to choose?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Take our personalized assessment to find the learning path that best matches your interests and career goals.
            </p>
            <Button size="lg">Take Career Assessment</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LearningPaths;
