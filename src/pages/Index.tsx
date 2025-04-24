
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseSidebar from '@/components/CourseSidebar';
import LessonContent from '@/components/LessonContent';
import HomeHero from '@/components/HomeHero';
import CourseCards from '@/components/CourseCards';
import { CoursesProvider, useCoursesContext } from '@/contexts/CoursesContext';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const MainContent = () => {
  const { activeCourseId } = useCoursesContext();
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(prev => !prev);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <div className="flex-1 flex flex-row">
        {activeCourseId ? (
          // Course view with sidebar and content
          <div className="flex flex-1 relative">
            <div 
              className={cn(
                "absolute top-4 z-10 lg:hidden",
                showSidebar ? "left-64" : "left-0"
              )}
            >
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full"
                onClick={toggleSidebar}
              >
                {showSidebar ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </Button>
            </div>
            
            <div 
              className={cn(
                "transition-all duration-300 ease-in-out", 
                showSidebar ? "w-64 lg:block" : "w-0 lg:w-64",
                "overflow-hidden h-full"
              )}
            >
              <CourseSidebar />
            </div>
            
            <div className="flex-1">
              <LessonContent />
            </div>
          </div>
        ) : (
          // Home view with hero and course cards
          <div className="flex-1">
            <HomeHero />
            <CourseCards />
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

// Wrap with CoursesProvider
const Index = () => {
  return (
    <CoursesProvider>
      <MainContent />
    </CoursesProvider>
  );
};

export default Index;
