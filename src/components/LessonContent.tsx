
import React from 'react';
import { Button } from '@/components/ui/button';
import { useCoursesContext } from '@/contexts/CoursesContext';
import CodeEditor from './CodeEditor';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const LessonContent = () => {
  const { 
    courses, 
    activeCourseId, 
    activeModuleId, 
    activeLessonId,
    getNextLesson,
    getPrevLesson,
    markLessonComplete
  } = useCoursesContext();

  // Find the active course, module, and lesson
  const activeCourse = courses.find(course => course.id === activeCourseId);
  const activeModule = activeCourse?.modules.find(module => module.id === activeModuleId);
  const activeLesson = activeModule?.lessons.find(lesson => lesson.id === activeLessonId);

  if (!activeCourse || !activeModule || !activeLesson) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome to Syntax Adventures Lab</h2>
        <p className="mb-6 text-muted-foreground max-w-md">
          Select a course from the sidebar to begin your coding journey.
        </p>
      </div>
    );
  }

  const handleNext = () => {
    const nextInfo = getNextLesson();
    if (!nextInfo) {
      // No next lesson, perhaps show completion message
      return;
    }
  };

  const handlePrev = () => {
    const prevInfo = getPrevLesson();
    if (!prevInfo) {
      // No previous lesson
      return;
    }
  };

  const handleComplete = () => {
    markLessonComplete(activeLessonId);
  };

  return (
    <div className="p-6 overflow-y-auto h-full">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">{activeLesson.title}</h2>
          <div className="flex items-center text-sm text-muted-foreground mt-2">
            <span>{activeCourse.title}</span>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span>{activeModule.title}</span>
          </div>
        </div>

        <div className="lesson-content prose prose-slate max-w-none mb-8">
          {/* This would render markdown or HTML content in a real app */}
          <div dangerouslySetInnerHTML={{ __html: activeLesson.content }} />
        </div>

        {activeLesson.codeExample && (
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Try It Yourself</h3>
            <CodeEditor defaultCode={activeLesson.codeExample} />
          </div>
        )}

        <div className="flex items-center justify-between mt-10 border-t pt-6">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={!getPrevLesson()}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous Lesson
          </Button>
          <Button
            variant={activeLesson.completed ? "outline" : "default"}
            onClick={handleComplete}
            className="gap-2"
          >
            <Check className="h-4 w-4" />
            {activeLesson.completed ? "Completed" : "Mark as Complete"}
          </Button>
          <Button
            onClick={handleNext}
            disabled={!getNextLesson()}
            className="gap-2"
          >
            Next Lesson
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LessonContent;
