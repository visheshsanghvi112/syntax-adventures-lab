
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgressTracker from '@/components/ProgressTracker';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarIcon, CheckCircle, BookOpen, Code, Timer } from 'lucide-react';
import sampleProgress from '@/data/progressData';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // In a real application, this data would come from an API or database
  const progressMetrics = sampleProgress;
  
  // Calculate some statistics for the summary cards
  const totalCourses = progressMetrics.courseProgress.length;
  const completedLessons = progressMetrics.courseProgress.reduce((acc, course) => acc + course.lessonsCompleted, 0);
  const totalQuizzes = progressMetrics.quizScores.length;
  const avgQuizScore = Math.round(progressMetrics.quizScores.reduce((acc, quiz) => acc + quiz.score, 0) / totalQuizzes);
  
  // Calculate streak (in real app, would be based on actual login/activity history)
  const streak = 5;
  
  // Most recent activity (in real app, would be based on actual activity)
  const recentActivity = [
    { type: 'lesson', title: 'Python Variables and Data Types', date: new Date(2023, 6, 10) },
    { type: 'quiz', title: 'JavaScript Variables Quiz', date: new Date(2023, 6, 9) },
    { type: 'challenge', title: 'String Manipulation Challenge', date: new Date(2023, 6, 8) },
    { type: 'project', title: 'Calculator Project', date: new Date(2023, 6, 5) },
  ];
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-4xl font-bold mb-2">Your Dashboard</h1>
        <p className="text-muted-foreground mb-8">Track your progress and learning journey</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Courses Enrolled</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-3xl font-bold">{totalCourses}</div>
                <div className="bg-primary/10 p-2 rounded-full">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Lessons Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-3xl font-bold">{completedLessons}</div>
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Average Quiz Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-3xl font-bold">{avgQuizScore}%</div>
                <div className="bg-amber-100 p-2 rounded-full">
                  <Code className="h-5 w-5 text-amber-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Learning Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-3xl font-bold">{streak} days</div>
                <div className="bg-blue-100 p-2 rounded-full">
                  <Timer className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ProgressTracker metrics={progressMetrics} />
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest learning activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-muted rounded-full p-2 mt-0.5">
                        {activity.type === 'lesson' && <BookOpen className="h-4 w-4 text-muted-foreground" />}
                        {activity.type === 'quiz' && <Code className="h-4 w-4 text-muted-foreground" />}
                        {activity.type === 'challenge' && <Code className="h-4 w-4 text-muted-foreground" />}
                        {activity.type === 'project' && <CheckCircle className="h-4 w-4 text-muted-foreground" />}
                      </div>
                      <div>
                        <p className="font-medium">{activity.title}</p>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <CalendarIcon className="h-3 w-3 mr-1" />
                          <span>{activity.date.toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-muted-foreground">
                  View All Activity
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recommended Next Steps</CardTitle>
                <CardDescription>Continue where you left off</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to="/courses/python-basics" className="block p-3 rounded-md bg-muted/40 hover:bg-muted transition-colors">
                  <div className="font-medium">Continue Python Basics</div>
                  <div className="text-sm text-muted-foreground mt-0.5">75% complete - Resume learning</div>
                </Link>
                <Link to="/quiz" className="block p-3 rounded-md bg-muted/40 hover:bg-muted transition-colors">
                  <div className="font-medium">Take Python Data Types Quiz</div>
                  <div className="text-sm text-muted-foreground mt-0.5">10 questions - Test your knowledge</div>
                </Link>
                <Link to="/projects" className="block p-3 rounded-md bg-muted/40 hover:bg-muted transition-colors">
                  <div className="font-medium">Start Python File I/O Project</div>
                  <div className="text-sm text-muted-foreground mt-0.5">Beginner project - Apply your skills</div>
                </Link>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to="/courses">Explore All Courses</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
