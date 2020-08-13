import React from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import {userService} from '../../redux/user/UserSelector';
import {userActions} from '../../redux/user/UserActions';

class AdminHubPage extends React.Component 
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
        userService.getAdminHub().then(
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

    render() 
    {
        const {accessGranted} = this.state;
        const {user} = this.props;
        console.log(user);
        console.log(accessGranted);
        if(accessGranted)
        {
            return (
                <div className="col-md-6 col-md-offset-3">
                    <h3>Welcome {user.username}</h3>
                   This is the Admin Hub Page
                   <a href="/" className="nav-link" onClick={userActions.logout}>
                        LogOut
                    </a>
                </div>
            ); 
        }
        else
        {
            userActions.logout();
            return <Redirect to = "/auth" />;  
        }
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

export default connect(mapStateToProps)(AdminHubPage);