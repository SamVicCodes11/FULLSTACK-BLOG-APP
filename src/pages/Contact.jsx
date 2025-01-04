import React from 'react'
import contactImage from "../images/contact.svg";
import { useEffect } from "react";


const Contact = () => {

    useEffect(() => {
      window.scroll(0, 0);
  
     
    }, []);


  return (
    <section class="contact">
    <div class="container contact-container">
      {/* <!-- ========= CONTACT LEFT ======= --> */}
  
      <div class="contact-left">
        <div class="avatar">
          <img src={contactImage} alt="Contact Us Illustration" />
        </div>
  
        <div class="contact-us">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you! Reach out with any questions and follow for more!</p>
        </div>
  
        <div class="contact-info">
          <div class="contact-credentials">
            <span><i class="fa-solid fa-phone"></i></span>
            <small>+2348146557494</small>
          </div>
  
          <div class="contact-credentials">
            <span><i class="fa-solid fa-envelope"></i></span>
            <small>victorakpobasa2020@gmail.com</small>
          </div>
  
          <div class="contact-credentials">
            <span><i class="fa-solid fa-location-dot"></i></span>
            <small>Lagos, Nigeria</small>
          </div>
        </div>
  
        <div class="contact-socials">
          <a
            href="https://www.facebook.com/akpobasa.victor?mibextid=rS40aB7S9Ucbxw6v"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/samviccodes"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://wa.me/2348146557494"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a
            href="https://x.com/SamVicCodes"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fa-brands fa-x-twitter footer-icon"></i>
          </a>
        </div>
      </div>
  
      {/* <!-- ============== CONTACT RIGHT ========= --> */}
  
      <div class="contact-right">
        <form
          target="_blank"
          action="https://formspree.io/f/meoqjjgr"
          method="POST"
        >
          <div class="input-info">
            <input
              type="text"
              name="First Name"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="Last Name"
              placeholder="Last Name"
              required
            />
          </div>
  
          <input
            type="email"
            name="Email Address"
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="Message"
            rows="7"
            placeholder="Please tell us what you feel about this website and send, Thanks"
            required
          ></textarea>
  
          <button type="submit" class="btn btn-primary contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Contact