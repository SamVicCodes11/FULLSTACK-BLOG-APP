import React from "react";
import { DummyAuthor } from "../Data";
import Category from "./Category";
import { Link } from "react-router-dom";


const Authors = () => {
  // const [authors, setAuthors] = useState(DummyAuthor);

  return (
    <section className="author">
      <div className="container authors_container">
        {DummyAuthor.map((author) => {
          const { id, name, Image, posts } = author;

          return (

            <Link to={`/authorspost`} className="authors_wrapper" key={id}>
              <div className="authors_img">
                <img src={Image} alt="" />
              </div>

              <div className="authors_info">
                <h4>{name}</h4>

                <small>{posts}</small>
              </div>
            </Link>
          );
        })}
      </div>
      <Category />
    </section>
  );
};

export default Authors;
