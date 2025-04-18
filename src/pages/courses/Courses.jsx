import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import BackToTop from '../../components/BackToTop';
import '../../css/courses.css';

const Courses = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const courseCategories = [
        {
            id: 'frontend',
            title: 'Frontend Development',
            courses: [
                {
                    id: 'vue',
                    title: 'Vue.js',
                    description: 'Learn Vue.js framework for building modern web applications with reactive components.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
                    duration: '8 weeks',
                    level: 'Intermediate'
                },
                {
                    id: 'angular',
                    title: 'Angular',
                    description: 'Master Angular framework for building scalable and maintainable web applications.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
                    duration: '10 weeks',
                    level: 'Intermediate'
                },
                {
                    id: 'next',
                    title: 'Next.js',
                    description: 'Learn Next.js for building server-rendered React applications with optimal performance.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
                    duration: '8 weeks',
                    level: 'Intermediate'
                },
                {
                    id: 'tailwind',
                    title: 'Tailwind CSS',
                    description: 'Master utility-first CSS framework for rapid UI development.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
                    duration: '5 weeks',
                    level: 'Beginner'
                },
                {
                    id: 'bootstrap',
                    title: 'Bootstrap',
                    description: 'Learn Bootstrap framework for creating responsive and mobile-first websites.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
                    duration: '4 weeks',
                    level: 'Beginner'
                }
            ]
        },
        {
            id: 'backend',
            title: 'Backend Development',
            courses: [
                {
                    id: 'nodejs',
                    title: 'Node.js',
                    description: 'Learn Node.js for building scalable server-side applications with JavaScript.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                    duration: '10 weeks',
                    level: 'Intermediate'
                },
                {
                    id: 'express',
                    title: 'Express.js',
                    description: 'Master Express.js framework for building robust web applications and APIs.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
                    duration: '8 weeks',
                    level: 'Intermediate'
                },
                {
                    id: 'php',
                    title: 'PHP',
                    description: 'Learn PHP for server-side web development and dynamic website creation.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
                    duration: '10 weeks',
                    level: 'Beginner to Intermediate'
                },
                {
                    id: 'django',
                    title: 'Django',
                    description: 'Master Django framework for building secure and maintainable web applications.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
                    duration: '12 weeks',
                    level: 'Intermediate'
                },
                {
                    id: 'flask',
                    title: 'Flask',
                    description: 'Learn Flask framework for building lightweight and flexible web applications.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
                    duration: '8 weeks',
                    level: 'Intermediate'
                },
                {
                    id: 'rails',
                    title: 'Ruby on Rails',
                    description: 'Master Ruby on Rails framework for rapid web application development.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original.svg',
                    duration: '12 weeks',
                    level: 'Intermediate'
                },
                {
                    id: 'aspnet',
                    title: 'ASP.NET',
                    description: 'Learn ASP.NET for building enterprise-grade web applications.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
                    duration: '12 weeks',
                    level: 'Intermediate'
                }
            ]
        },
        {
            id: 'database',
            title: 'Database Technologies',
            courses: [
                {
                    id: 'mysql',
                    title: 'MySQL',
                    description: 'Learn MySQL for relational database management and optimization.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
                    duration: '8 weeks',
                    level: 'Beginner to Intermediate'
                },
                {
                    id: 'postgresql',
                    title: 'PostgreSQL',
                    description: 'Master PostgreSQL for advanced database management and features.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
                    duration: '8 weeks',
                    level: 'Intermediate'
                },
                {
                    id: 'mongodb',
                    title: 'MongoDB',
                    description: 'Learn MongoDB for NoSQL database management and document storage.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
                    duration: '8 weeks',
                    level: 'Intermediate'
                },
                {
                    id: 'firebase',
                    title: 'Firebase',
                    description: 'Master Firebase for real-time database and backend services.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
                    duration: '6 weeks',
                    level: 'Intermediate'
                },
                {
                    id: 'oracle',
                    title: 'Oracle DB',
                    description: 'Learn Oracle Database for enterprise-level database management.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
                    duration: '10 weeks',
                    level: 'Advanced'
                },
                {
                    id: 'sqlite',
                    title: 'SQLite',
                    description: 'Master SQLite for lightweight database management.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
                    duration: '4 weeks',
                    level: 'Beginner'
                },
                {
                    id: 'redis',
                    title: 'Redis',
                    description: 'Learn Redis for in-memory data structure storage and caching.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
                    duration: '6 weeks',
                    level: 'Intermediate'
                }
            ]
        },
        {
            id: 'devops',
            title: 'DevOps & Cloud',
            courses: [
                {
                    id: 'aws',
                    title: 'AWS',
                    description: 'Master Amazon Web Services for cloud computing and infrastructure.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
                    duration: '12 weeks',
                    level: 'Intermediate to Advanced'
                },
                {
                    id: 'gcp',
                    title: 'Google Cloud',
                    description: 'Learn Google Cloud Platform for cloud computing and services.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
                    duration: '10 weeks',
                    level: 'Intermediate'
                },
                {
                    id: 'azure',
                    title: 'Microsoft Azure',
                    description: 'Master Microsoft Azure for cloud computing and enterprise solutions.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
                    duration: '10 weeks',
                    level: 'Intermediate'
                },
                {
                    id: 'docker',
                    title: 'Docker',
                    description: 'Learn Docker for containerization and deployment.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                    duration: '6 weeks',
                    level: 'Intermediate'
                },
                {
                    id: 'kubernetes',
                    title: 'Kubernetes',
                    description: 'Master Kubernetes for container orchestration and management.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
                    duration: '8 weeks',
                    level: 'Advanced'
                },
                {
                    id: 'terraform',
                    title: 'Terraform',
                    description: 'Learn Terraform for infrastructure as code and automation.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
                    duration: '6 weeks',
                    level: 'Intermediate'
                }
            ]
        },
        {
            id: 'mobile',
            title: 'Mobile Development',
            courses: [
                {
                    id: 'reactnative',
                    title: 'React Native',
                    description: 'Learn React Native for cross-platform mobile app development.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                    duration: '10 weeks',
                    level: 'Intermediate'
                },
                {
                    id: 'flutter',
                    title: 'Flutter',
                    description: 'Master Flutter for beautiful and fast cross-platform mobile apps.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
                    duration: '12 weeks',
                    level: 'Intermediate'
                }
            ]
        },
        {
            id: 'cybersecurity',
            title: 'Cybersecurity',
            courses: [
                {
                    id: 'ethicalhacking',
                    title: 'Ethical Hacking',
                    description: 'Learn ethical hacking techniques and security best practices.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
                    duration: '16 weeks',
                    level: 'Advanced'
                },
                {
                    id: 'networksecurity',
                    title: 'Network Security',
                    description: 'Master network security principles and implementation.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
                    duration: '12 weeks',
                    level: 'Advanced'
                },
                {
                    id: 'websecurity',
                    title: 'Web Application Security',
                    description: 'Learn web application security and penetration testing.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
                    duration: '10 weeks',
                    level: 'Advanced'
                }
            ]
        },
        {
            id: 'datascience',
            title: 'Data Science & AI',
            courses: [
                {
                    id: 'machinelearning',
                    title: 'Machine Learning',
                    description: 'Learn machine learning algorithms and implementation.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                    duration: '16 weeks',
                    level: 'Advanced'
                },
                {
                    id: 'deeplearning',
                    title: 'Deep Learning',
                    description: 'Master deep learning concepts and neural networks.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
                    duration: '16 weeks',
                    level: 'Advanced'
                },
                {
                    id: 'dataanalysis',
                    title: 'Data Analysis',
                    description: 'Learn data analysis with Python and visualization techniques.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                    duration: '12 weeks',
                    level: 'Intermediate'
                }
            ]
        },
        {
            id: 'tools',
            title: 'Development Tools',
            courses: [
                {
                    id: 'git',
                    title: 'Git & GitHub',
                    description: 'Master version control with Git and GitHub collaboration.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
                    duration: '4 weeks',
                    level: 'Beginner'
                },
                {
                    id: 'agile',
                    title: 'Agile & Scrum',
                    description: 'Learn Agile methodologies and Scrum framework.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
                    duration: '6 weeks',
                    level: 'Beginner'
                }
            ]
        },
        {
            id: 'gamedev',
            title: 'Game Development',
            courses: [
                {
                    id: 'unity',
                    title: 'Unity',
                    description: 'Learn Unity game development with C#.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
                    duration: '16 weeks',
                    level: 'Intermediate'
                },
                {
                    id: 'unreal',
                    title: 'Unreal Engine',
                    description: 'Master Unreal Engine for game development.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg',
                    duration: '16 weeks',
                    level: 'Advanced'
                },
                {
                    id: 'godot',
                    title: 'Godot',
                    description: 'Learn Godot game engine for 2D and 3D game development.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg',
                    duration: '12 weeks',
                    level: 'Intermediate'
                }
            ]
        },
        {
            id: 'others',
            title: 'Other Technologies',
            courses: [
                {
                    id: 'wordpress',
                    title: 'WordPress',
                    description: 'Learn WordPress for website development and management.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
                    duration: '6 weeks',
                    level: 'Beginner'
                },
                {
                    id: 'blockchain',
                    title: 'Blockchain',
                    description: 'Learn blockchain fundamentals and development.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg',
                    duration: '12 weeks',
                    level: 'Intermediate'
                },
                {
                    id: 'iot',
                    title: 'IoT',
                    description: 'Learn Internet of Things development and implementation.',
                    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg',
                    duration: '12 weeks',
                    level: 'Intermediate'
                }
            ]
        }
    ];

    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const filterCourses = (courses) => {
        if (!searchQuery) return courses;
        return courses.filter(course => 
            course.title.toLowerCase().includes(searchQuery) ||
            course.description.toLowerCase().includes(searchQuery)
        );
    };

    return (
        <>
            <Navbar />
            <PageHeader title="Our Courses" path="/courses" name="Courses" />
            <div className="courses-page">
                <div className="container">
                    <div className="search-container">
                        <h1>Our courses</h1>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search courses..."
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="filter-options">
                            <select>
                                <option value="">All Categories</option>
                                <option value="Development">Development</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Data Science">Data Science</option>
                                <option value="Design">Design</option>
                                <option value="Business">Business</option>
                            </select>
                            <select>
                                <option value="">All Levels</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        </div>
                    {courseCategories.map((category) => {
                        const filteredCourses = filterCourses(category.courses);
                        if (filteredCourses.length === 0) return null;
                        
                        return (
                            <div key={category.id} className="category-section">
                                <h2 className="category-title">{category.title}</h2>
                                <div className="courses-grid">
                                    {filteredCourses.map((course) => (
                                        <div key={course.id} className="course-card">
                                            <div className="course-image">
                                                <img src={course.image} alt={course.title} />
                                            </div>
                                            <div className="course-content">
                                                <h3>{course.title}</h3>
                                                <p>{course.description}</p>
                                                <div className="course-meta">
                                                    <span className="duration">Duration: {course.duration}</span>
                                                    <span className="level">Level: {course.level}</span>
                                                </div>
                                                <Link to={`/courses/${course.id}`} className="view-course-button">
                                                    View Course
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
            <BackToTop />
        </>
    );
};

export default Courses; 