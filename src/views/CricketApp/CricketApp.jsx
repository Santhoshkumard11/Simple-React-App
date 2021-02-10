import React, { Component } from "react";
import PropTypes from "prop-types";
import ListOfPlayers from "./ListOfPlayers";
import IndianPlayersList from "./IndianPlayersList";
import { listOfIndianPlayers } from "./Utils"
import OddPlayers from "./OddPlayers";
import EvenPlayers from "./EvenPlayers";

const playersList = [
  { name: "Jack", score: 10 },
  { name: "Michael", score: 20 },
  { name: "john", score: 30 },
  { name: "Ann", score: 40 },
  { name: "Elisabeth", score: 50 },
  { name: "Sachin", score: 60 },
  { name: "Dhoni", score: 70 },
  { name: "Virat", score: 80 },
];

export default class CricketApp extends Component {
  constructor(props) {
    super(props);
    this.state = { playersList: playersList };
  }

  render() {
    if (this.props.flag == "true") {
      return (
        <React.Fragment>
          <ListOfPlayers playersList={this.state.playersList} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1>Indian Team</h1>
          <h3>Odd Players</h3>
          {OddPlayers(listOfIndianPlayers)}
          <hr />
          <h3>Even Players</h3>
          {EvenPlayers(listOfIndianPlayers)}
          <hr />
          <div>
            <h1>List of Indian Players Merged</h1>
            <IndianPlayersList indianPlayersList={listOfIndianPlayers} />
          </div>
        </React.Fragment>
      );
    }
  }
}
