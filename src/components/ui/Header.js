import React, {cloneElement} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

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

const Header = (props) =>{
      
    return(
        <ElevationScroll>
            <AppBar position="fixed" color="primary">
                <Toolbar>Development</Toolbar>
            </AppBar>
        </ElevationScroll>
    )


}

export default Header;