import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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
    [theme.breakpoints.down("sm")]: {
      width: `calc(100% - ${drawerWidth - 50}px)`,
      marginLeft: drawerWidth - 50,
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

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            <Search setArtist={setArtist} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar artists={artists} setArtist={setArtist} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Main artist={artist} />
      </main>
    </div>
  );
}
