import React, { useState } from "react";
import CartItem from "../../components/CartItem/CartItem";
//import classes from "./Cart.module.scss";

function Cart(props) {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109,
      quantity: 1,
      stockQuantity: 10,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      disabled: false,
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22,
      quantity: 1,
      stockQuantity: 6,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      disabled: false,
    },
  ]);
  let tempCart = [...cartItems];

  const [subTotalPrice, setSubTotalPrice] = useState(131);

  const increment = (productId) => {
    const product = findProduct(productId);
    product.quantity++;
    product.stockQuantity--;
    if (product.stockQuantity <= 1) {
      product.disabled = true;
    }
    setCartItems(tempCart);
    subTotalPriceHandler("+");
  };
  const decrement = (productId) => {
    const product = findProduct(productId);
    product.disabled = false;
    product.quantity--;
    product.stockQuantity++;
    setCartItems(tempCart);
    subTotalPriceHandler("-");
    if (product.quantity === 0) {
      removeItem(productId);
    }
  };

  const removeItem = (productId) => {
    tempCart = tempCart.filter((item) => item.id !== productId);
    setCartItems(tempCart);
  };

  const findProduct = (productId) => {
    const selectedProduct = tempCart.find(
      (product) => product.id === productId
    );
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    return product;
  };

  const subTotalPriceHandler = (type) => {
    let subPrice = 0;
    switch (type) {
      case "+":
        tempCart.map((item) => (subPrice += item.price * item.quantity));
        break;
      case "-":
        tempCart.map((item) => (subPrice -= item.price * item.quantity));
        subPrice *= -1;
        break;

      default:
        break;
    }

    setSubTotalPrice(subPrice);
  };

  return (
    <div>
      <h1>Alisveris Sepeti</h1>
      <CartItem
        cartItems={cartItems}
        increment={increment}
        decrement={decrement}
      ></CartItem>
      <div>Sub Total: {subTotalPrice}</div>
    </div>
  );
}

export default Cart;
