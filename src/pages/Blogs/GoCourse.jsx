import React from 'react';
import CoursePage from '../courses/CoursePage';

const goCourse = {
    title: 'Go Programming',
    description: 'Learn Go programming language for building efficient, concurrent, and scalable applications. Master Go\'s unique features and best practices.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    duration: '10 weeks',
    level: 'Beginner to Intermediate',
    curriculum: [
        {
            title: 'Go Fundamentals',
            topics: [
                'Introduction to Go',
                'Variables and data types',
                'Operators and expressions',
                'Control flow statements'
            ]
        },
        {
            title: 'Functions and Methods',
            topics: [
                'Function declaration',
                'Multiple return values',
                'Methods and receivers',
                'Defer and panic'
            ]
        },
        {
            title: 'Data Structures',
            topics: [
                'Arrays and slices',
                'Maps',
                'Structs',
                'Interfaces'
            ]
        },
        {
            title: 'Concurrency',
            topics: [
                'Goroutines',
                'Channels',
                'Select statement',
                'Wait groups'
            ]
        },
        {
            title: 'Error Handling',
            topics: [
                'Error types',
                'Error wrapping',
                'Custom errors',
                'Error handling patterns'
            ]
        },
        {
            title: 'Standard Library',
            topics: [
                'I/O operations',
                'String manipulation',
                'Time and date',
                'JSON handling'
            ]
        },
        {
            title: 'Web Development',
            topics: [
                'HTTP server',
                'Routing',
                'Middleware',
                'Templates'
            ]
        },
        {
            title: 'Advanced Go Features',
            topics: [
                'Reflection',
                'Testing and benchmarking',
                'Profiling',
                'Dependency management'
            ]
        }
    ],
    learningPoints: [
        'Write efficient and clean Go code',
        'Master Go\'s concurrency model',
        'Build web applications and APIs',
        'Work with Go\'s standard library',
        'Implement error handling patterns',
        'Create concurrent applications'
    ],
    prerequisites: [
        'Basic understanding of programming concepts',
        'Familiarity with any programming language is helpful',
        'Interest in system programming and concurrency'
    ]
};

const GoCourse = () => {
    return <CoursePage course={goCourse} />;
};

export default GoCourse; 