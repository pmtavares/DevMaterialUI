import React from 'react';
import Lottie from 'react-lottie';
import {Link} from 'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
	heading:{
		maxWidth: '40em'
	},
	arrowContainer:{
		marginTop: '0.5em',

	},
	rowContainer :{
		paddingLeft: '5em',
		paddingRight: '5em',
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: '1.5em'
        }
	},

}))

const MobileApps = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
	const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    return(
        <Grid container direction="column">
            <Grid item container direction="row" justify={matchesMD ? 'center': undefined} className={classes.rowContainer} style={{marginTop: matchesXS ? "1em" : "2em"}}>
				<Hidden mdDown>
					<Grid item className={classes.arrowContainer} style={{ marginRight: '1em', marginLeft: '-3.5em'}}>
						<IconButton style={{backgroundColor: 'transparent'}} component={Link} to="/services" onClick={() => props.setSelectedIndex(0)}>
							<img src={backArrow} alt="Back to services Page"/>
						</IconButton>
					</Grid>
				</Hidden>

				<Grid item container direction="column" className={classes.heading}>
					<Grid item>
						<Typography variant="h2"  align={matchesMD ? 'center': undefined}>iOS/Android App Development</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body1" paragraph  align={matchesMD ? 'center': undefined}>
                            Mobile apps allow you to take your tools pn the go.
						</Typography>
						<Typography variant="body1" paragraph  align={matchesMD ? 'center': undefined}>
                            Whether you want to an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. 
                            This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications and more. 
						</Typography>
						<Typography variant="body1" paragraph  align={matchesMD ? 'center': undefined}>
                            Convernience. Connection.
						</Typography>
					</Grid>
				</Grid>
				<Hidden mdDown>
					<Grid item className={classes.arrowContainer}>
						<IconButton style={{backgroundColor: 'transparent'}} component={Link} to="/mobileapps" onClick={() => props.setSelectedIndex(2)}>
							<img src={forwardArrow} alt="Forward to Ios/Android App Development" />
						</IconButton>
					</Grid>
				</Hidden>
			</Grid>
        </Grid>

    )
}

export default MobileApps;