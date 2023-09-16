import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h3>Navbar |</h3>
      <Link to="/">
        {" "}
        <h4>Vite</h4>
      </Link>
      <Link to="/test">
        {" "}
        <h4>Home</h4>
      </Link>
      <Link to="/test">
        {" "}
        <h4>User</h4>
      </Link>
      <Link to="/test">
        {" "}
        <h4>Trainer</h4>
      </Link>
    </div>
  );
};

export default Navbar;
