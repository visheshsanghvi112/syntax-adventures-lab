
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCoursesContext } from '@/contexts/CoursesContext';
import { ArrowRight } from 'lucide-react';

const CourseCards = () => {
  const { courses, setActiveCourse, setActiveModule, setActiveLesson } = useCoursesContext();

  const handleStartCourse = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    if (course && course.modules.length > 0) {
      const firstModule = course.modules[0];
      const firstLesson = firstModule.lessons[0];
      
      setActiveCourse(course.id);
      setActiveModule(firstModule.id);
      setActiveLesson(firstLesson.id);
    }
  };

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Available Courses</h2>
        <Button variant="outline">View All</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Progress</span>
                  <span className="text-sm font-medium">
                    {course.completedLessons}/{course.totalLessons} lessons
                  </span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-value" 
                    style={{ width: `${(course.completedLessons / course.totalLessons) * 100}%` }}
                  />
                </div>
              </div>
              <ul className="space-y-2">
                {course.modules.slice(0, 3).map((module) => (
                  <li key={module.id} className="text-sm text-muted-foreground">
                    • {module.title}
                  </li>
                ))}
                {course.modules.length > 3 && (
                  <li className="text-sm text-muted-foreground">
                    • And {course.modules.length - 3} more modules
                  </li>
                )}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full gap-2" 
                onClick={() => handleStartCourse(course.id)}
              >
                {course.completedLessons > 0 ? "Continue Learning" : "Start Learning"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseCards;
