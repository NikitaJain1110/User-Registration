import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter,
  Switch,
} from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SignUp}/>
        <Route exact path='/signin' component={SignIn}/>
      </Switch>
    </Router>
  );
}

export default App;
