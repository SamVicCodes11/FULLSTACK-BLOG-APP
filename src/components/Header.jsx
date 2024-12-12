import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import "./Header.css";
import navImage from "../images/MY PIC.jpg";



const Header = () => {
  return (
    <header className="navbar">
      <div className="container navbar_container">
        <Link to="/">
          <h3>
            SAMVIC <span className="codes">CODES</span>
          </h3>
        </Link>

        <div className="nav_lists">
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

        <button className="nav_menubar">
          <FaBars />
        </button>
        <button className="nav_close">
          <IoClose />
        </button>
      </div>
    </header>
  );
};

export default Header;
