import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
export default class FetchUser extends Component {
  constructor(props) {
    super(props);
    this.state = { person: {}, loading: true };
  }

  getUsers() {
    fetch("https://api.randomuser.me")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results[0]);
        this.setState({ person: data.results[0], loading: false });
      });
  }

  async componentDidMount() {
    this.getUsers();
  }
  handleFindAnother = () => {
    this.getUsers();
  };
  render() {
    return (
      <div>
        {this.state.loading == true ? (
          "Loading"
        ) : (
          <div>
            <h2 className="App-header">Find Users :)!!</h2>
            <h1>
              {this.state.person.name.first} {this.state.person.name.last}
            </h1>
            <img src={this.state.person.picture.large} alt="profile image" />
            <div>
              <h5>username - {this.state.person.login.username}</h5>
              <h5>email - {this.state.person.email}</h5>
              <h5>city - {this.state.person.location.city}</h5>
              <h5>Age - {this.state.person.dob.age}</h5>
            </div>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleFindAnother}
            >
              Find another one
            </Button>
          </div>
        )}
      </div>
    );
  }
}
