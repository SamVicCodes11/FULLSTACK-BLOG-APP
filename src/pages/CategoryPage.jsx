import React from "react";
// import featuredImage from "../images/blog1.jpg";
import { DummyPosts } from "../Data";
import PostItem from "./PostItem";
import Category from "./Category";
import { useEffect } from "react";

const Post = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section className="Post category_page">
        {/*  */}


        <h2>Category Posts</h2>

        
        <div className="container post_container category_page">
        {DummyPosts.map((DummyPosts) => {
            const { id, Image,authorImage,postTime,authorName, category, title, des1 } = DummyPosts;

            const description =
              des1.length > 155 ? des1.substring(0, 155) + "..." : des;

            const postTitle =
              title.length > 28 ? title.substring(0, 28) + "..." : title;

            return (
              <PostItem
                key={id}
                id={id}
                Image={Image}
                category={category}
                title={postTitle}
                des1={description}
                authorImage={authorImage}
                authorName={authorName}
                postTime={postTime}
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
