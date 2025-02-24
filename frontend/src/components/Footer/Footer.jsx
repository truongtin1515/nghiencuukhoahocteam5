import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import instagram from '../Assets/instagram_icon.png'
import printester from '../Assets/star_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=""/>
            <p>GYMER FITNESS</p>
        </div>
        <ul className='footer-links'>
            <li>Payment method</li>
            <li>Price policy service</li>
            <li>Privacy policy</li>
            <li>Club</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram} alt=""/>
            </div>
            <div className="footer-icons-container">
                <img src={printester} alt=""/>
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp} alt=""/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright Team nam anh em sieu nhan</p>
        </div>
    </div>
  )
}

export default Footer