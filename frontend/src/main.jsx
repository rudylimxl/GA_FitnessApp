import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./components/test/test.jsx";
import Navbar from "./navbar.jsx";
import UserProfile from "./components/test/User.jsx";
import Posts from "./components/test/Posts.jsx";
import CreatePost from "./components/test/CreatePost.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/home" element={<Test />}></Route>
        <Route path="/user" element={<UserProfile />}>
          <Route path="/user/posts" element={<Posts />}></Route>
          <Route path="/user/posts/create" element={<CreatePost />}></Route>
        </Route>
        <Route path="/trainer" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
