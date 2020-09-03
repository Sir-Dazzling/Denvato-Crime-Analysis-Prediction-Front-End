import axios from 'axios';
import {setAlert} from '../alert/alert.actions';
import {REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR, ACCESS_GRANTED, ACCESS_DENIED} from '../types';

// To load User
export const loadUser = () => async (dispatch) => 
{
    try {
        const res = await axios.get("http://localhost:8080/api/account/me", {
          headers: {
            Authorization: "Bearer " + localStorage.token,
          },
        });
    
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        });
    } catch (error) 
    {
        dispatch({
          type: AUTH_ERROR,
        });
    }
};

//To Register a User
export const register = ({username, email, password}) => async (dispatch) =>
{
    const config = 
    {
        headers: 
        {
        "Content-Type": "application/json"
        }
    };

    const body = JSON.stringify({username, email, password});

    try 
    {
        const res = await axios.post("http://localhost:8080/api/auth/register", body, config);  
        
        dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
        })

        dispatch(loadUser());

    } catch (err) 
    {
        const errors = err.response.data.errors;

        if(errors)
        {
        // console.error("error is "+errors.msg)
        errors.forEach(error => console.log("error is: "+error.msg));
        errors.forEach(error => dispatch(setAlert(error.msg, "red")));
        }

        dispatch({
        type: REGISTER_FAIL
        })
    }
}

//To Login user
export const login = (usernameOrEmail, password) => async (dispatch) =>
{
  const config = 
  {
    headers: 
    {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({usernameOrEmail, password});

  try 
  {
    const res = await axios.post("http://localhost:8080/api/auth/signin", body, config);
     
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })

    dispatch(loadUser());

  } catch (err) 
  {
    console.log(err.response.data.message);
    dispatch(setAlert(err.response.data.message, "danger"));

    dispatch({
      type: LOGIN_FAIL
    })
  }
}