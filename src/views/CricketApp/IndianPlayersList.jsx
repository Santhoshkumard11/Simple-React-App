import React from "react";
import PropTypes from "prop-types";

export default function IndianPlayersList({ indianPlayersList }) {
  return indianPlayersList.map((player) => {
    return (
      <li>
        Mr. {player}
      </li>
    );
  });
}
