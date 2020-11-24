import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import {ThemeProvider} from '@material-ui/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MyTheme from './ui/Theme';

const App = () => {
  return (
      <ThemeProvider  theme={MyTheme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={() => <div style={{height: "1000px"}}>Home</div>}/>
            <Route exact path="/services" component={() => <div>services</div>}/>
            <Route exact path="/customersoftware" component={() => <div>customersoftware</div>}/>
            <Route exact path="/mobileapps" component={() => <div>mobileapps</div>}/>
            <Route exact path="/websites" component={() => <div>websites</div>}/>
            <Route exact path="/revolution" component={() => <div>revolution</div>}/>
            <Route exact path="/about" component={() => <div>about</div>}/>
            <Route exact path="/contact" component={() => <div>contact</div>}/>
            <Route exact path="/estimate" component={() => <div>estimate</div>}/>
          </Switch>
          <Footer />
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
