import { call, put, all, takeLatest } from 'redux-saga/effects';
import { signInSuccess } from './actions';
import api from '~/services/api';

function* signIn({ payload }) {
  try {
    const response = yield call(api.post, 'sessions', {
      email: payload.email,
      password: payload.password,
    });
    localStorage.setItem('@week:token', response.data.token);
    yield put(signInSuccess(response.data.token));
  } catch (error) {
    console.log(error);
  }
}

export default all([takeLatest('@user/SIGN_IN_REQUEST', signIn)]);
