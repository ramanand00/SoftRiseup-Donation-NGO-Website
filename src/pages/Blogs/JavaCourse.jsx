import React from 'react';
import CoursePage from '../courses/CoursePage';

const javaCourse = {
    title: 'Java Programming',
    description: 'Master Java programming from fundamentals to advanced concepts. Learn object-oriented programming, data structures, and build robust applications.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    duration: '12 weeks',
    level: 'Beginner to Intermediate',
    curriculum: [
        {
            title: 'Java Fundamentals',
            topics: [
                'Introduction to Java',
                'Variables and data types',
                'Operators and expressions',
                'Control flow statements'
            ]
        },
        {
            title: 'Object-Oriented Programming',
            topics: [
                'Classes and objects',
                'Inheritance and polymorphism',
                'Encapsulation and abstraction',
                'Interfaces and abstract classes'
            ]
        },
        {
            title: 'Java Collections',
            topics: [
                'List, Set, and Map interfaces',
                'ArrayList and LinkedList',
                'HashSet and TreeSet',
                'HashMap and TreeMap'
            ]
        },
        {
            title: 'Exception Handling',
            topics: [
                'Try-catch blocks',
                'Custom exceptions',
                'Checked vs Unchecked exceptions',
                'Exception best practices'
            ]
        },
        {
            title: 'Java I/O and File Handling',
            topics: [
                'Streams and readers/writers',
                'File operations',
                'Serialization',
                'NIO package'
            ]
        },
        {
            title: 'Multithreading',
            topics: [
                'Thread creation and management',
                'Synchronization',
                'Thread pools',
                'Concurrent collections'
            ]
        },
        {
            title: 'Java Database Connectivity',
            topics: [
                'JDBC basics',
                'Connection management',
                'Prepared statements',
                'Transaction management'
            ]
        },
        {
            title: 'Spring Framework',
            topics: [
                'Spring Core',
                'Dependency Injection',
                'Spring Boot',
                'RESTful web services'
            ]
        }
    ],
    learningPoints: [
        'Write clean and efficient Java code',
        'Master object-oriented programming concepts',
        'Work with Java collections framework',
        'Handle exceptions effectively',
        'Implement multithreading',
        'Build web applications with Spring'
    ],
    prerequisites: [
        'Basic understanding of programming concepts',
        'Familiarity with any programming language is helpful',
        'Willingness to learn and practice'
    ]
};

const JavaCourse = () => {
    return <CoursePage course={javaCourse} />;
};

export default JavaCourse; 