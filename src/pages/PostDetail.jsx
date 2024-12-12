import { Link } from "react-router-dom";
import PostAuthor from "../components/PostAuthor";
import Image from "../images/blog1.jpg";

const PostDetail = () => {
  return (
    <div className="post_detail">
      <div className="post_detail_container">
        {/*  */}

        <div className="post_detail_head">
          <PostAuthor />

          <div className="post_detail_btns">
            <Link to="editpost" className="btn">
              Edit
            </Link>
            <Link to="delete" className="btn danger">Delete</Link>
          </div>
        </div>

        <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>

        <div className="post_detail_image">
          <img src={Image} alt="featuredImg" />
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          nam ducimus error adipisci repellat, vel esse cum omnis expedita
          asperiores? Ex, debitis! Velit repellat eaque itaque laborum veniam
          autem harum tenetur reprehenderit dicta ratione, soluta voluptas, ad
          delectus, nostrum rem.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          laboriosam soluta iste, tenetur laborum asperiores quis facilis rerum
          dolore provident!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          nam ducimus error adipisci repellat, vel esse cum omnis expedita
          asperiores? Ex, debitis! Velit repellat eaque itaque laborum veniam
          autem harum tenetur reprehenderit dicta ratione, soluta voluptas, ad
          delectus, nostrum rem.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          nam ducimus error adipisci repellat, vel esse cum omnis expedita
          asperiores? Ex, debitis! Velit repellat eaque itaque laborum veniam
          autem harum tenetur reprehenderit dicta ratione, soluta voluptas, ad
          delectus, nostrum rem.
        </p>
      </div>
    </div>
  );
};

export default PostDetail;
