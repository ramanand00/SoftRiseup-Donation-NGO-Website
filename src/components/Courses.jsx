import React, { useState } from 'react';
import '../css/courses.css';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import PageHeader from "../components/PageHeader";
import BackToTop from '../components/BackToTop';

const coursesData = [
    {
        id: 1,
        title: 'React.js',
        description: 'Learn React.js from scratch and build modern web applications',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        duration: '8 weeks',
        level: 'Intermediate',
        path: '/courses/react'
    },
    {
        id: 2,
        title: 'Python',
        description: 'Master Python programming and its applications in web development and data science',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        duration: '10 weeks',
        level: 'Beginner',
        path: '/courses/python'
    },
    {
        id: 3,
        title: 'PHP',
        description: 'Learn PHP for backend web development and create dynamic websites',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        duration: '6 weeks',
        level: 'Intermediate',
        path: '/courses/php'
    },
    {
        id: 4,
        title: 'Bootstrap',
        description: 'Create responsive and beautiful websites using Bootstrap framework',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        duration: '4 weeks',
        level: 'Beginner',
        path: '/courses/bootstrap'
    },
    {
        id: 5,
        title: 'Tailwind CSS',
        description: 'Build modern websites with utility-first CSS framework',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        duration: '5 weeks',
        level: 'Beginner',
        path: '/courses/tailwind'
    }
];

const Courses = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCourses, setFilteredCourses] = useState(coursesData);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = coursesData.filter(course => 
            course.title.toLowerCase().includes(term) || 
            course.description.toLowerCase().includes(term)
        );
        setFilteredCourses(filtered);
    };

    return (
        <>
        <Navbar />
        <PageHeader title="Our Courses" path="/about" name="Courses" />
        <section className="courses-section">
            <div className="container">
                <h2 className="section-title">Our Courses</h2>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="search-input"
                    />
                </div>
                <div className="courses-grid">
                    {filteredCourses.map(course => (
                        <Link to={course.path} key={course.id} className="course-card-link">
                            <div className="course-card">
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
                                    <button className="enroll-button">Learn More</button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
        <Footer />
        <BackToTop />
        </>
    );
};

export default Courses; 