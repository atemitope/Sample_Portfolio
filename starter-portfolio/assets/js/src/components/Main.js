import React from "react";
import ReactScroll from "react-scroll";
import Testimonials from "./main/Testimonials";
import Footer from "./main/Footer";

const Link = ReactScroll.Link,
      Element = ReactScroll.Element,
      ScrollTo = ReactScroll.animateScroll.scrollTo;


export default class Main extends React.Component {

  constructor() {
    super();

    this.state = {
      isShowing: false,
      guestName: ""
    };
  }

  _isShowing() {
    return this.state.isShowing ? "showing" : "not-showing";
  }

  _showPopup(elem) {
    if (elem !== null) {
      setTimeout(() => { elem.classList.remove("hidden");}, 2000);
    }
  }

  _handleSubmit(e) {
    e.preventDefault();
    let guestName = this.refs.guestName.value,
        namePrompt = this.refs.namePrompt,
        formElem = e.currentTarget;

    ScrollTo(507);

    formElem.classList.add("not-showing");
    namePrompt.classList.add("not-showing");

    this.setState({guestName});
    this.setState({isShowing: true});
  }

  _guestName() {
    return this.state.guestName;
  }

  _handleGuestName() {
    return this.state.guestName.length > 12 ? "long-guest-name" : "";
  }

  render() {
    return (
      <section className="main">
        <div className="popup hidden" ref={this._showPopup.bind(this)}>
          <h3 ref="namePrompt">Hey there, could you kindly tell me your name?</h3>
          <form onSubmit={this._handleSubmit.bind(this)}>
            <input type="text" placeholder="Obi" minLength="3" pattern="[a-zA-Z]+" title="Only aplhabets allowed" ref="guestName" required />
            <button type="submit">
              <span className="fa fa-check"></span>
            </button>
          </form>
        </div>

        <div className={this._isShowing()}>
          <div className="sneaky-nav">
            <Link href="#" to="about-me" smooth={true} duration={1500}  className="nav-item">About</Link>

            <Link href="#" to="my-projects" smooth={true} duration={1500}  className="nav-item">Projects</Link>

            <Link href="#" to="index" smooth={true} duration={1500} className="nav-item logo">
              <i className="fa fa-diamond"></i>
            </Link>

            <Link href="#" to="testimonials" smooth={true} duration={1500}  className="nav-item">Testimonials</Link>

            <Link href="#" to="contact-section" smooth={true} duration={1500}  className="nav-item">Contact</Link>
          </div>

          <Element name="about-me" className="about-me">
            <div className="group">
              <p>
                <img src="./assets/img/profile.png" alt="Ade Bamidele Profile Picture" className="rounded-img" />
                Hello <span className={this._handleGuestName()}>{this._guestName()}</span>, it’s a pleasure to meet you. Just in case you didn’t catch it the first time, my name is Temitope Amodu and I design usable interfaces. This might not interest you much but my tools of choice are <strong>sketch</strong> (for building the design comps) and the trio of <strong>html</strong> , <strong>css</strong>  and a bit of <strong>javascript</strong> (for bringing design comps to life). When I am not pushing pixels, I am either listening to good music, taking pictures and travelling to beautiful places around the world or just taking a nap (it helps me relax).
              </p>
            </div>
          </Element>

          <Element name="my-projects" className="my-projects">
            <h3>Hey <span className={this._handleGuestName()}>{this._guestName()}</span>, here are some projects I've worked on</h3>

            <div className="group">
              <div className="column">
                <a href="#">
                  <img src="./assets/img/xtrim.png" alt="project" />
                </a>

                <p>
                  Tushot - A url shortener

                  <a href="#">
                    <span className="fa fa-globe"></span>
                    Visit Project
                  </a>
                </p>
              </div>

              <div className="column">
                <a href="#">
                  <img src="./assets/img/switch.png" alt="project" />
                </a>

                <p>
                  Atm Locator - Open Source Automated Teller Machine Finder

                  <a href="#">
                    <span className="fa fa-globe"></span>
                    Visit Project
                  </a>
                </p>
              </div>
            </div>

            <div className="group">
              <div className="column">
                <a href="#">
                  <img src="./assets/img/teddy-mc-cake.png" alt="project" />
                </a>

                <p>
                  Teddy Mc Cake - e-commerce application for ordering cakes

                  <a href="#">
                    <span className="fa fa-globe"></span>
                    Visit Project
                  </a>
                </p>
              </div>

              <div className="column">
                <a href="#">
                  <img src="./assets/img/beaumessage.png" alt="project" />
                </a>

                <p>
                  Beau - A messaging app for teams

                  <a href="#">
                    <span className="fa fa-globe"></span>
                    Visit Project
                  </a>
                </p>
              </div>
            </div>
          </Element>

          <Testimonials />
          <Footer guestName={this._guestName()} />
        </div>
      </section>
    );
  }
}
