
import React from 'react';
import { Button } from '@/components/ui/button';
import { useCoursesContext } from '@/contexts/CoursesContext';
import { BookOpen, Code, ArrowRight } from 'lucide-react';

const HomeHero = () => {
  const { courses, setActiveCourse, setActiveModule, setActiveLesson } = useCoursesContext();

  const handleStartLearning = () => {
    if (courses.length > 0) {
      const firstCourse = courses[0];
      const firstModule = firstCourse.modules[0];
      const firstLesson = firstModule.lessons[0];
      
      setActiveCourse(firstCourse.id);
      setActiveModule(firstModule.id);
      setActiveLesson(firstLesson.id);
    }
  };

  return (
    <div className="container px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Learn to Code with Interactive Lessons
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Master Python programming from scratch with our step-by-step interactive lessons. 
            Write and run code directly in your browser.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={handleStartLearning} className="gap-2">
              Start Learning
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View All Courses
            </Button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-primary/20 rounded-full z-0"></div>
            <div className="bg-card border rounded-xl shadow-lg p-6 z-10 relative">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-full p-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Structured Learning</h3>
                    <p className="text-sm text-muted-foreground">Step-by-step courses from basics to advanced</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Interactive Code Editor</h3>
                    <p className="text-sm text-muted-foreground">Write and run Python code in the browser</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm font-medium mb-1.5">Popular courses:</div>
                  <div className="space-y-2">
                    {courses.slice(0, 3).map((course, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>{course.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
