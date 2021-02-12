import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

import axios from "axios";
import PersonView from "./PersonView";
export default class CaseFetchUser extends Component {
  constructor(props) {
    super(props);
    this.state = { persons: [], loading: true };
  }

  getUsers() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      console.log(persons);
      this.setState({ persons: persons, loading: false });
    });
  }

  componentDidMount() {
    this.getUsers();
  }
  handleFindAnother = () => {
    this.getUsers();
  };
  render() {
    return (
      <div>
        <h2 className="App-header">Find Users :)!!</h2>
        {this.state.loading == true ? (
          "Loading"
        ) : (
          <div>
            {this.state.persons.slice(0,3).map((person, index) => {
              return (
                <React.Fragment>
                  <PersonView person={person} />
                </React.Fragment>
              );
            })}
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleFindAnother}
            >
              Refresh data!!
            </Button>
          </div>
        )}
      </div>
    );
  }
}
