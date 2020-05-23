import { combineReducers } from 'redux';

import user from './user/reducer';
import teams from './teams/reducer';

export default combineReducers({
  user,
  teams,
});
