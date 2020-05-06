import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "auto",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchButton: {
    backgroundColor: "white",
    marginLeft: "1em",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.down("lg")]: {
      width: "20em",
      "&:focus": {
        width: "40em",
      },
    },
    [theme.breakpoints.down("md")]: {
      width: "10em",
      "&:focus": {
        width: "30em",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "10em",
      "&:focus": {
        width: "20em",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "5em",
      "&:focus": {
        width: "10em",
      },
    },
  },
}));

export default function Search(props) {
  const classes = useStyles();
  const [filter, setFilter] = useState("");

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search by Arist, Album Song etc...."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <Button
        className={classes.searchButton}
        variant="contained"
        onClick={props.setArtist.bind(this, filter)}
      >
        Search
      </Button>
    </div>
  );
}
