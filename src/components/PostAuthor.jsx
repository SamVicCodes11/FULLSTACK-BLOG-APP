import React from "react";
// import { DummyAuthor } from "../Data";
import AuthorImage1 from "../images/MY PIC.jpg";
import { Link } from "react-router-dom";

const PostAuthor = () => {
  const FeaturedAuthor = [
    {
      id: 1,
      Image: AuthorImage1,
      authorName: "SamVic Blog",
      postTime: "December 13 2024",
    },
  ];


  return (
    <div className="post_author">
      {FeaturedAuthor.map((author) => {
        const { id, Image, authorName, postTime } = author;

        return (
          <Link to="/authorspost" className="post_author_wrapper" key={id}>
            <div className="post_author_img">
              <img src={Image} alt="" />
            </div>

            <div className="post_author_info">
              <h4>{authorName}</h4>

              <small>{postTime}</small>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

{
  /* <div>
  <img src={Image} alt="" />
</div>

<div className="post_author_info">
  <h5>{name}</h5>
</div> */
}
export default PostAuthor;
