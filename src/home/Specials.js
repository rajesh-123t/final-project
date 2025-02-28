import React from "react";
import img1 from '../assets/greek salad.jpg';
import img2 from '../assets/bruchetta.svg';
import img3 from '../assets/lemon dessert.jpg';
const Specials = () => {
      const data = [
          {
            id: 1,
            image: img1,
            name: "Greek Salad",
            price: "$12.99",
            description:
              "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, topped with crunchy garlic and rosemary croutons.",
          },
          {
            id: 2,
            image: img2,
            name: "Bruschetta",
            price: "$8.99",
            description:
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."

          },
          {
            id: 3,
            image: img3,
            name: "Lemon Dessert",
            price: "$5.99",
            description:
            "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          },
        ];
  return (
    <div className='highlights-section'>
              <h1 className='a'>This Week's Specials!</h1>
              <div className='highlights'>
                  {
                  data.map((item)=>(
                  <div key={item.id} className={'cards rel'}>
                            <img
                            src={item.image}
                            alt={item.name}
                            />
                            <div className="price-descript">
                                <span className="item">{item.name}</span>
                                <span className="price">
                                  {item.price}
                                </span>
                            </div>
                            <p>{item.description}</p>
                            <button>Order a Delivery</button>
                  </div>
                  ))
                }
              </div>
    </div>
  );
};

export default Specials;
