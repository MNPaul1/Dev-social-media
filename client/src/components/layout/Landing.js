import React from "react";
import "./Landing.css";
export const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="title">Developer Connector</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
            <button className="signUn">Sign Up</button>
            <button className="logIn">Login</button>
          </div>
        </div>
      </div>
    </section>
  );
};
