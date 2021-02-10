import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";


export default function Greetings(props) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handlePageChange = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  let SignUpPage = (
    <div>
      <h3>Please Sign Up</h3>
      <Button color="primary" variant="outlined" onClick={handlePageChange}>
        Login
      </Button>
    </div>
  );

  let LoginPage = (
    <div>
      <h3>Welcome back!!</h3>
      <Button color="secondary" variant="outlined" onClick={handlePageChange}>
        Logout
      </Button>
    </div>
  );

  let UserPage = !isLoggedIn ? <LoginPage /> : <SignUpPage />;

  return (
    <React.Fragment>
      {!isLoggedIn ? LoginPage : SignUpPage}
    </React.Fragment>
  );
}
