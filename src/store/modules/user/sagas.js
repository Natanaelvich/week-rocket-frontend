import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { signInSuccess } from './actions';
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

export default all([takeLatest('@user/SIGN_IN_REQUEST', signIn)]);
