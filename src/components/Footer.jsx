import React from "react";
import { ReactComponent as CartIcon } from "../assests/cart.svg";
import { ReactComponent as FlashIcon } from "../assests/flash.svg";
import { ReactComponent as MenuIcon } from "../assests/menu.svg";
import { useSelector } from "react-redux";
const Footer = () => {
  const selector = useSelector((state) => state.cartItems);
  console.log(selector);
  return (
    <div className="footer container">
      <div className="pseudoButton">
        <FlashIcon />
      </div>
      <div className="pseudoButton">
        <MenuIcon />
      </div>
      <div className="pseudoButton">
        <CartIcon />
      </div>
    </div>
  );
};

export default Footer;
