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

const Footer = (props) => {
    const classes = useStyles();

    return(
        <footer className={classes.footer}>
            <Grid container className={classes.mainContainer}>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/" onClick={() => props.setValue(0)}>Home </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/services" onClick={() => {props.setValue(1); props.setSelectedIndex(0)}}>Services </Grid>
                        <Grid item className={classes.link} component={Link} to="/customsoftware" onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}>Custom Software </Grid>
                        <Grid item className={classes.link} component={Link} to="/mobileapps" onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}>Mobile development </Grid>
                        <Grid item className={classes.link} component={Link} to="/websites" onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}>WebSite development </Grid>
                    </Grid>
                </Grid>         
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/revolution" onClick={() => props.setValue(2)}>The Revolution </Grid>
                        <Grid item className={classes.link} component={Link} to="/revolution" onClick={() => props.setValue(2)}>Vision </Grid>
                        <Grid item className={classes.link} component={Link} to="/revolution" onClick={() => props.setValue(2)}>Technology </Grid>
                        <Grid item className={classes.link} component={Link} to="/revolution" onClick={() => props.setValue(2)}>Process </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/about" onClick={() => props.setValue(3)}>About us </Grid>
                        <Grid item className={classes.link} component={Link} to="/about" onClick={() => props.setValue(3)}>History </Grid>
                        <Grid item className={classes.link} component={Link} to="/about" onClick={() => props.setValue(3)}>Team </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/contact" onClick={() => props.setValue(4)}>Contact us </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <img alt="blak decorative slash" src={footerAdorment} className={classes.adornment}/>
     
        </footer>
    )

}

export default Footer;