import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="burger-menu">&#x2630;</div>
      <ul className="nav-links">
        <li>
          <Link to="/login">Log in </Link>
        </li>
     
      </ul>
    </nav>
  );
}

export default NavBar;
