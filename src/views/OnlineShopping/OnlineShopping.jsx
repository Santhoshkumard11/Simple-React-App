import React, { Component } from "react";
import PropTypes from "prop-types";

//components
import Cart from "views/OnlineShopping/Cart";

export default class OnlineShopping extends Component {
  render() {
    const itemList = [
      { name: "Laptop", price: 903000 },
      { name: "TV", price: 40000 },
      { name: "Washing Machine", price: 80000 },
      { name: "Mobile", price: 50000 },
      { name: "Fridge", price: 70000 },
    ];

    return (
      <div>
        <h1>Items Ordered:</h1>
        <Cart items={itemList}/>
      </div>
    );
  }
}

Cart.defaultProps = {
  items: [{name: "No items in cart", price:0}]
}