import React from 'react';
import { useNavigate } from 'react-router-dom';
import FooterSection from '../home/FooterSection';
const ConfirmedBooking = () => {
  const navigate=useNavigate()

  return (
<>
<main className='confirm'>
    <div className='confirmed'>
      <h1>confirmation</h1>
      <p>thankyou for booking a table</p>
      <button onClick={()=>navigate('/')}>Back to homepage</button>
    </div>
</main>
<footer>
<FooterSection/>
</footer>
</>
  );
};

export default ConfirmedBooking;
