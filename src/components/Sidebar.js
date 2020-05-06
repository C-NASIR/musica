import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

//styles
const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth - 50,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth - 50,
    },
  },
  title: {
    display: "block",
    textAlign: "center",
    width: "13.3em",
    fontFamily: "'Righteous', cursive;",
  },
  card: {
    width: "20em",
  },
  media: {
    height: 140,
  },
}));
export default function SideBar(props) {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem>
          <Typography variant="h5" className={classes.title}>
            Favorite Artist
          </Typography>
        </ListItem>
        {props.artists.map((artist) => (
          <ListItem key={artist.name}>
            <Card
              className={classes.card}
              onClick={props.setArtist.bind(this, artist.name)}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={artist.image}
                  title="Contemplative Reptile"
                  style={{ height: "25em" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {artist.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {artist.bio}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
