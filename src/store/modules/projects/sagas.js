import { call, put, all, takeLatest } from 'redux-saga/effects';
import { getProjectsSuccess } from './actions';
import api from '~/services/api';

function* getProjects() {
  const response = yield call(api.get, 'projects');

  yield put(getProjectsSuccess(response.data));
}

export default all([
  takeLatest('@projects/GET_PROJECTS_REQUEST', getProjects),
]);
