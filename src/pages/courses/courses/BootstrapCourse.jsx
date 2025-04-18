import React from 'react';
import CoursePage from '../CoursePage';

const bootstrapCourse = {
    title: 'Bootstrap Framework',
    description: 'Master Bootstrap 5 and create responsive, mobile-first websites with ease. Learn to use Bootstrap components, utilities, and grid system to build modern web interfaces.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    duration: '4 weeks',
    level: 'Beginner',
    curriculum: [
        {
            title: 'Bootstrap Basics',
            topics: [
                'Introduction to Bootstrap',
                'Setting up Bootstrap',
                'Grid system fundamentals',
                'Responsive breakpoints'
            ]
        },
        {
            title: 'Bootstrap Components',
            topics: [
                'Navigation components',
                'Buttons and button groups',
                'Cards and alerts',
                'Forms and input groups'
            ]
        },
        {
            title: 'Layout and Utilities',
            topics: [
                'Spacing utilities',
                'Flexbox utilities',
                'Display utilities',
                'Position utilities'
            ]
        },
        {
            title: 'Advanced Components',
            topics: [
                'Modals and tooltips',
                'Carousels and sliders',
                'Dropdowns and popovers',
                'Collapse and accordions'
            ]
        },
        {
            title: 'Customization',
            topics: [
                'Customizing Bootstrap',
                'SASS variables',
                'Creating custom components',
                'Theme customization'
            ]
        },
        {
            title: 'Best Practices',
            topics: [
                'Responsive design patterns',
                'Performance optimization',
                'Accessibility considerations',
                'Cross-browser compatibility'
            ]
        }
    ],
    learningPoints: [
        'Create responsive layouts using Bootstrap grid',
        'Implement Bootstrap components effectively',
        'Customize Bootstrap to match design requirements',
        'Build mobile-first websites',
        'Optimize website performance',
        'Follow Bootstrap best practices'
    ],
    prerequisites: [
        'Basic knowledge of HTML and CSS',
        'Understanding of responsive design concepts',
        'Familiarity with CSS frameworks is helpful but not required'
    ]
};

const BootstrapCourse = () => {
    return <CoursePage course={bootstrapCourse} />;
};

export default BootstrapCourse; 