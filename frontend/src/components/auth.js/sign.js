import React, { useState } from 'react';
import './Login.css'; // Import the CSS file
import img1 from '../assets/auth-img1.png';
import {  useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

function Sign() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function HandleSubmit(e) {
    e.preventDefault();
    if (!username || !password) {
          toast.error('All fields are required', { autoClose: 3000 }); // Error toast for empty fields
          return;
        }

    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        toast.success('Register Successful!', { autoClose: 2000 }); // Success toast
        setTimeout(() => {
          navigate('/login'); // Redirect to login page after 2 seconds
        }, 2000);
      } else {
        toast.error('Register Failed. Please try again.', { autoClose: 3000 }); // Error toast
      }
    } catch (error) {
      toast.error('Something went wrong. Please try later.', { autoClose: 3000 });
    }
  }

  return (
    <div className="log">
      <ToastContainer /> {/* Toast container for displaying notifications */}
      <div className="login-container">
        <div className="img-container">
          <img src={img1} alt="Login Illustration" />
        </div>
        <div className="form-container">
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <div className="sub">
            <button className="submit-button" onClick={HandleSubmit}>
              Submit
            </button>
            
          </div>
          <p className="register-link">
            Already have an account ? <span onClick={() => navigate("/login")}>Login</span>
          </p>
        
        </div>
      </div>
    </div>
  );
}

export default Sign;
