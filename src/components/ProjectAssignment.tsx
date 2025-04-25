
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Project } from '@/types/course';
import CodeEditor from './CodeEditor';
import { BookOpen, Check, Code, EyeOff, Zap } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ProjectAssignmentProps {
  project: Project;
  onComplete?: (projectId: string) => void;
}

const ProjectAssignment = ({ project, onComplete }: ProjectAssignmentProps) => {
  const [code, setCode] = useState(project.codeTemplate || '// Write your code here');
  const [activeTab, setActiveTab] = useState('instructions');
  const [showSolution, setShowSolution] = useState(false);
  const { toast } = useToast();
  
  const handleCodeChange = (value: string) => {
    setCode(value);
  };
  
  const handleSubmit = () => {
    // In a real implementation, this would check the code against tests or requirements
    toast({
      title: "Project Submitted!",
      description: "Your project has been submitted for review.",
      variant: "default",
    });
    
    if (onComplete) {
      onComplete(project.id);
    }
  };
  
  const toggleSolution = () => {
    if (!showSolution) {
      toast({
        title: "Solution Revealed",
        description: "Try to understand the solution rather than just copying it!",
        variant: "default",
      });
    }
    setShowSolution(!showSolution);
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            {project.title}
          </CardTitle>
          <Badge variant={
            project.difficulty === 'Beginner' ? 'secondary' : 
            project.difficulty === 'Intermediate' ? 'outline' : 
            'destructive'
          }>
            {project.difficulty}
          </Badge>
        </div>
        <CardDescription>{project.description}</CardDescription>
        <div className="flex flex-wrap gap-1 mt-2">
          {project.skills.map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <Separator />
      <Tabs defaultValue="instructions" value={activeTab} onValueChange={setActiveTab}>
        <div className="px-6 pt-2">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="instructions" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Instructions</span>
            </TabsTrigger>
            <TabsTrigger value="code" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span className="hidden sm:inline">Code</span>
            </TabsTrigger>
            <TabsTrigger value="solution" className="flex items-center gap-2" disabled={!project.solution}>
              <Check className="h-4 w-4" />
              <span className="hidden sm:inline">Solution</span>
            </TabsTrigger>
          </TabsList>
        </div>
        
        <CardContent className="pt-4">
          <TabsContent value="instructions">
            <div className="prose prose-slate max-w-none">
              <div dangerouslySetInnerHTML={{ __html: project.instructions }} />
            </div>
            <div className="flex justify-end mt-4">
              <Button onClick={() => setActiveTab('code')}>
                Start Coding
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="code">
            <CodeEditor defaultCode={code} onChange={handleCodeChange} />
            <div className="flex justify-end mt-4">
              <Button onClick={handleSubmit}>
                Submit Project
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="solution">
            {showSolution ? (
              <CodeEditor defaultCode={project.solution || ''} readOnly={true} />
            ) : (
              <div className="flex flex-col items-center justify-center p-12 text-center">
                <div className="bg-muted/50 p-4 rounded-full mb-4">
                  <EyeOff className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Solution Hidden</h3>
                <p className="text-muted-foreground max-w-md mb-4">
                  Try to solve the project yourself before looking at the solution.
                  Revealing the solution means you won't get the full learning benefit.
                </p>
                <Button variant="outline" onClick={toggleSolution}>
                  Reveal Solution
                </Button>
              </div>
            )}
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
};

export default ProjectAssignment;
