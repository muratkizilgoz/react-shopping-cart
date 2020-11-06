import React from "react";
import classes from "./CartItem.module.scss";

function CartItem(props) {
  return (
    <div>
      {props.cartItems.map((item) => (
        <div key={item.id} className={classes.items}>
          <a href="/s">
            <img src={item.image} alt={item.title}></img>
          </a>
          <div className={classes.info}>
            <div>{item.title}</div>
            <div>{item.price} TL</div>
            <div className={classes.addRemove}>
              <button onClick={() => props.decrement(item.id)}>-</button>
              <input
                type="number"
                value={item.quantity}
                max={item.stockQuantity}
                readOnly
              />
              <button
                onClick={() => props.increment(item.id)}
                disabled={item.disabled}
              >
                +
              </button>
            </div>
            <div>
              <strong>{item.price * item.quantity} TL</strong>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItem;
