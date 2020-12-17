import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Resume from "../images/resume.jpg";
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

export default function Portfolio() {
    const classes = useStyles();

    return (
        <div className="background">
            <h1 className="middle">Resume</h1>
            <div className="center">
            <div className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                        <div><img src={Resume} alt="cocktail-me" className="example" /></div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
        </div>
    );
}