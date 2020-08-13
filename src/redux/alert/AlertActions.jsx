import { alertConstants } from '../alert/AlertTypes';

export const alertActions = 
{
    success,
    error,
    clear
};

function success(message)
{
    return { type: alertConstants.ALERT_SUCCESS, message };
}

function error(message) 
{
    return { type: alertConstants.ALERT_ERROR, message };
}

function clear() 
{
    return { type: alertConstants.CLEAR };
}