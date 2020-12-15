import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import footerAdorment from '../../assets/Footer Adornment.svg';
import Grid from '@material-ui/core/Grid';
import Hidden from "@material-ui/core/Hidden";
import {Link} from "react-router-dom";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

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
    },
    icon: {
        width: "3em",
        height: "3em",
        [theme.breakpoints.down("xs")] :{
            height: "2.5em",
            width: "2.5em"
        }
    },
    socialContainer : {
        position:"absolute",
        marginTop: "-5em",
        right:"1.5em",
        [theme.breakpoints.down("xs")] :{
            right: "0.6em",
            marginTop: "-4em",

        }
    }
}))

const Footer = (props) => {
    const classes = useStyles();

    return(
        <footer className={classes.footer}>
            <Hidden mdDown>
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
                            <Grid item className={classes.link} component={Link} to="/mobileapps" onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}>iOS/Android development </Grid>
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
            </Hidden>
            <img alt="blak decorative slash" src={footerAdorment} className={classes.adornment}/>
            <Grid container className={classes.socialContainer} justify="flex-end" spacing={2}>
                <Grid item component={"a"} href="http://www.facebook.com"  target="_blank">
                    <img alt="facebook logo" src={facebook} className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="http://www.twitter.com"  target="_blank">
                    <img alt="twitter logo" src={twitter} className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="http://www.instagram.com">
                    <img alt="instagram logo" src={instagram} className={classes.icon}  target="_blank"/>
                </Grid>
            </Grid>    
     
        </footer>
    )

}

export default Footer;