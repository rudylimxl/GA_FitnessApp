import { Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/app">
        {" "}
        <h4>Home</h4>
      </Link>
      <Link to="/user">
        {" "}
        <h4>User</h4>
      </Link>
      <Link to="/test">
        {" "}
        <h4>Trainer</h4>
      </Link>
      <h4>Notifications</h4>
      <h4>Logout</h4>
    </div>
  );
};

export default Navbar;
