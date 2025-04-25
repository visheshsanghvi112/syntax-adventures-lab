
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, PieChart, Pie, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';
import { ProgressMetrics } from '@/types/course';

interface ProgressTrackerProps {
  metrics: ProgressMetrics;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#a855f7', '#ec4899'];

const ProgressTracker = ({ metrics }: ProgressTrackerProps) => {
  const totalLessons = metrics.courseProgress.reduce((acc, course) => acc + course.totalLessons, 0);
  const completedLessons = metrics.courseProgress.reduce((acc, course) => acc + course.lessonsCompleted, 0);
  const overallProgress = Math.round((completedLessons / totalLessons) * 100) || 0;

  // Data for pie chart - subjects breakdown
  const courseData = metrics.courseProgress.map((course, index) => ({
    name: course.courseId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    value: course.percentComplete,
    color: COLORS[index % COLORS.length]
  }));

  // Data for bar chart - quiz scores
  const quizData = metrics.quizScores.map((quiz) => ({
    name: quiz.quizId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    score: quiz.score
  }));

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Your Learning Progress</CardTitle>
        <CardDescription>
          Track your progress across all courses and activities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <h3 className="font-medium">Overall Progress</h3>
            <span className="font-medium">{overallProgress}%</span>
          </div>
          <Progress value={overallProgress} className="h-2" />
          <div className="mt-2 text-sm text-muted-foreground">
            {completedLessons} of {totalLessons} lessons completed
          </div>
        </div>

        <Tabs defaultValue="courses">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
          </TabsList>
          
          <TabsContent value="courses" className="pt-4">
            {metrics.courseProgress.length > 0 ? (
              <div>
                <div className="grid gap-4">
                  {metrics.courseProgress.map((course, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <p className="text-sm font-medium">{course.courseId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
                        <p className="text-sm font-medium">{course.percentComplete}%</p>
                      </div>
                      <Progress value={course.percentComplete} className="h-2" />
                      <p className="mt-1 text-xs text-muted-foreground">
                        Last accessed: {new Date(course.lastAccessed).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 h-64">
                  <h4 className="text-sm font-medium mb-3 text-center">Course Completion Overview</h4>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={courseData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {courseData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No course progress data available yet.
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="quizzes" className="pt-4">
            {metrics.quizScores.length > 0 ? (
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={quizData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
                
                <div className="mt-6 grid gap-2">
                  {metrics.quizScores.map((quiz, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-muted/30 rounded-md">
                      <span className="font-medium">{quiz.quizId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">
                          {new Date(quiz.dateTaken).toLocaleDateString()}
                        </span>
                        <span className={`font-bold ${quiz.score >= 70 ? 'text-green-600' : 'text-red-600'}`}>
                          {quiz.score}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No quiz data available yet.
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="activities" className="pt-4">
            <div className="grid gap-6">
              <div>
                <h3 className="text-sm font-medium mb-3">Challenges Completed</h3>
                {metrics.challengesCompleted.length > 0 ? (
                  <div className="grid gap-2">
                    {metrics.challengesCompleted.map((challenge, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-muted/30 rounded-md">
                        <span>{challenge.challengeId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>Attempts: {challenge.attemptsCount}</span>
                          <span>|</span>
                          <span>{new Date(challenge.dateCompleted).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4 text-muted-foreground">
                    No challenges completed yet.
                  </div>
                )}
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-3">Projects Completed</h3>
                {metrics.projectsCompleted.length > 0 ? (
                  <div className="grid gap-2">
                    {metrics.projectsCompleted.map((project, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-muted/30 rounded-md">
                        <span>{project.projectId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                        <div className="flex items-center gap-2">
                          {project.rating && (
                            <div className="flex items-center">
                              <span className="text-amber-500">★</span>
                              <span className="ml-1">{project.rating}</span>
                            </div>
                          )}
                          <span className="text-sm text-muted-foreground">
                            {new Date(project.dateCompleted).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4 text-muted-foreground">
                    No projects completed yet.
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProgressTracker;
