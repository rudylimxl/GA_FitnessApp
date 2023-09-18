import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./components/test/test.jsx";
import UserProfile from "./components/test/User.jsx";
import Posts from "./components/test/Posts.jsx";
import CreatePost from "./components/test/CreatePost.jsx";
import "./App.css";
import Profile from "./pages/Profile.jsx";
import AppHome from "./pages/AppHome.jsx";
import PostEditor from "./components/test/PostEditor.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<AppHome />} />

          <Route path="/user" element={<Profile />}>
            <Route index element={<UserProfile />} />
            <Route path="/user/posts" element={<Posts />} />
            <Route path="/user/posts/:id" element={<PostEditor />} />
            <Route path="/user/posts/create" element={<CreatePost />} />
          </Route>

          <Route path="/trainer" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
