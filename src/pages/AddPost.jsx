import { Link } from "react-router-dom";

const AddPost = () => {
  return (
    <section className="form_section">
      <div className="container form_section_container">
        <h2>Add Post</h2>

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
            <label htmlFor="cho_pic">Upload your picture</label>
            <input type="file" name="" id="cho_pic" />
          </div>

          <Link to="/" className="btn">
            Add
          </Link>
        </form>

        <small>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </small>
      </div>
    </section>
  );
};

export default AddPost;
