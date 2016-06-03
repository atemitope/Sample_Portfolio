import React from "react";
import Header from "./Header";
import About from "./About";

export default class Main extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <About />
      </div>
    );
  }
}
