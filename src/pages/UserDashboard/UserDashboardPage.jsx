import React from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import {userService} from '../../redux/user/UserSelector';
import {userActions} from '../../redux/user/UserActions';

class UserDashboardPage extends React.Component 
{
    constructor(props) 
    {
        super(props);

        this.state = 
        {
            accessGranted: true
        }
    }

    componentDidMount()
    {
        // Requesting for access to content manager page from  spring boot rest api server
        userService.getUserDashboard().then(
            response => 
            {
                if(response.ok)
                {
                    this.setState({
                        accessGranted: true
                    });
                    console.log(response)
                }
                else
                {
                    this.setState({
                        accessGranted: false
                    });
                }
                
                console.log("Access Granted "+response.ok);
            }
        )

    }

    // Function to verify account
    verifyAccount()
    {
        const {user} = this.props;

        console.log(user.email);

        //dispatch(userActions.verifyAccount(user.email));
    }


    render() 
    {
        
        const {accessGranted} = this.state;
        const {user, dispatch, verifying} = this.props;

        console.log(user);
        console.log(accessGranted);

        const verifyAccount = () => 
        {
            dispatch(userActions.verifyAccount(user.email));
        };

        if(accessGranted)
        {
            if(!user.enabled)
            {
                return (
                    <div className="col-md-6 col-md-offset-3">
                        {!user.message ? <p>Activate Your Account now </p> : null}
                        <h3>{user.username}</h3>
                        {user.message ? <h1>{user.message} <a to = "/verify-account">Click here to enter verfication token</a></h1> :
                        <button  className="nav-link" onClick = {verifyAccount}>
                            Send Verification Link to my Mail.
                            {verifying ?
                            <img alt = "Login/SignUp Avatar" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        : null}
                        </button>}
                 </div> 
                );
                
            }
            else
            {
                return (
                    <div className="col-md-6 col-md-offset-3">
                       This is the User Dashboard
                        <h3>{user.username}</h3>
                        <a href="/" className="nav-link" onClick={userActions.logout}>
                            LogOut
                        </a>
                    </div>
                );
            }
        }

        else 
        {
            userActions.logout();
            return(
                <Redirect to = "/auth" />
            );
            
        }
             
    }

}

function mapStateToProps(state) 
{
    const { verifying } = state.authentication;
    const { authentication } = state;
    const { user } = authentication;
    return {
        user,
        verifying
    };
}

export default connect(mapStateToProps)(UserDashboardPage);