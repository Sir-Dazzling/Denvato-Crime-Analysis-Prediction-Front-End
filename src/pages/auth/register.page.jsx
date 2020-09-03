import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './auth.style.scss';
import authImage from '../../images/image.jpg';

const RegisterPage = () => 
{
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors:
    {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
});

  const {username, email, password, confirmPassword} = formData;
  console.log("Form data is "+formData.username)

  //Regex test for checking if username is valid
  const usernameRegex = new RegExp("^[a-zA-Z0-9_-]{5,15}$");
    
  // Regex test for checking if password is valid
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

  // Checking if form data values are valid
  const validateForm = (errors) => 
  {
      let valid = true;
      Object.values(errors).forEach(
        // if we have an error string set valid to false
        (val) => val.length > 0 && (valid = false)
      );
      return valid;
  }

  // On change action handler and to map errors to state
  const onChange = (e) => 
  {
    const { name, value } = e.target;

    switch (name) 
    {
        case "username":
            formData.errors.username = usernameRegex.test(value) ? "" : "Username must be 5-15 character long and no special characters allowed (except underscores)!";
            break;
        case "password":
          formData.errors.password = strongRegex.test(value) ? "" : "Your password must contain at least 1 lowercase, uppercase, numeric, special charcters([!@#$%^&*]) and must be at least 8 characters long!";
            break;
        case "confirmPassword":
          formData.errors.confirmPassword = value.localeCompare(formData.password) ? "Password value must be equal with Confirm password" : "";
            break;
        default:
            break;
    }

    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  }; 

  // On submit action handler
  const onSubmit = (e) => 
  {
    e.preventDefault();
    if(!validateForm(formData.errors))
    {
      // setAlert("Oops!!!, There are error(s) with ur form", "red");
      console.log(formData.errors);
    } else
    {
      console.log(username + email + password);
      // register(username, email, password);
    }
  };

  return(
      <div className="signupform">
        <div className="container">
          <div className="agile_info">
            <div className="w3l_form">
              <div className="left_grid_info">
                <h1>Hey there, welcome!!!</h1>
                <img src={authImage} alt="" />
              </div>
            </div>
            <div className="w3_info">
              <h2>Create an Account</h2>
              <p>Enter your details to register.</p>
              <form onSubmit={e => onSubmit(e)}>
                <label>Email Address</label>
                <div className="input-group">
                  <span className="fa fa-envelope" aria-hidden="true"></span>
                  <input type="email" placeholder="Enter Your Email" name = "email" required value = {email} onChange = {e => onChange(e)} />
                  {formData.email.length > 0 && <span className='ml-2 text-xxs text-red-500'>{formData.errors.email}</span>} 
                </div>

                <label>Username</label>
                <div className="input-group">
                  <span className="fa fa-user" aria-hidden="true"></span>
                  <input type="text" placeholder="Enter Your username" name = "username" value = {username} required  onChange = {e => onChange(e)} style = {{width: "93%"}}/> 
                  {formData.username.length > 0 && <span className='ml-2 text-xxs text-red-500'>{formData.errors.username}</span>}
                </div>

                <label>Password</label>
                <div className="input-group">
                  <span className="fa fa-lock" aria-hidden="true"></span>
                  <input type="Password" placeholder="Enter Password" name = "password" required="" value = {password} onChange = {e => onChange(e)} />
                  {formData.password.length > 0 && <span className='ml-2 text-xxs text-red-500'>{formData.errors.password}</span>}
                </div> 

                <label>Confirm Password</label>
                <div className="input-group">
                  <span className="fa fa-lock" aria-hidden="true"></span>
                  <input type="Password" placeholder="Confirm Password" name = "confirmPassword" required="" value = {confirmPassword} onChange = {e => onChange(e)} />
                  {formData.confirmPassword.length > 0 && <span className='ml-2 text-xxs text-red-500'>{formData.errors.confirmPassword}</span>}
                </div> 
					
                <button className="btn  btn-block" type="submit" style={{background: "#262d4e", color: "white"}}>Register</button >
              </form>
              <p className="account1">Have an account? <Link to = "/login">Login here</Link></p>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>&copy; 2020 Denvato Crime Analytics. All Rights Reserved | Design by <Link to = "/" target="blank">Otti Daniel</Link></p>
        </div>
    </div>

  );
};

export default RegisterPage;