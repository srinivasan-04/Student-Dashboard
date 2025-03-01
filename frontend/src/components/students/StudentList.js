import React, { useState } from 'react';
import img1 from '../assets/tuto.png';
import './student.css';
import { MdOutlineEdit } from "react-icons/md";

function StudentList({ roll, Name, education, mobileNumber, email, address, registrationDate, onDelete, onUpdate }) {
  // State for managing edit modal
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});

  // Format the date to a more readable format
  const formattedDate = new Date(registrationDate).toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Open the edit modal and populate data
  const handleEditClick = () => {
    setIsEditing(true);
    setEditedData({
      roll,
      Name,
      education,
      mobileNumber,
      email,
      address,
      registrationDate,
    });
  };

  // Handle input changes in the edit modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  // Handle the update functionality
  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:4000/updateStudent/${roll}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedData),
      });

      if (response.ok) {
        console.log('Student updated successfully');
        if (onUpdate) onUpdate(editedData); // Update the UI
        setIsEditing(false); // Close modal
      } else {
        console.error('Failed to update student');
      }
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <>
      <tr>
        <td>
          <img src={img1} alt="Profile" className="profile-pic" />
        </td>
        <td>{roll}</td>
        <td>{Name}</td>
        <td>{education || 'N/A'}</td>
        <td>{mobileNumber}</td>
        <td>{email}</td>
        <td>{formattedDate}</td>
        <td>{address}</td>
        <td>
          <button className="delete-button" onClick={() => onDelete(roll)}>🗑️</button>
          <button className="edit-button" onClick={handleEditClick}>
            <MdOutlineEdit />
          </button>
        </td>
      </tr>

      {isEditing && (
        <div className="edit-modal">
          <div className="modal-content">
            <h3>Edit Student Details</h3>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="Name"
                  value={editedData.Name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={editedData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Roll No</label>
                <input
                  type="text"
                  name="roll"
                  value={editedData.roll}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <textarea
                  name="address"
                  value={editedData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Registration Date</label>
                <input
                  type="date"
                  name="registrationDate"
                  value={editedData.registrationDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Education</label>
                <input
                  type="text"
                  name="education"
                  value={editedData.education}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  type="text"
                  name="mobileNumber"
                  value={editedData.mobileNumber}
                  onChange={handleInputChange}
                />
              </div>
              <button type="button" onClick={handleUpdate}>
                Save Changes
              </button>
              <button type="button" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default StudentList;
