import React from 'react';
import CoursePage from '../courses/CoursePage';

const rubyCourse = {
    title: 'Ruby Programming',
    description: 'Learn Ruby programming language and Ruby on Rails framework. Build web applications with elegant and maintainable code.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
    duration: '10 weeks',
    level: 'Beginner to Intermediate',
    curriculum: [
        {
            title: 'Ruby Fundamentals',
            topics: [
                'Introduction to Ruby',
                'Variables and data types',
                'Operators and expressions',
                'Control flow statements'
            ]
        },
        {
            title: 'Ruby Collections',
            topics: [
                'Arrays and hashes',
                'Ranges and symbols',
                'Iterators and blocks',
                'Enumerable module'
            ]
        },
        {
            title: 'Object-Oriented Programming',
            topics: [
                'Classes and objects',
                'Inheritance and modules',
                'Method visibility',
                'Duck typing'
            ]
        },
        {
            title: 'Ruby Metaprogramming',
            topics: [
                'Method missing',
                'Define method',
                'Eval and instance_eval',
                'Class macros'
            ]
        },
        {
            title: 'Ruby on Rails Basics',
            topics: [
                'MVC architecture',
                'Rails conventions',
                'Routing',
                'Controllers and views'
            ]
        },
        {
            title: 'Active Record',
            topics: [
                'Models and migrations',
                'Associations',
                'Validations',
                'Query interface'
            ]
        },
        {
            title: 'Rails Views and Forms',
            topics: [
                'ERB templates',
                'Form helpers',
                'Partial views',
                'Asset pipeline'
            ]
        },
        {
            title: 'Rails Advanced Topics',
            topics: [
                'Authentication and authorization',
                'API development',
                'Background jobs',
                'Testing with RSpec'
            ]
        }
    ],
    learningPoints: [
        'Write clean and elegant Ruby code',
        'Master object-oriented programming in Ruby',
        'Build web applications with Ruby on Rails',
        'Work with databases using Active Record',
        'Implement authentication and authorization',
        'Write tests for Ruby applications'
    ],
    prerequisites: [
        'Basic understanding of programming concepts',
        'Familiarity with any programming language is helpful',
        'Willingness to learn and practice'
    ]
};

const RubyCourse = () => {
    return <CoursePage course={rubyCourse} />;
};

export default RubyCourse; 