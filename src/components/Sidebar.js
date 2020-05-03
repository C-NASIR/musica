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

//Syles
import im from "../image/a.jpg";

//styles
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  title: {
    display: "block",
    backgroundColor: "green",
    textAlign: "center",
    width: "13.3em",
    color: "white",
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
    <Drawer className={classes.drawer} variant="permanent" anchor="left">
      <List>
        <ListItem>
          <Typography variant="h5" className={classes.title}>
            Artists
          </Typography>
        </ListItem>
        <ListItem>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={im}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </ListItem>
        <ListItem>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={im}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </ListItem>
      </List>
    </Drawer>
  );
}
