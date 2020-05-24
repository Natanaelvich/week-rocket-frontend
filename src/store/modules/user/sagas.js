import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { signInSuccess, signUpSuccess } from './actions';
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

export default all([
  takeLatest('@user/SIGN_IN_REQUEST', signIn),
  takeLatest('@user/SIGN_UP_REQUEST', signUp),
]);
