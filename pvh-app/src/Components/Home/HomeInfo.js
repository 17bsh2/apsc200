import "./Home.css";

import { Grid } from "@material-ui/core/";
import { Card } from "@material-ui/core/";
import { CardActions } from "@material-ui/core/";
import { CardContent } from "@material-ui/core/";
import { Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  card: { minWidth: 275 },
  bullet: { display: "inline-block", margin: "0 2px", transform: "scale(0.8)" },
  title: { fontSize: 14 },
  pos: { marginBottom: 12 }
});

export default function HomeInfo(props) {
  const classes = useStyles();
  const values = [
    {
      title: "Danger",
      meaning: {
        green: "No danger, keep it up!",
        yellow: "Moderate danger, be wary",
        red: "DANGER!"
      }
    },
    {
      title: "Recommended Course of Action",
      meaning: {
        green: "Keep doing what you're doing!",
        yellow: "Get to your vehicle in the next 10 minutes!",
        red: "Get to your vehicle immediately!!"
      }
    },
    {
      title: "Machine Status",
      meaning: {
        green: "Fully functional",
        red: "A sensor isn't working!"
      }
    }
  ];
  var { name, condition, meaning } = props;

  if (name === "danger") {
    name = values[0].title;
    if (condition === "green") {
      meaning = values[0].meaning.green;
    }
    if (condition === "yellow") {
      meaning = values[0].meaning.yellow;
    }
    if (condition === "red") {
      meaning = values[0].meaning.red;
    }
  }

  if (name === "coa") {
    name = values[1].title;
    if (condition === "green") {
      meaning = values[1].meaning.green;
    }
    if (condition === "yellow") {
      meaning = values[1].meaning.yellow;
    }
    if (condition === "red") {
      meaning = values[1].meaning.red;
    }
  }

  if (name === "status") {
    name = values[2].title;
    if (condition === "green") {
      meaning = values[2].meaning.green;
    }
    if (condition === "red") {
      meaning = values[2].meaning.red;
    }
  }

  return (
    <Card>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {name}
        </Typography>

        <Typography
          className={classes.description}
          variant="h4"
          color="textSecondary"
        >
          {meaning}
        </Typography>
      </CardContent>
    </Card>
  );
}

HomeInfo.propTypes = {
  name: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  meaning: PropTypes.string.isRequired
};
