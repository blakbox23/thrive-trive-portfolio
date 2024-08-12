import React from "react";

function NavBar() {
  return (
    <nav>
      <div className="burger-menu">&#x2630;</div>
      <ul className="nav-links">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Members</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
