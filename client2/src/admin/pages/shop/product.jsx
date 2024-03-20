import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";
export const Product = (props) => {
  const { pId, pName, pPrice, pImage } = props.data;
  const { addToBid } = useContext(ShopContext);

  

  return (
    <div className="product">

      <img src= {pImage} />

      <div className="description">
        <p>
          <b>{pName}</b>
        </p>
        <p> ${pPrice}</p>
      </div>

     

      <Link to="/bid" > <button className= "addToCartBttn" onClick={() => {addToBid(pId); }}>goToBid</button> </Link>
      
    </div>
  );
};
