import React from 'react'
import './Home.css';
import { productImages } from "../../Data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home ">
      <div className="heading row py-3">
        <h1 className="col-md-12">
          Welcome to
          <br /> Anbalaya-A-Fabric
        </h1>
      </div>
      <div className="home-content">
        <p>
          We are Manufacturer & Exporters of Home furnishing, Made-ups and
          garment fabrics
        </p>
        <p>
          We deal with 100% cotton,Polyester,Lycra, Linen,Jute and all Man made
          Fibres.
        </p>
        <p>We Weave in Handloom, Power loom & Auto loom</p>
      </div>

      <div className="book-content">
        <Slider {...settings}>
          {productImages.map((item) => (
            <div className="bookCard">
              <div className="bookCard-top">
                <img src={item.img} alt="bookCard" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Home
