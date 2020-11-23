import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter,
  Switch,
} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Main from "./components/main";
import AddItem from "./components/Additem";
import UpdateItem from "./components/Updateitem";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signup" component={SignUp} />{" "}
        <Route exact path="/signin" component={SignIn} />{" "}
        <Route exact path="/main" component={Main} />{" "}
        <Route exact path="/additem" component={AddItem} />{" "}
        <Route exact path="/updateitem" component={UpdateItem} />{" "}
      </Switch>{" "}
    </Router>
  );
}

export default App;
