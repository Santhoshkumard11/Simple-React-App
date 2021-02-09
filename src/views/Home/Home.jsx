import React, { Component } from "react";
import PropTypes from "prop-types";

export default function Home(props) {
  return (
    <dic className="container">
          <h1>Welcome to the { props.titleText } Page of Student Management Portal</h1>
    </dic>
  );
}
