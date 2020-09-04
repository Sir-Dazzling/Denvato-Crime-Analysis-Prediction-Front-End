import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import HomePage from './pages/homepage/HomePage';
import UserDashboard from './pages/dashboards/UserDashboard';
import Alert from './components/alert/Alert';

import "@fortawesome/fontawesome-free/css/all.min.css";


class App extends React.Component
{

  constructor(props) 
  {
      super(props);
  }

  // When Component finishes mounting
  componentDidMount() 
  {
      const {user}  = this.props;
      
      if(user)
      {
          console.log("username is "+user.username);
          this.setState({
              currentUser: user
          })
      }
      else
      {
        console.log("User not found");
      }
  }

  render() 
  {
    return (
      <div>
        <Alert />
        <Switch>
            <Route exact path= "/" component = {HomePage} />
            <Route exact path = "/login" component = {LoginPage} />
            <Route exact path = "/signup" component = {RegisterPage} />
            <Route exact path = "/mydashboard" component = {UserDashboard} />
          </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) 
{
    const { auth } = state;
    const { user } = auth;
    return {
        user
    };
}

export default connect(mapStateToProps)(App);