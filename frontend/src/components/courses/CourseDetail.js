import React from "react";
import "./CourseDetails.css"; // Ensure CSS is defined here or in a global stylesheet
import { useParams } from "react-router-dom";
import { courseData } from "./course_data"; // Import courseData

function CourseDetail() {
  const { courseId } = useParams(); // Extract courseId from the URL
  const course = courseData.find((c) => c.id === parseInt(courseId)); // Find the specific course

  if (!course) {
    return <p>Course not found.</p>; // Handle the case where the course is not found
  }

  return (
    <div className="course-details-container">
      {/* Left Section */}
      <div className="left-section">
        {/* Image Card */}
        <div className="image-card">
          <img
            src={course.image}
            alt={course.title}
            className="course-image"
          />
          <h3 className="card-title">{course.title}</h3>
        </div>

        {/* About Course */}
        <div className="about-course-card">
          <h3>About Course</h3>
          <p>{course.about}</p> {/* Display the dynamic about content */}
          <ul className="course-info">
            <li>
              <strong>Duration:</strong> 3 Year
            </li>
            <li>
              <strong>Professor:</strong> {course.creator}
            </li>
            <li>
              <strong>Price:</strong> $1500
            </li>
            <li>
              <strong>Date:</strong> 07 August 2021
            </li>
          </ul>
          <div className="stat">
            <div>
              <h3>07</h3>
              <p>Years</p>
            </div>
            <div>
              <h3>240</h3>
              <p>Students</p>
            </div>
            <div>
              <h3>05</h3>
              <p>Batches</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        {/* Main Content */}
        <div className="course-description">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </p>
        </div>

        {/* Courses Section */}
        <div className="courses-section">
          <h3>Our Courses</h3>
          <div className="tags">
            <span className="tag">Computer</span>
            <span className="tag">Programming</span>
            <span className="tag">Photoshop</span>
            <span className="tag">Management</span>
          </div>
        </div>

        {/* Languages Section */}
        <div className="languages-section">
          <h3>Language</h3>
          <div className="tags">
            <span className="tag">English</span>
            <span className="tag">French</span>
            <span className="tag">Bangla</span>
          </div>
        </div>

        {/* Course Info */}
        <div className="course-info">
          <h3>Courses Information</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
