import {v5 as uuid} from 'uuid';
import {SET_ALERT, CLEAR_ALERT} from '../types';

export const setAlert = (message, alertType) => (dispatch) => 
{
    const id = uuid;
    dispatch({
        type: SET_ALERT,
        payload: { message, alertType, id}
    });

    // To clear alert popup after 5 secs
    setTimeout(() => dispatch({ type: CLEAR_ALERT, payload: id}), 5000);
};