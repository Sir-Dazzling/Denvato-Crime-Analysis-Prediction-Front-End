import { combineReducers } from 'redux';

import authReducer from './auth/auth.reducer';
import alertReducer from './alert/alert.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer
});

export default rootReducer;