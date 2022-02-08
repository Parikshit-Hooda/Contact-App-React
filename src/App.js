import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/AddContact/index";
import EditContact from "./components/EditContact/index";
import Home from "./components/Home/index";
import Navbar from "./components/Navbar/index";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </div>
  );
};
export default App;
