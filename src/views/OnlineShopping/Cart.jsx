import React, { Component } from "react";
import PropTypes from "prop-types";

export default function Cart({ items }) {
  return (
    <table>
      {items.map((item) => {
        return (
          <tr>
            <td> {item.name}</td>
            <td> {item.price}</td>
          </tr>
        );
      })}
    </table>
  );
}

Cart.propTypes = {
  items: PropTypes.arrayOf(
    { name: PropTypes.string, price: PropTypes.number },
  )
};