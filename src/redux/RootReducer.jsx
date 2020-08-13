import { combineReducers } from 'redux';

import { authentication } from './authentication/AuthenticationReducer';
import { users } from './user/UserReducer';
import { alert } from './alert/AlertReducer';

const rootReducer = combineReducers({
  authentication,
  users,
  alert
});

export default rootReducer;