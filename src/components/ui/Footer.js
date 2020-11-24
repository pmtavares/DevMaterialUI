import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import footerAdorment from '../../assets/Footer Adornment.svg';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.arcBlue,
        width: "100%",
        zIndex: 1302,
        position:"relative"
    },
    adornment :{
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]:{
            width: "21em"
        },
        [theme.breakpoints.down("xs")]:{
            width: "15em"
        }
    },
    mainContainer : {
        position: "absolute",
        justifyContent: "center"
    },
    link: {
        color:"white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem :{
        margin: "3em"
    }
}))

const Footer = () => {
    const classes = useStyles();

    return(
        <footer className={classes.footer}>
            <Grid container className={classes.mainContainer}>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/">Home </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/services">Services </Grid>
                        <Grid item className={classes.link} component={Link} to="/customsoftware">Custom Software </Grid>
                        <Grid item className={classes.link} component={Link} to="/mobileapps">Mobile development </Grid>
                        <Grid item className={classes.link} component={Link} to="/websites">WebSite development </Grid>
                    </Grid>
                </Grid>         
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/revolution">The Revolution </Grid>
                        <Grid item className={classes.link} component={Link} to="/revolution">Vision </Grid>
                        <Grid item className={classes.link} component={Link} to="/revolution">Technology </Grid>
                        <Grid item className={classes.link} component={Link} to="/revolution">Process </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/about">About us </Grid>
                        <Grid item className={classes.link} component={Link} to="/about">History </Grid>
                        <Grid item className={classes.link} component={Link} to="/about">Team </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/contact">Contact us </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <img alt="blak decorative slash" src={footerAdorment} className={classes.adornment}/>
     
        </footer>
    )

}

export default Footer;