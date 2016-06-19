import React from "react";
import Header from "./Header";
import Main from "./Main";

export default class Lib extends React.Component {
  componentDidMount() {
    let sneakyNav = document.querySelector(".sneaky-nav");

    document.addEventListener("scroll", function () {
      window.scrollY <= 337 ? sneakyNav.classList.add("hidden") : sneakyNav.classList.remove("hidden");
    });
  }

  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <Main />
      </div>
    );
  }
}
