import React from 'react';
import './Courses.css';
import ContentHeader from '../content/contentHeader';
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';
// import CourseDetail from './CourseDetail';
import img1 from '../assets/course-img1.png';
import img2 from '../assets/uiux.png';
import img3 from '../assets/reactnative.png';
import img4 from '../assets/seo.png';
import img5 from '../assets/design.png';
import img6 from '../assets/wordpress.png';
import img7 from '../assets/aiml.png';
import img8 from '../assets/writing.png';

const Courses = () => {
  const courseData = [
    { id: 1, category: 'Development', title: 'Full Stack Web Development', progress: 32, creator: 'Albert James', rating: 4.9, reviews: '12k', image: img1 },
    { id: 2, category: 'Design', title: 'UI/UX Design Course', progress: 20, creator: 'Albert James', rating: 4.9, reviews: '12k', image: img2 },
    { id: 3, category: 'Frontend', title: 'React Native Course', progress: 45, creator: 'Albert James', rating: 4.9, reviews: '12k', image: img3 },
    { id: 4, category: 'Marketing', title: 'SEO Expert A To Z Course', progress: 10, creator: 'Albert James', rating: 4.9, reviews: '12k', image: img4 },
    { id: 5, category: 'Design', title: 'Design System', progress: 50, creator: 'Albert James', rating: 4.0, reviews: '15k', image: img5 },
    { id: 6, category: 'Coding', title: 'WordPress Development', progress: 60, creator: 'Albert James', rating: 4.9, reviews: '12k', image: img6 },
    { id: 7, category: 'AI Solutions', title: 'Artificial Intelligence', progress: 45, creator: 'Albert James', rating: 4.9, reviews: '12k', image: img7 },
    { id: 8, category: 'Writing', title: 'Content Writing', progress: 45, creator: 'Albert James', rating: 4.9, reviews: '12k', image: img8 },
  ];

  return (
    <div className="courses-container">
      
      <ContentHeader />
      <div className="courses-tabs">
        <button className="tab active">Ongoing (08)</button>
        <button className="tab">Completed (10)</button>
        <button className="tab">Saved (12)</button>
        <button className="tab">Favorite (25)</button>
      </div>
      <div className="courses-list">
        {courseData.map((course) => (
          <div className="course-card" key={course.id}>
            <div className="image-container">
              <img src={course.image} alt={course.title} className="course-image" />
            </div>
            <div className="course-category">{course.category}</div>
            <h3 className="course-title">{course.title}</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${course.progress}%`, backgroundColor: '#526d82' }}></div>
            </div>
            <p className="creator">
              Created by <span>{course.creator}</span>
            </p>
            <p className="rating">
              <span>⭐ {course.rating}</span> ({course.reviews})
            </p>
            <Link to={`/courses/${course.id}`} className="continue-btn">Read More</Link>
          </div>
        ))}
      </div>
      <div className="page">
        <Pagination
          count={5}
          defaultPage={1}
          siblingCount={0}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#526d82",
            },
            "& .Mui-selected": {
              backgroundColor: "#526d82",
              color: "white",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Courses;
