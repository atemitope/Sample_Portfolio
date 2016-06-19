import React from "react";
import ReactScroll from "react-scroll";

const Element = ReactScroll.Element;

export default class Footer extends React.Component {
  render() {
    return (
      <Element name="contact-section" className="footer">
        <h3>
          Okay, {this.props.guestName}, that's all I have to show off for now.
          If you want to hire me or just want to say hi, you can contact me
          using these platforms
        </h3>

        <div className="social-icons">
          <a href="#">
            <span className="fa fa-envelope"></span>
          </a>

          <a href="#">
            <span className="fa fa-dribbble"></span>
          </a>

          <a href="#">
            <span className="fa fa-twitter"></span>
          </a>

          <a href="#">
            <span className="fa fa-facebook"></span>
          </a>
        </div>

        <div className="copyright">
          &copy; 2016. Chinedu Daniel
        </div>
      </Element>
    );
  }
}
