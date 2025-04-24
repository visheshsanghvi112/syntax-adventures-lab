
import React from 'react';
import { Button } from '@/components/ui/button';
import { useCoursesContext } from '@/contexts/CoursesContext';
import { BookOpen, Code, ArrowRight, CheckCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HomeHero = () => {
  const { courses, setActiveCourse, setActiveModule, setActiveLesson } = useCoursesContext();
  const isMobile = useIsMobile();

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
    <div className="container px-4 py-12 md:py-20 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Master Coding with <span className="text-primary">Interactive</span> Lessons
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            From Python basics to advanced web development, learn programming through hands-on exercises. 
            Write and run code directly in your browser with our interactive editor.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={handleStartLearning} className="gap-2">
              Start Learning
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#featured-courses">Explore Courses</a>
            </Button>
          </div>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Interactive Learning</h3>
                <p className="text-sm text-muted-foreground">Practice code directly in your browser</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Structured Courses</h3>
                <p className="text-sm text-muted-foreground">Follow clear learning paths</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Multiple Languages</h3>
                <p className="text-sm text-muted-foreground">Python, JavaScript, HTML/CSS & more</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Track Progress</h3>
                <p className="text-sm text-muted-foreground">Monitor your learning journey</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-xl">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full -z-10"></div>
            
            {/* Code editor mockup */}
            <div className="bg-code rounded-xl overflow-hidden border border-border shadow-xl">
              <div className="flex items-center bg-code-highlight px-4 py-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-center flex-1 text-white/80">Python - Hello World.py</div>
              </div>
              <div className="p-4">
                <pre className="text-sm md:text-base font-mono">
                  <code className="text-code-foreground">
                    <div className="flex">
                      <span className="text-code-comment w-8 inline-block opacity-50">1</span>
                      <span className="text-code-comment"># This is your first Python program</span>
                    </div>
                    <div className="flex">
                      <span className="text-code-comment w-8 inline-block opacity-50">2</span>
                      <span></span>
                    </div>
                    <div className="flex">
                      <span className="text-code-comment w-8 inline-block opacity-50">3</span>
                      <span className="text-code-keyword">def </span>
                      <span className="text-code-function">greet</span>
                      <span>(name):</span>
                    </div>
                    <div className="flex">
                      <span className="text-code-comment w-8 inline-block opacity-50">4</span>
                      <span className="pl-4">    </span>
                      <span className="text-code-keyword">return </span>
                      <span className="text-code-string">"Hello, " </span>
                      <span>+ name + </span>
                      <span className="text-code-string">"!"</span>
                    </div>
                    <div className="flex">
                      <span className="text-code-comment w-8 inline-block opacity-50">5</span>
                      <span></span>
                    </div>
                    <div className="flex">
                      <span className="text-code-comment w-8 inline-block opacity-50">6</span>
                      <span className="text-code-variable">user_name </span>
                      <span>= </span>
                      <span className="text-code-string">"World"</span>
                    </div>
                    <div className="flex">
                      <span className="text-code-comment w-8 inline-block opacity-50">7</span>
                      <span className="text-code-variable">message </span>
                      <span>= greet(user_name)</span>
                    </div>
                    <div className="flex">
                      <span className="text-code-comment w-8 inline-block opacity-50">8</span>
                      <span></span>
                    </div>
                    <div className="flex bg-code-highlight">
                      <span className="text-code-comment w-8 inline-block opacity-50">9</span>
                      <span>print(message)</span>
                    </div>
                  </code>
                </pre>
              </div>
              <div className="bg-black/20 px-4 py-2 border-t border-border">
                <div className="text-green-400 font-mono text-sm">Hello, World!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
