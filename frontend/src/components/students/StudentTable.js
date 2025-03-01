import React, { useState, useEffect } from 'react';
import './StudentTable.css';
import { Link } from 'react-router-dom';
import ContentHeader from '../content/contentHeader';
import { MdOutlineEdit } from "react-icons/md";

const StudentTable = () => {
  const [details, setDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [editingRoll, setEditingRoll] = useState(null); // For tracking the student being edited
  const [editedData, setEditedData] = useState({}); // For storing the edited student details

  useEffect(() => {
    fetch('http://localhost:4000/AddStudent') // Adjust this endpoint as needed
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.students)) {
          setDetails(data.students);
        } else {
          console.error('Expected an array but got:', typeof data.students);
          setDetails([]);
        }
      })
      .catch((err) => {
        console.error('Error fetching student data:', err);
        setDetails([]);
      });
  }, []);

  // Handle the delete action
  const handleDelete = async (roll) => {
    try {
      const response = await fetch(`http://localhost:4000/deleteStudent/${roll}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setDetails((prevDetails) => prevDetails.filter((student) => student.roll !== roll));
      } else {
        console.error('Failed to delete student');
      }
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  // Handle the edit action
  const handleEditClick = (student) => {
    setEditingRoll(student.roll);
    setEditedData({ ...student });
  };

  // Handle input changes during editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  // Handle the save action
  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:4000/updateStudent/${editedData.roll}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedData),
      });

      if (response.ok) {
        setDetails((prevDetails) =>
          prevDetails.map((student) =>
            student.roll === editedData.roll ? editedData : student
          )
        );
        setEditingRoll(null); // Exit editing mode
      } else {
        console.error('Failed to update student');
      }
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  // Pagination Logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = details.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(details.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='stud'>
      <ContentHeader />
      <div className="student-table-container">
        <h2>All Students List</h2>
        <div className="controls">
          <div>
            <select
              onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
              defaultValue={rowsPerPage}
            >
              {[10, 20, 30].map((num) => (
                <option key={num} value={num}>
                  {num} entries per page
                </option>
              ))}
            </select>
          </div>
          <Link to="/StudentTable/AddStudent" className="add-button">
            + Add New
          </Link>
        </div>

        <table className="student-table">
          <thead>
            <tr>
              <th>Roll No.</th>
              <th>Name</th>
              <th>Education</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Admission Date</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((student) =>
              editingRoll === student.roll ? (
                <tr key={student.roll}>
                  <td>{student.roll}</td>
                  <td>
                    <input
                      type="text"
                      name="Name"
                      value={editedData.Name}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="education"
                      value={editedData.education}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="mobileNumber"
                      value={editedData.mobileNumber}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      value={editedData.email}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      name="registrationDate"
                      value={editedData.registrationDate}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="address"
                      value={editedData.address}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className='action'>
                    <button className='edits' onClick={handleSave}>Save</button>
                    <button  className='edits' onClick={() => setEditingRoll(null)}>Cancel</button>
                  </td>
                </tr>
              ) : (
                <tr key={student.roll}>
                  <td>{student.roll}</td>
                  <td>{student.Name}</td>
                  <td>{student.education || 'N/A'}</td>
                  <td>{student.mobileNumber}</td>
                  <td>{student.email}</td>
                  <td>{new Date(student.registrationDate).toLocaleDateString()}</td>
                  <td>{student.address}</td>
                  <td className='action'>
                    <button className='edit' onClick={() => handleDelete(student.roll)}>🗑️</button>
                    <button className='edit' onClick={() => handleEditClick(student)}><MdOutlineEdit/></button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>

        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          {[...Array(totalPages).keys()].map((num) => (
            <button
              key={num + 1}
              className={currentPage === num + 1 ? 'active' : ''}
              onClick={() => handlePageChange(num + 1)}
            >
              {num + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentTable;
