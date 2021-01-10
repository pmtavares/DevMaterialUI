import React from 'react';
import {Link} from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/ui/ButtonArrow';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles(theme => ({
    subtitle: {
        marginBottom: 1
      },
      icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
          marginLeft: 0,
    
        }
      },
      serviceContainer: {
        marginTop: "10rem",
        [theme.breakpoints.down("xs")]: {
          padding: 20,
    
        }
      },
      specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.arcOrange
      },
      learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
          marginBottom: "2em",
    
        }
      },

}))

const Services = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return(
        <Grid container direction="column">
          <Grid item style={{marginLeft: matchesSM ? 0 : "5em", marginTop: matchesSM ? "1em" : "2em"}} >
            <Typography variant="h2" gutterBottom aligh={matchesSM ? "center": undefined}>Services</Typography>
          </Grid>
          <Grid item>
            <Grid container direction="row" 
              className={classes.serviceContainer} 
              justify={matchesSM ? "center" : "flex-end"}
              style={{marginTop: matchesSM ? "1em" :"5em"}}>
              <Grid item style={{ textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }}>
                <Typography variant="h4">
                  iOS/Android App Development
                    </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  Extend functionality. Extend access. Increase engagement.
                    </Typography>
                <Typography variant="subtitle1">
                  Integrate your web experience or create standalone {matchesSM ? null : <br />} with either mobile platform
                    </Typography>
                <Button variant="outlined" 
                  className={classes.learnButton} 
                  component={Link} 
                  to="/mobileapps"
                  onClick={() => {
                    props.setValue(1); 
                    props.setSelectedIndex(2)}} 
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
                </Button>
              </Grid>
              <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
                <img alt="iOS/Android Icon" src={mobileAppsIcon} className={classes.icon} width="250em"/>
              </Grid>
            </Grid>

            
            <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
                    <Typography variant="h4">
                    Custom Software Development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                    Save energy. Save time. Save Money
                    </Typography>
                    <Typography variant="subtitle1">
                    Complete digital solutons, from investigations to <span className={classes.specialText}>celebration</span>
                    </Typography>
                    <Button variant="outlined" className={classes.learnButton}  
                        component={Link} 
                        to="/customersoftware" 
                        onClick={() => {
                        props.setValue(2); 
                        props.setSelectedIndex(1)}}
                    >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
                    </Button>
                </Grid>
                <Grid item>
                    <img alt="Custom Software Icon" src={customSoftwareIcon} className={classes.icon} />
                </Grid>
            </Grid>

            <Grid item> {/*----- Website  block -----*/}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : "flex-end"} style={{marginBottom: "10em"}}>
                <Grid item style={{ textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }}>
                    <Typography variant="h4">
                    Website Development
                        </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                    Reach more. Discover more. Sell more
                        </Typography>
                    <Typography variant="subtitle1">
                    Optmized for search Engines, built for speed.
                        </Typography>
                    <Button variant="outlined" className={classes.learnButton} 
                    component={Link} to="/websites"
                    onClick={() => {
                    props.setValue(1); 
                    props.setSelectedIndex(3)}} 
                    >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
                    </Button>
                </Grid>
                <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                    <img alt="Custom Software Icon" src={websiteIcon} className={classes.icon} width="250em"/>
                </Grid>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
    )

}

export default Services;
