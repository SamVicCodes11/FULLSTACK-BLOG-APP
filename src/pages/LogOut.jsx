import React from "react";
import { Link } from "react-router-dom";

const LogOut = () => {
  return (
    <section className="delete_logout">
      <h2>Log Out Successful</h2>

      <Link className="btn" to="/">Go Back Home</Link>
    </section>
  );
};

export default LogOut;
