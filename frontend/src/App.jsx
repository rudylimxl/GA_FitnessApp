import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from "./components/test/User.jsx";
import Posts from "./components/test/Posts.jsx";
import CreatePost from "./components/test/CreatePost.jsx";
import "./App.css";
import ProfilePage from "./pages/ProfilePage.jsx";
import AppHome from "./pages/AppHome.jsx";
import PostEditor from "./components/test/PostEditor.jsx";
import Post from "./pages/Post.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<AppHome />} />

          <Route path="/user" element={<ProfilePage />}>
            <Route index element={<UserProfile />} />
            <Route path="/user/posts" element={<Posts />} />
            <Route path="/user/posts/:id" element={<PostEditor />} />
            <Route path="/user/posts/create" element={<CreatePost />} />
          </Route>
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
