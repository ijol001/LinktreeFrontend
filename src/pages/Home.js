import React from 'react';
import Navbar from '../components/nav';
import { useNavigate } from 'react-router-dom';
import '../styles/custom.css';

const Home = () => {
    const navigate = useNavigate();
    const handleSignUpClick = () => {
        navigate('/login');
    };

    return (
        <div className="relative bg-gray-100 min-h-screen flex flex-col overflow-hidden">
            <div className="absolute inset-0 bg-background-images bg-cover bg-fixed animate-move-background"></div>

            <header className="relative z-10 w-full bg-lime-900 p-4 shadow-lg">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <h1 className="text-white text-xl md:text-2xl font-bold italic font-serif">LinkTree</h1>
                    <Navbar />
                </div>
            </header>
            <main className="relative z-10 bg-cyan-50 bg-opacity-70 flex flex-col items-center px-4 md:px-0 flex-grow">
                <section className="text-center mb-18">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-5 md:mb-7 font-serif mt-16 md:mt-20">
                        Welcome to Linktree
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl italic mb-7 md:mb-9">
                        Create your own linktree page and share it with the world!
                    </p>
                    <button 
                        className="bg-lime-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-lime-700 transition-colors duration-300 mt-12 md:mt-20"
                        onClick={handleSignUpClick}
                    >
                        Sign Up Now
                    </button>
                </section>
            </main>
            <footer className="relative z-10 w-full bg-lime-900 p-4">
                <div className="container mx-auto text-white flex flex-col md:flex-row justify-between items-center">
                    <p className="mb-4 md:mb-0">&copy; 2024 LinkTree</p>
                    <div className="space-x-4">
                        <a href="#" className="text-white hover:underline">Privacy Policy</a>
                        <a href="#" className="text-white hover:underline">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
