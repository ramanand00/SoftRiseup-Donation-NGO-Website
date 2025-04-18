import React from 'react';
import CoursePage from '../CoursePage';

const rustCourse = {
    title: 'Rust Programming',
    description: 'Learn Rust programming language for building safe, concurrent, and fast applications. Master Rust\'s unique ownership system and memory safety features.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
    duration: '12 weeks',
    level: 'Intermediate to Advanced',
    curriculum: [
        {
            title: 'Rust Fundamentals',
            topics: [
                'Introduction to Rust',
                'Variables and data types',
                'Ownership and borrowing',
                'Control flow statements'
            ]
        },
        {
            title: 'Memory Management',
            topics: [
                'Ownership rules',
                'Borrowing and references',
                'Lifetimes',
                'Smart pointers'
            ]
        },
        {
            title: 'Data Structures',
            topics: [
                'Structs and enums',
                'Pattern matching',
                'Generics',
                'Traits'
            ]
        },
        {
            title: 'Error Handling',
            topics: [
                'Result and Option types',
                'Error propagation',
                'Custom error types',
                'Unwrap and expect'
            ]
        },
        {
            title: 'Concurrency',
            topics: [
                'Threads',
                'Message passing',
                'Shared state',
                'Async/await'
            ]
        },
        {
            title: 'Standard Library',
            topics: [
                'Collections',
                'I/O operations',
                'String handling',
                'Time and date'
            ]
        },
        {
            title: 'Advanced Features',
            topics: [
                'Macros',
                'Unsafe Rust',
                'FFI (Foreign Function Interface)',
                'Testing and documentation'
            ]
        },
        {
            title: 'Web Development',
            topics: [
                'Actix-web framework',
                'Rocket framework',
                'Database integration',
                'RESTful APIs'
            ]
        }
    ],
    learningPoints: [
        'Write safe and efficient Rust code',
        'Master Rust\'s ownership system',
        'Build concurrent applications',
        'Work with Rust\'s standard library',
        'Implement error handling patterns',
        'Create web applications with Rust'
    ],
    prerequisites: [
        'Basic understanding of programming concepts',
        'Familiarity with systems programming is helpful',
        'Willingness to learn Rust\'s unique concepts'
    ]
};

const RustCourse = () => {
    return <CoursePage course={rustCourse} />;
};

export default RustCourse; 