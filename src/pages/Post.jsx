import React from "react";
// import featuredImage from "../images/blog1.jpg";
import { DummyPosts } from "../Data";
import PostItem from "./PostItem";

const Post = () => {
  return (
    <>
      <section className="Post">
        <div className="container post_container">
          {DummyPosts.map((DummyPosts) => {
            const { id, Image, category, title, des } = DummyPosts;

            const description =
              des.length > 155 ? des.substring(0, 155) + "..." : des;

            const postTitle =
              title.length > 30 ? title.substring(0, 30) + "..." : title;


              
            return (
              <PostItem
                key={id}
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
    </>
  );
};

export default Post;
