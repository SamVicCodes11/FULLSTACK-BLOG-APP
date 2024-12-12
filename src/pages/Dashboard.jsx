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
              <Link to="/dashboard" className="active">
                <i>
                  <FaXTwitter />
                </i>
                <h4>Manage Post</h4>
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
                <h4>Manage User</h4>
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
              <Link to="/managecategory">
                <i>
                  <FaXTwitter />
                </i>
                <h4>Manage Category</h4>
              </Link>
            </li>
          </ul>
        </aside>

        <main>
          <h2>Manage Posts</h2>

          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipis. Perferendis,
                  voluptatum.
                </td>
                <td>Music</td>
                <td>
                  <Link to="/editpost" className="btn sm">
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
                <td>
                  Lorem ipsum dolor sit amet consectetur adipis. Perferendis,
                  voluptatum.
                </td>
                <td>Food</td>
                <td>
                  <Link to="/editpost" className="btn sm">
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
                <td>
                  Lorem ipsum dolor sit amet consectetur adipis. Perferendis,
                  voluptatum.
                </td>
                <td>Sport</td>
                <td>
                  <Link to="/editpost" className="btn sm">
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
