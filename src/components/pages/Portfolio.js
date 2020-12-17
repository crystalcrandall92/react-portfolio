import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Cocktailme from "../images/cocktail-me.jpg";
import Gitfit from "../images/git-fit.jpg";
import Project1 from "../images/project1.jpg";
import Stats from "../images/stats.jpg";
import Budget from "../images/pwa.jpg";
import Offline from "../images/pwa2.jpg";
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
            <h1 className="middle">Portfolio</h1>
            <div className="center">
                <div className={classes.root}>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <h4>Cocktail-Me</h4>
                                <div><a href="https://github.com/crystalcrandall92/Cocktail-Me" target="_blank" rel="noreferrer">Github for Cocktail-Me</a></div>
                                <div><a href="https://howling-asylum-36337.herokuapp.com" target="_blank" rel="noreferrer">Deployed app for Cocktail-Me</a></div>

                                <p className="text">Cocktail-Me is an application that allows a user to explore a database of cocktails and create their
                                own drinks. This application also enables a user to create an account and save their collection of cocktails.
                            </p>
                                <p className="text">This app demonstrates the use of html, css, handlebars, javascript, and many others. This app was also
                             created in a group dynamic, displaying my ability to work within a group and meet a deadline.</p>
                                <p className="text">I personally worked on the call to the api, javascript including the functions related to saving and
                                displaying results. After doing what our group divided among us I assisted my fellow teammates to finish the
                            html and css, and made the powerpoint associated with our presentation for this project. </p>
                                <div><img src={Cocktailme} alt="cocktail-me" className="example" /></div>
                                <h4>Budget-Me (Offline)</h4>
                                <div><a href="https://github.com/crystalcrandall92/Budget-Me" target="_blank" rel="noreferrer">Github for Budget-Me</a></div>
                                <div><a href="https://damp-sierra-56054.herokuapp.com/" target="_blank" rel="noreferrer">Deployed app for Budget-Me</a></div>
                                
                                <p className="text">This app demonstrates having an app go offline and being able to push the data that the user inputted while
                                it was offline to be commited to the database when the app goes back to being online.
                                </p>
                                <div><img src={Budget} alt="Budget" className="example" /></div>
                                <div><img src={Offline} alt="Offline" className="example" /></div>
                                <h4>Git-Fit</h4>
                                <div><a href="https://github.com/crystalcrandall92/Git-Fit" target="_blank" rel="noreferrer">Github for Git-Fit</a></div>
                                <div><a href="https://agile-wildwood-40816.herokuapp.com" target="_blank" rel="noreferrer">Deployed app for Git-Fit</a></div>

                                <p className="text"> Git-fit is an application that is designed to help a user to record their workouts. </p>
                                <p className="text"> This app demonstrates the use of mongoose, routes, javascript, and working beside models. </p>
                                <div><img src={Gitfit} alt="git-fit" className="example" /></div>
                                <div><img src={Stats} alt="stats" className="example" /></div>

                                <h4>Breweries</h4>
                                <div><a href="https://github.com/jameslee70/FirstProject" target="_blank" rel="noreferrer">Github for Breweries</a></div>
                                <div><a href="https://jameslee70.github.io/FirstProject" target="_blank" rel="noreferrer">Deployed app for Breweries</a></div>
                                <p className="text">Breweries was a first exposure to using API's and calling/rendering them to the page. This app uses Day.js
                                which is used to display the date, along with a weather api to display the weather of the city being searched.
                                It then takes the city and state that is searched and runs it through the brewery databse to find the
                                breweries in the area. After doing that it gives the user the address, website, and phone number of the
                                        location if available.</p>
                                <img src={Project1} alt="cocktail-me" className="example" />
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}