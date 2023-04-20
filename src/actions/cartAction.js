import { ADD_TO_CART } from "../constants/cartConstants";
export const addItemstoCart = ({ id, item }) => ({
  type: ADD_TO_CART,
  payload: { id, item },
});
