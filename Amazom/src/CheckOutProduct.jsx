import React from 'react'
import "./CheckOutProduct.css"
import { useStateValue } from './StateProvider';

function CheckOutProduct({id,image,title,price,ratig,hideButton}) {

  const[{basket}, dispatch] = useStateValue();


  const removedFromBasket = () => {
    console.log("removiggggg")

    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: id,
        
      },
    });

  }

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutproduct_img" />
      <div className="checkoutProduct_ifo">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_ratig">
          {Array(ratig)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && ( 
          <button onClick={removedFromBasket}>delete from basket</button>
        )}
        
      </div>
    </div>
  );
}

export default CheckOutProduct