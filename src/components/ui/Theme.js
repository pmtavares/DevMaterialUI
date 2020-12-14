import { createMuiTheme } from '@material-ui/core/styles'


const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

const MyTheme = createMuiTheme({
    palette: {
        common: {
            arcBlue: `${arcBlue}`,
            arcOrange: `${arcOrange}`
        },
        primary: {
            main:`${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }

    },
    typography:{
        h2:{
            fontFamily: "Raleway",
            fontSize: "2.5rem",
            fontWeight: 700,
            color: `${arcBlue}`,
            lineHeight: 1.5
        },
        h5:{
            fontWeight: 600
        },
        tab:{
            fontSize: "1em",
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: "700",
            
        },
        estimate:{
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white"
        }
    }
});

export default MyTheme;
