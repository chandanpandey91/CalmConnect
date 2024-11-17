import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        {/* left */}
        <div>
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        {/* center */}
        <div>
           <p>COMPANY</p> 
           <ul>
             <li>Home</li>
             <li>About us</li>
             <li>Contact us</li>
             <li>Privacy Policy</li>
           </ul>
        </div>
        {/* right */}
        <div>
          <p>GET IN TOUCH</p>
          <ul>
           <li>+91 123456789</li> 
           <li>Email:  info@example.com</li>
          </ul>  
        </div>
    </div>
  )
}

export default Footer