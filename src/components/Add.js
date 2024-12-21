import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Add = ({ addTask }) => {
    const [task, setTask] = useState('');
    const [category, setCategory] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() && category.trim() && dueDate.trim()) {
            addTask({ task, category, dueDate });
            setTask('');
            setCategory('');
            setDueDate('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-start mb-4 bg-yellow-200 w-screen h-screen">
            <div className="mb-2 w-96 mt-10">
                <label className="block text-sm font-medium mb-1">Task Name</label>
                <input
                    type="text"
                    placeholder="Enter task name"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="border border-gray-300 rounded p-2 w-full"
                />
            </div>

            <div className="mb-2 w-96 mt-5">
                <label className="block text-sm font-medium mb-1">Category</label>
                <input
                    type="text"
                    placeholder="Enter category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border border-gray-300 rounded p-2 w-full"
                />
            </div>

            <div className="mb-2 w-96 mt-5">
                <label className="block text-sm font-medium mb-1">Due Date</label>
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="border border-gray-300 rounded p-2 w-full"
                />
            </div>

            <Link to="/TaskList">
                <button type="submit" className="bg-yellow-800 text-white px-4 py-2 rounded-2xl w-96 mt-5">
                    Submit
                </button>
            </Link>
        </form>
    );
};

export default Add;
