import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navibar from "./components/Navibar";
import List from "./components/List";
import Add from "./components/Add";

const App = () => {
  return (
    <Router>
      <Navibar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/List" element={<List />} />
        <Route path="/Add" element={<Add />} />
      </Routes>
    </Router>
  )
}

export default App;
