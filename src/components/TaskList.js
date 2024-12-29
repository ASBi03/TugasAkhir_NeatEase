import React, { useState } from "react";
import del from "./Del.png";
import edit from "./Editicon.webp";
import { Link } from "react-router-dom";

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  const [taskList, setTaskList] = useState(tasks);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending"});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleSort = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "ascending"
      ? "descending"
      : "ascending";

    const sortedTasks = [...taskList].sort((a, b) => {
      if (key === "createdAt" || key === "deadLine") {
        return direction === "ascending"
          ? new Date(a[key]) - new Date(b[key])
          : new Date(a[key]) - new Date(b[key]);
      } else {
        const valueA = a[key] || "";
        const valueB = b[key] || "";
        return direction === "ascending"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }
    });

    setTaskList(sortedTasks);
    setSortConfig({ key, direction });
  };

  const openPopup = (task, index) => {
    setCurrentTask({ ...task, index });
    setIsPopupOpen(true);
  };

  const handleSave = () => {
    if (currentTask) {
      const updatedTasks = [...taskList];
      updatedTasks[currentTask.index] = currentTask;
      setTaskList(updatedTasks);
      updatedTasks(currentTask.index, currentTask);
    }
    setIsPopupOpen(false);
  };


  return (
    <div className="font-poppins container flex flex-col h-screen max-w-screen-2xl bg-yellow-200">
      <div className="flex items-center justify-center ml-96">
        <select 
          className="border bg-yellow-200 mt-10 ml-44 text-center border-yellow-600 rounded-2xl"
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="" disable selected>
            Sort By
          </option>
          <option value="task">Task</option>
          <option value="category">Category</option>
          <option value="createdAt">Created at</option>
          <option value="deadline">Deadline</option>
        </select>
      </div>
      <div className="tabletask flex items-center justify-center mt-10">
        <table className="max-w-screen-md bg-yellow-400 text-yellow-950 text-center shadow-lg rounded-tl-2xl rounded-br-2xl">
          <thead className="border-b-2 border-yellow-600">
            <tr>
              <th className="py-2 px-4 border-r-2 border-yellow-600">No.</th>
              <th className="py-2 px-4 border-r-2 border-yellow-600">Task</th>
              <th className="py-2 px-4 border-r-2 border-yellow-600">Category</th>
              <th className="py-2 px-4 border-r-2 border-yellow-600">Created at</th>
              <th className="py-2 px-4 border-r-2 border-yellow-600">Deadline</th>
              <th className="py-2 px-4 border-r-2 border-yellow-600">Completed</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>

          <tbody className="text-yellow-950">
            {tasks.map((task, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-r-2 border-yellow-600">{index + 1}</td>
                <td className="py-2 px-4 border-r-2 border-yellow-600">{task.task}</td>
                <td className="py-2 px-4 border-r-2 border-yellow-600">{task.category}</td>
                <td className="py-2 px-4 border-r-2 border-yellow-600">{task.createdAt}</td>
                <td className="py-2 px-4 border-r-2 border-yellow-600">{task.deadline}</td>
                <td className="py-2 px-4 border-r-2 border-yellow-600">
                  <input 
                    type ="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(index)}
                  />
                  </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => openPopup(task, index)} className="mr-2 w-4">
                      <img src={edit} alt="Edit" className="w-4"/>
                  </button>
                  <button
                    onClick={() => deleteTask(index)} className="ml-2 w-4">
                      <img src={del} alt="Delete" className="w-4"/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex items-center justify-center">
        <Link to="/AddTask">
          <button className="bg-yellow-800 shadow-lg text-white p-2 rounded-2xl mt-16 hover:bg-yellow-600">Add Task</button>
        </Link>
      </div>

      {/*pop-up form*/}
      {isPopupOpen && (
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-72 bg-yellow-300 rounded-tl-2xl rounded-br-2xl">
            <h2 className=" flex items-center justify-center mb-3 text-yellow-800">Edit Task</h2>
            <label className="flex mr-44 text-sm">Task</label>
            <input
              type="text"
              value={currentTask}
              onChange={(e) =>
                setCurrentTask({ ...currentTask, task: e.target.value })
              }
              className="flex text-gray-700 w-52"/>
            <label className="flex mr-40 mt-4 text-sm">Category</label>
            <input 
              type="text"
              value={currentTask.category}
              onChange={(e) =>
                setCurrentTask({ ...currentTask, category: e.target.value })
              }
              className="flex text-gray-700 w-52"/>
            <label className="flex mr-40 mt-4 text-sm">Deadline</label>
            <input 
              type="date"
              value={currentTask.deadline}
              onChange={(e) =>
                setCurrentTask({ ...currentTask, deadline: e.target.value })
              }
              className="flex text-gray-700 w-52 items-center justify-center"/>
            <div>
              <button className="bg-yellow-800 text-white rounded-2xl w-20 mr-2 mt-4 mb-4" onClick={() => setIsPopupOpen(false)}>Cancel</button>
              <button className="bg-yellow-800 text-white rounded-2xl w-20 ml-2 mt-4 mb-4" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;