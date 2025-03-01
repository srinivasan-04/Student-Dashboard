import './App.css';
import Sidebar from './components/sidebar';
import Assigment from './components/assignment/assigment';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { SidebarProvider } from './components/SidebarContext';
import Message from './components/message/message';
import Stats from './components/stats/Stats';
import Courses from './components/courses/Courses';
import Login from './components/auth.js/login';
import Sign from './components/auth.js/sign';
import AddStudent from './components/students/AddStudent';
import StudentTable from './components/students/StudentTable';
import CourseDetail from './components/courses/CourseDetail';
import Dashboard from './components/dashboard/Dashboard';
import PageNot from './components/pageNot';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Profile from './components/profile/profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
}

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/sign';
  const isPageNotFound = location.pathname === '/404'; // Assuming "/404" is the path for "Page Not Found".

  return (
    <>
      {isLoginPage || isPageNotFound ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/404" element={<PageNot />} />
        </Routes>
      ) : (
        <div className="dashboard">
          {/* Conditionally render the Sidebar */}
          {!isPageNotFound && <Sidebar />}
          <div className="dashboard--content">
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Dashboard/>
                  </ProtectedRoute>
                }
              />
              <Route path="/assignment" element={<ProtectedRoute><Assigment /></ProtectedRoute>} />
              <Route path="/message" element={<ProtectedRoute><Message /></ProtectedRoute>} />
              <Route path="/stats" element={<ProtectedRoute><Stats /></ProtectedRoute>} />
              <Route path="/courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
              <Route path="/StudentTable" element={<ProtectedRoute><StudentTable /></ProtectedRoute>} />
              <Route path="/StudentTable/AddStudent" element={<ProtectedRoute><AddStudent /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/courses/:courseId" element={<ProtectedRoute><CourseDetail /></ProtectedRoute>} />
              <Route path="*" element={<Navigate to="/404" />} /> {/* Redirect unknown routes to Page Not Found */}
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;
