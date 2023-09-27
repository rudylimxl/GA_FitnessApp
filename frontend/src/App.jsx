import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProfilePage from "./pages/ProfilePage.jsx";
import UserProfilePage from "./pages/UserProfilePage.jsx";
import AppHome from "./pages/AppHome.jsx";
import PostEditor from "./components/test/PostEditor.jsx";
import Post from "./pages/Post.jsx";
import PostsWrapper from "./components/test/PostsWrapper";
import PostsWrapperProfile from "./components/test/PostsWrapperProfile";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import SearchResult from "./components/SearchResult";
import Test from "./components/test/test.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<AppHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/profile" element={<ProfilePage />}>
            <Route index element={<Test />} />
            <Route path="stats" element={<Test />} />
            <Route path="videos" element={<PostsWrapperProfile />} />
            <Route path="workouts" element={<Test />} />
            <Route path="clients" element={<Test />} />
            <Route path="posts/:id" element={<PostEditor />} />
          </Route>

          <Route path="user/:id" element={<UserProfilePage />}>
            <Route index element={<Test />} />
            <Route path="stats" element={<Test />} />
            <Route path="videos" element={<PostsWrapper />} />
            <Route path="workouts" element={<Test />} />
            <Route path="clients" element={<Test />} />
          </Route>

          <Route path="/post/:id" element={<Post />} />
          <Route path="search/:input" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
