import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {login} from '../../redux/auth/auth.actions';

import './auth.style.scss';
import authImage from '../../images/image.jpg';

const LoginPage = ({login, isAuthenticated}) => 
{
	const [formData, setFormData] = useState({
        usernameOrEmail: "",
        password: ""
	});

	const {usernameOrEmail, password} = formData;

	const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

	const onSubmit = (e) => 
    {
        e.preventDefault();

		login(usernameOrEmail, password);
		// console.log("Lggged in");
	};
	
	// Redirect if logged in
    if(isAuthenticated)
    {
        return <Redirect to = "/dashboard" />
    }
	
    return(
        <div className="signupform">
			<div className="container">

				<div className="agile_info">
					<div className="w3l_form">
						<div className="left_grid_info">
							<h1>Welcome, we missed you!!!</h1>
							<img src={authImage} alt="" />
						</div>
					</div>
					<div className="w3_info">
						<h2>Login to your Account</h2>
						<p>Enter your details to login.</p>
						<form onSubmit = {e => onSubmit(e)}>
							<label>Username or Email Address</label>
							<div className="input-group">
								<span className="fa fa-envelope" aria-hidden="true"></span>
								<input type="text" placeholder="Enter Your Username or Email" required value = {usernameOrEmail} name = "usernameOrEmail" onChange = {e => onChange(e)} style = {{width: "93%"}} /> 
							</div>
							<label>Password</label>
							<div className="input-group">
								<span className="fa fa-lock" aria-hidden="true"></span>
								<input type="password" placeholder="Enter Password" required value = {password} name = "password" onChange = {e => onChange(e)} />
							</div> 
							<div className="login-check">
								<label className="checkbox"><input type="checkbox" name="checkbox" checked="" /><i> </i> Remember me</label>
							</div>						
								<button className="btn  btn-block" type="submit" style={{background: "#262d4e", color: "white"}}>Login</button >
						</form>
						<p className="account1">Dont have an account? <Link to = "/register">Register here</Link></p>
					</div>
				</div>
			</div>

	<div className="footer">
		<p>&copy; 2020 Denvato Crime Analytics. All Rights Reserved | Design by <a href="" target="blank">Otti Daniel</a></p>
	</div>
</div>

    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

LoginPage.propTypes = 
{
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

export default connect(mapStateToProps, {login})(LoginPage);