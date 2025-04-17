import React from 'react';
import CoursePage from '../courses/CoursePage';

const javascriptCourse = {
    title: 'JavaScript Programming',
    description: 'Master JavaScript programming for web development. Learn to build interactive websites, web applications, and server-side applications with Node.js.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    duration: '12 weeks',
    level: 'Beginner to Advanced',
    curriculum: [
        {
            title: 'JavaScript Fundamentals',
            topics: [
                'Introduction to JavaScript',
                'Variables and data types',
                'Operators and expressions',
                'Control flow statements'
            ]
        },
        {
            title: 'Functions and Scope',
            topics: [
                'Function declaration and expression',
                'Arrow functions',
                'Closures',
                'Hoisting and scope'
            ]
        },
        {
            title: 'Objects and Arrays',
            topics: [
                'Object creation and manipulation',
                'Array methods',
                'Destructuring',
                'Spread and rest operators'
            ]
        },
        {
            title: 'DOM Manipulation',
            topics: [
                'Selecting elements',
                'Event handling',
                'DOM traversal',
                'Dynamic content creation'
            ]
        },
        {
            title: 'Asynchronous JavaScript',
            topics: [
                'Callbacks',
                'Promises',
                'Async/await',
                'Event loop'
            ]
        },
        {
            title: 'Modern JavaScript Features',
            topics: [
                'ES6+ features',
                'Modules',
                'Classes and inheritance',
                'Template literals'
            ]
        },
        {
            title: 'Frontend Frameworks',
            topics: [
                'React.js fundamentals',
                'Component-based architecture',
                'State management',
                'React hooks'
            ]
        },
        {
            title: 'Node.js and Backend Development',
            topics: [
                'Node.js basics',
                'Express.js framework',
                'RESTful APIs',
                'Database integration'
            ]
        }
    ],
    learningPoints: [
        'Write clean and efficient JavaScript code',
        'Master DOM manipulation',
        'Work with modern JavaScript features',
        'Build interactive web applications',
        'Develop server-side applications with Node.js',
        'Create responsive and dynamic user interfaces'
    ],
    prerequisites: [
        'Basic understanding of HTML and CSS',
        'No prior programming experience required',
        'Willingness to learn and practice'
    ]
};

const JavaScriptCourse = () => {
    return <CoursePage course={javascriptCourse} />;
};

export default JavaScriptCourse; 