import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProfilePage from "./pages/ProfilePage.jsx";
import UserProfilePage from "./pages/UserProfilePage.jsx";
import AppHome from "./pages/AppHome.jsx";
import Post from "./pages/Post.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import SearchResult from "./components/SearchResult";
import PostEditor from "./components/test/PostEditor.jsx";
// import Test from "./components/test/test.jsx";
// import PostsWrapper from "./components/test/PostsWrapper";
// import PostsWrapperProfile from "./components/test/PostsWrapperProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<AppHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/profile" element={<ProfilePage />}>
            <Route path="posts/:id" element={<PostEditor />} />
          </Route>
          <Route path="/user/:id" element={<UserProfilePage />} />

          <Route path="/post/:id" element={<Post />} />
          <Route path="/search/:input" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
