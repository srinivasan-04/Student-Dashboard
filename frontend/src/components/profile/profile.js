import React, { useState } from "react";
import "./profile.css";
import img1 from '../assets/profile.png'
import { useSidebar } from "../SidebarContext";
const Profile = () => {
  const{name}=useSidebar();
  const [isEditing, setIsEditing] = useState(false);
  const[prof,setProf]=useState(img1)
  return (
    <div className="profile-container">
      {/* Left Panel - Profile Picture */}
      <div className="profile-picture-section">
        <h3>Personal Information</h3>
        
        <div className="profile-picture">
          
          <img src={prof} alt="Profile" />
          
        </div>
        <div className="picture-options">
          
          <span className="name">{name}</span>
          <span className="update">Delete</span>
        </div>
        <div className="upload-box">
          <p>
            <span className="upload-link">Click to Upload</span> or drag and
            drop
          </p>
          
          <input type="file" placeholder="Click to Upload" onChange={
            (e)=>{
              setProf(URL.createObjectURL(e.target.files[0]))
              }
          }></input>
        </div>
      </div>

      {/* Right Panel - User Information */}
      <div className="info-section">
        {/* Personal Information */}
        <div className="info-box">
          <div className="info-header">
            <h3>Personal Information</h3>
            <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
              Edit
            </button>
          </div>
          <div className="info-grid">
            <div className="input-group">
              <label>First Name</label>
              <input type="text" placeholder="Enter First Name" disabled={!isEditing} />
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <input type="text" placeholder="Enter Last Name" disabled={!isEditing} />
            </div>
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter Email" disabled={!isEditing} />
            </div>
            <div className="input-group">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter Phone Number" disabled={!isEditing} />
            </div>
            <div className="input-group">
              <label>User Name</label>
              <input type="text" placeholder="Enter User Name" disabled={!isEditing} />
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="info-box">
          <div className="info-header">
            <h3>Address Information</h3>
            <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
              Edit
            </button>
          </div>
          <div className="info-grid">
            <div className="input-group">
              <label>Address</label>
              <input type="text" placeholder="Enter Address" disabled={!isEditing} />
            </div>
            <div className="input-group">
              <label>Country</label>
              <input type="text" placeholder="Enter Country" disabled={!isEditing} />
            </div>
            <div className="input-group">
              <label>State / Province</label>
              <input type="text" placeholder="Enter State" disabled={!isEditing} />
            </div>
            <div className="input-group">
              <label>City</label>
              <input type="text" placeholder="City" disabled={!isEditing} />
            </div>
            <div className="input-group">
              <label>Postal Code</label>
              <input type="text" placeholder="Enter Postal Code" disabled={!isEditing} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
