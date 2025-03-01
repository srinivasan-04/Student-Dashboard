import React from "react";
import "./Dashboard.css";
import img1 from '../assets/wel.avif'
import { useSidebar } from '../SidebarContext';
import ReactApexChart from "react-apexcharts";
import StudyOverviewChart from "./StudyOverviewChart";
import DonutChart from "./DonutChart";
import Header from "./Header";
const chartOptions = {
  chart: {
    type: "area",
    height: 60,
    sparkline: { enabled: true }, // Hides axes and grid
  },
  stroke: { curve: "smooth" },
  fill: { type: "gradient", gradient: { opacityFrom: 0.6, opacityTo: 0 } },
  tooltip: { enabled: false },
};

const stats = [
  {
    icon: "fa-solid fa-graduation-cap",
    count: "155+",
    label: "Completed Courses",
    color: "blue",
    data: [10, 20, 15, 30, 25, 50, 40],
  },
  {
    icon: "fa-solid fa-certificate",
    count: "39+",
    label: "Earned Certificate",
    color: "green",
    data: [5, 15, 10, 20, 18, 30, 25],
  },
  {
    icon: "fa-solid fa-book-open",
    count: "25+",
    label: "Course in Progress",
    color: "purple",
    data: [8, 12, 18, 25, 22, 35, 30],
  },
  {
    icon: "fa-solid fa-users",
    count: "18k+",
    label: "Community Support",
    color: "orange",
    data: [15, 25, 20, 35, 30, 45, 40],
  },
];




export default function Dashboard() {
  
 


  const { name } = useSidebar();
  return (
    <div className="dashboard-container">
      {/* Header Section */}
      {/* <header className="dashboard-header">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="header-icons">
          <div className="icon notification"></div>
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="profile-picture"
          />
        </div>
      </header> */}
      <Header/>

      {/* Welcome Section */}
      <div className="wel">
      <div className="welcome-section">
        <div className="welcome-text">
          <h1>
            Hi, {name} <span className="wave">👋</span>
          </h1>
          <p>
            What do you want to learn today with your partner? Discover courses,
            track progress, and achieve your learning goals seamlessly.
          </p>
          <button className="explore-button">Explore Courses</button>
        </div>
        <div className="welcome-image">
          <img
            src={img1}
            alt="Welcome Illustration"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="st-container">
      {stats.map((stat, index) => (
        <div key={index} className="st-card">
          <div> 
          <div className={`st-icon ${stat.color}`}>
            <i className={stat.icon}></i>
          </div>
          <h3 className="st-count">{stat.count}</h3>
          <p className="st-label">{stat.label}</p> </div>
          <ReactApexChart options={chartOptions} series={[{ data: stat.data }]} type="area" height={100} width={100} />
        </div>
      ))}
    </div>

    </div>
      {/* Charts Section */}
      <div className="charts-section">
        <div className="chart-card">
        <StudyOverviewChart/>
        </div>
        <div className="chart-card">
          <h3>Most Activity</h3>
          <DonutChart/>
        </div>
      </div>



      

    </div>
  );
}
