import { all } from 'redux-saga/effects';

import user from './user/sagas';
import teams from './teams/sagas';
import projects from './projects/sagas';

export default function* rootSaga() {
  return yield all([user, teams, projects]);
}
