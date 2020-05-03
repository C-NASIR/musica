import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//importing my components
import Sidebar from "./Sidebar";
import Main from "./Main";

//Home Styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  sidebar: {
    flex: 1,
  },
  main: {
    flex: 2,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div style={{ flex: 0.6 }}>
        <Sidebar />
      </div>
      <div style={{ flex: 2 }}>
        <Main />
      </div>
    </div>
  );
}
