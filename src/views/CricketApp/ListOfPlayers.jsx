import React, { Component } from "react";
import PropTypes from "prop-types";


export default function ListOfPlayers({ playersList}) {

    var playersList70 = [];

    return (
    <div>
      <h2>List Of Players</h2>

      {playersList.map((player) => {
        if (player.score <= 70) {
          playersList70.push(player);
        }
        return (
          <div>
            <li>
              Mr. {player.name} <span>{player.score}</span>
            </li>
          </div>
        );
      })}

      <h2>List of Players having scores less than 70</h2>

      {playersList70.map((player) => {
        return (
          <div>
            <li>
              Mr. {player.name} <span>{player.score}</span>
            </li>
          </div>
        );
      })}
    </div>
  );
}
