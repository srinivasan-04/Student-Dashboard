import React from 'react';
import './assignment.css';
import Calender from './calender';
import img1 from '../assets/react-img.png';
import img2 from '../assets/nodejs.png';
import img3 from '../assets/mongodb-2.png';
import ProgressBar from './LinearProgressWithLabel'
import TasksSection from './TaskSection';
import ContentHeader from '../content/contentHeader';
import { useSidebar } from '../SidebarContext';
const Assigment = () => {
  const { name } = useSidebar();

  // assignment box

  const assignmentData = [
    {
      title: 'English lesson 2',
      description: 'Question & Answer',
      imgSrc: img1, // Replace with actual image URL
      status: null,
      progress:35, // No progress bar for this one
    },
    {
      title: 'Mathematics III',
      description: 'Multiple choice questions',
      imgSrc: img2, // Replace with actual image URL
      status: null, // No "New" badge for this one
      progress: 35, // Progress in percentage
    },
    {
      title: 'Mideval History',
      description: 'Answer writing',
      imgSrc: img3, // Replace with actual image URL
      status: null,
      progress: 80,
    },
  ];
  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <div >
      <ContentHeader/>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Section */}
        <div className="left-section">
            <div className="profile-card">
            <div className="profile-content">
              <div className="profile-text">
                <h2>Your Profile</h2><br></br>
                <p>
                <span>Hi {name}</span>, You have completed <strong>70%</strong> of your weekly
                  targets. Keep learning with us like this.
                </p>
                <button className="set-goals-btn">Set Goals</button>
              </div>
              <div className="profile-img">
                <img src="https://img.freepik.com/premium-vector/boy-studying-with-book_113065-238.jpg" alt="Profile" />
              </div>
            </div>
          </div>


          <div className="assignments-section">
          <div className="assignments-header">
        <h2>Your Assignments  </h2> 
        <a href="/" className="view-more">
          View More
        </a>
      </div>
      <div className="assignments-list">
        {assignmentData.map((assignment, index) => (
          <div className="assignment-card" key={index}>
            <div className="assignment-header">
              <h3>{assignment.title}</h3>
              <p>{assignment.description}</p>
            </div>
            <div className="assignment-body">
              <img src={assignment.imgSrc} alt={assignment.title} />
              {assignment.status && <span className="status-badge">{assignment.status}</span>}
              {assignment.date && <p className="date">{assignment.date}</p>}
              {assignment.progress !== null && (
                // 
                <ProgressBar progress={assignment.progress} />
              )}
            </div>
          </div>
        ))}
      </div>
          </div>

          <div className="activities-section">
            <h2>Activities</h2>
            
            <ul>
              <li>
                <strong>Sara Joseph</strong> shared two new assignment feedback
                for <strong>Class 4B</strong>
                <span>4 h</span>
              </li>
              <li>
                <strong>Joseph</strong> shared class Project Koala Bear{' '}
                <strong>Class 4B</strong>
                <span>4 h</span>
              </li>
              <li>
                <strong>Mabel</strong> checked in to your assignment{' '}
                <strong>Monuments V1.0</strong>
                <span>4 h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className='calender-section'> 
            <Calender />
          </div>

          <TasksSection />
        </div>
      </div>
    </div>
  );
};

export default Assigment;
