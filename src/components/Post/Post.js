import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles({
  root: {
    width: 350,
    padding: 10,
    margin: 25,
  },
  media: {
    height: 350,
  },
  button: {
    marginLeft: 70,
  }
});

const Post = (props) => {
    const classes = useStyles();
    const { id, title } = props.post;

    const history = useHistory();
    const handleClick = (postId) => {
      const url = `post/${postId}`;
      history.push(url);
    };




    return (
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" title="Contemplative Reptile"/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                ID: {id}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                {title}
              </Typography>
            </CardContent> 
          </CardActionArea>

          <CardActions>
            <Button onClick={() => handleClick(id)} className={classes.button} variant="contained" color="primary">
              see more details id: {id}
            </Button>
          </CardActions>

          
        </Card>
      </div>
    );
};

export default Post;