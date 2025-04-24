
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Map } from 'lucide-react';

const LearningPaths = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-4xl font-bold mb-8">Learning Path Roadmaps</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Map className="h-5 w-5" />
                Full-Stack Developer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={40} className="mb-4" />
              <p className="mb-4">Complete path to becoming a full-stack developer</p>
              <Button>View Path</Button>
            </CardContent>
          </Card>
          
          {/* Add more learning paths */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LearningPaths;
