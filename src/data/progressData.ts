
import { ProgressMetrics } from "@/types/course";

const sampleProgress: ProgressMetrics = {
  userId: "user-123",
  courseProgress: [
    {
      courseId: "python-basics",
      percentComplete: 75,
      lessonsCompleted: 12,
      totalLessons: 16,
      lastAccessed: new Date(2023, 5, 15)
    },
    {
      courseId: "javascript-basics",
      percentComplete: 40,
      lessonsCompleted: 8,
      totalLessons: 20,
      lastAccessed: new Date(2023, 6, 2)
    },
    {
      courseId: "java-basics",
      percentComplete: 20,
      lessonsCompleted: 4,
      totalLessons: 20,
      lastAccessed: new Date(2023, 6, 10)
    }
  ],
  quizScores: [
    {
      quizId: "python-introduction-quiz",
      score: 90,
      dateTaken: new Date(2023, 5, 10)
    },
    {
      quizId: "python-data-types-quiz",
      score: 85,
      dateTaken: new Date(2023, 5, 12)
    },
    {
      quizId: "javascript-variables-quiz",
      score: 75,
      dateTaken: new Date(2023, 6, 1)
    },
    {
      quizId: "java-basics-quiz",
      score: 60,
      dateTaken: new Date(2023, 6, 10)
    }
  ],
  challengesCompleted: [
    {
      challengeId: "python-string-manipulation",
      dateCompleted: new Date(2023, 5, 20),
      attemptsCount: 2
    },
    {
      challengeId: "python-list-comprehension",
      dateCompleted: new Date(2023, 5, 22),
      attemptsCount: 3
    }
  ],
  projectsCompleted: [
    {
      projectId: "python-calculator",
      dateCompleted: new Date(2023, 5, 25),
      rating: 4.5
    },
    {
      projectId: "javascript-todo-list",
      dateCompleted: new Date(2023, 6, 8),
      rating: 4.0
    }
  ]
};

export default sampleProgress;
