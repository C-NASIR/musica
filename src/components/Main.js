import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

//importing my own components
import Player from "./Player";
import useHttp from "../hooks/useHttp";

//styles
const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
  },
  content: {
    marginTop: "2em",
  },
}));

const url = "https://deezerdevs-deezer.p.rapidapi.com/search";

const headers = {
  "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  "x-rapidapi-key": "3130746bf4msh9cb4690338476a2p19c8a1jsn19db19745cec",
};

export default function Main(props) {
  const classes = useStyles();
  const { loading, data, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest(url, headers, props.artist);
  }, [props.artist, sendRequest]);

  return data === undefined || data.length === 0 ? (
    <h6> No data found</h6>
  ) : (
    <>
      <main className={classes.content}>
        {loading ? (
          <div style={{ textAlign: "center" }}>
            <CircularProgress />
          </div>
        ) : (
          <>
            <Typography className={classes.title} variant="h5">
              {data.length !== 0 && data[1].artist.name}
            </Typography>
            {data.map((track) => (
              <Player
                key={track.id}
                preview={track.preview}
                album={track.album.title}
                cover={track.album.cover_big}
                song={track.title}
              />
            ))}
          </>
        )}
      </main>
    </>
  );
}
