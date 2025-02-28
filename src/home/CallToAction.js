import img_hero from '../assets/restauranfood.jpg';
import { useNavigate } from 'react-router-dom';
import React from 'react';
const CallToAction = () => {
  const navigate=useNavigate();
  return (
    <div className='container1'>
    <div className='hero-section'>
                <div className='hero-i1'>
                          <h1>Little Lemon</h1>
                          <h2>Chicago</h2>
                          <p>We are a family owned<br/>
                             Mediterranean restaurant,<br/>
                             focused on traditional<br/>
                             recipes served with a mordern<br/>
                             twist.
                          </p>
                          <button
                          onClick={()=>{navigate('/reservation')}}
                          aria-label="Reserve a table button">
                          Reserve a table
                          </button>
                </div>
                <div className='hero-i2'>
                          <img src={img_hero}
                          alt="hero section for Little Lemon restaurant"
                           />
                </div>
    </div>
    </div>
    )
}
export default CallToAction;