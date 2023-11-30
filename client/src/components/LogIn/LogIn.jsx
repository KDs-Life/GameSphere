import React from "react";
import "./LogIn.css";

function LogIn() {
  return (
    <>
      <div className="log-in-side">
        <div className="log-in-wrapper">
          <h2>Log-in</h2>
          <form className="log-in-form">
            <input type="email" placeholder="E-Mail" />
            <input type="password" placeholder="password" />
            <button>Log in</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
