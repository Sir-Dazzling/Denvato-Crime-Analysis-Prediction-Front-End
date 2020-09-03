import {REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR, ACCESS_GRANTED, ACCESS_DENIED} from '../types';

const initialState = 
{
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  accessGranted: false
};

export default function (state = initialState, action)
{
    const {type, payload} = action;

    switch (type) 
    {
        case USER_LOADED:
            return {
              ...state,
              isAuthenticated: true,
              loading: false,
              user: payload
            };
        case ACCESS_GRANTED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                accessGranted: true
            }
        case ACCESS_DENIED:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                accessGranted: false
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.accessToken);
            console.log("Access token is "+payload.accessToken);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
            localStorage.removeItem("token");
            return {
            ...state,
            token: null,
            isAuthenticated: false,
            loading: false
            };

        default:
            return state;
    }
}