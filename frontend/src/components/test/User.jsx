import { Link, Outlet } from "react-router-dom";

const UserProfile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <div className="userButtons">
        <Link to="/user/posts/">
          <button>Posts</button>
        </Link>
        <Link to="/user/posts/create">
          <button>Create Post</button>
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default UserProfile;
