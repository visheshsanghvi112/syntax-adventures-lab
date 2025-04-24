
import React from 'react';
import { useCoursesContext } from '@/contexts/CoursesContext';
import { cn } from '@/lib/utils';
import { Check, ChevronRight } from 'lucide-react';

const CourseSidebar = () => {
  const { courses, activeCourseId, activeModuleId, activeLessonId, setActiveCourse, setActiveModule, setActiveLesson } = useCoursesContext();
  const activeCourse = courses.find(course => course.id === activeCourseId);

  return (
    <div className="bg-sidebar text-sidebar-foreground h-full w-64 overflow-y-auto flex flex-col">
      <div className="p-4 border-b border-sidebar-border">
        <h2 className="text-lg font-medium">Courses</h2>
      </div>
      <div className="flex-1 flex flex-col gap-1 p-2">
        {courses.map(course => (
          <div key={course.id} className="flex flex-col">
            <button
              className={cn(
                "flex items-center justify-between p-2 rounded-md text-left text-sm font-medium",
                activeCourseId === course.id 
                  ? "bg-sidebar-accent text-sidebar-primary" 
                  : "hover:bg-sidebar-accent/50"
              )}
              onClick={() => setActiveCourse(course.id)}
            >
              {course.title}
              <ChevronRight className={cn(
                "h-4 w-4 transition-transform", 
                activeCourseId === course.id ? "rotate-90" : ""
              )} />
            </button>
            
            {activeCourseId === course.id && (
              <div className="ml-2 pl-2 border-l border-sidebar-border">
                {course.modules.map(module => (
                  <div key={module.id} className="flex flex-col">
                    <button
                      className={cn(
                        "flex items-center justify-between p-2 rounded-md text-left text-sm",
                        activeModuleId === module.id 
                          ? "bg-sidebar-accent text-sidebar-primary" 
                          : "hover:bg-sidebar-accent/50"
                      )}
                      onClick={() => setActiveModule(module.id)}
                    >
                      {module.title}
                      <ChevronRight className={cn(
                        "h-4 w-4 transition-transform", 
                        activeModuleId === module.id ? "rotate-90" : ""
                      )} />
                    </button>
                    
                    {activeModuleId === module.id && (
                      <div className="ml-2 pl-2 border-l border-sidebar-border">
                        {module.lessons.map(lesson => (
                          <button
                            key={lesson.id}
                            className={cn(
                              "flex items-center justify-between p-2 rounded-md text-left text-sm w-full",
                              activeLessonId === lesson.id 
                                ? "bg-sidebar-accent text-sidebar-primary" 
                                : "hover:bg-sidebar-accent/50"
                            )}
                            onClick={() => setActiveLesson(lesson.id)}
                          >
                            <span className="truncate">{lesson.title}</span>
                            {lesson.completed && (
                              <Check className="h-4 w-4 text-sidebar-primary ml-2 flex-shrink-0" />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs">Course Progress</span>
          <span className="text-xs">
            {activeCourse ? 
              `${activeCourse.completedLessons}/${activeCourse.totalLessons}` : 
              "0/0"}
          </span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-value" 
            style={{
              width: activeCourse ? 
                `${(activeCourse.completedLessons / activeCourse.totalLessons) * 100}%` : 
                "0%"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseSidebar;
