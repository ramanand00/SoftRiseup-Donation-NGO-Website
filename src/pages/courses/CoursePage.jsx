import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import BackToTop from '../../components/BackToTop';
import '../../css/course-page.css';

const CoursePage = ({ course }) => {
    const { id } = useParams();

    const getCoursePagePath = () => {
        switch (id) {
            case 'angular':
                return '/blogs/angularcourse';
            case 'vue':
                return '/blogs/vuecourse';
            case 'go':
                return '/blogs/gocourse';
            // Add more cases for other courses as needed
            default:
                return '/courses';
        }
    };

    return (
        <>
            <Navbar />
            <PageHeader title={course.title} path="/courses" name="Courses" />
            <div className="course-page">
                <div className="container">
                    <div className="course-header">
                        <div className="course-image">
                            <img src={course.image} alt={course.title} />
                        </div>
                        <div className="course-info">
                            <h1>{course.title}</h1>
                            <p className="course-description">{course.description}</p>
                            <div className="course-meta">
                                <span className="duration">Duration: {course.duration}</span>
                                <span className="level">Level: {course.level}</span>
                            </div>
                            <div className="course-navigation">
                                <Link to={`/courses/${course.id}/details`} className="nav-link">
                                    <i className="fas fa-info-circle"></i> Course Details
                                </Link>
                                <Link to={`/courses/${course.id}/syllabus`} className="nav-link">
                                    <i className="fas fa-book"></i> Syllabus
                                </Link>
                                <Link to={`/courses/${course.id}/resources`} className="nav-link">
                                    <i className="fas fa-folder"></i> Resources
                                </Link>
                                <Link to={`/courses/${course.id}/discussion`} className="nav-link">
                                    <i className="fas fa-comments"></i> Discussion
                                </Link>
                            </div>
                            <Link to={getCoursePagePath()} className="enroll-button">
                                Enroll Now
                            </Link>
                        </div>
                    </div>

                    <div className="course-contents">
                        <div className="course-sections">
                            <h2>Course Curriculum</h2>
                            {course.curriculum.map((section, index) => (
                                <div key={index} className="section">
                                    <h3>{section.title}</h3>
                                    <ul>
                                        {section.topics.map((topic, topicIndex) => (
                                            <li key={topicIndex}>{topic}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="course-details">
                            <h2>What You'll Learn</h2>
                            <ul className="learning-points">
                                {course.learningPoints.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>

                            <h2>Prerequisites</h2>
                            <ul className="prerequisites">
                                {course.prerequisites.map((prereq, index) => (
                                    <li key={index}>{prereq}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <BackToTop />
        </>
    );
};

export default CoursePage; 