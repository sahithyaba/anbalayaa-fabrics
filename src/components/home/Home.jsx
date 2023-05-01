import React from 'react'
import './Home.css';
import { productImages } from '../../Data/Data';
import infra1 from '../../Resources/infra1.png';
import infra from '../../Resources/infra.png'
// import {Swiper,SwiperSlide} from 'swiper/react';
// import 'swiper/swiper.min.css';
// import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
// import 'swiper/components/pagination/pagination.min.css';
// import "swiper/components/navigation/navigation.min.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Product from '../product/Product';


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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

    <div className='home'>
      <div className='heading'>
        <h1>Welcome to<br /> Anbalaya-A-Fabric</h1>
      </div>
      <div className='home-content'>
        <p>We are Manufacturer & Exporters of Home furnishing, Made-ups and garment fabrics</p>
        <p>We deal with 100% cotton,Polyester,Lycra, Linen,Jute and all Man made Fibres.</p>
        <p>We Weave in Handloom, Power loom & Auto loom</p>
      </div>
     
      <div className="book-content">
          <Slider {...settings}>
            {productImages.map((item) => (
              <div className="bookCard">
                <div className="bookCard-top">
                  <img src={item.img} alt="bookCard"/>
                
                </div>
                
              </div>
            ))}

          </Slider>
        </div>
        <img src={infra1}/>
        <img src={infra}/>

    </div>


  );
}

export default Home
