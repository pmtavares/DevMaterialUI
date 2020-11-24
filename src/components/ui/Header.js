import React, {cloneElement, Fragment, useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useTheme} from "@material-ui/styles";
import logo from '../../assets/logo.svg';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
        marginBottom: "3em",
        [theme.breakpoints.down("md")]:{
            marginBottom: "2em"
        },
        [theme.breakpoints.down("xs")]:{
            marginBottom: "1.25em"
        }

    },
    logo:{
        height: "8em",
        [theme.breakpoints.down("md")]:{
            height: "7em"
        },
        [theme.breakpoints.down("xs")]:{
            height: "5.5em"
        }
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
    },
    logoContainer :{
        padding: 0,
        "&:hover":{
            backgroundColor: "transparent"
        }
    },
    menu: {
        backgroundColor: theme.palette.common.arcBlue,
        color: "white"
    },
    menuItem:{
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover":{
            opacity: 1
        }
    },
    drawerIconContainer : {
        "&:hover":{
            backgroundColor: "transparent"
        },
        marginLeft: "auto"
    },
    drawerIcon :{
        height: "50px",
        width: "50px"
    },
    drawer: {
        backgroundColor: theme.palette.common.arcBlue
    },
    drawerItem : {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7
    },
    drawerItemSelected : {
        "& .MuiListItemText-root": {
            opacity: 1
        }
    },
    drawerItemEstimate : {
        backgroundColor: theme.palette.common.arcOrange
    },
    appBar: {
        zIndex: theme.zIndex.modal + 1
    }

}))

const Header = (props) =>{
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false);

    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }

    const handleOpenMenuClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    }

    const handleCloseMenuClick = (e) => {
        setAnchorEl(null);
        setOpenMenu(false);
    }

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectedIndex(i)
    }

    const menuOptions = [
        {name: "Services", link:"/services", activeIndex: 1, selectedIndex: 0},
        {name: "Custom Software", link:"/customersoftware", activeIndex: 1, selectedIndex: 1},
        {name: "Mobile App development", link:"/mobileapps", activeIndex: 1, selectedIndex: 2},
        {name: "Website", link:"/websites", activeIndex: 1, selectedIndex: 3}
    ]

    const routes = [
        {name: "Home", link: "/", activeIndex: 0},
        {name: "Services", link: "/services", activeIndex: 1, 
            ariaOwns: anchorEl ? "simple-menu" : undefined, 
            ariaPopup: anchorEl ? "true" : undefined,
            mouseOver: (event) => handleOpenMenuClick(event)},
        {name: "The Revolution", link: "/revolution", activeIndex: 2},
        {name: "About us", link: "/about", activeIndex: 3},
        {name: "Contact us", link: "/contact", activeIndex: 4}
    ]

    useEffect(() => {
        RefreshRouter(setValue, selectedIndex,setSelectedIndex, value, routes, menuOptions);

    }, [value, selectedIndex, routes, menuOptions])

    const tabs = (        
        <Fragment>
            <Tabs value={value} className={classes.tabContainer} onChange={handleChange}>
                {
                    routes.map((route, index) => (
                        <Tab key={`${route}${index}`}
                            className={classes.tab} 
                            component={Link} 
                            to={route.link} 
                            label={route.name} 
                            aria-owns={route.ariaOwns} 
                            aria-haspopup={route.ariaPopup}
                            onMouseOver={route.mouseOver}
                            />

                    ))
                }
            </Tabs>  
            <Menu 
                id="simple-menu" 
                anchorEl={anchorEl} 
                open={openMenu} 
                onClose={handleCloseMenuClick}
                MenuListProps={{onMouseLeave: handleCloseMenuClick}}
                classes={{paper: classes.menu}}
                elevation={0}
                style={{zIndex: 1302}}
                keepMounted
                >

                {

                    menuOptions.map((option, i) => (
                        <MenuItem 
                        component={Link} 
                        to={option.link} 
                        classes={{root: classes.menuItem}}
                        onClick={event => {
                            handleMenuItemClick(event, i);
                            setValue(1);
                            handleCloseMenuClick();
                        }} 
                        selected={i === selectedIndex && value === 1}
                        key={option.link}>
                        {option.name}
                        </MenuItem>

                    ))
                }   
            </Menu>
            <Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
        </Fragment>
    )
      
    const drawer = (
        
            <Fragment>
                <SwipeableDrawer
                    disableBackdropTransition={!iOS} disableDiscovery={iOS}
                    open={openDrawer}
                    onClose={() => setOpenDrawer(false)}
                    onOpen ={() => setOpenDrawer(true)}
                    classes={{paper: classes.drawer}}                    
                >       
                    <div className={classes.toolbarMargin}></div>            
                    <List disablePadding>
                        {
                            routes.map((route,index) => (
                                <ListItem key={`${route}${route.activeIndex}`} divider button component={Link} to={route.link}
                                    onClick={ () => {setOpenDrawer(false); setValue(route.activeIndex) }}
                                    selected={value === index}
                                    classes={{selected: classes.drawerItemSelected}}
                                    >
                                    <ListItemText disableTypography 
                                    className={classes.drawerItem}>{route.name}</ListItemText>
                                </ListItem>
                            ))
                        }
                        <ListItem divider button 
                        component={Link} 
                        to="/estimate" 
                        classes={{root: classes.drawerItemSelected, selected: classes.drawerItemSelected}}
                        className={classes.drawerItemEstimate} 
                        onClick={() => {setOpenDrawer(false); setValue(5) }}selected={value === 5}>
                            <ListItemText disableTypography 
                            className={classes.drawerItem}>Estimate</ListItemText>
                        </ListItem>
                    </List>
                </SwipeableDrawer>
                <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple className={classes.drawerIconContainer}>
                        <MenuIcon className={classes.drawerIcon}/>
                </IconButton>
            </Fragment>
        

    )

    return(
        <Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="primary" className={classes.appBar}>
                    <Toolbar disableGutters>
                        <Button component={Link} to="/" className={classes.logoContainer} onClick={()=> setValue(0)} disableRipple>
                            <img src={logo} alt="company logo" className={classes.logo} />  
                        </Button>                  
                        {matches ? drawer : tabs}
                    </Toolbar>

                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </Fragment>
    )


}


const RefreshRouter = (setValue, selectedIndex, setSelectedIndex, value, routes, menuOptions) =>{
    [...menuOptions, ...routes].forEach(route => {
        switch(window.location.pathname)
        {
            case `${route.link}`:
                if(value !== route.activeIndex)
                {
                    setValue(route.activeIndex)
                    if(route.selectedIndex && route.selectedIndex !== selectedIndex)
                    {
                        setSelectedIndex(route.selectedIndex)
                    }
                }
                break;
            default:
                break;
        }
    })

}

export default Header;