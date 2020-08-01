import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import Homepage from './pages/Homepage/Homepage';
import Authpage from './pages/Authpage/Authpage';

class App extends React.Component
{

  render() 
  {
    return (
      <div>
        <Switch>
            <Route exact path= {["/", "/home"]} component = {Homepage} />
            <Route exact path = "/auth" component = {Authpage} />
          </Switch>
      </div>
    );
  }
}

export default App;