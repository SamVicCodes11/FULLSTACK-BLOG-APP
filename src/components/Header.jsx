import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa6";
// import { IoClose } from "react-icons/io5";
import "./Header.css";
import navImage from "../images/MY PIC.jpg";
import { useEffect, useState } from "react";


import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  // Close the nav menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navContainer = document.querySelector(".nav-container");

      // If the click was outside the nav container, close the menu
      if (navContainer && !navContainer.contains(event.target)) {
        setIsNavShowing(false);
      }
    };

    // Add event listener to detect clicks outside of nav
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="container navbar_container">
        <Link to="/" onClick={() => setIsNavShowing(false)}>
          <h3>
            SAMVIC <span className="codes">CODES</span>
          </h3>
        </Link>

        <div  className={`nav_lists ${isNavShowing ? "show-nav" : "hide-nav"}`}>
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="createpost">Create Post</Link>
            </li>
            <li>
              <Link to="authors">Authors</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul>

          <div className="nav_info">
            <div className="nav_img">
              <img src={navImage} alt="" />
            </div>

            <div className="info_pages">
              <Link to="/profile">
                <span>Profile</span>
              </Link>
              <Link to="dashboard">
                <span>Dashboard</span>
              </Link>
              <Link to="/logout">
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>

        {/* <button className="nav_menubar">
          <FaBars />
        </button>
        <button className="nav_close">
          <IoClose />
        </button> */}

        <button
          className="nav-toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <IoCloseSharp /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
