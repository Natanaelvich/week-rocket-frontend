import { combineReducers } from 'redux';

import user from './user/reducer';
import teams from './teams/reducer';
import projects from './projects/reducer';
import members from './members/reducer';

export default combineReducers({
  user,
  teams,
  projects,
  members,
});
