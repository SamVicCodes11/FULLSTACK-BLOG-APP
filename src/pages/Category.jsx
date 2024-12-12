import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="category_section">
      <div className="container category_section_container">
        <div className="category_section_btns">
          <Link to="/category" className="category_section_btn">Food</Link>

          <Link to="/category" className="category_section_btn">Science And Technology</Link>
          <Link to="/category" className="category_section_btn">Food</Link>
          <Link to="/category" className="category_section_btn">Food</Link>
          <Link to="/category" className="category_section_btn">Food</Link>
          <Link to="/category" className="category_section_btn">Food</Link>
          <Link to="/category" className="category_section_btn">Food</Link>
          <Link to="/category" className="category_section_btn">Food</Link>
          <Link to="/category" className="category_section_btn">Food</Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
