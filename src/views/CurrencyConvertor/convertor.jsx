import React from "react";
import PropTypes from "prop-types";
import { Button, Grid, TextField } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Convertor(props) {
  const euroRate = 88.3;
  const calculateCurrency = () => {
    alert("Converting to Euro Amount is " + props.amount * euroRate);
  };

  const onAmountChange = (e) => {
    props.onAmountChange(e);
  };

  const classes = useStyles();
  return (
    <form className={classes.root}>
      <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>
      <Grid item xs={6} sm={3}>
        <span>
          <TextField
            id="standard-basic"
            label="Amount"
            defaultValue={props.amount}
            onChange={onAmountChange}
          />
        </span>
      </Grid>
      <Grid item xs={6} sm={3}>
        <span>
          <TextField
            id="standard-currency"
            label="Currency"
            value={props.currencyText}
          />
        </span>
      </Grid>
      <Grid item xs={12} sm={3} style={{ marginTop: "2%" }}>
        <Button
          onClick={calculateCurrency}
          color="secondary"
          variant="contained"
        >
          Submit
        </Button>
      </Grid>
    </form>
  );
}
