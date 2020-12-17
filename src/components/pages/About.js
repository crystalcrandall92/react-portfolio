import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProfilePic from "../images/crystalcrandall.jpg"
import "../styles/styles.css"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: "smokewhite"
    },
}));

export default function About() {
    const classes = useStyles();

    return (
        <div className="background">
            <h1 className="middle">About</h1>
            <div className="center">
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={5}>
                        <Paper className={classes.paper}>
                        
                        <img src={ProfilePic} alt="Crystal Crandall" className="img-thumbnail"/>
                        <div><a href="https://www.linkedin.com/in/crystal-c-1b32481b1" target="_blank" rel="noreferrer">Linkedin</a></div>
                        <div><a href="https://github.com/crystalcrandall92" target="_blank" rel="noreferrer">Github</a></div>
                        <div>Email: Crystalcrandall92@yahoo.com</div>
                        </Paper>
                    </Grid>
                    <Grid item xs={5}>
                        <Paper className={classes.paper}>  
                        <p>
                            I am an aspiring developer, I have a natural drive to want to achieve and learn new
                            technologies, tricks, and tools.
                        </p>
                        <p> I have a bachelor's degree in Multimedia Design. I thoroughly enjoy the aspect of code from
                            simple html and css to react and more. Tackling on new concepts and creating ideas come to
                            fruition are the main drive behind my enjoyment to learning. </p>
                            </Paper>
                    </Grid>
                </Grid>
            </div>
            </div>
        </div>
    );
}
