import Header from '../components/ui/Header'
import {ThemeProvider} from '@material-ui/styles';
import MyTheme from './ui/Theme';

const App = () => {
  return (
      <ThemeProvider  theme={MyTheme}>
        <Header />
        Hello!
    </ThemeProvider>
  );
}

export default App;
