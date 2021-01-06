import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Link} from "react-router-dom";

import CallToAction from "./ui/CallToAction";
import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';

const useStyles = makeStyles(theme => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em"
    }
  },
  estimatedButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.arcOrange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main
    }

  },
  buttonContainer: {
    marginTop: 1
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",

    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",

    }
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
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
    marginTop: "12rem",
    [theme.breakpoints.down("xs")]: {
      padding: 20,

    }
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%"
    }
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  }

}))

const LandingPage = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item > {/*----- Hero block ----- */}
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography align="center" variant="h2">
              Bringing Techonology <br /> to the Midwest
                  </Typography>
            <Grid container justify="center" className={classes.buttonContainer}>
              <Grid item>
                <Button variant="contained" 
                  className={classes.estimatedButton} component={Link} to="/estimate" onClick={() => props.setValue(5)}>Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero} onClick={() => props.setValue(1)}>
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation} >
            <Lottie options={defaultOptions} height={"100%"} width={"100%"}></Lottie>
          </Grid>
        </Grid>
      </Grid>
      <Grid item> {/*----- Custom  block -----*/}
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
      </Grid>
      <Grid item> {/*----- Ios/Android block -----*/}
        <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : "flex-end"}>
          <Grid item style={{ textAlign: matchesSM ? "center" : undefined }}>
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
            <img alt="iOS/Android Icon" src={mobileAppsIcon} className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item> {/*----- Website  block -----*/}
        <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
          <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
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
          <Grid item>
            <img alt="Custom Software Icon" src={websiteIcon} className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item> {/*----- The revolution  block -----*/}
        <Grid container alignItems="center" justify="center" style={{ height: "100em", marginTop: "12em" }}>
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid container direction="column" style={{ textAlign: "center" }}>
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                      </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insigths coupled with cutting-edge technology is a recipe for revolution
                      </Typography>
                  <Button variant="outlined" className={classes.learnButton} component={Link} to="/revolution" 
                    onClick={() => {
                      props.setValue(1)}} 
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      <Grid item> {/*----- Information  block -----*/}
        <Grid container
          direction="row"
          style={{ height: "80em" }}
          alignItems= "center"
          className={classes.infoBackground}
          >

          <Grid item container 
          style={{ textAlign: matchesXS ? "center" : "inherit" }} 
          direction={matchesXS ? "column":"row"}
          >
            <Grid sm item style={{ marginLeft:matchesXS? 0 : matchesSM ? "2em":  "5em" }}>
              <Grid container direction="column" style={{marginBottom: matchesXS ? "10em" : 0}}>
                <Typography variant="h2" style={{ color: "white" }}>
                  About us
                    </Typography>
                <Typography variant="subtitle2">
                  Lets get personal.
                    </Typography>
                <Grid item>
                  <Button variant="outlined" 
                    className={classes.learnButton} 
                    style={{ color: "white", borderColor: "white" }} 
                    component={Link} to="/about" onClick={() => { props.setValue(3)}} 
                  > 
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>

              </Grid>
            </Grid>
            <Grid sm item style={{ marginRight: matchesXS? 0 : matchesSM ? "2em": "5em", textAlign:matchesXS ? "center": "right" }} >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  Contact us
                    </Typography>
                <Typography variant="subtitle2">
                  Say hello!
                    </Typography>
                <Grid item>
                  <Button variant="outlined" className={classes.learnButton} style={{ color: "white", borderColor: "white" }} 
                    component={Link} to="/contact"
                    onClick={() => { props.setValue(4)}} 
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* --------Call to Action ---------*/}
        <CallToAction setValue={props.setValue}/>
      </Grid>
    </Grid>

  )

}



export default LandingPage;


