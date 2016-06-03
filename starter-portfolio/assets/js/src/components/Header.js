import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-wrapper">
        <header>
          <div className="logo">
            <span className="fa fa-diamond"></span>
          </div>

          <div className="welcome-msg">
            <h1>
              Hi, I'm Chinedu Daniel
            </h1>

            <p>
              # UI Designer # Front End Developer # Music Lover
            </p>
          </div>

          <div className="virtual-mouse-wrapper">
            <div className="virtual-mouse"></div>
          </div>
        </header>
      </div>
    );
  }
}
