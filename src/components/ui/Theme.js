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

    }
});

export default MyTheme;
