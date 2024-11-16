import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-12 lg:px-14 my-20 md:mx-10'>
        {/* {-------LEFT SIDE------- } */}
        <div>

            <div>
                <p>Book Appointment</p>
                <p>With 100+ Trusted Doctors</p>
            </div>
            <button>Create Account</button>
        </div>

        {/* {-------Right SIDE------- } */}
        <div>
            <img src={assets.appointment_img} alt="" />
        </div>
    </div>
  )
}

export default Banner