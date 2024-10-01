import React from 'react';
import Navbar from '../components/nav';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleSignUpClick = () => {
        navigate('/login');
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <header className="w-full bg-lime-900 p-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <h1 className="text-white text-xl font-bold italic font-serif">LinkTree</h1>
                    <Navbar />
                </div>
            </header>

            <main className="bg-cyan-50 flex flex-col items-center px-4 md:px-0 flex-grow">
                <section className="text-center mb-18">
                    <h2 className="text-6xl font-bold text-gray-800 mb-7 font-serif mt-20">Welcome to  Linktree</h2>
                    <p className="text-gray-600 text-xl italic mb-9">
                        Create your own linktree page and share it with the world!
                    </p>
                    <button 
                        className="bg-lime-600 text-white px-8 py-4 rounded hover:bg-lime-700 transition-colors duration-300 mt-20"
                        onClick={handleSignUpClick}
                    >
                        Sign Up Now
                    </button>
                </section>
            </main>

            <footer className="w-full bg-lime-900 p-4">
                <div className="container mx-auto text-white flex flex-col md:flex-row justify-between items-center">
                    <p className="mb-4 md:mb-0">&copy; 2024 LinkTree</p>
                    <div className="space-x-4">
                        <a href="#" className="text-white">Privacy Policy</a>
                        <a href="#" className="text-white">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
