import { Link } from "react-router-dom";
import PostAuthor from "../components/PostAuthor";
import Image from "../images/blog12.jpg";

const PostDetail = () => {
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
        <h2>Welcome to the SamVic Blog Experience</h2>

        {/* Featured Image */}
        <div className="post_detail_image">
          <img src={Image} alt="About SamVic Blog" />
        </div>

        {/* Introduction */}
        <p>
          At SamVic Blog, we’ve created a platform that redefines how you engage with content. Whether you're a tech enthusiast, a programming geek, or someone exploring new ideas, our blog is the ideal destination. Dive into an ecosystem designed to connect, inform, and inspire.
        </p>

        {/* Features Section */}
        
        <h2>Key Features of SamVic Blog</h2>
        <p>
          SamVic Blog offers an array of features tailored for an enhanced blogging experience:
        </p>
        <ul>
          <li>
            <strong>Dynamic Content Management:</strong> Authors can effortlessly create, edit, and manage posts while readers enjoy intuitive navigation.
          </li>
          <li>
            <strong>Featured Posts:</strong> Highlighted posts for trending and impactful content curated by admins.
          </li>
          <li>
            <strong>Author Profiles:</strong> Each author has a dedicated profile showcasing their contributions to the platform.
          </li>
          <li>
            <strong>Interactive Categories:</strong> Posts are organized into categories like Programming, Technology, Web Development, and more for easy exploration.
          </li>
          <li>
            <strong>Secure Authentication:</strong> User roles for authors and admins with a secure signup and login system powered by JWT.
          </li>
        </ul>

        {/* Technology Stack */}
        <h2>Our Technology Stack</h2>
        <p>
          Behind the scenes, SamVic Blog leverages cutting-edge technologies to provide an optimal experience:
        </p>
        <ul>
          <li>
            <strong>Frontend:</strong> Built with React 19, utilizing hooks, context API, and React Router for dynamic and fast-loading interfaces.
          </li>
          <li>
            <strong>Backend:</strong> Powered by Node.js and Express.js, following robust MVC architecture for scalable development.
          </li>
          <li>
            <strong>Database:</strong> MongoDB ensures efficient and reliable data storage.
          </li>
          <li>
            <strong>Additional Tools:</strong> Postman for API testing, Mongoose for database modeling, and responsive design principles for a seamless experience across devices.
          </li>
        </ul>

        {/* About SamVic Codes */}
        <h2>About the Creator: SamVic Codes</h2>
        <p>
          I'm SamVic Codes, a software developer passionate about crafting innovative and user-focused web solutions. This blog platform is a reflection of my dedication to building meaningful tools that empower users and foster growth in the digital space. If you’re here, you’re part of a journey that celebrates creativity, knowledge, and technology.
        </p>

        {/* Call to Action */}
        <p>
          Explore our blog, engage with our posts, and let us know your thoughts. Together, we can create a community that thrives on shared insights and transformative ideas.
        </p>
      </div>
    </div>
  );
};

export default PostDetail;
