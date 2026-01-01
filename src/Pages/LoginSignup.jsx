import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsigup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Your Email'/>
          <input type='password' placeholder='Your Password'/>
        </div>
        <button>Get Started</button>
        <p className="loginsigup-login">
          Already have an account?
          <span>
            Login here
          </span>
        </p>
        <div className="loginsigup-agree">
          <input type="checkbox" name='' id=''/>
          <p>   By continuing, you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span>.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
