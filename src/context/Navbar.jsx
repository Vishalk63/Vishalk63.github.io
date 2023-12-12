import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";
import logo from '../images/profile.jpg'
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="navbar">
      <nav>
        {/* <div><h1>Vishal Kachare</h1></div> */}

        <h1 className="title">
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwmizMHZFpQtH9RA3PxBIWOsama4AMJoHuQ&usqp=CAU"
            alt=""
          /> */}

          <img src={logo} alt="" />
        </h1>

        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* <div>
          <i class="fa-solid fa-bars"></i>
        </div> */}

        <ul className={menuOpen ? "open" : ""}>
          <li>
            <Link smooth to="#home" activeClassName="active">
              Home
            </Link>
          </li>

          <li>
            <Link smooth to="#about" activeClassName="active">
              About
            </Link>
          </li>

          <li>
            <Link smooth to="#skills" activeClassName="active">
              Skills
            </Link>
          </li>

          <li>
            <Link smooth to="#projects" activeClassName="active">
              Projects
            </Link>
          </li>

          <li>
            <Link smooth to="#contact" activeClassName="active">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
