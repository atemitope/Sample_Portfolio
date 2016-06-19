import React from "react";
import ReactScroll from "react-scroll";

const Element = ReactScroll.Element;

export default class Testimonials extends React.Component {
  _fetchTestimonies() {
    let testimonies = [
      {
        testimony: "Every developer can learn a thing or two from this guy, every moment of working with him has been an absolute pleasure.",
        userImg: "assets/img/tmensah.png",
        userName: "Tony Mensah"
      },
      {
        testimony: "He's a truly great guy. He communicates clearly, gives appropriate feedback and he delivers.",
        userImg: "assets/img/jukpendu.png",
        userName: "Joy Ukpendu"
      },
      {
        testimony: "Most awesome individual ever!!! He helped design my product from the ground up to the greatness that it is now.",
        userImg: "assets/img/boyabasa.png",
        userName: "Buchi Oyabasa"
      }
    ];

    return testimonies;
  }

  _tweakOpacity(val, ...objects) {
    objects.forEach((item) => { item.style.opacity = val; });
  }

  _testimonialCarousel(obj) {
    let testimonies = this._fetchTestimonies();

    this._tweakOpacity(0, obj.img, obj.name, obj.testimony);

    setTimeout(() => {
      this._tweakOpacity(1, obj.img, obj.name, obj.testimony);

      obj.img.src = testimonies[obj.index].userImg;
      obj.name.textContent = testimonies[obj.index].userName;
      obj.testimony.textContent = testimonies[obj.index].testimony;
    }, 2000);

  }

  componentDidUpdate() {
    let endorserImg = this.refs.profileImg,
        endorserPraise = this.refs.praise,
        endorserName = this.refs.endorserName,
        testimonies = this._fetchTestimonies(),
        count = 1;

    setInterval(() => {
      if (count > (testimonies.length - 1)) count = 0;

      this._testimonialCarousel({img: endorserImg, name: endorserName
      , testimony: endorserPraise, index: count});

      count += 1;
    }, 8000);
  }

  render() {
    return (
      <Element name="testimonials" className="testimonials">
        <h3>I don't like to blow my trumpet but people just have nice things to say about me</h3>

        <div className="testimonial-section">
          <img src="assets/img/tmensah.png" ref="profileImg" />
          <p ref="endorserName">
            Tony Mensah
          </p>

          <div className="testimony">
            <span className="fa fa-quote-left"></span>
            <p ref="praise">
              Every developer can learn a thing or two from this guy, every moment of working with him has been an absolute pleasure.
            </p>
            <span className="fa fa-quote-right"></span>
          </div>
        </div>
      </Element>
    );
  }
}
