import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
              <a
                className="nav-item nav-link"
                href="http://localhost:3000/jobs"
              >
                Know-Jobs
              </a>
              <a className="nav-item nav-link" href="#">
                About
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
