import { authHeader } from '../../helpers/AuthHeader';

const API_URL = "http://localhost:8080/api/";

export const userService = 
{
    login,
    signUp,
    verifyAccount,
    confirmEmailVerification,
    logout,
    getAll,
    getUserDashboard,
    getContentManagerHub,
    getAdminHub,
    handleResponse
};

function login(username, password) 
{
    const requestOptions = 
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch( API_URL + "auth/signin", requestOptions)
        .then(handleResponse)
        .then( user => {
            // login successful if there's a jwt token in the response
            if (user.accessToken) 
            {
                console.log(user.accessToken);
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                return user;
            }
        });
}

function signUp(email, username, password)
{
    const requestOptions = 
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username, email, password})
    };

    return fetch(API_URL + "auth/signup", requestOptions)
        .then(handleResponse)
        .then( user => {
            if (user.message) 
            {
                console.log(user.message);
                return user;
            }
        });
}

function verifyAccount(email)
{
    const requestOptions = 
    {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email})
    };

    return fetch(API_URL + "auth/verify-account", requestOptions)
        .then(handleResponse)
        .then(response => {
            if(response.message)
            {
                console.log(response.message);
                return response;
            }
        });
}

function confirmEmailVerification(token)
{

    const requestOptions = 
    {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({token})
    };


    console.log(token);
    return fetch(API_URL + "auth/confirm-account-through-mail", requestOptions)
        .then(handleResponse)
        .then(response => {
            if(response.message)
            {
                console.log(response.message);
                return response;
            }
        });
}

function logout() 
{
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}


function getAll()
{
    const requestOptions = 
    {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(API_URL + "test/all", requestOptions).then((response) => handleResponse(response));
}

function getUserDashboard()
{
    const requestOptions = 
    {
        method: "GET",
        headers: authHeader()
    };
    

    return fetch(API_URL + "test/user_dashboard", requestOptions);
}

function getContentManagerHub()
{
    const requestOptions = 
    {
        method: "GET",
        headers: authHeader()
    };

    return fetch(API_URL + "test/content_manager", requestOptions);
}

function getAdminHub()
{
    const requestOptions = 
    {
        method: "GET",
        headers: authHeader()
    };

    return fetch(API_URL + "test/admin", requestOptions);
}

function handleResponse(response) 
{
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) 
        {
            if (response.status === 401) 
            {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
       
        return data;
    });
}