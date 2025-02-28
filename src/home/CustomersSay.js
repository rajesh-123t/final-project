import React from "react";
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpg';
import profile3 from '../assets/profile3.jpg';
import profile4 from '../assets/profile4.jpg';
import rating from '../assets/rating.jpg';
const CustomersSay = () => {
  const data=[
    {
        id:1,
        rate:"4.1",
        name:"Ryan Holland",
        comment:'"delicious foods"',
    },
    {
        id:2,
        rate:"4.2",
        name:"Ron Smith",
        comment:'"I love food in this restaurant"',
    },
    {
        id:3,
        rate:"4.1",
        name:"Julie Kent",
        comment:'"great hospitality and food is just amazing"',
    },
    {
        id:4,
        rate:"4.0",
        name:"Kareena Patel",
        comment:'"favorite place for dineout"',
    },
];
const profilelist=[profile1,profile2,profile3,profile4]
  return (
<div className='testimonial'>
                <h1 className='heading'>
                Testimonials
                </h1>
                <div className='container-testimonial'>
                {
                data.map((item,index)=>(
                    <div className="rating" key={item.id}>
                        <div className="rate">
                            <p className="rateitem">{item.rate}</p>
                            <img src={rating}
                            alt='rating'/>
                        </div>
                        <div className="profile">
                            <img src={profilelist[index]}
                            alt='peaple'
                            />
                            <p
                            >{item.name}</p>
                        </div>
                        <p className="rate-comment"
                        >{item.comment}</p>
                    </div>))
                }
                </div>
</div>
  );
};

export default CustomersSay;
