import React, { createContext, useState, useContext, useEffect } from 'react';
import courses, { CourseType } from '../data/courseData';

interface CoursesContextProps {
  courses: CourseType[];
  activeCourseId: string | null;
  activeModuleId: string | null;
  activeLessonId: string | null;
  setActiveCourseId: (courseId: string | null) => void;
  setActiveModuleId: (moduleId: string | null) => void;
  setActiveLessonId: (lessonId: string | null) => void;
  getNextLesson: () => { courseId: string, moduleId: string, lessonId: string } | null;
  getPrevLesson: () => { courseId: string, moduleId: string, lessonId: string } | null;
  markLessonComplete: (lessonId: string) => void;
}

const CoursesContext = createContext<CoursesContextProps | undefined>(undefined);

interface CoursesProviderProps {
  children: React.ReactNode;
}

export const CoursesProvider: React.FC<CoursesProviderProps> = ({ children }) => {
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [courseData, setCourseData] = useState<CourseType[]>(courses);

  useEffect(() => {
    // Load course progress from localStorage on component mount
    try {
      const storedProgress = localStorage.getItem('courseProgress');
      if (storedProgress) {
        const parsedProgress = JSON.parse(storedProgress) as { [lessonId: string]: boolean };
        
        // Update the completed status of lessons based on stored progress
        const updatedCourses = courseData.map(course => ({
          ...course,
          modules: course.modules.map(module => ({
            ...module,
            lessons: module.lessons.map(lesson => ({
              ...lesson,
              completed: parsedProgress[lesson.id] || false,
            })),
          })),
        }));
        setCourseData(updatedCourses);
      }
    } catch (error) {
      console.error("Failed to load course progress from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    // Whenever courseData changes, update localStorage
    try {
      const lessonCompletionStatus: { [lessonId: string]: boolean } = {};
      courseData.forEach(course => {
        course.modules.forEach(module => {
          module.lessons.forEach(lesson => {
            lessonCompletionStatus[lesson.id] = lesson.completed;
          });
        });
      });
      localStorage.setItem('courseProgress', JSON.stringify(lessonCompletionStatus));
    } catch (error) {
      console.error("Failed to save course progress to localStorage:", error);
    }
  }, [courseData]);

  const getNextLesson = () => {
    if (!activeCourseId || !activeModuleId || !activeLessonId) return null;

    const activeCourse = courseData.find(course => course.id === activeCourseId);
    const activeModule = activeCourse?.modules.find(module => module.id === activeModuleId);
    const lessons = activeModule?.lessons;

    if (!lessons) return null;

    const currentLessonIndex = lessons.findIndex(lesson => lesson.id === activeLessonId);

    if (currentLessonIndex === -1) return null;

    if (currentLessonIndex < lessons.length - 1) {
      const nextLesson = lessons[currentLessonIndex + 1];
      return { courseId: activeCourseId, moduleId: activeModuleId, lessonId: nextLesson.id };
    } else {
      // Find the next module
      const activeModuleIndex = activeCourse.modules.findIndex(module => module.id === activeModuleId);
      if (activeModuleIndex < activeCourse.modules.length - 1) {
        const nextModule = activeCourse.modules[activeModuleIndex + 1];
        const firstLessonInNextModule = nextModule.lessons[0];
        return { courseId: activeCourseId, moduleId: nextModule.id, lessonId: firstLessonInNextModule.id };
      } else {
        // No more modules in this course
        return null;
      }
    }
  };

  const getPrevLesson = () => {
    if (!activeCourseId || !activeModuleId || !activeLessonId) return null;

    const activeCourse = courseData.find(course => course.id === activeCourseId);
    const activeModule = activeCourse?.modules.find(module => module.id === activeModuleId);
    const lessons = activeModule?.lessons;

    if (!lessons) return null;

    const currentLessonIndex = lessons.findIndex(lesson => lesson.id === activeLessonId);

    if (currentLessonIndex === -1) return null;

    if (currentLessonIndex > 0) {
      const prevLesson = lessons[currentLessonIndex - 1];
      return { courseId: activeCourseId, moduleId: activeModuleId, lessonId: prevLesson.id };
    } else {
      // Find the previous module
      const activeModuleIndex = activeCourse.modules.findIndex(module => module.id === activeModuleId);
      if (activeModuleIndex > 0) {
        const prevModule = activeCourse.modules[activeModuleIndex - 1];
        const lastLessonInPrevModule = prevModule.lessons[prevModule.lessons.length - 1];
        return { courseId: activeCourseId, moduleId: prevModule.id, lessonId: lastLessonInPrevModule.id };
      } else {
        // No more modules in this course
        return null;
      }
    }
  };

  const markLessonComplete = (lessonId: string) => {
    setCourseData(prevCourses =>
      prevCourses.map(course => ({
        ...course,
        modules: course.modules.map(module => ({
          ...module,
          lessons: module.lessons.map(lesson =>
            lesson.id === lessonId ? { ...lesson, completed: true } : lesson
          ),
        })),
      }))
    );
  };

  const value: CoursesContextProps = {
    courses: courseData,
    activeCourseId,
    activeModuleId,
    activeLessonId,
    setActiveCourseId,
    setActiveModuleId,
    setActiveLessonId,
    getNextLesson,
    getPrevLesson,
    markLessonComplete,
  };

  return (
    <CoursesContext.Provider value={value}>
      {children}
    </CoursesContext.Provider>
  );
};

export const useCoursesContext = () => {
  const context = useContext(CoursesContext);
  if (context === undefined) {
    throw new Error("useCoursesContext must be used within a CoursesProvider");
  }
  return context;
};
