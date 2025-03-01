const mongoose = require('mongoose');
const express = require('express');
const Cors = require('cors');
const jwt = require('jsonwebtoken');
const User = require('./models/user');
const Student = require('./models/student');

const JWT_SECRET = 'your_secure_secret_key'; // Define your secret key here

// Connect to MongoDB
mongoose
.connect('mongodb://localhost:27017/dashboard', { useNewUrlParser: true, useUnifiedTopology: true })
  
const app = express();
app.use(express.json());
app.use(Cors());

// Register a new user
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const UserDoc = await User.create({ username, password });
    res.json({ message: 'User created successfully', UserDoc });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Error creating user', error });
  }
});

// User login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const UserDoc = await User.findOne({ username });
    if (!UserDoc) {
      res.status(400).json({ message: 'User not found' });
    } else if (UserDoc.password === password) {
      // Generate token
      const token = jwt.sign({ id: UserDoc._id, username: UserDoc.username }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ message: 'Login successful', token });
    } else {
      res.status(400).json({ message: 'Invalid password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});

// Middleware to verify token
function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user; // Add user info to request
    next();
  });
}

// Example protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

// Add a new student
app.post('/AddStudent', async (req, res) => {
  const { formData } = req.body;

  try {
    const studentDoc = await Student.create(formData);
    res.status(201).json({ message: 'Student added successfully', studentDoc });
  } catch (error) {
    console.error('Error adding student:', error);
    res.status(500).json({ message: 'Error adding student', error });
  }
});

// Delete a student
app.delete('/deleteStudent/:roll', async (req, res) => {
  const { roll } = req.params;

  try {
    const deletedStudent = await Student.findOneAndDelete({ roll });

    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).json({ message: 'Error deleting student', error });
  }
});

// Get all students
app.get('/AddStudent', async (req, res) => {
  try {
    const students = await Student.find();
    res.json({ students });
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ message: 'Error fetching students', error });
  }
});


//edit student
app.put('/updateStudent/:roll', async (req, res) => {
  const { roll } = req.params;
  const updatedData = req.body;

  try {
    const updatedStudent = await Student.findOneAndUpdate({ roll }, updatedData, { new: true });

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json({ message: 'Student updated successfully', updatedStudent });
  } catch (error) {
    console.error('Error updating student:', error);
    res.status(500).json({ message: 'Error updating student', error });
  }
});

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
