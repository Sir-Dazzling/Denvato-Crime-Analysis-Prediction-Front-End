import axios from 'axios';
import {setAlert} from '../alert/alert.actions';
import {REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR} from '../types';

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
export const register = (username, email, password) => async (dispatch) =>
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
        const res = await axios.post("http://localhost:8080/api/auth/signup", body, config);  
        
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
        })

        dispatch(loadUser());

    } catch (err) 
    {
        dispatch(setAlert(err.response.data.message, "red"));

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
    dispatch(setAlert(err.response.data.message, "red"));

    dispatch({
      type: LOGIN_FAIL
    })
  }
}