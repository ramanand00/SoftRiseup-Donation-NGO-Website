import React from 'react';
import CoursePage from '../courses/CoursePage';

const cCourse = {
    title: 'C/C++ Programming',
    description: 'Learn the fundamentals of C and C++ programming languages. Master memory management, pointers, and build efficient applications.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    duration: '14 weeks',
    level: 'Beginner to Advanced',
    curriculum: [
        {
            title: 'C Programming Basics',
            topics: [
                'Introduction to C',
                'Variables and data types',
                'Operators and expressions',
                'Control structures'
            ]
        },
        {
            title: 'Functions and Pointers',
            topics: [
                'Function definition and calling',
                'Pointers and memory addresses',
                'Pointer arithmetic',
                'Function pointers'
            ]
        },
        {
            title: 'Arrays and Strings',
            topics: [
                'One-dimensional arrays',
                'Multi-dimensional arrays',
                'String manipulation',
                'Character arrays'
            ]
        },
        {
            title: 'Memory Management',
            topics: [
                'Dynamic memory allocation',
                'malloc, calloc, realloc',
                'Memory leaks and debugging',
                'Best practices'
            ]
        },
        {
            title: 'C++ Introduction',
            topics: [
                'C++ vs C differences',
                'Namespaces',
                'References',
                'Function overloading'
            ]
        },
        {
            title: 'Object-Oriented Programming in C++',
            topics: [
                'Classes and objects',
                'Constructors and destructors',
                'Inheritance',
                'Polymorphism'
            ]
        },
        {
            title: 'STL and Templates',
            topics: [
                'Standard Template Library',
                'Containers and algorithms',
                'Function templates',
                'Class templates'
            ]
        },
        {
            title: 'Advanced C++ Features',
            topics: [
                'Smart pointers',
                'Move semantics',
                'Lambda expressions',
                'Concurrency'
            ]
        }
    ],
    learningPoints: [
        'Write efficient C and C++ code',
        'Master memory management',
        'Understand pointers and references',
        'Work with object-oriented programming',
        'Use STL effectively',
        'Build high-performance applications'
    ],
    prerequisites: [
        'Basic understanding of programming concepts',
        'Familiarity with any programming language is helpful',
        'Strong interest in system programming'
    ]
};

const CCourse = () => {
    return <CoursePage course={cCourse} />;
};

export default CCourse; 