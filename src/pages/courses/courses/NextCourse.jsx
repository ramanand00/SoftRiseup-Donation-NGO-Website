import React from 'react';
import CoursePage from '../CoursePage';

const nextCourse = {
    title: 'Next.js Development',
    description: 'Learn Next.js, the React framework for production. Build server-rendered applications with ease.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    duration: '8 weeks',
    level: 'Intermediate',
    curriculum: [
        {
            title: 'Next.js Fundamentals',
            topics: [
                'Introduction to Next.js',
                'Setting up Next.js Project',
                'Project Structure',
                'Pages and Routing'
            ]
        },
        {
            title: 'Pages and Routing',
            topics: [
                'File-based Routing',
                'Dynamic Routes',
                'Nested Routes',
                'API Routes'
            ]
        },
        {
            title: 'Data Fetching',
            topics: [
                'getStaticProps',
                'getServerSideProps',
                'getStaticPaths',
                'Incremental Static Regeneration'
            ]
        },
        {
            title: 'API Routes',
            topics: [
                'Creating API Routes',
                'Handling Requests',
                'Authentication',
                'Database Integration'
            ]
        },
        {
            title: 'Authentication',
            topics: [
                'NextAuth.js Setup',
                'OAuth Providers',
                'Custom Authentication',
                'Protected Routes'
            ]
        },
        {
            title: 'Deployment',
            topics: [
                'Vercel Deployment',
                'Static Export',
                'Environment Variables',
                'Performance Optimization'
            ]
        },
        {
            title: 'Performance Optimization',
            topics: [
                'Image Optimization',
                'Font Optimization',
                'Code Splitting',
                'Caching Strategies'
            ]
        },
        {
            title: 'Advanced Features',
            topics: [
                'Middleware',
                'Internationalization',
                'TypeScript Support',
                'Custom Server'
            ]
        }
    ],
    learningPoints: [
        'Build production-ready React applications',
        'Implement server-side rendering',
        'Handle API routes and data fetching',
        'Optimize application performance',
        'Deploy Next.js applications',
        'Work with authentication and authorization'
    ],
    prerequisites: [
        'React fundamentals',
        'JavaScript ES6+ features',
        'Basic understanding of Node.js',
        'Familiarity with npm/yarn'
    ]
};

const NextCourse = () => {
    return <CoursePage course={nextCourse} />;
};

export default NextCourse; 