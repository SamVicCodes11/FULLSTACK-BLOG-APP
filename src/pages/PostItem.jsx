import { Link } from "react-router-dom";
import PostAuthor from "../components/PostAuthor";

const PostItem = ({ id, Image, category, title, des1 }) => {
  return (
    <div className="post_item">
      <Link to={`/postdetail?postId=${id}`} className="post_image">
        <img src={Image} alt="featuredImg" />
      </Link>

      <div className="post_right">
        <Link to="/category" className="category_btn">
          {category}
        </Link>

        <Link to={`/postdetail?postId=${id}`}>
          <h3>{title}</h3>

          <p>{des1}</p>
        </Link>

        <PostAuthor />
      </div>
    </div>
  );
};

export default PostItem;
