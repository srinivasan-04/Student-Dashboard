import React, { useState } from "react";
import { FaUser,  FaSignOutAlt } from "react-icons/fa";
import img1 from '../assets/profile.png'
import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const ProfileMenu = () => {
    const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('token'); // Clear the token
    navigate('/login'); // Redirect to login
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="profile-menu">
      {/* Avatar Button */}
      <img
        src={img1}
        alt="User Avatar"
        className="avatar"
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="menus">
          <li>
            <Link to='/profile'><FaUser /> My Profile</Link>
            
          </li>
          
          <li className="logout"><button onClick={handleLogout} >
          <FaSignOutAlt /> Logout
        </button>
           
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProfileMenu;
