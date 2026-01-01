import React from 'react'
import './Footer.css'
import fotter_logo from '../../Assets/logo.png'
import instagaram_icon from '../../Assets/instagram_icon.png'
import whatsapp_icon from '../../Assets/whatsapp_icon.png'
import pintester_icon from '../../Assets/pintester_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={fotter_logo} alt='fotter-logo'/>
            <p></p>
        </div>

        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Pffices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
         
        <div className="footer-social-icon">
            <div className="footer-icons-Container">
                <img src={instagaram_icon} alt="" />
            </div>

            <div className="footer-icons-Container">
                <img src={pintester_icon} alt="" />
            </div>   

            <div className="footer-icons-Container">
                <img src={whatsapp_icon} alt="" />
            </div>
         </div>

         <div className=" footer-copyright">
            <hr/>
            <p>© 2025 <strong>E-Zenvy</strong>. Crafted with ❤️ by <strong>vinni.ai</strong>. All rights reserved.</p>
         </div>
      
    </div>
  )
}

export default Footer
