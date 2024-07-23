import "../styles/Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink to="/" className="navbar-logo-container">
        <img
          src="/assets/RightsHero-Logo.png"
          alt="RightsHero logo"
          className="navbar-logo"
        />
      </NavLink>

      <ul className="navbar-links">
        <li>
          <NavLink to="/" className="navbar-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navbar-link">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className="navbar-link">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className="navbar-link">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/careers" className="navbar-link">
            Careers
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="navbar-link">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
