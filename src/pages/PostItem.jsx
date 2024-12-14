import { Link } from "react-router-dom";
import PostAuthor from "../components/PostAuthor";

const PostItem = ({ Image, category, title, des }) => {
  return (
    <div className="post_item">
      <Link to="/postdetail" className="post_image">
        <img src={Image} alt="featuredImg" />
      </Link>

      <div className="post_right">
        <Link to="/category" className="category_btn">{category}</Link>

        <Link to="/postdetail">
          <h3>{title}</h3>

          <p>{des}</p>
        </Link>

        <PostAuthor />
      </div>
    </div>
  );
};

export default PostItem;
