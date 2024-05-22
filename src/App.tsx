import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  const isAuthenticated = Boolean(localStorage.getItem("token")?.length);
  document.documentElement.classList.add('dark');

  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   if (darkMode) {
  //     document.documentElement.classList.remove('dark');
  //   } else {
  //     document.documentElement.classList.add('dark');
  //   }
  // };

  return (
    <Router>
      {/* convert this into a toggle UI instead of text based button
      <div className="fixed top-0 w-full p-4 bg-white dark:bg-gray-800 z-50">
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-primary text-white rounded"
        >
          Dark Mode
        </button>
      </div> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
