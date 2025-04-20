import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import BackToTop from '../../components/BackToTop';
import '../../css/courses.css';

const Csit = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const courseCategories = [
        {
            id: 'frontend',
            title: 'Hello ITians... Welcome to BSc.CSIT',
            courses: [
                {
                    id: 'Theory of Computation',
                    title: 'Theory of Computation',
                    description: 'Description',
                    image: 'https://www.svgrepo.com/show/62204/student.svg',
                    duration: '90 days per semister',
                    level: 'Basic/Startup'
                },
                {
                    id: 'Computer Network',
                    title: 'Computer Network',
                    description: 'Description ',
                    
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKfTIIPGMMqmzVSGl0Jthggt5FtELsPaAeAg&s',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Operating System',
                    title: 'Operating System',
                    description: 'Description',
                    image: 'https://img.freepik.com/free-vector/student-club-abstract-concept-vector-illustration-student-organization-university-interest-club-afterschool-activity-program-college-association-professional-hobby-society-abstract-metaphor_335657-5900.jpg?semt=ais_hybrid&w=740',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Database Management System',
                    title: 'Database Management System',
                    description: 'Description',
                    image: 'https://img.freepik.com/free-vector/workplace-culture-abstract-concept-vector-illustration-shared-values-belief-systems-attitude-work-company-team-corporate-culture-high-performance-employee-health-abstract-metaphor_335657-6126.jpg?w=360',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Artificial Intelligence',
                    title: 'Artificial Intelligence',
                    description: 'Description',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Ot1zFx25AM8IfPz4J_WjBXs1jylgfCh73Q&s',
                    duration: '90 days per semister',
                    level: 'Intermediate'
                },
                {
                    id: 'Model',
                    title: 'Model Question Paper',
                    description: 'Description',
                    image: 'https://i.pinimg.com/736x/e9/0e/54/e90e541691d2ec8d98fa68c0f760495b.jpg',
                    duration: '90 days per semister',
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
            <PageHeader title="BSc.CSIT Fourth Semister" path="/BSc.CSIT" name="BSc.CSIT" />
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
                                                <Link to={`/csit/${course.id}`} className="view-course-button">
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

export default Csit; 