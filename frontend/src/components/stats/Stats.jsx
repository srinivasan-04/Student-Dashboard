import React from 'react';
import './stats.css';
import Report from './Report';
import ProgressBar from '../assignment/LinearProgressWithLabel';
import WeekendChart from './weekendChart';
import ContentHeader from '../content/contentHeader';
import Pie from './pie';
import Progress from './progress';
const Stats = () => {
  return (
    <div className="stats">
      <ContentHeader/>
    <div className="stats-container">
      <div className="stats-header">
        {/* Stats Header Cards */}
        <div className="stats-card">
        <div className='stats-card-content'>
          <h3>Avg Score</h3>
          <p className="stats-value">80%</p>
          </div>
          <p>Highest Score: 80%</p>
          <ProgressBar width={100}/>
          <p>Lowest Score: 65%</p>
          <ProgressBar/>
          <p>Average Score: 50%</p>
          <ProgressBar width={100} value={50}/>
          
        </div>
        <div className="stats-card">
          <div className='stats-card-content'>
          <h3>Total Time Spent</h3>
          <p className="stats-value">12 Hours</p>
          </div>
          {/* <div className="graph-placeholder">This Week Graph</div> */}
          <WeekendChart  className="weekend-chart"/>
        </div>
        <div className="stats-card">
        <div className='stats-card-content'>
          <h3>Monthly Streak</h3>
          <p className="stats-value">12 Days</p>
          </div>
          <div className="streak">
            {Array.from({ length: 25 }, (_, i) => (
              <div className="streak-circle" key={i}>
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        <div className="stats-card">
        <div className='stats-card-content'>
          <h3>Ranking In Class</h3>
          <p className="stats-value">#15</p>
          </div>
          <div className='ranking-list'>
          <ul>
            <li>#1 Adam Paul</li>
            <li>#2 Harry Cook</li>
            <li>#3 Chris Morris</li>
          </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="progress-report stats-card">
          <h3>Monthly Progress Report</h3>
          {/* <div className="graph-placeholder">Progress Graph</div> */}
          <div className='report'>
          <Report/>
          </div>
          
        </div>
        <div className="reminders stats-card">
          <h3>Upcoming Reminders</h3>
          <table>
            <thead>
              <tr>
                <th>Subjects</th>
                <th>Status</th>
                <th>Due Dates</th>
              </tr>
            </thead>
            <tbody>
              {[
                { subject: 'Algebra Worksheet', status: 'Completed', due: '25 Dec 2024' },
                { subject: 'Solar System Model', status: 'Incomplete', due: '28 Dec 2024' },
                { subject: 'Industry Essay', status: 'Completed', due: '30 Dec 2024' },
                { subject: 'Science Project', status: 'Incomplete', due: '06 Jan 2025' },
                { subject: 'English Assignment', status: 'Incomplete', due: '08 Jan 2025' },
              ].map((reminder, index) => (
                <tr key={index}>
                  <td>{reminder.subject}</td>
                  <td>{reminder.status}</td>
                  <td>{reminder.due}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Assignment Tracker & Overall Progress */}
      <div className="bottom-section">
        <div className="assignment-tracker stats-card">
          <h3>Assignment Tracker</h3>
          {/* <div className="graph-placeholder">Pie Chart</div> */}
          <Pie/>
        </div>
        <div className="overall-progress stats-card">
          <h3>Overall Progress</h3>
          
          {/* <p className="progress-percentage">75% Completed</p> */}
          <Progress/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Stats;
