import React from 'react';
import CoursePage from './CoursePage';

const pythonCourse = {
    title: 'Python Programming',
    description: 'Learn Python from scratch and master its applications in web development, data science, and automation. Build real-world projects and gain practical experience.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    duration: '10 weeks',
    level: 'Beginner',
    curriculum: [
        {
            title: 'Python Basics',
            topics: [
                'Introduction to Python',
                'Variables and data types',
                'Operators and expressions',
                'Control flow statements'
            ]
        },
        {
            title: 'Functions and Modules',
            topics: [
                'Function definition and calling',
                'Parameters and return values',
                'Built-in functions',
                'Creating and using modules'
            ]
        },
        {
            title: 'Object-Oriented Programming',
            topics: [
                'Classes and objects',
                'Inheritance and polymorphism',
                'Encapsulation',
                'Special methods'
            ]
        },
        {
            title: 'Data Structures',
            topics: [
                'Lists and tuples hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh  hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                'Dictionaries and sets',
                'List comprehensions',
                'Working with collections'
            ]
        },
        {
            title: 'File Handling',
            topics: [
                'Reading and writing files',
                'Working with CSV and JSON',
                'Exception handling',
                'Context managers'
            ]
        },
        {
            title: 'Web Development with Python',
            topics: [
                'Introduction to Flask/Django',
                'Creating web applications',
                'Working with databases',
                'RESTful APIs'
            ]
        },
        {
            title: 'Data Science Basics',
            topics: [
                'NumPy fundamentals',
                'Pandas for data analysis',
                'Data visualization with Matplotlib',
                'Basic machine learning concepts'
            ]
        }
    ],
    learningPoints: [
        'Write clean and efficient Python code',
        'Understand object-oriented programming concepts',
        'Work with various data structures',
        'Build web applications using Python frameworks',
        'Perform data analysis and visualization',
        'Automate tasks and processes'
    ],
    prerequisites: [
        'Basic computer literacy',
        'No prior programming experience required',
        'Willingness to learn and practice'
    ]
};

const PythonCourse = () => {
    return <CoursePage course={pythonCourse} />;
};

export default PythonCourse; 