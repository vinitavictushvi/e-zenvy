import React from 'react'
import './Hero.css'
import hand_icon from '../../Assets/hand_icon.png'
import arrow_icon from '../../Assets/arrow.png'
import hero_image from '../../Assets/hero_img.png'

const Hero = () => {
  return (
    <div className='hero'>
      
      <div className="hero-left">
       <h2 className="hero-title">Take Flight in Style</h2>
        <>
            <div className="hero-hand-icon">
                <img src={hand_icon} alt='hand-icon'/>
            </div>
            <p className="collections-text">Discover the latest trends in fashion and lifestyle. Upgrade your style with our exclusive new arrivals!</p>
            <p className="collections-text" > Your perfect look starts here. Explore fresh designs and elevate your wardrobe today.</p>
        </>
        <div className="hero-latest-btn">
            <div>Letest Collection</div>
            <img src={arrow_icon} alt='arrow'/>
        </div>
      </div>

      
      <div className="hero-right">
        <img src={hero_image} alt='hero'/>
      </div>
    </div>
  )
}

export default Hero
