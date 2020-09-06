import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
        width: 380,
        padding: 10,
        margin: 25,
    },
    media: {
        height: 400,
        borderRadius: 180,
    }
});

const Comment = (props) => {
    const classes = useStyles();

    const { postId, name, email, id, body } = props.comment;

    return (
        <div>
            <h4>Comment ID: {id}</h4>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" title="Contemplative Reptile" />
                    <CardContent>

                        <Typography gutterBottom variant="body1" color="textSecondary" component="h5">
                            Post ID: {postId}
                        </Typography>

                        <Typography gutterBottom variant="h6" component="h2">
                            {name}
                        </Typography>

                        <Typography gutterBottom variant="body2" component="h2">
                            {body}
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p">
                            {email}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default Comment;