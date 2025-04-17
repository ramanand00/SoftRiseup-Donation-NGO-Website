import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import BackToTop from '../../components/BackToTop';
import '../../css/course-listing.css';

const courses = [
    {
        id: 1,
        title: 'Web Development Fundamentals',
        description: 'Learn the basics of HTML, CSS, and JavaScript to build modern websites.',
        image: '/images/courses/web-dev.jpg',
        duration: '8 weeks',
        level: 'Beginner',
        category: 'Development'
    },
    {
        id: 2,
        title: 'Digital Marketing Mastery',
        description: 'Master the art of digital marketing including SEO, social media, and content marketing.',
        image: '/images/courses/digital-marketing.jpg',
        duration: '6 weeks',
        level: 'Intermediate',
        category: 'Marketing'
    },
    {
        id: 3,
        title: 'Data Science Essentials',
        description: 'Introduction to data analysis, visualization, and machine learning concepts.',
        image: '/images/courses/data-science.jpg',
        duration: '10 weeks',
        level: 'Advanced',
        category: 'Data Science'
    },
    {
        id: 4,
        title: 'UI/UX Design Principles',
        description: 'Learn user interface and experience design principles for creating engaging digital products.',
        image: '/images/courses/ui-ux.jpg',
        duration: '6 weeks',
        level: 'Beginner',
        category: 'Design'
    },
    {
        id: 5,
        title: 'Mobile App Development',
        description: 'Build cross-platform mobile applications using React Native.',
        image: '/images/courses/mobile-dev.jpg',
        duration: '8 weeks',
        level: 'Intermediate',
        category: 'Development'
    },
    {
        id: 6,
        title: 'Business Analytics',
        description: 'Learn to analyze business data and make data-driven decisions.',
        image: '/images/courses/business-analytics.jpg',
        duration: '6 weeks',
        level: 'Intermediate',
        category: 'Business'
    }
];

const CourseListing = () => {
    return (
        <>
            <Navbar />
            <PageHeader title="Our Courses" path="/courses" name="Courses" />
            <div className="course-listing">
                <div className="container">
                    <div className="course-filters">
                        <div className="search-box">
                            <input type="text" placeholder="Search courses..." />
                            <i className="fas fa-search"></i>
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
                    </div>

                    <div className="course-grid">
                        {courses.map(course => (
                            <div key={course.id} className="course-card">
                                <div className="course-image">
                                    <img src={course.image} alt={course.title} />
                                    <span className="course-level">{course.level}</span>
                                </div>
                                <div className="course-content">
                                    <span className="course-category">{course.category}</span>
                                    <h3>{course.title}</h3>
                                    <p>{course.description}</p>
                                    <div className="course-meta">
                                        <span><i className="far fa-clock"></i> {course.duration}</span>
                                    </div>
                                    <Link to={`/courses/${course.id}`} className="view-course-btn">
                                        View Course
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
            <BackToTop />
        </>
    );
};

export default CourseListing; 