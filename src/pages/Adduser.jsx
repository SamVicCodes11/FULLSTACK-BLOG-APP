import { Link } from "react-router-dom";

const AddCategory = () => {
  return (
    <section className="form_section">
      <div className="container form_section_container">
        <h2>Add User</h2>

        <form action="" className="form_control">
          <div className="alert_message error">
            <p className="success">This is an error message</p>
          </div>

          <input type="text" name="" id="" placeholder="First Name" />
          <input type="text" name="" id="" placeholder="Last Name" />
          <p>User Role</p>
          <select name="" id="">
            <option value="">Author</option>
            <option value="">Admin</option>
          </select>

          <Link className="btn">Add</Link>
        </form>

        <small>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </small>
      </div>
    </section>
  );
};

export default AddCategory;
