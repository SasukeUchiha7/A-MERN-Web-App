import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div class="jumbotron">
        <h1 class="display-4">Hello!!</h1>
        <p class="lead">This is a home page for all users.</p>
        <hr class="my-4" />
        <p>sdsfdsgdfgfdgdfasd.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>
    );
  }
}

export default Home;
