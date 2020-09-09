import React from "react";
import "../css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../stateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const getTotal = (basket) => {
    var total = 0;
    basket.forEach(item => {
      total += item.price;
    });
    return total;
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong> {`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
