import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const token = `token goes here`;
        localStorage.setItem("token", token);
        navigate('/');
    };

    useEffect(() => {
        localStorage.removeItem("token");
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-900 dark:text-gray-100">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-900 dark:text-gray-100">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
