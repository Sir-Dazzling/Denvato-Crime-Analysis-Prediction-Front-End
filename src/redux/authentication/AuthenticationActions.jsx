import {authConstants} from './AuthenticationTypes';
import {authService} from './AuthenticationSelector';

export const authActions = 
{
    getCurrentUser
};

function getCurrentUser()
{
    authService.getCurrentUser();
    return { type: authConstants.GET_CURRENT_USER};
};