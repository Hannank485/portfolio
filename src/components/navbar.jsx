import { faStrikethrough } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/" id="logo">
          <FontAwesomeIcon icon={faStrikethrough} />
        </Link>
        <div>
          <NavLink to="/" className="navbar-contents">
            Home
          </NavLink>
          <NavLink to="/about" className="navbar-contents">
            About Me
          </NavLink>
          <NavLink to="/project" className="navbar-contents">
            Projects
          </NavLink>

          <NavLink to="/contact" className="navbar-contents">
            Contact Me
          </NavLink>
        </div>
        <div>
          <NavLink to="/resume" className="navbar-resume">
            Resume
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Navbar;
