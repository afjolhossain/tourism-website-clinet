import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import AboutUs from './aboutUs/AboutUs';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddNewPlace from './pages/addplace/AddNewPlace';
import Home from './pages/home/Home';
import NotFound from './pages/home/notfound/NotFound';
import Login from './pages/login/login/Login';
import Footer from './shared/footer/Footer';
import Header from './shared/header/Header';


function App() {
  return (
    <div className="App">
         <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/Home">
          <Home></Home>
        </Route>
        <Route path="/addNewPlaces">
          <AddNewPlace></AddNewPlace>
        </Route>
        <Route path="/login">
         <Login></Login>
        </Route>
        <Route path="/AboutUs">
          <AboutUs></AboutUs>
        </Route>
        <Route path="*">
         <NotFound></NotFound>
        </Route>
        </Switch>
        <Footer></Footer>
       </Router>
         </AuthProvider>
    </div>
  );
}

export default App;
