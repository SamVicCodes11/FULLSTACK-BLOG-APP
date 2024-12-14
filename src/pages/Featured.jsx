import React from "react";
import { Link } from "react-router-dom";
// import featuredImage from "../images/blog1.jpg";
import PostAuthor from "../components/PostAuthor";
import { HeadPost } from "../Data";

const Featured = () => {
  return (
    // const {id, Image, category, title, des } = HeadPost

    <>
      <section className="featured">
        {HeadPost.map((HeadPost) => {
          const { id, Image, category, title, des } = HeadPost;
          return (
            <div className="container featured_container" key={id}>
              <Link to="postdetail" className="post_image">
                <img src={Image} alt="featuredImg" />
              </Link>

              <div className="featured_right">
                <Link to="/category" className="category_btn">
                  {category}
                </Link>

                <Link className="featured_info" to="/postdetail">
                  <h2>{title}</h2>

                  <p>{des}</p>
                </Link>

                <PostAuthor />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Featured;
