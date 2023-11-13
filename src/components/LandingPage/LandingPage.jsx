import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <section class="intro">
        <div className="big-child">
          <div className="context">
            <h1 className="studio">Inspire Studio</h1>
            <p>we aspire for the best, because we know you want the best.</p>
            <button className="butts" type="button">
              contact us
            </button>
          </div>
        </div>
        <div className="small-child">
          <img src="" alt="" />
        </div>
      </section>
      <section className="top-mid">
        <div className="small-child">
          <img src="" alt="" />
        </div>
        <div className="big-child">
          <div className="context">
            <h1>We design thoughtful, beautiful products.</h1>
            <p className="details-text">
              From new york city, out clients have stretched across Africa and
              we have great feedback and success stories from the products built
              for them.
            </p>
            <button className="butts button-text" type="button">
              explore
            </button>
          </div>
        </div>
      </section>
      <section className="bottom-mid">
        <div className="big-child">
          <div className="context">
            <h1>Elevate your product to the next level.</h1>
            <p className="details-text">
              We combine smart design with rich technology to craft innovative
              brand and business solutions.
            </p>
            <button className="butts button-text" type="button button-text">
              about
            </button>
          </div>
        </div>
        <div className="small-child">
          <img src="" alt="" />
        </div>
      </section>
    </>
  );
}

export default LandingPage;
