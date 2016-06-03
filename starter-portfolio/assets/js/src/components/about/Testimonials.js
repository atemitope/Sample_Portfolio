import React from "react";

export default class Testimonials extends React.Component {
  render() {
    return (
      <div className="testimonials">
        <h3>I don't like to blow my trumpet but people just have nice things to say about me</h3>

        <div className="user-image">
          <img src="http://placehold.it/200/200" />

          <div className="testimony">
            <span className="fa fa-quote-left"></span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <span className="fa fa-quote-right"></span>
          </div>
        </div>
      </div>
    );
  }
}
