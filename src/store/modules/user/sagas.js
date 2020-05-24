import {
  call,
  put,
  all,
  takeLatest,
  select,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  signInSuccess,
  signUpSuccess,
  getPermissionsSuccess,
} from './actions';
import api from '~/services/api';
import history from '~/services/services';

function* signIn({ payload }) {
  try {
    const response = yield call(api.post, 'sessions', {
      email: payload.email,
      password: payload.password,
    });

    localStorage.setItem('@week:token', response.data.token);
    yield put(signInSuccess(response.data.token));

    history.push('/');
  } catch (error) {
    toast.warn('🤷‍♂️ Erro no login!');
  }
}

function* signUp({ payload }) {
  try {
    const response = yield call(api.post, 'users', {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    });

    localStorage.setItem('@week:token', response.data.token);
    yield put(signUpSuccess(response.data.token));
    toast.success('🚀 Cadastrado com sucesso!');
    history.push('/');
  } catch (error) {
    toast.warn('🤷‍♂️ Você não possui convites de nenhum time!');
  }
}

function* getPermissions() {
  try {
    const team = yield select(state => state.teams.active);
    const signedIn = yield select(state => state.user.signedIn);

    if (!signedIn || !team) {
      return;
    }

    const response = yield call(api.get, 'permissions');

    const { roles, permissions } = response.data;

    yield put(getPermissionsSuccess(roles, permissions));
    history.push('/');
  } catch (error) {
    toast.warn('🤷‍♂️ Não foi possivel recuperar as permissiões!');
  }
}

export default all([
  takeLatest('@user/SIGN_IN_REQUEST', signIn),
  takeLatest('@user/SIGN_UP_REQUEST', signUp),
  takeLatest('@user/GET_PERMISSIONS_REQUEST', getPermissions),
  takeLatest('@teams/SELECT_TEAM', getPermissions),
]);
