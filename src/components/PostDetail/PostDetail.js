import React, { useEffect, useState } from 'react';
import { useParams, Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Comment from '../Comment/Comment';
import { CardActions, Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: 380,
        padding: 10,
        margin: 25,
    },
    media: {
        height: 380,
    },
    button: {
        marginLeft: 90,
    },
    link: {
        textDecoration: 'none',
    }
});

const PostDetail = () => {

    const classes = useStyles();

    const {postId} = useParams();

    const [detail, setDetail] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setDetail(data))
    }, [postId])

    const {title, body, userId} = detail;



    const [CommentPosts, setCommentPosts] = useState([]);
    useEffect(() => {
        const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
            fetch(commentUrl)
                .then((response) => response.json())
                .then((data) => {
                    setCommentPosts(data);
                });
    });

    return (
        <div className="App">
            <header className="App-header">
                <h3>Detail ID: {postId}</h3>
                
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" title="Contemplative Reptile"/>
                        <CardContent>

                            <Typography gutterBottom variant="h4" component="h2">
                                User ID: {userId}
                            </Typography>

                            <Typography gutterBottom variant="h6" component="h2">
                                {title}
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                {body}
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Link to="/home" style={{ textDecoration: 'none', margin: 'auto' }}>
                                <Button variant="contained">Back to Home</Button>
                            </Link>
                        </CardActions>
                    </CardActionArea>
                </Card>


                {
                    CommentPosts.map(comment => <Comment comment={comment}></Comment>)
                }
            </header>
        </div>
    );
};

export default PostDetail;