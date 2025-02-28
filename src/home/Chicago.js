import React from "react";
import img_a from '../assets/restaurant.jpg';
import img_b from '../assets/Mario and Adrian b.jpg';
const Chicago = () => {
  return (
    <div className='about'>
      <div className='item-about'>
                  <h1>Little Lemon</h1>
                  <h2>Chicago</h2>
                  <p>We are a family owned Mediterranean<br/>
                   restaurant,<br/>
                   focused on traditional<br/>
                   recipes served with a modern<br/>
                   twist.
                  </p>
      </div>
      <div className='item-about pos'>
                  <img src={img_a} className="img1" alt="Interior of Little Lemon restaurant"/>
                  <img src={img_b} className="img2" alt="Owners Mario and Adrian"/>
      </div>
    </div>
  );
};

export default Chicago;
