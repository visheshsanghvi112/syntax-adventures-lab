
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useCoursesContext } from '@/contexts/CoursesContext';
import CodeEditor from './CodeEditor';
import QuizSection from './QuizSection';
import ResourcesSection from './ResourcesSection';
import { ChevronLeft, ChevronRight, Check, AlertCircle, Info, BookOpen, Code, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

const EnhancedLessonContent = () => {
  const { 
    courses, 
    activeCourseId, 
    activeModuleId, 
    activeLessonId,
    getNextLesson,
    getPrevLesson,
    markLessonComplete
  } = useCoursesContext();
  
  const [activeTab, setActiveTab] = useState('content');
  const { toast } = useToast();

  // Find the active course, module, and lesson
  const activeCourse = courses.find(course => course.id === activeCourseId);
  const activeModule = activeCourse?.modules.find(module => module.id === activeModuleId);
  const activeLesson = activeModule?.lessons.find(lesson => lesson.id === activeLessonId);

  if (!activeCourse || !activeModule || !activeLesson) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
        <BookOpen className="h-16 w-16 text-muted-foreground mb-6" />
        <h2 className="text-2xl font-bold mb-4">Welcome to Syntax Adventures Lab</h2>
        <p className="mb-6 text-muted-foreground max-w-md">
          Select a course from the sidebar to begin your coding journey.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div 
              key={index}
              className="aspect-video bg-muted/50 rounded-lg animate-pulse"
            ></div>
          ))}
        </div>
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
    toast({
      title: "Lesson Complete!",
      description: "Your progress has been saved.",
      variant: "default",
    });
  };

  // Calculate the progress through the current module
  const currentLessonIndex = activeModule.lessons.findIndex(l => l.id === activeLessonId);
  const moduleProgress = ((currentLessonIndex + 1) / activeModule.lessons.length) * 100;

  const hasQuiz = activeLesson.quizQuestions && activeLesson.quizQuestions.length > 0;
  const hasResources = activeLesson.resources && activeLesson.resources.length > 0;

  return (
    <div className="p-4 md:p-6 overflow-y-auto h-full">
      <div className="max-w-3xl mx-auto">
        <div className="mb-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <span>{activeCourse.title}</span>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span>{activeModule.title}</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">{activeLesson.title}</h2>
          <div className="flex flex-wrap items-center mt-2 gap-2">
            <Badge variant="outline" className="text-xs">
              Lesson {currentLessonIndex + 1} of {activeModule.lessons.length}
            </Badge>
            {activeLesson.completed ? (
              <Badge variant="secondary" className="text-xs">
                <Check className="h-3 w-3 mr-1" /> Completed
              </Badge>
            ) : null}
            <Badge variant="outline" className="text-xs">
              {activeLesson.duration}
            </Badge>
          </div>
        </div>

        <div className="w-full bg-muted h-1 rounded-full mb-8">
          <div 
            className="bg-primary h-1 rounded-full" 
            style={{ width: `${moduleProgress}%` }}
          ></div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList>
            <TabsTrigger value="content">Lesson</TabsTrigger>
            {hasQuiz && <TabsTrigger value="quiz">Quiz</TabsTrigger>}
            {activeLesson.codeExample && <TabsTrigger value="practice">Practice</TabsTrigger>}
            {hasResources && <TabsTrigger value="resources">Resources</TabsTrigger>}
          </TabsList>
          
          <TabsContent value="content" className="pt-6">
            <div className="lesson-content prose prose-slate max-w-none">
              {/* Sample enhanced content structure - would normally be rendered from markdown/HTML */}
              <div dangerouslySetInnerHTML={{ __html: activeLesson.content }} />
              
              <Alert className="my-4">
                <Info className="h-4 w-4" />
                <AlertTitle>Important Note</AlertTitle>
                <AlertDescription>
                  This is a key concept that you should understand thoroughly before moving on.
                </AlertDescription>
              </Alert>

              <div className="bg-muted p-4 rounded-lg border border-border my-6 flex gap-4">
                <div className="text-primary mt-1">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Pro Tip</h4>
                  <p className="text-sm text-muted-foreground">
                    Practice this concept regularly to reinforce your learning.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {hasQuiz && (
            <TabsContent value="quiz" className="pt-6">
              <QuizSection 
                questions={activeLesson.quizQuestions || []}
                onComplete={(score) => {
                  if (score > 0) {
                    markLessonComplete(activeLessonId);
                  }
                }}
              />
            </TabsContent>
          )}
          
          {activeLesson.codeExample && (
            <TabsContent value="practice" className="pt-6">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-medium flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    Try It Yourself
                  </h3>
                  <Badge variant="outline">Python</Badge>
                </div>
                <CodeEditor defaultCode={activeLesson.codeExample} />
              </div>
            </TabsContent>
          )}
          
          {hasResources && (
            <TabsContent value="resources" className="pt-6">
              <ResourcesSection resources={activeLesson.resources || []} />
            </TabsContent>
          )}
        </Tabs>

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

export default EnhancedLessonContent;
