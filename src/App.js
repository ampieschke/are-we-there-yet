<<<<<<< HEAD

import React from "react";
// import { Render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Welcome from "./pages/welcome";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import QuestionSwitch from "./Components/QuestionSwitch";
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/topic" exact component={QuestionSwitch} />
        </Switch>
      </div>
=======
import React from 'react';
import { Render } from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from "./Components/Navbar"
import Welcome from "./pages/welcome"
import Login from "./pages/login"
import SignUp from "./pages/signup"
import InstructorTopicPage from "./pages/instructorTopicPage"

function App (){
    return(
    <Router>
    <div>
    <NavBar />
    <Switch>
        <Route path="/" exact component={Welcome}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/topiclist" exact component={InstructorTopicPage}/>
    </Switch>
    </div>
>>>>>>> ed9876a41e557cbbe785b0f0a219f2f1fa42c0be
    </Router>
  );
}
export default App;
