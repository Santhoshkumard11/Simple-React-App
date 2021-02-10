import React, { Component } from "react";
import PropTypes from "prop-types";
export default class OfficeSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {officeSpace:props.officeSpace, rentColor: "textGreen"};
    }

    componentDidMount() {
        if (this.state.officeSpace.rent > 60000)
        { this.setState({ rentColor: "green" }) }
        else {
            this.setState({ rentColor: "red"})
        } 
    }
    
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Office Space , at Affordable Range</h1>
          <img
            src="https://source.unsplash.com/random/300x200"
            alt="not loaded"
          />
          <h3>Name: {this.state.officeSpace.name}</h3>
          <h3 style={{ color: this.state.rentColor }}>
            Rent: &#8377;
            <span>

              {this.state.officeSpace.rent}
            </span>
          </h3>
          <h3>
            Address: <span> {this.state.officeSpace.address} </span>
          </h3>
        </div>
      </React.Fragment>
    );
  }
}
