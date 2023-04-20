import React from "react";
import specialImg from "../../assests/specialImg.png";
import { ReactComponent as ArrowUp } from "../../assests/upArrow.svg";
import Card from "../../components/card/Card";
import "./special.css";
export const Special = () => {
  let foodDetails = [
    {
      menuName: "Chocolate Bowl",
      price: 299,
    },
    {
      menuName: "Stick to the Beet (VEGAN)",
      price: 299,
    },
    {
      menuName: "Peanut butter Iced Mocha",
      price: 299,
    },
    {
      menuName: "Kombucha",
      price: 299,
    },
  ];
  return (
    <>
      <div>
        <div className="special-banner">
          <img src={specialImg} alt="" />
        </div>
        <div className="today-special row text-secondary">
          <p>Today’s Special</p>
          <div className="line"></div>
          <ArrowUp />
        </div>
        <div className="card">
          {foodDetails.map((item, i) => (
            <div className="card-container" key={i}>
              <Card id={i + 1} item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
