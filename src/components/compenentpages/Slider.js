import React from "react";
import Slider from "react-slick";

function Sliderr() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>Why book with Pickyourtrail</h3>
      </div>
      <div>
      <h3>
          Completely satisfied with the trip organised by the PYT team for my
          Srilanka & Maldives vacay
        </h3>
      </div>
      <div>
        <h3>
          They are the CSK of the travel industry. Great work with the Maldives
          trip planning guys!
        </h3>
      </div>
      <div>
        <h3>
          Our stay at Vilu Reef Beach And Spa Resort was amazing. Our trip
          planner did a great job recommending Maldives to us
        </h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}

export default Sliderr;
