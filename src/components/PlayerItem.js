import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";

//icons
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import PauseIcon from "@material-ui/icons/Pause";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export default function PlayerItem(props) {
  const [hovered, setHovered] = useState(false);
  const classes = useStyles();

  const getCorrectIcon = () => {
    if (!hovered && !props.play) return <MusicNoteIcon />;
    if (hovered && !props.play) return <PlayArrowIcon />;
    if (hovered && props.play) return <PauseIcon />;
    if (!hovered && props.play) return <PauseIcon />;
    return <PlayArrowIcon />;
  };

  const getTime = () => {
    const duration = parseInt(props.secondsElapsed);
    if (props.play) return `0:${30 - duration}`;
    return "3:42";
  };

  return (
    <List subheader={<ListSubheader> Hello </ListSubheader>}>
      <ListItem
        divider
        button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        disableRipple
      >
        <ListItemIcon>
          <IconButton
            className={classes.iconButton}
            onClick={() => props.setPlay(!props.play)}
          >
            {getCorrectIcon()}
          </IconButton>
          <Avatar
            variant="square"
            src="https://e-cdns-images.dzcdn.net/images/cover/e6f3afd8a5c3d8ea797f458694166e47/56x56-000000-80-0-0.jpg"
          />
        </ListItemIcon>
        <ListItemText>
          <Typography style={{ marginLeft: "1em" }}> Killing it </Typography>
        </ListItemText>
        <ListItemText style={{ textAlign: "end" }}>
          <Typography> {getTime()} </Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
}
