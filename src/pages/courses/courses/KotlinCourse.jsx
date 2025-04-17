import React from 'react';
import CoursePage from '../courses/CoursePage';

const kotlinCourse = {
    title: 'Kotlin Programming',
    description: 'Learn Kotlin programming language for Android development and modern JVM applications. Build robust, concise, and type-safe applications.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    duration: '10 weeks',
    level: 'Beginner to Intermediate',
    curriculum: [
        {
            title: 'Kotlin Fundamentals',
            topics: [
                'Introduction to Kotlin',
                'Variables and data types',
                'Operators and expressions',
                'Control flow statements'
            ]
        },
        {
            title: 'Functions and Lambdas',
            topics: [
                'Function declaration',
                'Default and named arguments',
                'Higher-order functions',
                'Lambda expressions'
            ]
        },
        {
            title: 'Object-Oriented Programming',
            topics: [
                'Classes and objects',
                'Properties and fields',
                'Inheritance',
                'Interfaces and abstract classes'
            ]
        },
        {
            title: 'Null Safety',
            topics: [
                'Nullable types',
                'Safe calls',
                'Elvis operator',
                'Let and run functions'
            ]
        },
        {
            title: 'Collections',
            topics: [
                'Lists and arrays',
                'Sets and maps',
                'Collection operations',
                'Sequences'
            ]
        },
        {
            title: 'Coroutines',
            topics: [
                'Async programming',
                'Coroutine builders',
                'Coroutine context',
                'Flow API'
            ]
        },
        {
            title: 'Android Development',
            topics: [
                'Android Studio setup',
                'Activities and fragments',
                'View binding',
                'ViewModel and LiveData'
            ]
        },
        {
            title: 'Advanced Topics',
            topics: [
                'Extension functions',
                'Delegation',
                'Type-safe builders',
                'Testing with Kotlin'
            ]
        }
    ],
    learningPoints: [
        'Write concise and expressive Kotlin code',
        'Master Kotlin\'s null safety features',
        'Build Android applications',
        'Work with coroutines for async programming',
        'Implement modern Android architecture',
        'Create type-safe applications'
    ],
    prerequisites: [
        'Basic understanding of programming concepts',
        'Familiarity with Java is helpful but not required',
        'Willingness to learn Android development'
    ]
};

const KotlinCourse = () => {
    return <CoursePage course={kotlinCourse} />;
};

export default KotlinCourse; 