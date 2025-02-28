import React from 'react';

const Bookingslot = ({availableTimes=[]}) => {
  return (
    availableTimes.map((time,index) => (
      <option key={index} value={time}>
        {time}
      </option>
    ))
  )
};

export default Bookingslot;
