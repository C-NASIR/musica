import React, { useState } from "react";
import ReactPlayer from "react-player";
export default function Player() {
  const [duration, setDuration] = useState(undefined);
  const [secondsElapsed, setSecondsElapsed] = useState(undefined);

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
      console.log(secondsElapsed);
    }
  };
  return (
    <ReactPlayer
      playing
      url="https://cdns-preview-e.dzcdn.net/stream/c-ef165c70aced3094b98821c001d6bdba-4.mp3"
      onDuration={onDuration}
      onProgress={onProgress}
    />
  );
}
