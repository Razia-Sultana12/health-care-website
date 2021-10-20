
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Doctors from './Components/Doctors/Doctors';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Service from './Components/Service/Service';
import Services from './Components/Services/Services';
import AuthProvider from './Context/AuthProvider';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail/ServiceDetail';


function App() {
  return (
 
    <div className>
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <PrivateRoute path="/doctors">
            <Doctors></Doctors>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/footer">
          <Footer></Footer>
          </Route>
          <PrivateRoute path="/serviceDetail/:serviceId">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          </Switch>
      </Router>
      <Footer></Footer>
      </AuthProvider>
      
    </div>
  );
}

export default App;
