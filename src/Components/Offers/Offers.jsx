import React from 'react'
import './Offers.css'
import exclusive_image from '../../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offer-left">
         <h1>Elevate Your Style</h1>
         <h1>With Exclusive Offers</h1>
         <p>PREMIUM BEST-SELLING  COLLECTIONS</p>
          <button>Check Now</button>
        </div>
        <div className="offer-right">
          <img src={exclusive_image} alt='exclusive_image' />
        </div>

      
    </div>
  )
}

export default Offers
