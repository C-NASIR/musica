import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

//importing my own components
import Player from "./Player";
//styles
const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
  },
  content: {
    marginTop: "2em",
    height: "300em",
  },
}));
export default function Main() {
  const classes = useStyles();
  return (
    <>
      <main className={classes.content}>
        <Typography className={classes.title} variant="h6">
          Tyloar Swift
        </Typography>
        <Player />
        <Player />
        <Player />
        <Player />
        <Player />
        <Player />
        <Player />
      </main>
    </>
  );
}
