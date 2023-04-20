import React, { useState } from "react";
import { ReactComponent as AddIcon } from "../../assests/add.svg";
import { useDispatch } from "react-redux";
import "./button.css";
import { addItemstoCart } from "../../actions/cartAction";
const AddButton = ({ id, item }) => {
  const [text, setText] = useState("add");
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  function handleMinus() {
    if (count == 1) {
      setText((prev) => (prev !== "add" ? "add" : "minus"));
    }
    if (count !== 1) setCount((prevCount) => prevCount - 1);
    dispatch(addItemstoCart({ id, item }));
  }
  function handleOnAdd() {
    setCount((prev) => prev + 1);
  }
  return (
    <>
      <button className={`add-container complete-button text-secondary`}>
        <span
          className={`${text == "add" ? "add" : "minus"}`}
          onClick={handleMinus}
        ></span>
        {text == "add" ? "ADD" : count}
        {!(text == "add") && (
          <span className={`add`} onClick={handleOnAdd}></span>
        )}
      </button>
    </>
  );
};

export default AddButton;
