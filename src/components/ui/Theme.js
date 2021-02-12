import { createMuiTheme } from '@material-ui/core/styles';


const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const arcGrey = '#868686';

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
			fontFamily: 'Raleway',
			fontSize: '2.5rem',
			fontWeight: 700,
			color: `${arcBlue}`,
			lineHeight: 1.5
		},
		h3: {
			fontFamily: 'Pacifico',
			fontSize: '2.5rem',
			color: arcBlue
		},
		h4:{
			fontFamily: 'Raleway',
			fontSize: '1.7rem',
			fontWeight: 700,
			color: `${arcBlue}`,
		},
		subtitle1:{
			fontSize: '1.25rem',
			fontWeight: 300,
			color: arcGrey,
		},
		subtitle2:{
			fontSize: '1.25rem',
			fontWeight: 300,
			color: 'white',
		},
		body1:{
			fontSize: '1.25rem',
			color: arcGrey,
			fontWeight: 300
		},
		learnButton :{
			borderColor: arcBlue,
			color: arcBlue,
			borderWidth: 2,
			textTransform: 'none',
			borderRadius: 50,
			fontFamily: 'Roboto',
			fontWeight: 'bold'
		},
		h5:{
			fontWeight: 600
		},
		tab:{
			fontSize: '1em',
			fontFamily: 'Raleway',
			textTransform: 'none',
			fontWeight: '700',
            
		},
		estimate:{
			fontFamily: 'Pacifico',
			fontSize: '1rem',
			textTransform: 'none',
			color: 'white'
		}
	}
});

export default MyTheme;
