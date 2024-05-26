import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import PostList from './pages/PostsList';
import Post from './pages/Post';

// Main App component
const App: React.FC = () => {
  // State to track authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(localStorage.getItem("token")?.length));
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect to handle authentication status and redirection on token change
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && location.pathname === '/login') {
      navigate('/'); // Redirect to home if authenticated and on login page
    }
    setIsAuthenticated(Boolean(token?.length)); // Update authentication status
  }, [location, navigate]);

  // Add dark mode class to the document root
  document.documentElement.classList.add('dark');

  return (
    <>
      <Header /> {/* Header component */}
      <div className="pt-16">
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Route for login page */}
          {/* Protected routes */}
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/" element={<Home />} /> {/* Home page */}
            <Route path="/posts" element={<PostList />} /> {/* Posts list page */}
            <Route path="/posts/:id" element={<Post />} /> {/* Single post page */}
          </Route>
        </Routes>
      </div>
    </>
  );
};

// Wrapper component to include Router
const AppWithRouter: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter; 
