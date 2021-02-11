import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, theme } from "@material-ui/core/styles";

const styles = (theme) => ({
  greenText: {
    color: "green",
  },
  redText: {
    color: "red",
  },
  alignCenter: {
    marginLeft: "10%",
  },
});

class OfficeSpace extends Component {
  constructor(props) {
    super(props);
    this.state = { officeSpaceList: props.officeSpaceList };
  }

  // componentDidMount() {
  //     if (this.state.officeSpace.rent > 60000)
  //     { this.setState({ rentColor: "green" }) }
  //     else {
  //         this.setState({ rentColor: "red"})
  //     }
  // }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.alignCenter}>
          <h1>Office Space , at Affordable Range</h1>
          {this.state.officeSpaceList.map((item) => {
            return (
              <React.Fragment>
                <img
                  src="https://source.unsplash.com/random/300x200"
                  alt="not loaded"
                />
                <h3>Name: {item.name}</h3>
                <h3
                  className={
                    item.rent > 60000 ? classes.greenText : classes.redText
                  }
                >
                  Rent: &#8377;
                  <span>{item.rent}</span>
                </h3>
                <h3>
                  Address: <span> {item.address} </span>
                </h3>
              </React.Fragment>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(OfficeSpace);
