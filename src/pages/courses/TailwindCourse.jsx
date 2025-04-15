import React from 'react';
import CoursePage from './CoursePage';

const tailwindCourse = {
    title: 'Tailwind CSS',
    description: 'Learn to build modern, responsive websites using Tailwind CSS. Master utility-first CSS and create beautiful, maintainable designs without writing custom CSS.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    duration: '5 weeks',
    level: 'Beginner',
    curriculum: [
        {
            title: 'Tailwind CSS Fundamentals',
            topics: [
                'Introduction to utility-first CSS',
                'Setting up Tailwind CSS',
                'Core concepts and philosophy',
                'Configuration basics'
            ]
        },
        {
            title: 'Layout and Spacing',
            topics: [
                'Flexbox and Grid utilities',
                'Spacing and sizing',
                'Container and box model',
                'Responsive design'
            ]
        },
        {
            title: 'Typography and Colors',
            topics: [
                'Text styling and sizing',
                'Font families and weights',
                'Color system and theming',
                'Opacity and gradients'
            ]
        },
        {
            title: 'Components and Utilities',
            topics: [
                'Buttons and forms',
                'Cards and alerts',
                'Navigation components',
                'Custom animations'
            ]
        },
        {
            title: 'Advanced Features',
            topics: [
                'Custom configurations',
                'Plugins and extensions',
                'Dark mode implementation',
                'Performance optimization'
            ]
        },
        {
            title: 'Best Practices',
            topics: [
                'Component extraction',
                'Responsive design patterns',
                'Accessibility considerations',
                'Maintenance strategies'
            ]
        }
    ],
    learningPoints: [
        'Build responsive layouts using Tailwind CSS',
        'Create custom components without writing CSS',
        'Implement dark mode and themes',
        'Optimize website performance',
        'Follow Tailwind CSS best practices',
        'Extract reusable components'
    ],
    prerequisites: [
        'Basic knowledge of HTML and CSS',
        'Understanding of responsive design concepts',
        'Familiarity with CSS frameworks is helpful but not required'
    ]
};

const TailwindCourse = () => {
    return <CoursePage course={tailwindCourse} />;
};

export default TailwindCourse; 