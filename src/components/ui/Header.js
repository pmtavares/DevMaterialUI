import React, {cloneElement, Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from "@material-ui/core/Button";

import logo from '../../assets/logo.svg'

const ElevationScroll = (props) => {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const useStyles = makeStyles(theme => ({
    toolbarMargin:{
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
    logo:{
        height: "7em"
    },
    tabContainer:  {
        marginLeft: "auto"
    },
    tab :{
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button:{
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px"
    }

}))

const Header = (props) =>{
    const classes = useStyles();
      
    return(
        <Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="primary">
                    <Toolbar disableGutters>
                        <img src={logo} alt="company logo" className={classes.logo} />  
                        <Tabs className={classes.tabContainer}>
                            <Tab label="Home" className={classes.tab} />
                            <Tab label="Services" className={classes.tab}/>
                            <Tab label="The Revolution" className={classes.tab}/>
                            <Tab label="About us" className={classes.tab}/>
                            <Tab label="Contact us" className={classes.tab}/>
                        </Tabs>  
                        <Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
                    </Toolbar>

                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </Fragment>
    )


}

export default Header;