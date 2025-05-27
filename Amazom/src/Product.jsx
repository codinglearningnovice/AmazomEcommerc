import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id,title,image,price,ratig}) {
  const [{basket}, dispatch] = useStateValue();
  
  const addToBasket = () => {
    console.log("checkig checkig")
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        ratig: ratig,
      },
    });

  }
  
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(ratig)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img
        src={
          image
        } 
        alt=""
      />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
