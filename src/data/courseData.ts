
import { Course } from '../types/course';

export const courses: Course[] = [
  {
    id: 'python-basics',
    title: 'Python Programming Fundamentals',
    description: 'Learn the core concepts of Python programming from scratch.',
    category: 'python',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=500&auto=format&fit=crop',
    modules: [
      {
        id: 'python-intro',
        title: 'Introduction to Python',
        description: 'Learn the basics of Python programming language',
        lessons: [
          {
            id: 'python-intro-1',
            title: 'What is Python?',
            content: `
# Introduction to Python

Python is a high-level, interpreted programming language known for its readability and simplicity. Created by Guido van Rossum and first released in 1991, Python emphasizes code readability with its notable use of significant whitespace.

## Why Python?

- **Easy to Learn**: Simple syntax similar to English
- **Versatile**: Used in web development, data science, AI, automation, etc.
- **Large Community**: Extensive libraries and frameworks
- **Cross-Platform**: Runs on Windows, macOS, Linux, etc.

Let's write our first Python program:
            `,
            codeExample: 'print("Hello, World!")',
            duration: '10 minutes',
            completed: false,
            quizQuestions: [
              {
                question: 'Who created Python?',
                options: ['Guido van Rossum', 'James Gosling', 'Brendan Eich', 'Bjarne Stroustrup'],
                correctAnswer: 'Guido van Rossum'
              },
              {
                question: 'When was Python first released?',
                options: ['1991', '2000', '1985', '2005'],
                correctAnswer: '1991'
              }
            ],
            resources: [
              {
                title: 'Official Python Documentation',
                url: 'https://docs.python.org/3/'
              },
              {
                title: 'Python for Beginners',
                url: 'https://www.python.org/about/gettingstarted/'
              }
            ]
          },
          {
            id: 'python-intro-2',
            title: 'Setting Up Python Environment',
            content: `
# Setting Up Your Python Environment

Before we start coding in Python, we need to set up our development environment.

## Installing Python

1. **Windows**: Download the installer from [python.org](https://www.python.org/downloads/) and follow the installation steps.
2. **macOS**: Python comes pre-installed, but you can update it using Homebrew: \`brew install python\`
3. **Linux**: Use your package manager: \`sudo apt install python3\` (Ubuntu)

## Verifying Installation

Open your terminal or command prompt and type:
\`\`\`
python --version
# or
python3 --version
\`\`\`

## Using an IDE or Text Editor

Popular options include:
- **VS Code** with Python extension
- **PyCharm**: Dedicated Python IDE
- **Jupyter Notebooks**: Great for data science

Let's test our setup:
            `,
            codeExample: 'print("Python version: " + __import__("platform").python_version())',
            duration: '15 minutes',
            completed: false,
            quizQuestions: [
              {
                question: 'What command shows your Python version in the terminal?',
                options: ['python --version', 'python -v', 'python -version', 'python show version'],
                correctAnswer: 'python --version'
              }
            ],
            resources: [
              {
                title: 'Installing Python',
                url: 'https://realpython.com/installing-python/'
              }
            ]
          },
          {
            id: 'python-intro-3',
            title: 'Python Syntax and Variables',
            content: `
# Python Syntax and Variables

Python's syntax is designed to be readable and straightforward.

## Basic Syntax

Python uses indentation (whitespace at the beginning of a line) to define scope in the code.

\`\`\`python
# This is a comment
if True:
    print("Indented code")  # Four spaces is standard
print("Outside the if block")
\`\`\`

## Variables

Variables in Python:
- Don't need explicit declaration
- Are dynamically typed
- Case-sensitive (\`name\` and \`Name\` are different variables)

### Variable Assignment:

\`\`\`python
name = "John"  # String
age = 25       # Integer
height = 1.85  # Float
is_student = True  # Boolean
\`\`\`

## Multiple Assignment

\`\`\`python
x, y, z = 1, 2, 3
\`\`\`

Let's see variables in action:
            `,
            codeExample: `# Variable assignment
name = "Python Learner"
age = 25
learning_python = True

# Using variables
print("Hello, " + name)
print("Your age is:", age)
print("Learning Python:", learning_python)

# Multiple assignment
a, b, c = 10, 20, 30
print(a, b, c)`,
            duration: '20 minutes',
            completed: false,
            quizQuestions: [
              {
                question: 'What does Python use to define scope in code?',
                options: ['Curly braces {}', 'Indentation', 'Semicolons ;', 'Parentheses ()'],
                correctAnswer: 'Indentation'
              },
              {
                question: 'Is Python dynamically typed?',
                options: ['Yes', 'No'],
                correctAnswer: 'Yes'
              }
            ],
            resources: [
              {
                title: 'Python Variables',
                url: 'https://www.w3schools.com/python/python_variables.asp'
              }
            ]
          }
        ]
      },
      {
        id: 'python-data-types',
        title: 'Data Types and Operations',
        description: 'Learn about Python data types and operations',
        lessons: [
          {
            id: 'data-types-1',
            title: 'Numeric Data Types',
            content: `
# Numeric Data Types in Python

Python has several built-in numeric data types to represent numbers.

## Integers (int)

Integers are whole numbers without a fractional part.

\`\`\`python
x = 5
y = -10
big_number = 1000000
\`\`\`

## Floating-Point Numbers (float)

Floats represent real numbers with a decimal point.

\`\`\`python
pi = 3.14159
temperature = -2.5
scientific = 1.23e4  # 12300.0
\`\`\`

## Complex Numbers (complex)

Complex numbers have a real and imaginary part.

\`\`\`python
z = 2 + 3j
\`\`\`

## Numeric Operations

\`\`\`python
# Addition
sum = 5 + 3  # 8

# Subtraction
difference = 10 - 4  # 6

# Multiplication
product = 3 * 7  # 21

# Division (returns float)
quotient = 20 / 4  # 5.0

# Integer Division (floor division)
floor_quotient = 20 // 6  # 3

# Modulo (remainder)
remainder = 20 % 6  # 2

# Exponentiation
power = 2 ** 3  # 8
\`\`\`

Let's practice with numeric operations:
            `,
            codeExample: `# Integer operations
a = 15
b = 4

# Basic operations
print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)
print("Integer Division:", a // b)
print("Modulo:", a % b)
print("Exponentiation:", a ** b)

# Mixing integers and floats
c = 2.5
print("Mixed operation:", a * c)`,
            duration: '25 minutes',
            completed: false,
            quizQuestions: [
              {
                question: 'What is the result of 20 % 6 in Python?',
                options: ['2', '3', '3.33', '0'],
                correctAnswer: '2'
              },
              {
                question: 'What is the difference between / and // in Python?',
                options: [
                  '/ performs division and // performs multiplication',
                  '/ returns a float and // returns an integer by flooring the result',
                  '/ is for integers and // is for floats',
                  'There is no difference'
                ],
                correctAnswer: '/ returns a float and // returns an integer by flooring the result'
              }
            ],
            resources: [
              {
                title: 'Python Numbers',
                url: 'https://docs.python.org/3/tutorial/introduction.html#numbers'
              }
            ]
          },
          {
            id: 'data-types-2',
            title: 'String Data Type',
            content: `
# String Data Type in Python

Strings are sequences of characters enclosed in quotes.

## Creating Strings

Strings can be created using single quotes, double quotes, or triple quotes.

\`\`\`python
single = 'Hello'
double = "World"
triple = '''This is a
multi-line string'''
\`\`\`

## String Operations

### Concatenation

\`\`\`python
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name  # "John Doe"
\`\`\`

### Repetition

\`\`\`python
repeated = "Ha" * 3  # "HaHaHa"
\`\`\`

### Indexing

\`\`\`python
word = "Python"
first_letter = word[0]  # "P"
last_letter = word[-1]  # "n"
\`\`\`

### Slicing

\`\`\`python
word = "Python"
slice1 = word[0:3]  # "Pyt"
slice2 = word[2:]   # "thon"
slice3 = word[:4]   # "Pyth"
\`\`\`

### Common String Methods

\`\`\`python
message = "hello, world!"
uppercase = message.upper()  # "HELLO, WORLD!"
capitalized = message.capitalize()  # "Hello, world!"
replaced = message.replace("world", "Python")  # "hello, Python!"
position = message.find("world")  # 7
split_result = message.split(", ")  # ["hello", "world!"]
\`\`\`

Let's practice with strings:
            `,
            codeExample: `# String creation
name = "Python"
description = 'Programming Language'

# Concatenation and repetition
print(name + " " + description)
print("-" * 20)

# Indexing and slicing
print("First character:", name[0])
print("Last character:", name[-1])
print("Slicing (1:4):", name[1:4])

# String methods
message = "hello, python!"
print("Uppercase:", message.upper())
print("Capitalized:", message.capitalize())
print("Replace:", message.replace("python", "world"))
print("Split:", message.split(", "))`,
            duration: '30 minutes',
            completed: false,
            quizQuestions: [
              {
                question: 'Which of the following correctly accesses the first character of a string named "text"?',
                options: ['text(0)', 'text.first', 'text[0]', 'text[1]'],
                correctAnswer: 'text[0]'
              },
              {
                question: 'What does the string method .upper() do?',
                options: [
                  'Converts only the first character to uppercase',
                  'Converts all characters to uppercase',
                  'Converts only letters to uppercase, leaving symbols unchanged',
                  'Capitalizes the first letter of each word'
                ],
                correctAnswer: 'Converts all characters to uppercase'
              }
            ],
            resources: [
              {
                title: 'Python Strings',
                url: 'https://docs.python.org/3/tutorial/introduction.html#strings'
              },
              {
                title: 'String Methods',
                url: 'https://www.w3schools.com/python/python_strings_methods.asp'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'javascript-basics',
    title: 'JavaScript Essentials',
    description: 'Learn JavaScript from the ground up for web development.',
    category: 'web',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=500&auto=format&fit=crop',
    modules: [
      {
        id: 'js-introduction',
        title: 'Introduction to JavaScript',
        description: 'Getting started with JavaScript fundamentals',
        lessons: [
          {
            id: 'js-intro-1',
            title: 'What is JavaScript?',
            content: `
# Introduction to JavaScript

JavaScript is a high-level, interpreted programming language primarily used for creating interactive effects within web browsers.

## What is JavaScript?

JavaScript (often abbreviated as JS) is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. It enables interactive web pages and is an essential part of web applications.

## History of JavaScript

- Created by Brendan Eich in 1995
- Originally called "LiveScript," later renamed to JavaScript
- ECMAScript is the official name of the language standard
- Modern JavaScript (ES6 and beyond) has added many powerful features

## Use Cases for JavaScript

- **Client-side web development**: Enhancing HTML pages with interactivity
- **Server-side development**: Using Node.js to build backend services
- **Mobile app development**: Creating cross-platform apps with React Native
- **Desktop applications**: Building with frameworks like Electron
- **Game development**: Creating browser-based games
- **Internet of Things (IoT)**: Programming smart devices

Let's write our first JavaScript code!
            `,
            codeExample: `// This is a comment in JavaScript
console.log("Hello, World!");
// Variables
let name = "JavaScript Learner";
console.log("Hello, " + name);`,
            duration: '15 minutes',
            completed: false,
            quizQuestions: [
              {
                question: 'Who created JavaScript?',
                options: ['Brendan Eich', 'Tim Berners-Lee', 'James Gosling', 'Guido van Rossum'],
                correctAnswer: 'Brendan Eich'
              },
              {
                question: 'What is the standardized name for JavaScript?',
                options: ['TypeScript', 'ECMAScript', 'JavaSource', 'WebScript'],
                correctAnswer: 'ECMAScript'
              }
            ],
            resources: [
              {
                title: 'MDN Web Docs - JavaScript',
                url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
              },
              {
                title: 'JavaScript - Wikipedia',
                url: 'https://en.wikipedia.org/wiki/JavaScript'
              }
            ]
          },
          {
            id: 'js-intro-2',
            title: 'JavaScript Variables and Data Types',
            content: `
# JavaScript Variables and Data Types

In JavaScript, variables are containers for storing data values. JavaScript is a dynamically typed language, which means variables can change their type.

## Declaring Variables

Modern JavaScript provides three ways to declare variables:

### 1. Using \`let\` (Block-scoped, can be reassigned)

\`\`\`javascript
let age = 25;
age = 26; // This works fine
\`\`\`

### 2. Using \`const\` (Block-scoped, cannot be reassigned)

\`\`\`javascript
const PI = 3.14159;
// PI = 3; // This would cause an error
\`\`\`

### 3. Using \`var\` (Function-scoped, older way)

\`\`\`javascript
var name = "JavaScript";
\`\`\`

## JavaScript Data Types

JavaScript has several built-in data types:

### 1. Primitive Data Types

- **String**: Textual data
- **Number**: Integers and floating-point numbers
- **Boolean**: \`true\` or \`false\`
- **Undefined**: Variable declared but not assigned a value
- **Null**: Represents intentional absence of value
- **Symbol**: Unique and immutable values (added in ES6)
- **BigInt**: For integers larger than the Number type can handle

### 2. Complex Data Types

- **Object**: Collections of related data
- **Array**: Ordered collections of values
- **Function**: Reusable blocks of code

Let's see these data types in action:
            `,
            codeExample: `// Primitive data types
let name = "JavaScript"; // String
let age = 28; // Number
let isActive = true; // Boolean
let user = undefined; // Undefined
let data = null; // Null
let uniqueId = Symbol("id"); // Symbol
let bigNumber = 9007199254740991n; // BigInt

// Complex data types
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
}; // Object

let colors = ["red", "green", "blue"]; // Array

// Function
function greet(name) {
  return "Hello, " + name;
}

// Output
console.log(typeof name); // "string"
console.log(typeof age); // "number"
console.log(typeof isActive); // "boolean"
console.log(typeof person); // "object"
console.log(typeof colors); // "object" (arrays are objects!)
console.log(typeof greet); // "function"

console.log(greet("World")); // "Hello, World"`,
            duration: '25 minutes',
            completed: false,
            quizQuestions: [
              {
                question: 'What is the difference between let and const in JavaScript?',
                options: [
                  'let is for strings, const is for numbers',
                  'let variables can be reassigned, const variables cannot',
                  'const is for functions, let is for variables',
                  'There is no difference'
                ],
                correctAnswer: 'let variables can be reassigned, const variables cannot'
              },
              {
                question: 'What will typeof [1, 2, 3] return in JavaScript?',
                options: ['array', 'object', 'list', 'undefined'],
                correctAnswer: 'object'
              }
            ],
            resources: [
              {
                title: 'JavaScript Data Types',
                url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures'
              },
              {
                title: 'JavaScript Variables',
                url: 'https://www.w3schools.com/js/js_variables.asp'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'java-basics',
    title: 'Java Programming Fundamentals',
    description: 'Learn Java programming for enterprise applications and Android development.',
    category: 'programming',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=500&auto=format&fit=crop',
    modules: [
      {
        id: 'java-introduction',
        title: 'Introduction to Java',
        description: 'Getting started with Java programming language',
        lessons: [
          {
            id: 'java-intro-1',
            title: 'What is Java?',
            content: `
# Introduction to Java

Java is a powerful general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible.

## What is Java?

Java is a high-level, class-based, object-oriented programming language that was developed by James Gosling at Sun Microsystems (which is now a subsidiary of Oracle) and released in 1995.

## Why Java?

- **Platform Independence**: Write once, run anywhere (WORA)
- **Object-Oriented**: Based on the concept of objects
- **Rich API**: Large standard library
- **Security**: Security features built into the language and platform
- **Robustness**: Strong memory management, and exception handling

## Applications of Java

- **Enterprise Applications**: Large-scale business applications
- **Android Applications**: Official language for Android app development
- **Web Applications**: Backend systems and server-side applications
- **Financial Services**: Trading platforms, billing systems
- **Scientific Applications**: Data processing and scientific calculations
- **Big Data Technologies**: Hadoop, Apache Spark

Let's see our first Java program:
            `,
            codeExample: `// Main class
public class HelloWorld {
    // Main method - entry point for Java applications
    public static void main(String[] args) {
        // Print message to console
        System.out.println("Hello, Java World!");
        
        // Variables
        String name = "Java Learner";
        System.out.println("Welcome, " + name);
    }
}`,
            duration: '20 minutes',
            completed: false,
            quizQuestions: [
              {
                question: 'Who created Java?',
                options: ['James Gosling', 'Bjarne Stroustrup', 'Guido van Rossum', 'Brendan Eich'],
                correctAnswer: 'James Gosling'
              },
              {
                question: 'What does WORA stand for in the context of Java?',
                options: [
                  'Write Once, Run Always',
                  'Write Once, Run Anywhere',
                  'Write Original, Run Advanced',
                  'Write Original, Read Always'
                ],
                correctAnswer: 'Write Once, Run Anywhere'
              }
            ],
            resources: [
              {
                title: 'Oracle Java Documentation',
                url: 'https://docs.oracle.com/en/java/'
              },
              {
                title: 'Java - Wikipedia',
                url: 'https://en.wikipedia.org/wiki/Java_(programming_language)'
              }
            ]
          }
        ]
      }
    ]
  }
];

export type CourseType = typeof courses[number];
export type ModuleType = CourseType['modules'][number];
export type LessonType = ModuleType['lessons'][number];

export default courses;
