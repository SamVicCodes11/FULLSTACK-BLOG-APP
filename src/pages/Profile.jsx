import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import profileImage from "../images/MY PIC.jpg";
import { IoMdCheckmarkCircle } from "react-icons/io";

import { useState } from "react";
// import Dashboard from "./Dashboard";

const Profile = () => {
  const [name, setName] = useState("SamVic Codes");
  const [email, setEmail] = useState("victorakpobasa2020@gmail.com");

  return (
    <section className="profile">
      <div className="container profile_container">
        {/* PROFILE INFO */}

        <div className="profile_dashboard">
          <Link to="/dashboard" className="btn">
            My Dashboard
          </Link>
        </div>

        <div className="profile_img_update">
          <div className="profile_img">
            <img src={profileImage} alt="" />
          </div>

          <i>
          <IoMdCheckmarkCircle />

          </i>
        </div>

        {/* PROFILE NAME */}
        <div className="profile_nmae">
          <h2>SamVic Codes</h2>
        </div>

        {/* FORM TO UPDATE USER PROFILE */}

        <form action="" className="form_control">
          {/* <div className="alert_message success">
            <p className="success">Registration successful. Please log in</p>
          </div> */}

          <input type="text" placeholder="Name" value={name} name="" id="" />
          <input type="email" placeholder="Email" value={email} name="" id="" />
          <input type="password" placeholder="Current password" name="" id="" />
          <input type="password" placeholder="New password" name="" id="" />
          <input
            type="password"
            placeholder="Confirm new password"
            name=""
            id=""
          />

          <button type="submit" className="btn">
            Update my details
          </button>
        </form>
      </div>
    </section>
  );
};

export default Profile;
