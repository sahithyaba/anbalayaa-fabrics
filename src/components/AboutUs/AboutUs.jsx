import React from 'react'
import FlipCard from '../FlipCard/FlipCard'
// import HoverCard from '../HoverCard/HoverCard'
import "./AboutUs.css"
import BG from "../../Resources/BG.jpeg"

const AboutUs = () => {
  return (
    <div className='aboutus' style={{ backgroundImage: `url(${BG})`, width: "100%" }}>
      <h1 className='h1'>About Us</h1>
      <div className='all_content'>
        <div className='content1'>
          <FlipCard />
        </div>
        <div className='content2'>
          {/* <HoverCard /> */}
        </div>
      </div>


      <div className="ourteam">
        <h1>Our Team</h1>
        <p>
          We are assisted by highly trained workforce who work sincerely and
          devotedly work in order to attain client's faith. Our team comprises
          of:
        </p>
        {/* <img src={B1} alt="" /> */}
        <p>
          <ul>
            <li>Sales and marketing executives</li>
            <li>Our sourcing agents have vast knowledge
              in selecting the quality raw material</li>
            <li>We have highly skilled
              designer, craftsmen and weaver, who try to design the range in
              accordance with the on going market trends</li>
            <li>Our quality inspector
              stringently checks the finished range to ensure flawlessness</li>
          </ul>

        </p>
        <p>
          We have experienced sales and marketing personnel who are instrumental
          in exporting the diverse range to international market.
        </p>
      </div>
      <div className="whyus">
        <h1>Why Us?</h1>
        <p>
          We are the first and foremost choice of our clients that are spread
          across the world because of the following reasons:
        </p>
        {/* <img src={B2} alt="" /> */}
        <p>
          <ul>
            <li>We take pride in having a long list of customers from different parts
              of the world, who look towards us for their all home furnishing
              requirements</li>
            <li>Most of these clients are completely satisfied from our
              products and services and giving us repeated orders</li>
            <li>Major share of
              our revenues come from our overseas exports to US and Europe</li>
          </ul>
        </p>
      </div>

    </div>
  )
}

export default AboutUs