import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Hello!!</h1>
        <p className="lead">This is a home page for all users.</p>
        <hr className="my-4" />
        <p>sdsfdsgdfgfdgdfasd.</p>
        <a className="btn btn-primary btn-lg" href="/about" role="button">
          Learn more
        </a>
      </div>
    );
  }
}

export default Home;
