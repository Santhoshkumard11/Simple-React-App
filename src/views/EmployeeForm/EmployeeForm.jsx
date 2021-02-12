import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, FormControl, Grid, TextField,withStyles } from "@material-ui/core";

const styles = (theme) => ({
  
    

});

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
      this.state = { entities: {}, validation:{}};
  }

    onChange(e) {
      
        let target = e.target;
        let entities = this.state.entities;

        entities[target.name] = target.value;

        this.setState(entities);
  }

    render() {
      const { classes } = this.props;
    return (
      <React.Fragment>
        <h2 className="App-header">Register here!!</h2>
        <Grid item xs={12} spacing={3} direction="row" justify="center">
          <Grid item>
            <FormControl>
              <TextField value={this.state.email} label="Email" />
              <TextField value={this.state.password} label="Password" />
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "7%",marginInline:"auto" }}
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