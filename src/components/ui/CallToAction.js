import React from 'react';
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonArrow from './ButtonArrow';
import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Link} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
          marginBottom: "2em",
    
        }
      },
      background:{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "60em",
        width: "100%",
        [theme.breakpoints.down("md")]:{
            background: `url(${mobileBackground})`,
            backgroundAttachment: "inherit",
        }
      },
      estimateButton:{
          ...theme.typography.estimate,
          borderRadius: 50,
          width: 205,
          height: 80,
          backgroundColor: theme.palette.common.arcOrange,
          fontSize: "1.5rem",
          marginRight: "5em",
          marginLeft: "2em",
          [theme.breakpoints.down("sm")] :{
            marginRight: "0",
            marginLeft: "0",
          },
          "&:hover": {
            backgroundColor: theme.palette.secondary.main
          }
      }
}));

const CallToAction = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container 
            style={{alignItems: "center"}} 
            className={classes.background} 
            justify={matchesSM ? "center": "space-between"}
            direction={matchesSM ? "column": "row"}>
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : "inherit"}}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h2">
                            Simple Software. <br/> Revolutionary Results
                        </Typography>
                        <Typography variant="subtitle2" style={{fontSize: "1.5rem"}}>
                            Take advantage of 21st century
                        </Typography>
                        <Grid container item justify={matchesSM ? "center": undefined}>
                            <Button variant="outlined" className={classes.learnButton} component={Link} to="/revolution" onClick={() => props.setValue(2)}>
                                <span style={{ marginRight: 5 }}>Learn More</span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button variant="contained" className={classes.estimateButton} component={Link} to="/estimate" onClick={() => props.setValue(5)}>Free Estimated</Button>
            </Grid>

        </Grid>
    )
}

export default CallToAction;