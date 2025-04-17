import React from 'react';
import CoursePage from '../courses/CoursePage';

const csharpCourse = {
    title: 'C# Programming',
    description: 'Master C# programming and .NET framework. Learn to build desktop applications, web services, and games using this versatile language.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    duration: '12 weeks',
    level: 'Beginner to Intermediate',
    curriculum: [
        {
            title: 'C# Fundamentals',
            topics: [
                'Introduction to C# and .NET',
                'Variables and data types',
                'Operators and expressions',
                'Control flow statements'
            ]
        },
        {
            title: 'Object-Oriented Programming',
            topics: [
                'Classes and objects',
                'Inheritance and polymorphism',
                'Interfaces and abstract classes',
                'Properties and indexers'
            ]
        },
        {
            title: 'Collections and LINQ',
            topics: [
                'Arrays and collections',
                'Generic collections',
                'LINQ queries',
                'Lambda expressions'
            ]
        },
        {
            title: 'Exception Handling',
            topics: [
                'Try-catch blocks',
                'Custom exceptions',
                'Exception handling best practices',
                'Debugging techniques'
            ]
        },
        {
            title: 'File I/O and Serialization',
            topics: [
                'File operations',
                'Streams and readers/writers',
                'JSON and XML serialization',
                'Binary serialization'
            ]
        },
        {
            title: 'Windows Forms Development',
            topics: [
                'Creating GUI applications',
                'Event handling',
                'Controls and components',
                'Data binding'
            ]
        },
        {
            title: 'ASP.NET Core Web Development',
            topics: [
                'MVC architecture',
                'Razor pages',
                'Entity Framework Core',
                'RESTful APIs'
            ]
        },
        {
            title: 'Advanced C# Features',
            topics: [
                'Async/await programming',
                'Delegates and events',
                'Attributes and reflection',
                'Dependency injection'
            ]
        }
    ],
    learningPoints: [
        'Write clean and efficient C# code',
        'Master object-oriented programming concepts',
        'Build desktop applications with Windows Forms',
        'Develop web applications with ASP.NET Core',
        'Work with databases using Entity Framework',
        'Implement modern C# features'
    ],
    prerequisites: [
        'Basic understanding of programming concepts',
        'Familiarity with any programming language is helpful',
        'Willingness to learn and practice'
    ]
};

const CSharpCourse = () => {
    return <CoursePage course={csharpCourse} />;
};

export default CSharpCourse; 