import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/test/Posts";
import "./App.css";
import ProfilePage from "./pages/ProfilePage.jsx";
import AppHome from "./pages/AppHome.jsx";
import PostEditor from "./components/test/PostEditor.jsx";
import Post from "./pages/Post.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<AppHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<ProfilePage />}>
            <Route index element={<Posts />} />
            <Route path="posts/:id" element={<PostEditor />} />
          </Route>
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
