import React from 'react';
import CoursePage from '../CoursePage';

const swiftCourse = {
    title: 'Swift Programming',
    description: 'Learn Swift programming language for iOS, macOS, watchOS, and tvOS development. Build modern, safe, and fast applications for Apple platforms.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
    duration: '12 weeks',
    level: 'Beginner to Intermediate',
    curriculum: [
        {
            title: 'Swift Fundamentals',
            topics: [
                'Introduction to Swift',
                'Variables and constants',
                'Data types and operators',
                'Control flow statements'
            ]
        },
        {
            title: 'Functions and Closures',
            topics: [
                'Function declaration',
                'Parameters and return values',
                'Closures and trailing closures',
                'Higher-order functions'
            ]
        },
        {
            title: 'Object-Oriented Programming',
            topics: [
                'Classes and structures',
                'Properties and methods',
                'Inheritance',
                'Protocols and extensions'
            ]
        },
        {
            title: 'Swift Collections',
            topics: [
                'Arrays and dictionaries',
                'Sets',
                'Collection operations',
                'Generics'
            ]
        },
        {
            title: 'Error Handling',
            topics: [
                'Optional types',
                'Error handling with try-catch',
                'Guard statements',
                'Optional chaining'
            ]
        },
        {
            title: 'iOS Development Basics',
            topics: [
                'UIKit framework',
                'View controllers',
                'Auto Layout',
                'Storyboards and XIBs'
            ]
        },
        {
            title: 'SwiftUI',
            topics: [
                'Declarative UI',
                'State management',
                'View modifiers',
                'Navigation'
            ]
        },
        {
            title: 'Advanced Topics',
            topics: [
                'Concurrency with async/await',
                'Combine framework',
                'Core Data',
                'Networking and APIs'
            ]
        }
    ],
    learningPoints: [
        'Write clean and efficient Swift code',
        'Master Swift\'s type system',
        'Build iOS applications with UIKit',
        'Create modern UIs with SwiftUI',
        'Work with Apple frameworks',
        'Implement best practices for Apple platforms'
    ],
    prerequisites: [
        'Basic understanding of programming concepts',
        'Access to a Mac computer',
        'Willingness to learn Apple development'
    ]
};

const SwiftCourse = () => {
    return <CoursePage course={swiftCourse} />;
};

export default SwiftCourse; 