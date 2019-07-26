import React, { Component } from "react";

class Index extends Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps() {
    console.log("FETCHING");
  }

  render() {
    return (
      <div>
        <h1>NEXT Index Page!</h1>
      </div>
    );
  }
}

export default Index;
