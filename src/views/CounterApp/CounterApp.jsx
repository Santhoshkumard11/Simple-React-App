import React, { Component } from "react";

//ui components
import Button from "@material-ui/core/Button";
import { Grid, GridListTileBar } from "@material-ui/core";


export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { entryCount: 0, exitCount: 0, total: 0 };
  }

  updateEntry = () => {
    this.setState({ entryCount: this.state.entryCount + 1 });
  };

  updateExit = () => {
      this.setState((previousState, props) => {
        return{exitCount: previousState.exitCount +1}
    });
  };

    
  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <GridListTileBar> Counter App - Mall</GridListTileBar>
        <Grid item xs={6} sm={3}>
          <Button variant="outlined" color="primary" onClick={this.updateEntry}>
            Login
          </Button>
          <h3>{this.state.entryCount} People entered!! </h3>
        </Grid>
        <Grid item xs={6} sm={3}>
                <Button variant="outlined" color="secondary" onClick={this.updateExit}>
            Exit
          </Button>
          <h3>{this.state.exitCount} People Left!! </h3>
        </Grid>
      </Grid>
    );
  }
}

function gitShorthand($m = "initial commit") {
    git add .
    git commit -m $m
    git push -u origin master
 }