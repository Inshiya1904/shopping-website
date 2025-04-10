import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero-section">
    <div className="hero-left">
         <div className="hero-content">
          <p className="line"></p>
          <p> OUR BESTSELLERS</p>
         </div>
     
          <h1>Lastest Arrivals</h1>
          <div className="hero-content">
           
           <p>SHOP NOW</p>
           <p className="line"></p>
          </div>
     </div>
     <div className="hero-right">
         <img src="./hero_img.png" alt="" />
     </div>
 </div>
  )
}

export default Hero