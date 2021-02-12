import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  FormControl,
  Grid,
  TextField,
  withStyles,
} from "@material-ui/core";
import validator from "validator";
import { TagFacesTwoTone } from "@material-ui/icons";

const styles = (theme) => ({
  root: {
    "& *": {
      margin: theme.spacing(1),
    },
  },
});

const style = {
    bg: {
        backgroundColor: "white"
    }
}

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entities: { email: "", password: "" },
      validation: { emailValid: true },
    };
  }

  handleChange = (e) => {
    let target = e.target;
    let name = target.name;
    let entities = this.state.entities;

    entities[name] = target.value;

    if (name == "email") {
      this.validateEmail();
    }

      this.setState({entities });
  };
  validateEmail = () => {
      let valid = false;
      let validation = this.state.validation;
    if (validator.isEmail(this.state.entities.email)) {
      valid = true;
      }
      validation["emailValid"] = valid; 
      this.setState({ validation: validation});
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <h2 className="App-header">Register here!!</h2>
        <Grid
          container
          spacing={3}
          justify="center"
          className={classes.root}
          style={style.bg}
        >
          <Grid item>
            <FormControl>
              <TextField
                value={this.state.entities.email}
                label="Email"
                name="email"
                onChange={(e) => this.handleChange(e)}
                helperText={
                  this.state.validation.emailValid ? "" : "Invalid email id"
                }
                error={this.state.validation.emailValid == false && true}
              />
              <TextField
                value={this.state.entities.password}
                label="Password"
                name="password"
                onChange={this.handleChange}
              />
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "7%", marginInline: "auto", backgroundColor: "green" }}
              >
                Register
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default withStyles(styles, { withTheme: true })(EmployeeForm);
