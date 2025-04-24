
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCoursesContext } from '@/contexts/CoursesContext';
import { ArrowRight, BookOpen, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  // Course categories for visual differentiation
  const categoryColors = {
    python: 'bg-blue-500/10 text-blue-600 border-blue-200',
    web: 'bg-purple-500/10 text-purple-600 border-purple-200',
    data: 'bg-green-500/10 text-green-600 border-green-200',
    algorithms: 'bg-amber-500/10 text-amber-600 border-amber-200'
  };

  // Sample icons for visual enhancement
  const getIcon = (index: number) => {
    const icons = [BookOpen, Clock, Users];
    const Icon = icons[index % icons.length];
    return <Icon className="h-4 w-4" />;
  };

  return (
    <div className="container py-10 px-4" id="featured-courses">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Featured Courses</h2>
          <p className="text-muted-foreground mt-1">Begin your learning journey with these popular courses</p>
        </div>
        <Link to="/courses">
          <Button variant="outline" className="hidden md:flex">
            View All Courses
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <Card key={course.id} className="flex flex-col h-full overflow-hidden group">
            <div className={`h-2 w-full ${index % 4 === 0 ? 'bg-blue-500' : index % 4 === 1 ? 'bg-purple-500' : index % 4 === 2 ? 'bg-green-500' : 'bg-amber-500'}`}></div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className={`${
                  index % 4 === 0 ? categoryColors.python : 
                  index % 4 === 1 ? categoryColors.web : 
                  index % 4 === 2 ? categoryColors.data : 
                  categoryColors.algorithms
                }`}>
                  {index % 4 === 0 ? 'Python' : 
                   index % 4 === 1 ? 'Web Development' : 
                   index % 4 === 2 ? 'Data Science' : 
                   'Algorithms'}
                </Badge>
                <div className="text-xs text-muted-foreground">
                  {course.completedLessons}/{course.totalLessons} completed
                </div>
              </div>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-4">
                <div className="progress-bar">
                  <div 
                    className={`progress-value ${
                      index % 4 === 0 ? 'bg-blue-500' : 
                      index % 4 === 1 ? 'bg-purple-500' : 
                      index % 4 === 2 ? 'bg-green-500' : 
                      'bg-amber-500'
                    }`}
                    style={{ width: `${(course.completedLessons / course.totalLessons) * 100}%` }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    {getIcon(item)}
                    <span>
                      {item === 1 ? `${course.modules.length} modules` : 
                       item === 2 ? `${course.totalLessons} lessons` : 
                       'Beginner friendly'}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full gap-2 group-hover:bg-opacity-90"
                onClick={() => handleStartCourse(course.id)}
              >
                {course.completedLessons > 0 ? "Continue Learning" : "Start Learning"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-8 md:hidden">
        <Link to="/courses">
          <Button variant="outline">View All Courses</Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCards;
