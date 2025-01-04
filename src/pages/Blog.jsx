import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

// import featuredImage from "../images/blog1.jpg";
import PostAuthor from "../components/PostAuthor";
import { DummyPosts } from "../Data";
import { IoSearch } from "react-icons/io5";

import PostItem from "./PostItem";
import Category from "./Category";
import { useEffect } from "react";

const Post = () => {
  // useEffect(() => {
  //   window.scroll(0, 0);

  // }, []);

  const [searchPost, setSearchPost] = useState(DummyPosts);

  const filterPost = (e) => {
    const filteredPosts = DummyPosts.filter((post) => {
      return post.title.toLowerCase().includes(e.target.value.toLowerCase());
    });

    console.log(filteredPosts);
    setSearchPost(filteredPosts);
  };

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  };

  return (
    // const {id, Image, category, title, des } = HeadPost

 

    <>
      <section className="Post">
        <div className="blog_form container">
          <form action="">
            <i>
              <IoSearch />
            </i>

            <input type="text" placeholder="Search" onChange={filterPost} />

            <button className="btn">Go</button>
          </form>
        </div>

        <div className="container post_container">
          {!searchPost.length ? (
            <h2 style={divStyle}>Post not found:)</h2>
          ) : (
            searchPost.map((DummyPosts) => {
              const { id, Image, category, title, des1 } = DummyPosts;

              const description =
                des1.length > 155 ? des1.substring(0, 155) + "..." : des1;

              const postTitle =
                title.length > 30 ? title.substring(0, 30) + "..." : title;
              return (
                <PostItem
                  key={id}
                  id={id}
                  Image={Image}
                  category={category}
                  title={postTitle}
                  des1={description}
                />
              );
            })
          )}
        </div>
      </section>
      <Category />
    </>
  );
};

export default Post;
