import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkdVRVNUX2M4eWN1ZDBjQ1V3eVRkUyIsIm5ldHdvcmtJZCI6InlGTWhHaDZYcnMiLCJuZXR3b3JrRG9tYWluIjoicG9kZGVycy1vbGQuYmV0dGVybW9kZS5pbyIsInRva2VuVHlwZSI6IkdVRVNUIiwiZW50aXR5SWQiOm51bGwsInBlcm1pc3Npb25Db250ZXh0IjpudWxsLCJwZXJtaXNzaW9ucyI6bnVsbCwiaWF0IjoxNzE2NDE1NTcwLCJleHAiOjE3MTkwMDc1NzB9.CmO7oF8iTGIePj2KGqEGFZBl8NzQ6RAAFkExAuBYVEk`
        localStorage.setItem("token", token);
        navigate('/'); // Navigate to the home page after setting the token
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900" data-testid="login-form">
            <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4" >
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
                    <div className="mb-4" >
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
