import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import PostList from './pages/PostsList';
import Post from './pages/Post';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(localStorage.getItem("token")?.length));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && location.pathname === '/login') {
      navigate('/');
    }
    setIsAuthenticated(Boolean(token?.length));
  }, [location, navigate]);

  document.documentElement.classList.add('dark');

  return (
    <>
      <Header />
      <div className="pt-16">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:id" element={<Post />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

const AppWithRouter: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
