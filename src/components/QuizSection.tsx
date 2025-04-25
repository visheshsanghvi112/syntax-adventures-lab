
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { QuizQuestion } from '@/types/course';
import { useToast } from "@/components/ui/use-toast";

interface QuizSectionProps {
  questions: QuizQuestion[];
  onComplete?: (score: number) => void;
}

const QuizSection = ({ questions, onComplete }: QuizSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const { toast } = useToast();

  const handleOptionChange = (value: string) => {
    if (!isAnswered) {
      setSelectedOption(value);
    }
  };

  const handleCheckAnswer = () => {
    if (!selectedOption) return;
    
    const correct = selectedOption === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    setIsAnswered(true);
    
    if (correct) {
      setScore(score + 1);
    }
    
    toast({
      title: correct ? "Correct!" : "Incorrect",
      description: correct 
        ? "Great job! That's the right answer." 
        : `The correct answer is: ${questions[currentQuestion].correctAnswer}`,
      variant: correct ? "default" : "destructive",
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      if (onComplete) {
        onComplete(score);
      }
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center">Quiz Completed!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="text-6xl font-bold">
            {score}/{questions.length}
          </div>
          <p className="text-muted-foreground">
            You got {score} out of {questions.length} questions correct.
          </p>
          {score === questions.length ? (
            <div className="flex flex-col items-center gap-2 text-primary">
              <CheckCircle className="h-12 w-12" />
              <p className="font-semibold">Perfect Score!</p>
            </div>
          ) : score >= questions.length / 2 ? (
            <div className="flex flex-col items-center gap-2 text-amber-500">
              <CheckCircle className="h-12 w-12" />
              <p className="font-semibold">Good Job!</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-red-500">
              <AlertCircle className="h-12 w-12" />
              <p className="font-semibold">Keep Practicing!</p>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button 
            onClick={() => {
              setCurrentQuestion(0);
              setSelectedOption(null);
              setScore(0);
              setShowResult(false);
              setIsAnswered(false);
            }}
            className="w-full"
          >
            Try Again
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-muted-foreground">Question {currentQuestion + 1} of {questions.length}</p>
          <p className="text-sm font-medium">Score: {score}</p>
        </div>
        <Progress value={progress} className="mb-4" />
        <CardTitle>{questions[currentQuestion].question}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedOption || ""} className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem 
                value={option} 
                id={`option-${index}`} 
                onClick={() => handleOptionChange(option)}
                disabled={isAnswered}
                className={
                  isAnswered 
                    ? option === questions[currentQuestion].correctAnswer 
                      ? "text-green-500 border-green-500" 
                      : selectedOption === option 
                        ? "text-red-500 border-red-500" 
                        : "" 
                    : ""
                }
              />
              <Label 
                htmlFor={`option-${index}`}
                className={
                  isAnswered 
                    ? option === questions[currentQuestion].correctAnswer 
                      ? "text-green-500" 
                      : selectedOption === option 
                        ? "text-red-500" 
                        : "" 
                    : ""
                }
              >
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-between">
        {!isAnswered ? (
          <Button 
            onClick={handleCheckAnswer} 
            disabled={!selectedOption}
            className="w-full"
          >
            Check Answer
          </Button>
        ) : (
          <Button 
            onClick={handleNextQuestion}
            className="w-full"
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'View Results'}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default QuizSection;
