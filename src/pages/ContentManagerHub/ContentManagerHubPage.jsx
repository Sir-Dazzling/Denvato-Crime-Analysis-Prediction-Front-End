import React from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import {userService} from '../../redux/user/UserSelector';
import {userActions} from '../../redux/user/UserActions';


class ContentManagerHubPage extends React.Component 
{
    constructor(props) 
    {
        super(props);

        this.state = 
        {
            accessGranted: false
        }

    }

    componentDidMount()
    {
        // Requesting for access to content manager page from  spring boot rest api server
        userService.getContentManagerHub().then(
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
        if(user.roles.includes("ROLE_CONTENT_MANAGER"))
        {
            return (
                <div className="col-md-6 col-md-offset-3">
                    <h3>Welcome {user.username}</h3>
                   This is the Content Manager Hub Page
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

export default connect(mapStateToProps)(ContentManagerHubPage);