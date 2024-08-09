import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token'); 

    return (
        <nav className="bg-lime-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    {token ? (
                        <>
                            <Link to="/dashboard" className="text-white">Dashboard</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-white">Login</Link>
                            <Link to="/register" className="text-white">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
