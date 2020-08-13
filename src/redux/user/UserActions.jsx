import { userConstants } from './UserTypes';
import { userService } from './UserSelector';
import { alertActions } from '../alert/AlertActions';
import { history } from '../../helpers/History';

export const userActions = 
{
    login,
    signUp,
    verifyAccount,
    confirmEmailVerification,
    logout,
    getAll,
    getUserDashboard,
    getContentManagerHub
};

function login(username, password) 
{
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                     history.push('/user_dashboard');
                     window.location.reload();
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                    alert("Invalid Credentials!!!")
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function signUp(email, username, password)
{
    return dispatch => {
        dispatch(request({ email, username }));

        userService.signUp(email, username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/')
                    window.location.reload();
                    alert("Successfully Registered Account...now please Login");
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.SIGNUP_REQUEST, user } }
    function success(user) { return { type: userConstants.SIGNUP_SUCCESS, user } }
    function failure(error) { return { type: userConstants.SIGNUP_FAILURE, error } }
}

function verifyAccount(email)
{
    return dispatch => {
        dispatch(request({email}));

        userService.verifyAccount(email)
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.VERIFY_ACCOUNT_REQUEST, user } }
    function success(user) { return { type: userConstants.VERIFY_ACCOUNT_SUCCESS, user } }
    function failure(error) { return { type: userConstants.VERIFY_ACCOUNT_FAILURE, error } }
}

function confirmEmailVerification(token)
{
    return dispatch => {
        dispatch(request({token}));

        userService.confirmEmailVerification(token)
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.CONFIRM_ACCOUNT_REQUEST, user } }
    function success(user) { return { type: userConstants.CONFIRM_ACCOUNT_SUCCESS, user } }
    function failure(error) { return { type: userConstants.CONFIRM_ACCOUNT_FAILURE, error } }
}

function logout() 
{
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() 
{
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                data => {
                    dispatch(success(data))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(data) { return { type: userConstants.GETALL_SUCCESS, data } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function getUserDashboard() 
{
    return dispatch => {
        dispatch(request());

        userService.getUserDashboard()
            .then(
                response => dispatch(success(response)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETUSERDASHBOARD_REQUEST} }
    function success(response) { return { type: userConstants.GETUSERDASHBOARD_SUCCESS, response } }
    function failure(error) { return { type: userConstants.GETUSERDASHBOARD_FAILURE, error } }
}

function getContentManagerHub() 
{
    return dispatch => {
        dispatch(request());

        userService.getContentManagerHub()
            .then(
                response => dispatch(success(response)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETCONTENTMANAGER_REQUEST} }
    function success(response) { return { type: userConstants.GETCONTENTMANAGER_SUCCESS, response } }
    function failure(error) { return { type: userConstants.GETCONTENTMANAGER_FAILURE, error } }
}