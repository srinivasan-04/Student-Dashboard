import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from './SidebarContext';
import {
  BiHome,
  BiBookAlt,
  BiMessage,
  BiStats,
  BiTask,
} from 'react-icons/bi';
import { FaGraduationCap } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import './style/sidebar.css';

function Sidebar() {
  const { setCurrentTitle } = useSidebar();
  const location = useLocation(); // Get current path
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Menu for Small Screens */}
      <div className="hamburger" onClick={toggleMenu}>
        <GiHamburgerMenu className="icon" />
      </div>

      {/* Sidebar */}
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <BiBookAlt className="icon" />
          <h2>MindDash</h2>
        </div>
        <div className="menu--list">
          <Link
            to="/"
            className={`item ${location.pathname === '/' || location.pathname.startsWith('/profile') ? 'active' : ''}`}
            onClick={() => { setCurrentTitle("Dashboard"); setIsOpen(false); }}
          >
            <BiHome className="icon" />
            Dashboard
          </Link>
          <Link
            to="/assignment"
            className={`item ${location.pathname === '/assignment' ? 'active' : ''}`}
            onClick={() => { setCurrentTitle("Assignments"); setIsOpen(false); }}
          >
            <BiTask className="icon" />
            Assignments
          </Link>
          <Link
            to="/stats"
            className={`item ${location.pathname === '/stats' ? 'active' : ''}`}
            onClick={() => { setCurrentTitle("Stats"); setIsOpen(false); }}
          >
            <BiStats className="icon" />
            Stats
          </Link>
          <Link
            to="/Courses"
            className={`item ${location.pathname === '/Courses' || location.pathname.startsWith('/courses') ? 'active' : ''}`}
            onClick={() => { setCurrentTitle("Courses"); setIsOpen(false); }}
          >
            <FaGraduationCap className="icon" />
            Courses
          </Link>
          <Link
            to="/StudentTable"
            className={`item ${location.pathname === '/StudentTable' || location.pathname === '/StudentTable/AddStudent' ? 'active' : ''}`}
            onClick={() => { setCurrentTitle("Students"); setIsOpen(false); }}
          >
            <PiStudentFill className="icon" />
            Students
          </Link>
          <Link
            to="/message"
            className={`item ${location.pathname === '/message' ? 'active' : ''}`}
            onClick={() => { setCurrentTitle("Message"); setIsOpen(false); }}
          >
            <BiMessage className="icon" />
            Message
          </Link>

          
        </div>
      </div>
    </>
  );
}

export default Sidebar;
