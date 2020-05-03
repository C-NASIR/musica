import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

//importing my components
import Sidebar from "./Sidebar";
import Main from "./Main";
import { artists } from "../data/data";

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

const url = "https://deezerdevs-deezer.p.rapidapi.com/search";

//The Home component
export default function Home() {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [state, setState] = useState({
    data: null,
    error: null,
    loading: true,
  });

  console.log(artists);
  const getData = async (url, query) => {
    try {
      const response = await axios.get(url, {
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key":
            "3130746bf4msh9cb4690338476a2p19c8a1jsn19db19745cec",
        },
      });
      setState({ data: response, error: null, loading: false });
    } catch (err) {
      setState({ data: null, error: err, loading: false });
    }
  };

  useEffect(() => {
    getData(url);
  }, [query]);

  return (
    <div className={classes.root}>
      <div style={{ flex: 0.6 }}>
        <Sidebar />
      </div>
      <div style={{ flex: 2 }}>
        {state.loading ? <CircularProgress /> : <Main />}
      </div>
    </div>
  );
}
