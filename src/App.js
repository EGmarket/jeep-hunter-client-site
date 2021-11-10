
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute path="/appointment">
           
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            
          </PrivateRoute>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Registration />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
