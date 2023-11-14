import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <section class="wrapper">
        <div className="big-child">
          <div className="context">
            <h1 className="studio">Indie, Retro, tripple A etc.</h1>
            <p>
              We talk about all the games and the newest trends in the gaming
              from the indie to the tripple A games.
            </p>
            <button className="bts button-text" type="button">
              Learn more
            </button>
          </div>
        </div>
        <div className="small-child">
          <img
            src="https://wallpapers.com/images/featured/8-bit-japan-x33n0xe5x0e00t9w.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="top-mid">
        <div className="small-child">
          <img
            src="https://i.ytimg.com/vi/fMJcgiyFOps/maxresdefault.jpg"
            alt=""
          />
        </div>
        <div className="big-child">
          <div className="context">
            <h1>We love games</h1>
            <p className="details-text">
              We are a team of passionate gamers who love to create games and we
              are here to help you create your own gameblog.
            </p>
            <button className="bts button-text" type="button">
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
              Lets talk about the newest trends in the gaming industry and how
              we can help you create your own game community.
            </p>
            <button className="bts button-text" type="button button-text">
              about
            </button>
          </div>
        </div>
        <div className="small-child">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/59d7aa7f-55b5-4600-a6fd-13f16a50da45/dfwdj88-4b096f99-4945-46cf-b1ea-8f73dbabf841.png/v1/fill/w_1095,h_730,q_70,strp/lofi_girl_by_neonoverdrive_dfwdj88-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvNTlkN2FhN2YtNTViNS00NjAwLWE2ZmQtMTNmMTZhNTBkYTQ1XC9kZndkajg4LTRiMDk2Zjk5LTQ5NDUtNDZjZi1iMWVhLThmNzNkYmFiZjg0MS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7MEd3PZMr1EDILtzkbWfU7gLbYR_nT7RAgOmjk5niIs"
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default LandingPage;
