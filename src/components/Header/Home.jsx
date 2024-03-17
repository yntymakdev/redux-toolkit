import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <div id="header">
          <div className="container">
            <div className="header">
              <div className="header-t">
                <h2>Todo</h2>
              </div>
              <div className="header-text">
                <Link to="/menu">
                  <h3>Home</h3>
                </Link>
                <h3>favorite</h3>
                <Link to="/admin">

                <h3>Admin</h3>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
