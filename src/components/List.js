import React from "react";
import { Link } from "react-router-dom";

function List() {
  return (
    <div className="container flex flex-col h-screen w-screen pt-4 bg-yellow-200">
      <div className="tabletask flex items-start justify-start">
        <table className="w-screen bg-yellow-400">
          <th className="py-2 px-4 border-b border-black">No.</th>
          <th className="py-2 px-4 border-b border-black">Task</th>
          <th className="py-2 px-4 border-b border-black">Category</th>
          <th className="py-2 px-4 border-b border-black">Due Date</th>
        </table>
      </div>
      <div className="flex items-center justify-center">
        <Link to="/AddTask">
          <button className="bg-yellow-800 text-white p-2 rounded-2xl mt-16">Add Task</button>
        </Link>

      </div>
    </div>
  );
};

export default List;