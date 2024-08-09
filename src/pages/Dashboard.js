import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/nav';
import LinkForm from '../components/LinkForm';
import LinkList from '../components/LinkList';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [links, setLinks] = useState([]);

    useEffect(() => {
        const fetchLinks = async () => {
            const token = localStorage.getItem('token');
            const config = { headers: { Authorization: `Bearer ${token}` } };
            try {
                const { data } = await axios.get('https://linktreebackend-1.onrender.com/api/links', config);
                setLinks(data);
            } catch (error) {
                console.error('Error fetching links:', error);
            }
        };

        fetchLinks();
    }, []);

    const addLinkHandler = (newLink) => {
        setLinks((prevLinks) => [...prevLinks, newLink]);
    };

    const deleteLinkHandler = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const config = { headers: { Authorization: `Bearer ${token}` } };
            await axios.delete(`http://localhost:5000/api/links/${id}`, config);

            setLinks((prevLinks) => prevLinks.filter(link => link._id !== id));
        } catch (error) {
            console.error('Error deleting link:', error);
        }
    };

    const logoutHandler = () => {
        localStorage.removeItem('token'); 
        navigate('/'); 
    };

    return (
        <div>
            <header className="w-full bg-lime-900 p-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <h1 className="text-white text-xl font-bold italic font-serif">LinkTree</h1>
                    <Navbar />
                </div>
            </header>
            <div className='flex flex-col items-center mt-11 px-4 md:px-0 flex-grow'>
            <LinkForm setLinks={addLinkHandler} />
            <LinkList links={links} deleteLinkHandler={deleteLinkHandler} />
            <div className="mt-6 bg-lime-600 text-white px-4 py-2 rounded-lg hover:bg-lime-700">
                <button onClick={logoutHandler} >Logout</button>
            </div>
            </div>
            <footer className="w-full bg-lime-900 p-4 mt-7">
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

export default Dashboard;
