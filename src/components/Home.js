import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//importing my components
import Sidebar from "./Sidebar";
import Main from "./Main";
import Search from "./Search";
import { artists } from "../data/data";

const drawerWidth = 300;
//Home Styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    [theme.breakpoints.down("md")]: {
      width: `calc(100% - ${drawerWidth - 50}px)`,
      marginLeft: 0,
    },
    [theme.breakpoints.down("sm")]: {
      width: `calc(100% - ${drawerWidth - 70}px)`,
      marginLeft: 0,
    },
    [theme.breakpoints.down("xs")]: {
      width: `calc(100%)`,
      marginLeft: 0,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

//The Home component
export default function Home() {
  const [artist, setArtist] = useState("drake");
  const classes = useStyles();
  const theme = useTheme();
  const matchXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ width: "100%" }}>
          <Search setArtist={setArtist} />
        </Toolbar>
      </AppBar>
      {!matchXS && <Sidebar artists={artists} setArtist={setArtist} />}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Main artist={artist} />
      </main>
    </div>
  );
}
