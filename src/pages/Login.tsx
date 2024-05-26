import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (username.trim() === '' || password.trim() === '') {
            setError('Username and password are required.');
            return;
        }

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });


            if (!response.ok) {
                throw new Error('Invalid username or password.');
            }

            const data = await response.json();
            const { token } = data;

            localStorage.setItem('token', token);
            navigate('/');
        } catch (error) {
            setError('Invalid username or password.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900" data-testid="login-form">
            <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Login</h2>
                {error && <p className="mb-4 text-red-500">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-900 dark:text-gray-100">Username</label>
                        <input
                            type="text"
                            value={username}
                            data-testid="username"
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-900 dark:text-gray-100">Password</label>
                        <input
                            type="password"
                            data-testid="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded" data-testid="login-button">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
