import React, { Component } from "react";

//ui component
import { makeStyles } from "@material-ui/core/styles";

import "StyleSheets/myStyle.css";

const percentToDecimal = (decimal) => {
  return decimal.toFixed(2) + "%";
};

const calcScore = (total, goal) => {
  return percentToDecimal(total / goal);
};

const styles = {
  score: {
    color: "forestgreen",
  },
};


export default function CalculateScore ({ Name, School, total, goal })  {
    const useStyles = makeStyles(styles);
    const classes = useStyles(styles);
    return (

        <div className="formatstyle">
            <h1>
                <font color="Brown"> Student Details </font>
            </h1>
            <div className="Name">
                <b>
                    <span>Name:</span>
                </b>
                <span>{Name}</span>
            </div>

            <div className="School">
                <b>
                    <span>School:</span>
                </b>
                <span>{School}</span>
            </div>

            <div className="Total">
                <b>
                    <span>Total: </span>
                </b>
                <span>{total} marks</span>
            </div>

            <div className={classes.score}>
                <b>
                    <span>Score: </span>
                </b>
                <span>{calcScore(total, goal)}</span>
            </div>
      

        </div>
    );
}
