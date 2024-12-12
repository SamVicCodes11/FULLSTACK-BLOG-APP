import React from "react";
import "./Footer.css";


import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
      <footer>

          <ul className="links icon-links">
              <li>
                <a
                  href="https://www.facebook.com/akpobasa.victor?mibextid=rS40aB7S9Ucbxw6v"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaFacebookF />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/samviccodes"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/2348146557494"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <BsWhatsapp />
                </a>
              </li>

              <li>
                <a
                  href="https://x.com/SamVicCodes"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaXTwitter />
                </a>
              </li>
            </ul>

        <div className="container footer-container">
          {/* <!--  --> */}



          <div className="footer-2">
            <h4>Permalinks</h4>

            <ul className="links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/plans">Entertainment</a>
              </li>

              <li>
                <a href="/trainers">Trainers</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-3">
            <h4>Insights</h4>

            <ul className="links">
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Case Studies</a>
              </li>
              <li>
                <a href="/">Events</a>
              </li>
              <li>
                <a href="/">Communities</a>
              </li>
              <li>
                <a href="/">FAQs</a>
              </li>
            </ul>
          </div>

          <div className="footer-4">
            <h4>Get In Touch</h4>

            <div>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/contact">Support</a>
              </li>
            </div>
          </div>


          <div className="footer-4">
            <h4>Get In Touch</h4>

            <div>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/contact">Support</a>
              </li>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright">
        <small>&copy; 2024 SAMVIC BLOG WEBSITE </small>
      </div>
    </>
  );
};

export default Footer;
