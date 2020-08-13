import { userConstants } from '../user/UserTypes';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) 
{
    switch (action.type) {
    case userConstants.LOGIN_REQUEST:
        return {
        loggingIn: true,
        user: action.user
        };
    case userConstants.LOGIN_SUCCESS:
        return {
        loggedIn: true,
        user: action.user
        };
    case userConstants.LOGIN_FAILURE:
        return {};

    case userConstants.SIGNUP_REQUEST:
        return {
            signingUp: true,
            user: action.user
        };
    case userConstants.SIGNUP_SUCCESS:
            return {
                signingUp: true,
                user: action.user
            }
    case userConstants.SIGNUP_FAILURE:
        return {};
    case userConstants.VERIFY_ACCOUNT_REQUEST:
        return {
            verifying: true,
            user: action.user
        };
    case userConstants.VERIFY_ACCOUNT_SUCCESS:
        return {
            verifying: true,
            user: action.user
        };
    case userConstants.VERIFY_ACCOUNT_FAILURE:
        return {};

    case userConstants.CONFIRM_ACCOUNT_REQUEST:
            return {
                verifying: true,
                user: action.user
            };
        case userConstants.CONFIRM_ACCOUNT_SUCCESS:
            return {
                verifying: true,
                user: action.user
            };
        case userConstants.CONFIRM_ACCOUNT_FAILURE:
            return {};
    
    case userConstants.LOGOUT:
        return {};
        
    default:
        return state
    }
}