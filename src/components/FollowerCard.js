import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        maxWidth: 250,
    },
    media: {
        height: 300,
    },
});


const FollowerCard = props => {
    const classes = useStyles()
    return (
        <div className="follower-cards">

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.imgFollow} alt=""
                    />
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <a href={props.urlFollow}>{props.loginFollow}</a>
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default FollowerCard