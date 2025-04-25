
export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Resource {
  title: string;
  url: string;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
  duration: string;
  completed: boolean;
  quizQuestions?: QuizQuestion[];
  resources?: Resource[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  image: string;
  modules: Module[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  skills: string[];
  instructions: string;
  codeTemplate?: string;
  solution?: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  code: string;
  solution: string;
  hints: string[];
}

export interface ProgressMetrics {
  userId: string;
  courseProgress: {
    courseId: string;
    percentComplete: number;
    lessonsCompleted: number;
    totalLessons: number;
    lastAccessed: Date;
  }[];
  quizScores: {
    quizId: string;
    score: number;
    dateTaken: Date;
  }[];
  challengesCompleted: {
    challengeId: string;
    dateCompleted: Date;
    attemptsCount: number;
  }[];
  projectsCompleted: {
    projectId: string;
    dateCompleted: Date;
    rating?: number;
  }[];
}
