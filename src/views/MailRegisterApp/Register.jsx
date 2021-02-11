import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  TextField,
  TextareaAutosize,
  makeStyles,
  FormHelperText,
  Button,
  InputAdornment,
  InputLabel,
  FilledInput,
  IconButton,
  Icon,
  Input,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  errorText: {
    color: "red",
  },
  formControlHeight: {
    height: "30vh",
    width: "21%",
    marginTop: "4%",
    "& .MuiFormControl-root": {
      margin: theme.spacing(2),
    },
  },
  topMargin: {
    marginTop: "3%",
  },
}));

export default function MailRegister(props) {
  const classes = useStyles();

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
    showPassword: false,
    passwordValid: true,
    emailValid: true,
    nameValid: true,
    submitDialogOpen: false,
  });

  const handleChange = (prop) => (event) => {
    let passwordValid = true;
    let emailValid = true;
    let nameValid = true;
    let submitDialogOpen = false;
    const emailRegx = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$/);

    switch (prop) {
      case "password": {
        passwordValid = form.password.length >= 8 ? true : false;
        break;
      }
      case "email": {
        emailValid = emailRegx.test(form.email);
        break;
      }
      case "name": {
        nameValid = form.name.length >= 5 ? true : false;
        break;
      }
      case "dialog": {
        submitDialogOpen = !form.submitDialogOpen;
        break;
      }
    }

    setForm({
      ...form,
      [prop]: event.target.value,
      passwordValid: passwordValid,
      emailValid: emailValid,
      nameValid: nameValid,
      submitDialogOpen: submitDialogOpen,
    });
  };

  const handleClickShowPassword = () => {
    setForm({ ...form, showPassword: !form.showPassword });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.emailValid == true &&
      form.passwordValid == true &&
      form.nameValid == true
    ) {
      setForm({ ...form, submitDialogOpen: true });
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2 className="App-header">Register here!!</h2>
      <Grid
        container
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <FormControl className={classes.formControlHeight}>
          <TextField
            id="input-name"
            label="Name"
            value={form.name}
            onChange={handleChange("name")}
            error={form.nameValid == false ? true : false}
            helperText={
              form.nameValid == false
                ? "name should be greater then 5 char"
                : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon>account_circle</Icon>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="input-email"
            label="email"
            value={form.email}
            onChange={handleChange("email")}
            error={form.emailValid == false ? true : false}
            helperText={form.emailValid == false ? "invalid email id" : ""}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon>email</Icon>
                </InputAdornment>
              ),
            }}
          />
          <FormControl>
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <Input
              id="filled-adornment-password"
              type={form.showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange("password")}
              error={form.passwordValid === false ? true : false}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {form.showPassword ? (
                      <Icon>visibility</Icon>
                    ) : (
                      <Icon>visibility_off</Icon>
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText error={true}>
              {form.passwordValid == true
                ? " "
                : "password should have min 8 char"}
            </FormHelperText>
          </FormControl>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleSubmit}
            variant="contained"
            style={{ margin: "auto" }}
          >
            Submit
          </Button>
        </FormControl>
      </Grid>
      <Dialog
        open={form.submitDialogOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Alert</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Form Submitted successfully!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleChange("dialog")}
            color="primary"
            autoFocus
            variant="contained"
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
