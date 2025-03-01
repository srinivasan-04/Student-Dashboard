import React, { useState } from 'react';
import './Login.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import { useSidebar } from '../SidebarContext';
import { MdWavingHand } from 'react-icons/md';
import img1 from '../assets/auth-img1.png';
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

function Login() {
  const { setName } = useSidebar();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function HandleSubmit(e) {
    e.preventDefault();

    if (!username || !password) {
      toast.error('All fields are required', { autoClose: 3000 });
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem("username", username);
        setName(username);

        toast.success('Login Successful!', { autoClose: 2000 });
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        toast.error('Invalid username or password', { autoClose: 3000 });
      }
    } catch (error) {
      toast.error('Something went wrong. Please try later.', { autoClose: 3000 });
    }
  }

  return (
    <div className="log">
      <ToastContainer />
      <div className="login-container">
        <div className="img-container">
          <img src={img1} alt="Login Illustration" />
        </div>
        <div className="form-container">
          <h2>
            Welcome Back <MdWavingHand className="icon" />
          </h2>
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="submit-button" onClick={HandleSubmit}>
            Submit
          </button>
          <p className="register-link">
            Don't have an account? <span onClick={() => navigate("/sign")}>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
