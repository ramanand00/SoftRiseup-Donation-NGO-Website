import React from 'react';
import CoursePage from '../courses/CoursePage';

const reactCourse = {
    title: 'React.js Development',
    description: 'Master React.js and build modern, interactive web applications. Learn component-based architecture, state management, and best practices for building scalable applications.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    duration: '8 weeks',
    level: 'Intermediate',
    curriculum: [
        {
            title: 'Introduction to React',
            topics: [
                'What is React and why use it?',
                'Setting up development environment',
                'JSX and React components',
                'Props and state fundamentals'
            ]
        },
        {
            title: 'Core React Concepts',
            topics: [
                'Component lifecycle methods',
                'Hooks (useState, useEffect, useContext)',
                'Event handling',
                'Conditional rendering'
            ]
        },
        {
            title: 'Advanced React Patterns',
            topics: [
                'Higher-order components',
                'Render props',
                'Context API',
                'Error boundaries'
            ]
        },
        {
            title: 'State Management',
            topics: [
                'Redux fundamentals',
                'Redux Toolkit',
                'Context vs Redux',
                'State management best practices'
            ]
        },
        {
            title: 'React Router',
            topics: [
                'Routing basics',
                'Route parameters',
                'Nested routes',
                'Protected routes'
            ]
        },
        {
            title: 'Performance Optimization',
            topics: [
                'React.memo and useMemo',
                'useCallback',
                'Code splitting',
                'Lazy loading'
            ]
        }
    ],
    learningPoints: [
        'Build modern, responsive web applications using React',
        'Implement state management solutions',
        'Create reusable components and hooks',
        'Handle routing and navigation',
        'Optimize application performance',
        'Follow React best practices and patterns'
    ],
    prerequisites: [
        'Basic understanding of HTML, CSS, and JavaScript',
        'Familiarity with ES6+ features',
        'Basic knowledge of npm and Node.js'
    ]
};

const ReactCourse = () => {
    return <CoursePage course={reactCourse} />;
};

export default ReactCourse; 