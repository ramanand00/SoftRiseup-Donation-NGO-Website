import React from 'react';
import CoursePage from '../courses/CoursePage';

const vueCourse = {
    title: 'Vue.js Development',
    description: 'Learn Vue.js, a progressive JavaScript framework for building user interfaces. This course covers everything from basic concepts to advanced features.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    duration: '8 weeks',
    level: 'Intermediate',
    curriculum: [
        {
            title: 'Introduction to Vue.js',
            topics: [
                'What is Vue.js?',
                'Vue.js vs Other Frameworks',
                'Setting up Development Environment',
                'Vue.js Basics'
            ]
        },
        {
            title: 'Vue.js Fundamentals',
            topics: [
                'Template Syntax',
                'Directives',
                'Computed Properties',
                'Watchers'
            ]
        },
        {
            title: 'Components and Props',
            topics: [
                'Component Basics',
                'Props and Events',
                'Slots',
                'Dynamic Components'
            ]
        },
        {
            title: 'Directives and Events',
            topics: [
                'Built-in Directives',
                'Custom Directives',
                'Event Handling',
                'Form Input Bindings'
            ]
        },
        {
            title: 'Computed Properties and Watchers',
            topics: [
                'Computed Properties',
                'Watchers',
                'Methods vs Computed',
                'Async Operations'
            ]
        },
        {
            title: 'Vue Router',
            topics: [
                'Routing Basics',
                'Route Parameters',
                'Navigation Guards',
                'Lazy Loading'
            ]
        },
        {
            title: 'Vuex State Management',
            topics: [
                'State Management Basics',
                'Actions and Mutations',
                'Getters',
                'Modules'
            ]
        },
        {
            title: 'Advanced Vue.js Features',
            topics: [
                'Mixins',
                'Custom Directives',
                'Render Functions',
                'Transitions'
            ]
        }
    ],
    learningPoints: [
        'Build modern web applications with Vue.js',
        'Understand Vue.js core concepts',
        'Implement state management with Vuex',
        'Create reusable components',
        'Handle routing in Vue applications',
        'Work with Vue.js ecosystem tools'
    ],
    prerequisites: [
        'HTML and CSS fundamentals',
        'JavaScript basics',
        'Basic understanding of ES6+ features',
        'Familiarity with npm/yarn'
    ]
};

const VueCourse = () => {
    return <CoursePage course={vueCourse} />;
};

export default VueCourse; 