import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  TextField,
  TextareaAutosize,
  makeStyles,
  FormHelperText,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "5% 5% 5% 5%",
    },
  },
}));

export default function ComplaintRegister(props) {
  const classes = useStyles();

  const [employeeName, setEmployeeName] = React.useState("");

  const handleEmployeeName = (e) => {
    setEmployeeName(e.target.value);
  };

  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 99 + 1);

    let msg = `Thanks ${employeeName} \nYour complaint was submitted.\nTransation ID is ${id}`;

    alert(msg);
  };

  return (
    <div className={classes.center}>
      <h2>Register your complaints here!!</h2>
      <form>
        <FormControl margin="normal" className={classes.root}>
          <FormHelperText id="my-helper-text">
            <TextField
              id="outlined-basic"
              label="Employee Name"
              variant="outlined"
              onChange={handleEmployeeName}
              value={employeeName}
            />
          </FormHelperText>
          <TextareaAutosize
            rowsMax={8}
            rowsMin={400}
            aria-label="maximum height"
            placeholder="Your complaint"
          />
          <Button
            color="primary"
            variant="contained"
            onClick={handleComplaintSubmit}
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
