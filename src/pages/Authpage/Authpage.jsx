import React from 'react';

import './Authpage.style.scss';
import authImage from '../../images/image.jpg' ;

const Authpage = () => 
{
    return(
        <div class="signupform">
	<div class="container">

		<div class="agile_info">
			<div class="w3l_form">
				<div class="left_grid_info">
					<h1>Welcome, we missed you!!!</h1>
					<img src={authImage} alt="" />
				</div>
			</div>
			<div class="w3_info">
				<h2>Login to your Account</h2>
				<p>Enter your details to login.</p>
				<form action="#" method="post">
					<label>Email Address</label>
					<div class="input-group">
						<span class="fa fa-envelope" aria-hidden="true"></span>
						<input type="email" placeholder="Enter Your Email" required="" /> 
					</div>
					<label>Password</label>
					<div class="input-group">
						<span class="fa fa-lock" aria-hidden="true"></span>
						<input type="Password" placeholder="Enter Password" required="" />
					</div> 
					<div class="login-check">
						 <label class="checkbox"><input type="checkbox" name="checkbox" checked="" /><i> </i> Remember me</label>
					</div>						
						<button class="btn  btn-block" type="submit" style={{background: "#262d4e"}}>Login</button >                
				</form>
				<p class="account1">Dont have an account? <a href="#">Register here</a></p>
			</div>
		</div>

	</div>

	<div class="footer">
		<p>&copy; 2020 Denvato Crime Analytics. All Rights Reserved | Design by <a href="" target="blank">Otti Daniel</a></p>
	</div>
</div>

    );
};

export default Authpage;