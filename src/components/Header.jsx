import React from "react";
import { ReactComponent as ProfileIcon } from "../assests/profilePic.svg";
import { ReactComponent as PersonIcon } from "../assests/headerPerson.svg";
import { ReactComponent as HashIcon } from "../assests/headerhash.svg";
import { NavLink } from "react-router-dom";
const Header = () => {
  const activeStyles = {
    position: "relative",
    color: "#3CBCB4",
    textUnderlineOffset: "100%",
    textDecorationThickness: "2px",
  };
  return (
    <>
      <div className="header container">
        <div className="header-container row">
          <div className="row">
            <ProfileIcon />
            <h2>Sacred Earth Cafe</h2>
          </div>
          <div className="row">
            <div className="pseudoButton">
              <PersonIcon />
            </div>
            <div className="pseudoButton">
              <HashIcon />
            </div>
          </div>
        </div>
        <div className="link-list row">
          <NavLink
            end
            to="special"
            style={({ isActive }) =>
              isActive ? activeStyles : { textDecoration: "none" }
            }
          >
            Special
          </NavLink>
          <NavLink
            to="main"
            style={({ isActive }) =>
              isActive ? activeStyles : { textDecoration: "none" }
            }
          >
            Main
          </NavLink>
          <NavLink
            to="deserts"
            style={({ isActive }) =>
              isActive ? activeStyles : { textDecoration: "none" }
            }
          >
            Desserts
          </NavLink>
          <NavLink
            to="beverage"
            style={({ isActive }) =>
              isActive ? activeStyles : { textDecoration: "none" }
            }
          >
            Beverages
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
