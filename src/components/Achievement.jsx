import React from "react";
import Image from "../images/about achievements.svg";

const Achievement = () => {
  return (
    <section className="achievements">
      <div className="container achievements-container">
        {/*  */}

        <div className="achievement-left">
          <img src={Image} alt="Achievements Illustration" />
        </div>

        <div className="achievement-right">
          <div>
            <h2>Achievements</h2>

            <small className="achievement-right-small">
              At SamVic Codes, we take pride in our accomplishments. From
              empowering thousands of learners to developing a wide range of
              courses, our dedication to excellence in web development education
              is reflected in our achievements.
            </small>
          </div>

          <div className="achievement-cards">
            <div className="achievement-card">
              <span className="achievement-card-icon">
                <i className="uil uil-book-open"></i>
              </span>

              <h3>450+</h3>

              <small> Courses Offered </small>
            </div>

            <div className="achievement-card">
              <span className="achievement-card-icon">
                <i className="uil uil-users-alt"></i>
              </span>

              <h3>79,000+</h3>

              <small> Students Enrolled </small>
            </div>

            <div className="achievement-card">
              <span className="achievement-card-icon">
                <i className="uil uil-trophy"></i>
              </span>

              <h3>26+</h3>

              <small> Awards Received </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
