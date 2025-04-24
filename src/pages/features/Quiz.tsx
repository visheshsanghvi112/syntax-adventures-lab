
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const Quiz = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-4xl font-bold mb-8">Interactive Quizzes</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Python Basics Quiz</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={60} className="mb-4" />
              <p className="mb-4">Test your knowledge of Python fundamentals</p>
              <Button>Start Quiz</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Web Development Quiz</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={30} className="mb-4" />
              <p className="mb-4">HTML, CSS, and JavaScript challenges</p>
              <Button>Start Quiz</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quiz;
