import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NeatEase from "./components/NeatEase";
import Navibar from "./components/Navibar";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks, task];
        console.log("Updated Tasks:", updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        return updatedTasks;
    });
};

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

const toggleTaskCompletion = (index) => {
  const updatedTasks = tasks.map((task, i) =>
  i === index ? { ...task, completed: !task.completed } : task
  );
  setTasks(updatedTasks);
};

  return (
    <Router>
      <Navibar />
      <Routes>
        <Route path="/Tekweb_NeatEase" element={<NeatEase />}/>
        <Route path="/TaskList" element={<TaskList tasks={tasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} />} />
        <Route path="/AddTask" element={<AddTask addTask={addTask} />} />
      </Routes>
    </Router>
  )
}

export default App;
