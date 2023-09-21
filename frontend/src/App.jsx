import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreatePost from "./components/test/CreatePost.jsx";
import Posts from "./components/test/Posts.jsx";
import UserProfile from "./components/test/User.jsx";
import Test from "./components/test/test.jsx";
import AppHome from "./pages/AppHome.jsx";
import Login from "./pages/Login";
import Profile from "./pages/Profile.jsx";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<AppHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<Profile />}>
            <Route index element={<UserProfile />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/create" element={<CreatePost />} />
          </Route>

          <Route path="/trainer" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
