import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <>
    <div className="landing-page">
      <div className="hero-section parallax">
        <div className="hero-content">
          <h1>Welcome to Our Gaming Blog</h1>
          <p>Explore the world of gaming with us.</p>
        </div>
      </div>
      <div className="about-us-section">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            dui ac lacus consequat interdum sit amet et velit.
          </p>
        </div>
      </div>
      <div className="our-team-section">
        <div className="container">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img
                src="https://i.pinimg.com/originals/f8/f1/db/f8f1db037de9b665fb966422fc6a446c.jpg"
                alt="Team Member 1"
                className="rounded-image"
              />
              <div className="member-info">
                <p>Khalid Mohamad</p>
                <p>WebDev</p>
              </div>
            </div>
            {/* <div className="team-member">
              <img
                src="https://pbs.twimg.com/media/FT11YUaUAAAj5Yy.jpg"
                alt="Team Member 2"
                className="rounded-image"
              />
              <div className="member-info">
                <p>Son Goku</p>
                <p>WebDev</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default LandingPage;
