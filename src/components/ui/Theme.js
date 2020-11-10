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
        h5:{
            fontWeight: 600
        },
        tab:{
            fontSize: "1em",
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: "700"
        },
        estimate:{
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
        }
    }
});

export default MyTheme;
