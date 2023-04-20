import React from "react";
import FoodImg from "../../assests/FoodImg1.png";
import AddButton from "../Button/AddButton";
import "./card.css";
import { ReactComponent as VegIcon } from "../../assests/veg.svg";
const Card = ({ id, item }) => {
  return (
    <>
      <div className="card-tile">
        <div>
          <img src={FoodImg} alt="" />
        </div>
        <div className="food-card-details row">
          <VegIcon />
          <p className="text-secondary">{item.menuName}</p>
        </div>
        <div className="price-tile row">
          <p className="price-font text-secondary"> ₹{item.price}</p>
          <AddButton id={id} item={item} />
        </div>
      </div>
    </>
  );
};

export default Card;
