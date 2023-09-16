import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./components/test/test.jsx";
import Navbar from "./navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/home" element={<Test />}></Route>
        <Route path="/user" element={<Test />}></Route>
        <Route path="/trainer" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
