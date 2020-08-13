import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './helpers/History';
import { alertActions } from './redux/alert/AlertActions';
import Homepage from './pages/Homepage/Homepage';
import Authpage from './pages/Authpage/Authpage';
import Dashboard from './pages/Dashboard/Dashboard';
import UserDashboardPage from  './pages/UserDashboard/UserDashboardPage';
import ContentManagerHubPage from './pages/ContentManagerHub/ContentManagerHubPage';
import AdminHubPage from  './pages/AdminHub/AdminHubPage';

class App extends React.Component
{

  constructor(props) 
  {
      super(props);

      const { dispatch } = this.props;
      history.listen((location, action) => 
      {
          // clear alert on location change
          dispatch(alertActions.clear());
      });

      this.state = {
          currentUser: undefined
      };

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
            <Route exact path = "/auth" component = {Authpage} />
            <Route exact path = "/dashboard" component = {Dashboard} />
            <Route exact path="/user_dashboard" render={() => !this.props.user? (<Redirect to="/auth" />) : (<UserDashboardPage />) }/>
            <Route exact path="/content_manager_hub" render={() => !this.props.user? (<Redirect to="/auth" />) : (<ContentManagerHubPage />) }/>
            <Route exact path="/admin_hub" render={() => !this.props.user? (<Redirect to="/auth" />) : (<AdminHubPage />) }/>
          </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) 
{
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

export default connect(mapStateToProps)(App);