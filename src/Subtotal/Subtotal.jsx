import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";

function formatCurrency(amount) {
  // You can customize this currency formatting function as needed
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

function Subtotal() {
  const history = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  const subtotal = getBasketTotal(basket);

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):{" "}
        <strong>{formatCurrency(subtotal)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button onClick={(e) => history("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
