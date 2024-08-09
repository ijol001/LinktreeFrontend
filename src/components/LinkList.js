import React from 'react';

const LinkList = ({ links, deleteLinkHandler }) => {
    return (
        <div className="w-full max-w-3xl mx-auto mt-6">
            <table className="w-full bg-white shadow-md rounded-lg">
                <thead className="bg-lime-900 text-white">
                    <tr>
                        <th className="py-2 px-4 border-b">Title</th>
                        <th className="py-2 px-4 border-b">URL</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {links.map((link) => (
                        <tr key={link._id}>
                            <td className="py-2 px-4 border-b">{link.title}</td>
                            <td className="py-2 px-4 border-b">
                                <a href={link.url} className="text-lime-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                    {link.url}
                                </a>
                            </td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    onClick={() => deleteLinkHandler(link._id)}
                                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LinkList;
