import React from 'react';
import CoursePage from '../CoursePage';


const angularCourse = {
    title: 'Angular Development',
    description: 'Master Angular, a powerful framework for building dynamic web applications. Learn TypeScript, components, services, and more.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    duration: '10 weeks',
    level: 'Intermediate',
    curriculum: [
        {
            title: 'Introduction to Angular',
            topics: [
                'Angular Overview',
                'Setting up Development Environment',
                'Angular CLI',
                'Project Structure'
            ]
        },
        {
            title: 'TypeScript Fundamentals',
            topics: [
                'TypeScript Basics',
                'Interfaces and Types',
                'Classes and Decorators',
                'Modules and Namespaces'
            ]
        },
        {
            title: 'Components and Templates',
            topics: [
                'Component Architecture',
                'Template Syntax',
                'Data Binding',
                'Directives'
            ]
        },
        {
            title: 'Directives and Pipes',
            topics: [
                'Built-in Directives',
                'Custom Directives',
                'Built-in Pipes',
                'Custom Pipes'
            ]
        },
        {
            title: 'Services and Dependency Injection',
            topics: [
                'Service Basics',
                'Dependency Injection',
                'HTTP Services',
                'Custom Services'
            ]
        },
        {
            title: 'Routing and Navigation',
            topics: [
                'Router Basics',
                'Route Parameters',
                'Guards',
                'Lazy Loading'
            ]
        },
        {
            title: 'Forms and Validation',
            topics: [
                'Template-driven Forms',
                'Reactive Forms',
                'Form Validation',
                'Custom Validators'
            ]
        },
        {
            title: 'HTTP and Observables',
            topics: [
                'HTTP Client',
                'Observables',
                'Error Handling',
                'Interceptors'
            ]
        },
        {
            title: 'State Management',
            topics: [
                'NgRx Basics',
                'Actions and Reducers',
                'Effects',
                'Selectors'
            ]
        }
    ],
    learningPoints: [
        'Build enterprise-grade applications with Angular',
        'Master TypeScript for Angular development',
        'Implement reactive forms and validation',
        'Handle HTTP requests and observables',
        'Manage application state with NgRx',
        'Create reusable components and services'
    ],
    prerequisites: [
        'HTML and CSS fundamentals',
        'JavaScript basics',
        'Basic understanding of TypeScript',
        'Familiarity with npm/yarn'
    ]
};

const AngularCourse = () => {
    return <CoursePage course={angularCourse} />;
};

export default AngularCourse; 