import React from 'react';
import CoursePage from '../courses/CoursePage';

const typescriptCourse = {
    title: 'TypeScript Development',
    description: 'Master TypeScript, a strongly typed superset of JavaScript. Learn to build robust, maintainable applications with type safety and modern JavaScript features.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    duration: '8 weeks',
    level: 'Intermediate',
    curriculum: [
        {
            title: 'TypeScript Fundamentals',
            topics: [
                'Introduction to TypeScript',
                'Type System Basics',
                'Interfaces and Types',
                'Type Inference and Annotations'
            ]
        },
        {
            title: 'Advanced Types',
            topics: [
                'Union and Intersection Types',
                'Generics',
                'Type Guards',
                'Utility Types'
            ]
        },
        {
            title: 'Object-Oriented Programming',
            topics: [
                'Classes and Inheritance',
                'Access Modifiers',
                'Abstract Classes',
                'Interfaces vs Abstract Classes'
            ]
        },
        {
            title: 'TypeScript with React',
            topics: [
                'Setting up TypeScript with React',
                'TypeScript Props and State',
                'Hooks with TypeScript',
                'Context API with TypeScript'
            ]
        },
        {
            title: 'Advanced Features',
            topics: [
                'Decorators',
                'Mixins',
                'Namespaces and Modules',
                'Declaration Files'
            ]
        },
        {
            title: 'Best Practices',
            topics: [
                'TypeScript Configuration',
                'Code Organization',
                'Testing with TypeScript',
                'Performance Optimization'
            ]
        },
        {
            title: 'Real-world Applications',
            topics: [
                'Building a Full-stack Application',
                'API Integration',
                'State Management',
                'Deployment Strategies'
            ]
        }
    ],
    learningPoints: [
        'Write type-safe JavaScript code',
        'Understand TypeScript type system',
        'Use TypeScript with popular frameworks',
        'Implement design patterns in TypeScript',
        'Build scalable applications',
        'Debug and maintain TypeScript code'
    ],
    prerequisites: [
        'JavaScript fundamentals',
        'Basic understanding of OOP concepts',
        'Experience with any JavaScript framework',
        'Familiarity with npm/yarn'
    ]
};

const TypeScriptCourse = () => {
    return <CoursePage course={typescriptCourse} />;
};

export default TypeScriptCourse; 