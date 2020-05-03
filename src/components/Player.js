import React, { useState } from "react";
import ReactPlayer from "react-player";

import PlayerItem from "./PlayerItem";

export default function Player() {
  const [duration, setDuration] = useState(undefined);
  const [secondsElapsed, setSecondsElapsed] = useState(undefined);
  const [play, setPlay] = useState(false);

  const onDuration = duration => {
    setDuration(duration);
  };
  const onProgress = progress => {
    if (!duration) {
      // Sadly we don't have the duration yet so we can't do anything
      return;
    }
    // progress.played is the fraction of the video that has been played
    // so multiply with duration to get number of seconds elapsed
    const Elapsed = progress.played * duration;

    if (Elapsed !== secondsElapsed) {
      setSecondsElapsed(Elapsed);
    }
  };
  return (
    <>
      <ReactPlayer
        height={0}
        width={0}
        playing={play}
        url="https://cdns-preview-e.dzcdn.net/stream/c-e29e115cd4eca233b1666155f92058b4-5.mp3"
        onDuration={onDuration}
        onProgress={onProgress}
      />
      <PlayerItem
        setPlay={setPlay}
        play={play}
        duration={duration}
        secondsElapsed={secondsElapsed}
      />
    </>
  );
}
