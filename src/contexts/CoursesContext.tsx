
import React, { createContext, useContext, useState } from 'react';

// Types
export interface Lesson {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
  completed: boolean;
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
  modules: Module[];
  completedLessons: number;
  totalLessons: number;
}

interface CoursesContextType {
  courses: Course[];
  activeCourseId: string | null;
  activeModuleId: string | null;
  activeLessonId: string | null;
  setActiveCourse: (id: string) => void;
  setActiveModule: (id: string) => void;
  setActiveLesson: (id: string) => void;
  markLessonComplete: (id: string) => void;
  getNextLesson: () => { courseId: string; moduleId: string; lessonId: string } | null;
  getPrevLesson: () => { courseId: string; moduleId: string; lessonId: string } | null;
}

// Sample course data
const initialCourses: Course[] = [
  {
    id: 'python-basics',
    title: 'Python Fundamentals',
    description: 'Learn the building blocks of Python programming from the ground up.',
    completedLessons: 0,
    totalLessons: 10,
    modules: [
      {
        id: 'getting-started',
        title: 'Getting Started with Python',
        description: 'A gentle introduction to Python programming.',
        lessons: [
          {
            id: 'what-is-python',
            title: 'What is Python?',
            completed: false,
            content: `
              <h2>Welcome to Python Programming</h2>
              <p>Python is a high-level, interpreted programming language known for its readability and simplicity. Created by Guido van Rossum and first released in 1991, Python has become one of the most popular programming languages in the world.</p>
              
              <h3>Why Learn Python?</h3>
              <ul>
                <li><strong>Easy to learn and use:</strong> Python's syntax is designed to be readable and straightforward.</li>
                <li><strong>Versatile:</strong> Used for web development, data analysis, artificial intelligence, scientific computing, and more.</li>
                <li><strong>Great community support:</strong> Extensive documentation and libraries available.</li>
                <li><strong>High demand:</strong> Python developers are sought after in the job market.</li>
              </ul>
              
              <h3>What Will You Learn in This Course?</h3>
              <p>In this course, you'll learn Python from the ground up, starting with basic concepts like variables and data types, moving on to control structures, functions, and eventually more advanced topics.</p>
              
              <p>Let's get started with your first Python program!</p>
            `,
            codeExample: 'print("Hello, World!")'
          },
          {
            id: 'variables-datatypes',
            title: 'Variables and Data Types',
            completed: false,
            content: `
              <h2>Understanding Variables and Data Types</h2>
              <p>In Python, variables are used to store data values. Unlike some other programming languages, Python has no command for declaring a variable. A variable is created the moment you first assign a value to it.</p>
              
              <h3>Basic Python Variable Declaration</h3>
              <pre>name = "Alice"
age = 25
is_student = True</pre>
              
              <p>Python has several built-in data types:</p>
              
              <ul>
                <li><strong>String:</strong> Text enclosed in quotes (e.g., "Hello")</li>
                <li><strong>Integer:</strong> Whole numbers without a decimal point (e.g., 42)</li>
                <li><strong>Float:</strong> Decimal numbers (e.g., 3.14)</li>
                <li><strong>Boolean:</strong> True or False values</li>
                <li><strong>List:</strong> Ordered collection of items (e.g., [1, 2, 3])</li>
                <li><strong>Dictionary:</strong> Key-value pairs (e.g., {"name": "Alice", "age": 25})</li>
              </ul>
              
              <h3>Checking Data Types</h3>
              <p>You can check the data type of a variable using the <code>type()</code> function:</p>
              <pre>name = "Alice"
print(type(name))  # Outputs: &lt;class 'str'&gt;</pre>
              
              <h3>Try It Yourself</h3>
              <p>Create some variables of different data types and use <code>print()</code> and <code>type()</code> to display their values and types.</p>
            `,
            codeExample: `# Create variables of different types
name = "Alice"
age = 25
height = 1.65
is_student = True

# Print variable values
print("Name:", name)
print("Age:", age)
print("Height:", height)
print("Is student?", is_student)

# Check variable types
print("Type of name:", type(name))
print("Type of age:", type(age))
print("Type of height:", type(height))
print("Type of is_student:", type(is_student))`
          },
          {
            id: 'basic-operations',
            title: 'Basic Operations',
            completed: false,
            content: `
              <h2>Basic Operations in Python</h2>
              <p>Python supports various operations for manipulating data. Let's explore some fundamental operations.</p>
              
              <h3>Arithmetic Operations</h3>
              <p>Python supports all basic arithmetic operations:</p>
              <pre>a = 10
b = 3

print(a + b)  # Addition: 13
print(a - b)  # Subtraction: 7
print(a * b)  # Multiplication: 30
print(a / b)  # Division: 3.3333...
print(a // b) # Floor division: 3
print(a % b)  # Modulus (remainder): 1
print(a ** b) # Exponent: 10^3 = 1000</pre>
              
              <h3>String Operations</h3>
              <p>Strings can be concatenated (joined) using the + operator and repeated using the * operator:</p>
              <pre>first_name = "John"
last_name = "Doe"

full_name = first_name + " " + last_name
print(full_name)  # Outputs: John Doe

print("=" * 10)  # Outputs: ==========</pre>
              
              <h3>Comparison Operations</h3>
              <p>Python uses comparison operators to compare values:</p>
              <pre>x = 5
y = 10

print(x == y)  # Equal to: False
print(x != y)  # Not equal to: True
print(x < y)   # Less than: True
print(x > y)   # Greater than: False
print(x <= y)  # Less than or equal to: True
print(x >= y)  # Greater than or equal to: False</pre>
              
              <h3>Try It Yourself</h3>
              <p>Create a small program that uses various operations to calculate and display results.</p>
            `,
            codeExample: `# Arithmetic operations example
num1 = 15
num2 = 4

# Calculate and display results
print("Addition:", num1 + num2)
print("Subtraction:", num1 - num2)
print("Multiplication:", num1 * num2)
print("Division:", num1 / num2)
print("Floor Division:", num1 // num2)
print("Modulus:", num1 % num2)
print("Exponent:", num1 ** 2)

# String operations
greeting = "Hello"
name = "Python Learner"
message = greeting + ", " + name + "!"
print(message)

# Create a simple line
print("-" * 30)`
          }
        ]
      },
      {
        id: 'control-flow',
        title: 'Control Flow',
        description: 'Learn about conditional statements and loops in Python.',
        lessons: [
          {
            id: 'if-statements',
            title: 'If Statements',
            completed: false,
            content: `
              <h2>Conditional Statements with if, elif, and else</h2>
              <p>Conditional statements allow your program to make decisions based on conditions. In Python, we use <code>if</code>, <code>elif</code> (else if), and <code>else</code> for this purpose.</p>
              
              <h3>Basic if Statement</h3>
              <pre>age = 18
if age >= 18:
    print("You are an adult")
</pre>
              
              <h3>if-else Statement</h3>
              <pre>temperature = 15
if temperature > 30:
    print("It's hot today!")
else:
    print("It's not too hot today.")</pre>
              
              <h3>if-elif-else Statement</h3>
              <pre>score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"
    
print(f"Your grade is: {grade}")</pre>
              
              <h3>Nested if Statements</h3>
              <p>You can also nest if statements inside other if statements:</p>
              <pre>has_passport = True
has_ticket = True

if has_passport:
    if has_ticket:
        print("You can board the plane")
    else:
        print("You need a ticket")
else:
    print("You need a passport")</pre>
              
              <h3>Try It Yourself</h3>
              <p>Write a program that uses conditional statements to categorize a person's BMI (Body Mass Index).</p>
            `,
            codeExample: `# BMI Calculator with categories
weight = 70  # weight in kilograms
height = 1.75  # height in meters

# Calculate BMI
bmi = weight / (height ** 2)
print("Your BMI is:", round(bmi, 1))

# Determine BMI category
if bmi < 18.5:
    category = "Underweight"
elif bmi < 25:
    category = "Normal weight"
elif bmi < 30:
    category = "Overweight"
else:
    category = "Obese"

print("Category:", category)

# Additional personalized message
if category == "Normal weight":
    print("Your weight is healthy!")
else:
    print("Consider consulting with a healthcare professional.")`
          },
          {
            id: 'for-loops',
            title: 'For Loops',
            completed: false,
            content: `
              <h2>For Loops in Python</h2>
              <p>For loops in Python are used to iterate over a sequence (like a list, tuple, dictionary, set, or string) and execute a block of code for each item in the sequence.</p>
              
              <h3>Basic For Loop</h3>
              <pre>fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)</pre>
              
              <h3>Looping Through a String</h3>
              <pre>for character in "Python":
    print(character)</pre>
              
              <h3>Using range() Function</h3>
              <p>The <code>range()</code> function returns a sequence of numbers:</p>
              <pre># Print numbers 0 to 4
for i in range(5):
    print(i)
    
# Print numbers 2 to 5
for i in range(2, 6):
    print(i)
    
# Print numbers 1 to 10 with step 2
for i in range(1, 11, 2):
    print(i)</pre>
              
              <h3>Nested Loops</h3>
              <p>You can place one loop inside another loop:</p>
              <pre>for i in range(1, 4):
    for j in range(1, 4):
        print(i, "x", j, "=", i*j)</pre>
              
              <h3>Try It Yourself</h3>
              <p>Write a program that uses for loops to create patterns or perform calculations.</p>
            `,
            codeExample: `# Simple number pattern with for loops
rows = 5

# Pattern 1: Increasing numbers
print("Pattern 1:")
for i in range(1, rows + 1):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()  # New line after each row

print()  # Space between patterns

# Pattern 2: Simple multiplication table
print("Pattern 2: Multiplication table")
for i in range(1, 6):
    for j in range(1, 6):
        print(f"{i*j:2}", end=" ")
    print()  # New line after each row

print()  # Space between patterns

# Calculate sum of numbers from 1 to 10
total = 0
for num in range(1, 11):
    total += num
    print(f"Adding {num}: Total is now {total}")`
          }
        ]
      }
    ]
  },
  {
    id: 'python-intermediate',
    title: 'Intermediate Python',
    description: 'Take your Python skills to the next level with more advanced concepts.',
    completedLessons: 0,
    totalLessons: 12,
    modules: [
      {
        id: 'functions',
        title: 'Functions and Methods',
        description: 'Learn how to create and use functions in Python.',
        lessons: [
          {
            id: 'defining-functions',
            title: 'Defining Functions',
            completed: false,
            content: `
              <h2>Creating Functions in Python</h2>
              <p>Functions are blocks of reusable code that perform a specific task. They help organize code and make it more modular and maintainable.</p>
              
              <h3>Basic Function Definition</h3>
              <pre>def greet():
    print("Hello, World!")
    
# Call the function
greet()</pre>
              
              <h3>Functions with Parameters</h3>
              <pre>def greet_person(name):
    print(f"Hello, {name}!")
    
greet_person("Alice")
greet_person("Bob")</pre>
              
              <h3>Return Values</h3>
              <pre>def add(a, b):
    return a + b
    
result = add(5, 3)
print(f"5 + 3 = {result}")</pre>
              
              <h3>Default Parameter Values</h3>
              <pre>def greet_with_message(name, message="Good day"):
    print(f"{message}, {name}!")
    
greet_with_message("Alice")  # Uses default message
greet_with_message("Bob", "Welcome")</pre>
              
              <h3>Try It Yourself</h3>
              <p>Create some functions that perform different tasks and experiment with parameters and return values.</p>
            `,
            codeExample: `# Define a function to calculate the area of a rectangle
def calculate_rectangle_area(length, width):
    area = length * width
    return area

# Define a function to check if a number is prime
def is_prime(number):
    if number <= 1:
        return False
    
    for i in range(2, int(number**0.5) + 1):
        if number % i == 0:
            return False
    
    return True

# Using the area function
rect1_area = calculate_rectangle_area(5, 3)
rect2_area = calculate_rectangle_area(7, 2)

print(f"Rectangle 1 area: {rect1_area}")
print(f"Rectangle 2 area: {rect2_area}")

# Using the prime checker function
for num in range(10, 20):
    if is_prime(num):
        print(f"{num} is prime")
    else:
        print(f"{num} is not prime")`
          }
        ]
      }
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development Basics',
    description: 'Learn the fundamentals of HTML and CSS for web development.',
    completedLessons: 0,
    totalLessons: 8,
    modules: [
      {
        id: 'html-basics',
        title: 'HTML Fundamentals',
        description: 'Learn the building blocks of web pages.',
        lessons: [
          {
            id: 'html-intro',
            title: 'Introduction to HTML',
            completed: false,
            content: `
              <h2>Introduction to HTML</h2>
              <p>HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.</p>
              
              <h3>Basic HTML Document Structure</h3>
              <pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My First Web Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, World!&lt;/h1&gt;
    &lt;p&gt;This is my first web page.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
              
              <h3>HTML Elements</h3>
              <p>HTML uses "elements" to define different parts of a web page:</p>
              <ul>
                <li><code>&lt;h1&gt; to &lt;h6&gt;</code>: Headings of different levels</li>
                <li><code>&lt;p&gt;</code>: Paragraphs</li>
                <li><code>&lt;a&gt;</code>: Links</li>
                <li><code>&lt;img&gt;</code>: Images</li>
                <li><code>&lt;div&gt;</code>: Divisions or sections</li>
                <li><code>&lt;span&gt;</code>: Inline containers</li>
              </ul>
              
              <h3>Note on HTML in this Platform</h3>
              <p>While our code editor is primarily designed for Python, you can still learn HTML syntax and concepts here. For interactive HTML practice, we'll introduce specialized HTML tools in future lessons.</p>
            `,
            codeExample: `# Note: This is a Python-based platform
# We'll display HTML syntax as strings for learning purposes

html_document = """<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first web page.</p>
    <a href="https://www.example.com">Visit Example.com</a>
    <img src="image.jpg" alt="An example image">
  </body>
</html>"""

print("This is what an HTML document looks like:")
print(html_document)`
          }
        ]
      }
    ]
  }
];

// Create the CoursesContext
const CoursesContext = createContext<CoursesContextType | undefined>(undefined);

export const CoursesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);

  const markLessonComplete = (lessonId: string) => {
    setCourses(prevCourses => 
      prevCourses.map(course => {
        let courseUpdated = false;
        
        const updatedModules = course.modules.map(module => {
          const updatedLessons = module.lessons.map(lesson => {
            if (lesson.id === lessonId && !lesson.completed) {
              courseUpdated = true;
              return { ...lesson, completed: true };
            }
            return lesson;
          });
          
          return { ...module, lessons: updatedLessons };
        });
        
        const completedLessons = courseUpdated ? course.completedLessons + 1 : course.completedLessons;
        
        return {
          ...course,
          modules: updatedModules,
          completedLessons
        };
      })
    );
  };

  // Helper function to get all lessons across all modules in a course
  const getAllLessons = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    if (!course) return [];
    
    const allLessons: { moduleId: string; lessonId: string }[] = [];
    course.modules.forEach(module => {
      module.lessons.forEach(lesson => {
        allLessons.push({ moduleId: module.id, lessonId: lesson.id });
      });
    });
    
    return allLessons;
  };

  // Get next lesson
  const getNextLesson = () => {
    if (!activeCourseId || !activeModuleId || !activeLessonId) return null;
    
    const allLessons = getAllLessons(activeCourseId);
    const currentIndex = allLessons.findIndex(
      item => item.moduleId === activeModuleId && item.lessonId === activeLessonId
    );
    
    if (currentIndex === -1 || currentIndex >= allLessons.length - 1) return null;
    
    const nextLesson = allLessons[currentIndex + 1];
    return { 
      courseId: activeCourseId, 
      moduleId: nextLesson.moduleId, 
      lessonId: nextLesson.lessonId 
    };
  };

  // Get previous lesson
  const getPrevLesson = () => {
    if (!activeCourseId || !activeModuleId || !activeLessonId) return null;
    
    const allLessons = getAllLessons(activeCourseId);
    const currentIndex = allLessons.findIndex(
      item => item.moduleId === activeModuleId && item.lessonId === activeLessonId
    );
    
    if (currentIndex <= 0) return null;
    
    const prevLesson = allLessons[currentIndex - 1];
    return { 
      courseId: activeCourseId, 
      moduleId: prevLesson.moduleId, 
      lessonId: prevLesson.lessonId 
    };
  };

  return (
    <CoursesContext.Provider
      value={{
        courses,
        activeCourseId,
        activeModuleId,
        activeLessonId,
        setActiveCourse: setActiveCourseId,
        setActiveModule: setActiveModuleId,
        setActiveLesson: setActiveLessonId,
        markLessonComplete,
        getNextLesson,
        getPrevLesson
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export const useCoursesContext = () => {
  const context = useContext(CoursesContext);
  if (context === undefined) {
    throw new Error('useCoursesContext must be used within a CoursesProvider');
  }
  return context;
};
