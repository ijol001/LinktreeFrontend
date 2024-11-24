import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading]= useState(false);
    const navigate = useNavigate();

    const registerHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await axios.post('http://localhost:5000/api/users/register', { username, email, password });
            localStorage.setItem('token', data.token);
            setTimeout(() => {
               setLoading(false); 
            }, 2000);
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <div className="flex flex-grow items-center justify-center">
                <form onSubmit={registerHandler} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign Up here</h2>
                    
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
                        <input 
                            type="text" 
                            id="username"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
                            placeholder="Username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    
                    <button
                        type="submit"
                        className={`w-full bg-lime-600 text-white py-3 rounded-lg font-semibold 
                                   ${loading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-lime-700'} 
                                   transition-colors duration-300 flex justify-center items-center`}
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="w-6 h-6 border-4 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
                        ) : (
                            'Sign Up'
                        )}
                    </button>
                    <p className="text-plain mt-3 mb-6 text-center">Already have an account? 
                    <Link to="/login" className="text-lime-600 hover:text-lime-700"> Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
