import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold text-blue-500 dark:text-white">
                    MyApp
                </div>
                <nav className="space-x-4">
                    <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
                        Home
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                    >
                        Logout
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
