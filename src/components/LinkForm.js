import React, { useState } from 'react';
import axios from 'axios';

const LinkForm = ({ setLinks }) => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const addLinkHandler = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const config = { headers: { Authorization: `Bearer ${token}` } };
        try {
            const { data } = await axios.post('https://linktreebackend-1.onrender.com/api/links', { title, url }, config);
            setLinks((prevLinks) => [...prevLinks, data]);
            setTitle('');
            setUrl('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto mt-6">
        <form onSubmit={addLinkHandler} className="bg-white p-8 rounded-lg shadow-md">
            
            <h3 className="text-lg font-semibold text-lime-800 mb-4">Add New Link</h3>
            <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className=" w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">URL</label>
                <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
                    required
                />
            </div>
            <button type="submit" className="bg-lime-600 text-white px-4 py-2 rounded-lg hover:bg-lime-700">
                Add Link
            </button>
        </form>
       
        </div>
    );
};

export default LinkForm;
