import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* left */}
        <div>
            <img className="mb-5 w-40" src={assets.logo} alt="" />
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
    </div>
  )
}

export default Footer