
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Lightbulb, CheckCircle, AlertTriangle, Code } from 'lucide-react';
import CodeEditor from './CodeEditor';
import { Challenge } from '@/types/course';
import { useToast } from '@/components/ui/use-toast';

interface CodeChallengeProps {
  challenge: Challenge;
  onComplete?: (challengeId: string) => void;
}

const CodeChallenge = ({ challenge, onComplete }: CodeChallengeProps) => {
  const [code, setCode] = useState(challenge.code);
  const [showHint, setShowHint] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const { toast } = useToast();

  const handleCodeChange = (value: string) => {
    setCode(value);
    setResult(null);
  };

  const showNextHint = () => {
    if (currentHint < challenge.hints.length - 1) {
      setCurrentHint(currentHint + 1);
    }
  };

  const checkSolution = () => {
    setIsSubmitting(true);
    
    // Simple simulation of solution checking
    setTimeout(() => {
      // In a real app, this would be a more sophisticated check
      const success = code.includes(challenge.solution);
      
      setResult({
        success,
        message: success 
          ? "Great job! Your solution passes all tests!" 
          : "Your solution needs some work. Try again or check the hints."
      });
      
      if (success && onComplete) {
        onComplete(challenge.id);
        
        toast({
          title: "Challenge Completed!",
          description: "You've successfully solved this coding challenge.",
          variant: "default",
        });
      }
      
      setIsSubmitting(false);
    }, 1500);
  };

  const resetChallenge = () => {
    setCode(challenge.code);
    setResult(null);
    setShowHint(false);
    setCurrentHint(0);
    
    toast({
      title: "Challenge Reset",
      description: "The code has been reset to the initial state.",
      variant: "default",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            {challenge.title}
          </CardTitle>
          <Badge variant={challenge.difficulty === 'Easy' ? 'secondary' : challenge.difficulty === 'Medium' ? 'outline' : 'destructive'}>
            {challenge.difficulty}
          </Badge>
        </div>
        <CardDescription>{challenge.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted rounded-md">
          <CodeEditor defaultCode={code} onChange={handleCodeChange} />
        </div>

        {result && (
          <Alert variant={result.success ? "default" : "destructive"}>
            {result.success ? <CheckCircle className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
            <AlertDescription>
              {result.message}
            </AlertDescription>
          </Alert>
        )}

        {showHint && (
          <Alert className="bg-amber-50 text-amber-800 border-amber-200">
            <Lightbulb className="h-4 w-4 text-amber-500" />
            <AlertDescription>
              <span className="font-medium">Hint {currentHint + 1}:</span> {challenge.hints[currentHint]}
              
              {currentHint < challenge.hints.length - 1 && (
                <Button 
                  variant="link" 
                  size="sm" 
                  onClick={showNextHint}
                  className="p-0 h-auto text-amber-600 mt-1"
                >
                  Show next hint
                </Button>
              )}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex justify-between flex-wrap gap-2">
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={resetChallenge}
          >
            Reset Code
          </Button>
          {!showHint && challenge.hints && challenge.hints.length > 0 && (
            <Button 
              variant="ghost" 
              onClick={() => setShowHint(true)}
              className="flex items-center gap-1"
            >
              <Lightbulb className="h-4 w-4" /> Hint
            </Button>
          )}
        </div>
        <Button 
          onClick={checkSolution}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Checking...' : 'Submit Solution'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CodeChallenge;
