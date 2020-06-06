import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  getTeamsSuccess,
  createTeamSuccess,
  closeTeamModal,
} from './actions';
import api from '~/services/api';

function* getTeams() {
  try {
    const response = yield call(api.get, 'teams');

    yield put(getTeamsSuccess(response.data));
  } catch (error) {
    toast.warn('🤷‍♂️ Erro ao buscar times!');
  }
}

function* createTeam({ nameTeam }) {
  try {
    const response = yield call(api.post, 'teams', {
      name: nameTeam,
    });

    // yield put(createTeamSuccess(response.data));
    yield put(closeTeamModal());
    toast.success('🚀 Novo time criado!');
  } catch (error) {
    toast.warn('🤷‍♂️ Erro ao criar time!');
  }
}

export default all([
  takeLatest('@teams/GET_TEAMS_REQUEST', getTeams),
  takeLatest('@teams/CREATE_TEAM_REQUEST', createTeam),
]);
