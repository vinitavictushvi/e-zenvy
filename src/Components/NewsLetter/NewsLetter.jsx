import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newletter'>
      <div className='newletter-inner'>
       <h1>Unlock Exclusive Offers in Your Emailbox</h1>
       <p>Subscribe now for insider-only discounts.</p>
        <div>
      <input type='email' placeholder='Your Email i'/>
      <button>Subscribe</button>
    </div>
  </div>
</div>

  )
}

export default NewsLetter
