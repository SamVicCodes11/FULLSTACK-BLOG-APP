import React from "react";
import { Link } from "react-router-dom";
// import featuredImage from "../images/blog1.jpg";
import PostAuthor from "../components/PostAuthor";
import { DummyPosts } from "../Data";
import { IoSearch } from "react-icons/io5";

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
              <IoSearch />
            </i>

            <input type="text" placeholder="Search" />

            <button className="btn">Go</button>
          </form>
        </div>

        <div className="container post_container">
          {DummyPosts.map((DummyPosts) => {
            const { id, Image, category, title, des } = DummyPosts;

            const description =
              des.length > 155 ? des.substring(0, 155) + "..." : des;

            const postTitle =
              title.length > 30 ? title.substring(0, 30) + "..." : title;
            return (
              <PostItem
                id={id}
                Image={Image}
                category={category}
                title={postTitle}
                des={description}
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
