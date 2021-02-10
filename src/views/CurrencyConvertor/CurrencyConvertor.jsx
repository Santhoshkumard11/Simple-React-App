import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import CloseIcon from "@material-ui/icons/Close";
import Convertor from "./convertor";

export default function CurrencyConvertor(props) {
  const [amount, setAmount] = React.useState(0);
  const [currencyText, setCurrencyText] = React.useState("Euro");

  const increaseCount = () => {
    setAmount(amount + 1);
  };

  const decreaseCount = () => {
    setAmount(amount - 1);
  };

  const popWelcomeMessage = () => {
    alert("Welcome");
  };

  const popClickMeMessage = () => {
    alert("I was clicked!!");
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        onClick={increaseCount}
        startIcon={<AddCircleIcon />}
      >
        Increment
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={decreaseCount}
        startIcon={<CloseIcon />}
      >
        Decrement
      </Button>
      <Button variant="outlined" color="primary" onClick={popWelcomeMessage}>
        Say Welcome
      </Button>
      <Button variant="outlined" color="primary" onClick={popClickMeMessage}>
        Click on Me
      </Button>
      <Convertor
        currencyText={currencyText}
        amount={amount}
        onAmountChange={handleAmountChange}
      />
    </div>
  );
}
