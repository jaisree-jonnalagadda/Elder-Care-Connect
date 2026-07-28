import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">
          🌿 Elder Care Connect
        </Link>
      </div>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/welfare">
          Welfare
        </Link>

        <Link to="/healthcare">
          Healthcare
        </Link>

        <Link to="/emergency">
          Emergency
        </Link>

        <Link to="/contact">
          Contact
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;