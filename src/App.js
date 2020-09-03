import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import Homepage from './pages/Homepage/Homepage';
import LoginPage from './pages/auth/login';
import Dashboard from './pages/Dashboard/Dashboard';
import UserDashboardPage from  './pages/UserDashboard/UserDashboardPage';
import RegisterPage from './pages/auth/register.page';

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
        <Switch>
            <Route exact path= {["/", "/home"]} component = {Homepage} />
            <Route exact path = "/login" component = {LoginPage} />
            <Route exact path = "/register" component = {RegisterPage} />
            <Route exact path = "/dashboard" component = {Dashboard} />
            <Route exact path="/user_dashboard" render={() => !this.props.user? (<Redirect to="/auth" />) : (<UserDashboardPage />) }/>
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