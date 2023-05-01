import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='about'>
        <center>
      <h1>About</h1>
        </center>
        <h4 className='head'>OUR TEAM</h4>
        <h6 className='para'>We are assisted by highly trained workforce who work sincerely and devotely work in order to attain client's faith. Our team comprises of</h6>
        <div>
            <center>
            <ul className='head' type='circle'>
          <div className='li'><li>Sourcing agent</li></div>  
           <div className='li'><li>Designers</li>
            </div> 
            <div className='li'>
            <li>Weavers</li>
            </div>
            <div className='li'>
            <li>Craftsmen</li>
            </div>
            <div className='li'>
            <li>Quality inspector</li>
            </div>
            
        </ul>  
            </center>
        
        </div>
    </div>

  )
}

export default About
