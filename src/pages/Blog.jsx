import React from "react";
import { Link } from "react-router-dom";
// import featuredImage from "../images/blog1.jpg";
import PostAuthor from "../components/PostAuthor";
import { DummyPosts } from "../Data";
import { FaXTwitter } from "react-icons/fa6";


import PostItem from "./PostItem";
import Category from "./Category";

const Post = () => {
  return (
    // const {id, Image, category, title, des } = HeadPost

    <>
      <section className="Post">
        <div className="blog_form container">
          <form action="">
            <i>
              <FaXTwitter />
            </i>

            <input type="text" placeholder="Search" />

            <button className="btn">Go</button>
          </form>
        </div>

        <div className="container post_container">
          {DummyPosts.map((DummyPosts) => {
            const { id, Image, category, title, des } = DummyPosts;
            return (
              <PostItem
                id={id}
                Image={Image}
                category={category}
                title={title}
                des={des}
              />
            );
          })}
        </div>
      </section>
      <Category />
    </>
  );
};

export default Post;
