
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Award, BookOpen, Code } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-4xl font-bold mb-8">Your Learning Dashboard</h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Courses Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={75} className="mb-2" />
              <p className="text-sm text-muted-foreground">6 of 8 courses completed</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Coding Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={60} className="mb-2" />
              <p className="text-sm text-muted-foreground">12 challenges completed</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={40} className="mb-2" />
              <p className="text-sm text-muted-foreground">4 badges earned</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
