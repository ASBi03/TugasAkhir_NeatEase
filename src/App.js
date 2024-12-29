import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NeatEase from "./components/NeatEase";
import Navibar from "./components/Navibar";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([]);

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

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        setTasks(JSON.parse(savedTasks)); // Parse data dari string ke array
    }
}, []);

  return (
    <Router>
      <Navibar />
      <Routes>
        <Route path="/ProjekAkhir_NeatEase" element={<NeatEase />}/>
        <Route path="/TaskList" element={<TaskList tasks={tasks} deleteTask={deleteTask} />} />
        <Route path="/AddTask" element={<AddTask addTask={addTask} />} />
      </Routes>
    </Router>
  )
}

export default App;
