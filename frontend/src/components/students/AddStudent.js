import React, { useState } from "react";
import "./student.css"; // Assuming the CSS file is named AddStudentForm.css
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css';
const AddStudent = () => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");
  const [address, setAddress] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [education, setEducation] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  
  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !Name ||
      !email ||
      !roll ||
      !address ||
      !registrationDate ||
      !education ||
      !mobileNumber
    ) {
      toast.error('All fields are required!', { autoClose: 3000 });
      return;
    }

    // Optional: Additional validation (e.g., email format, mobile number length)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email format!', { autoClose: 3000 });
      return;
    }

    if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
      toast.error('Mobile number must be 10 digits!', { autoClose: 3000 });
      return;
    }
    const formData = {
      Name,
      email,
      roll,
      address,
      registrationDate,
      education,
      mobileNumber,
    };

    try {
      const response = await fetch('http://localhost:4000/AddStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ formData }), 
      });
      
      
      if (response.ok) {
        toast.success('Registration Successful!', { autoClose: 3000 });
        // Reset form fields after successful submission
        setName('');
        setEmail('');
        setRoll('');
        setAddress('');
        setRegistrationDate('');
        setEducation('');
        setMobileNumber('');
      } else {
        toast.error('Registration failed!', { autoClose: 3000 });
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again!', { autoClose: 3000 });
    }
  }

  return (
    <form className="add-student-form" onSubmit={handleSubmit}>
      <ToastContainer position="top-right"/>
      <h2>Add Student</h2>
      <div className="basic-info">
        <h3>Basic Info</h3>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Full Name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label>Roll No</label>
          <input
            type="text"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            placeholder="Roll No"
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
        </div>
        <div className="form-group">
          <label>Registration Date</label>
          <input
            type="date"
            value={registrationDate}
            onChange={(e) => setRegistrationDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Education</label>
          <input
            type="text"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            placeholder="Class"
          />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Mobile Number"
          />
        </div>
      </div>
      <button className="addbut" type="submit">Submit</button>
    </form>
  );
};

export default AddStudent;
