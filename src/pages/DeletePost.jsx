import React from "react";
import { Link } from "react-router-dom";

const DeletePost = () => {
  return (
    <section className="delete_logout">
      <h2>Post Delete Successful</h2>

      <Link to="/" className="btn">
        Go Home
      </Link>
    </section>
  );
};

export default DeletePost;
