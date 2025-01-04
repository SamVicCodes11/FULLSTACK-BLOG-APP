import { Link, useNavigate, useSearchParams } from "react-router-dom";
import PostAuthor from "../components/PostAuthor";
import Image from "../images/blog12.jpg";
import { DummyPosts } from "../Data";
import { useEffect } from "react";

const PostDetail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const postId = +searchParams.get("postId");

  const post = DummyPosts.find((post) => post.id === postId);

  useEffect(() => {
    window.scroll(0, 0);

    if (!postId) {
      return navigate("/blog");
    }
  }, []);

  if (!postId) {
    return null;
  }

  return (
    <div className="post_detail">
      <div className="post_detail_container">
        {/* Header Section */}
        <div className="post_detail_head">
          <PostAuthor />
          <div className="post_detail_btns">
            <Link to="/editpost" className="btn">
              Edit
            </Link>
            <Link to="/delete" className="btn danger">
              Delete
            </Link>
          </div>
        </div>

        {/* Blog Title */}
        <h2>{post.title}</h2>

        {/* Featured Image */}
        <div className="post_detail_image">
          <img src={post.Image} alt="About SamVic Blog" />
        </div>

        <p>{post.des1}</p>

        <p>{post.des2}</p>

        <p>{post.des3}</p>

        <p>{post.des4}</p>
      </div>
    </div>
  );
};

export default PostDetail;
