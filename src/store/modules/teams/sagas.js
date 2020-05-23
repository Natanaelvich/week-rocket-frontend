import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { getTeamsSuccess } from './actions';
import api from '~/services/api';

function* getTeams() {
  try {
    const response = yield call(api.get, 'teams');

    yield put(getTeamsSuccess(response.data));
  } catch (error) {
    console.log(error);
    toast.warn('🤷‍♂️ Erro ao buscar times!');
  }
}

export default all([
  takeLatest('@teams/GET_TEAMS_REQUEST', getTeams),
]);
