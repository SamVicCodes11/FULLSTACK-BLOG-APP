import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="container dashboard_container">
        <aside>
          <ul>
            <li>
              <Link to="/addpost">
                <i>
                  <FaXTwitter />
                </i>
                <h4>Add Post</h4>
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <i>
                  <FaXTwitter />
                </i>
                <h4>Manage Posts</h4>
              </Link>
            </li>
            <li>
              <Link to="/adduser">
                <i>
                  <FaXTwitter />
                </i>
                <h4>Add User</h4>
              </Link>
            </li>
            <li>
              <Link to="/manageuser">
                <i>
                  <FaXTwitter />
                </i>
                <h4>Manage Users</h4>
              </Link>
            </li>
            <li>
              <Link to="/addcategory">
                <i>
                  <FaXTwitter />
                </i>
                <h4>Add Category</h4>
              </Link>
            </li>
            <li>
              <Link to="/managecategory" className="active">
                <i>
                  <FaXTwitter />
                </i>
                <h4>Manage Categories</h4>
              </Link>
            </li>
          </ul>
        </aside>

        <main>
          <h2>Manage Categories</h2>

          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Music</td>
                <td>
                  <Link to="/editcategory" className="btn sm">
                    Edit
                  </Link>
                </td>
                <td>
                  <Link to="/delete" className="btn sm danger">
                    Delete
                  </Link>
                </td>
              </tr>

              <tr>
                <td>Sport</td>
                <td>
                  <Link to="/editcategory" className="btn sm">
                    Edit
                  </Link>
                </td>
                <td>
                  <Link to="/delete" className="btn sm danger">
                    Delete
                  </Link>
                </td>
              </tr>

              <tr>
                <td>Science And Technology</td>
                <td>
                  <Link to="/editcategory" className="btn sm">
                    Edit
                  </Link>
                </td>
                <td>
                  <Link to="/delete" className="btn sm danger">
                    Delete
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </section>
  );
};

export default Dashboard;
