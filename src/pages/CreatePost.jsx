import { Link } from "react-router-dom";
import { useEffect } from "react";


const CreatePost = () => {

    useEffect(() => {
      window.scroll(0, 0);
  
   
    }, []);

  return (
    <section className="form_section create_post">
      <div className="container form_section_container">
        <h2>Create Post</h2>

        <form action="" className="form_control">
        <div className="alert_message error">
            <p className="success">This is an error message</p>
          </div>
          <input type="text" name="" id="" placeholder="Title" />


          <p>Category</p>
          <select name="" id="">
            <option value="">food</option>
            <option value="">wildlife</option>
          </select>

          <textarea name="" rows="5" id="" placeholder="Body"></textarea>

          <div className="addpost_checkbox">
            <input type="checkbox" name="" id="featured_check" />
            <label htmlFor="featured_check">Featured</label>
          </div>

          <div className="cho_pic">
            <label htmlFor="cho_pic">Upload a picture</label>
            <input type="file" name="" id="cho_pic" />
          </div>

          <Link to="/" className="btn">
            Create
          </Link>
        </form>

        <small>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </small>
      </div>
    </section>
  );
};

export default CreatePost;
