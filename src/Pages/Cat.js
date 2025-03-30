import React from 'react'
import {Link} from 'react-router-dom'
import catdry1 from "../Assets/drycatfood1.png"
import caytdry2 from "../Assets/drycatfood2.png"
import "./Page.css"
import { IoIosAddCircleOutline , IoIosAddCircle} from "react-icons/io";
import { FaRegHeart ,FaHeart} from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import {useState } from "react";


function Cat() {
  const products = [
    { id: 1, name: "Whiskas Mackerel Flavour", price: "$853.93", img: catdry1 },
    { id: 2, name: "Whiskas Chicken Flavour", price: "$750.99", img: catdry1 },
    { id: 3, name: "Royal Canin Kitten", price: "$920.50", img: catdry1 },
    { id: 4, name: "Royal Canin Kitten", price: "$920.50", img: catdry1 },
    { id: 5, name: "Royal Canin Kitten", price: "$920.50", img: catdry1 },
    { id: 6, name: "Royal Canin Kitten", price: "$920.50", img: catdry1 },
    { id: 7, name: "Royal Canin Kitten", price: "$920.50", img: catdry1 },
    { id: 8, name: "Royal Canin Kitten", price: "$920.50", img: catdry1 },
    { id: 9, name: "Royal Canin Kitten", price: "$920.50", img: catdry1 },
    { id: 10, name: "Royal Canin Kitten", price: "$920.50", img: catdry1 },
    { id: 11, name: "Royal Canin Kitten", price: "$920.50", img: catdry1 },
    { id: 12, name: "Royal Canin Kitten", price: "$920.50", img: catdry1 },

  ];
const [Like,setLike]=useState({ });

const [quantity,setQuantity]=useState({ });


const toggleLike=(id)=>{
 setLike((prev)=>({...prev,[id]:!prev[id]}))
}
const increaseQuantity = (id) => {
  setQuantity((prev) => ({
    ...prev,
    [id]: (prev[id] || 0) + 1,
  }));
  
};
const decreaseQuantity = (id) => {
  setQuantity((prev) => {
    const newQuantity = (prev[id] || 0) - 1;
    if (newQuantity < 1) {

      const updatedQuantity = { ...prev };
      delete updatedQuantity[id];
      return updatedQuantity;
    }
    return { ...prev, [id]: newQuantity };
  });
};


return (
  <div className="cat">
    <div className="cat-page-container">
      {products.map((product) => (
        <div className="cat-card" key={product.id}>
          <div className="cat-page-foods">
            <img src={product.img} alt={product.name} />
            
            
            {Like[product.id] ? (
              <FaHeart
                size="2rem"
                className="heart-icon"
                color="red"
                onClick={() => toggleLike(product.id)}
              />
            ) : (
              <FaRegHeart
                size="2rem"
                className="heart-icon"
                onClick={() => toggleLike(product.id)}
              />
            )}

            <p>{product.price}</p>
            <p>{product.name}</p>
            <div className="add-to-cart">
            {quantity[product.id] && (
                  <FaCircleMinus
                    size="1.5rem"
                    className="add-icon"
                    onClick={() => decreaseQuantity(product.id)}
                  />
                )}

                
                {quantity[product.id] && (
                  <span className="quantity-count">{quantity[product.id]}</span>
                )}

              
                <IoIosAddCircle
                  size="1.8rem"
                  className="add-icon"
                  onClick={() => increaseQuantity(product.id)}
                />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default Cat;