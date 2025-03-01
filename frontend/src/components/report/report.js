import React from "react";
import "./report.css";
import Line from "./line";
import Bar from "./bar";
import CompletedCourses from "./CompletedCourses";
import Attendance from "./attedence";
import ContentHeader from "../content/contentHeader";
const Report = () => {
  return (
    <div className="report-dashboard">
    {/* <header className="report-header">
      <input type="text" placeholder="Search or type" className="report-search-bar" />
      <div className="report-profile-actions">
        <span className="report-notifications"></span>
        <span className="report-profile"></span>
      </div>
    </header> */}
    <ContentHeader/>

    <div className="report-main-content">
      <section className="report-activities">
        <h3>Activities</h3>
        <Line/>
      </section>

      <section className="report-my-planning">
        <h3>My Planning</h3>
        <ul>
          <li>3D Animation Conference - Dec 14, 8:30 PM</li>
          <li>Handle UX Research - Dec 18, 10:30 PM</li>
          <li>Machine Learning Lesson - Dec 20, 10:30 PM</li>
        </ul>
      </section>

      <section className="report-statistics">
        <h3>Statistics</h3>
        <Bar/>
      </section>

      <section className="report-course-activities">
        <h3>Course Activities</h3>
        <div className="report-progress">75% Complete</div>
      </section>

      <section >
        <Attendance/>
      </section>

      <section >
       <CompletedCourses/>
      </section>
    </div>
  </div>
  );
};

export default Report;