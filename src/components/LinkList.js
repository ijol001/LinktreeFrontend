import React, { useState } from 'react';

const LinkList = ({ links, deleteLinkHandler, updateLinkHandler }) => {
    const [editMode, setEditMode] = useState(null);
    const [editData, setEditData] = useState({ title: '', url: '' });

    const handleEditClick = (link) => {
        setEditMode(link._id); 
        setEditData({ title: link.title, url: link.url }); 
    };

    const handleSaveClick = () => {
        if (!editData.title || !editData.url) {
            alert('Both title and URL are required!');
            return;
        }
        updateLinkHandler(editMode, editData);
        setEditMode(null);
    };

    const handleCancelClick = () => {
        setEditMode(null); 
    };

    return (
        <div className="w-full max-w-3xl mx-auto mt-2">
            {links.map((link) => (
                <div
                    key={link._id}
                    className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between mb-4"
                >
                    {editMode === link._id ? (
                        <>
                            <div className="flex flex-1 items-center gap-4">
                                <input
                                    type="text"
                                    value={editData.title}
                                    onChange={(e) =>
                                        setEditData({ ...editData, title: e.target.value })
                                    }
                                    className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
                                    placeholder="Title"
                                />
                                <input
                                    type="text"
                                    value={editData.url}
                                    onChange={(e) =>
                                        setEditData({ ...editData, url: e.target.value })
                                    }
                                    className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
                                    placeholder="URL"
                                />
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={handleSaveClick}
                                    className="bg-lime-600 text-white px-3 py-2 rounded-lg hover:bg-lime-700"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={handleCancelClick}
                                    className="bg-gray-500 text-white px-3 py-2 rounded-lg hover:bg-gray-700"
                                >
                                    Cancel
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex flex-1 items-center gap-4">
                                <h3 className="flex-1 font-medium text-lime-800 truncate">
                                    {link.title}
                                </h3>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-blue-500 truncate hover:underline"
                                >
                                    {link.url}
                                </a>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEditClick(link)}
                                    className="bg-yellow-400 text-white px-3 py-2 rounded-lg hover:bg-yellow-500"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteLinkHandler(link._id)}
                                    className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};    
export default LinkList;
