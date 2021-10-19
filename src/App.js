
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Doctors from './Components/Doctors/Doctors';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Service from './Components/Service/Service';
import Services from './Components/Services/Services';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail/ServiceDetail';


function App() {
  return (
 
    <div className>
      <Router>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/serviceDetail/:serviceId">
            <ServiceDetail></ServiceDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
