import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { getProjectsSuccess, createProjectsSuccess } from './actions';
import api from '~/services/api';

function* getProjects() {
  const response = yield call(api.get, 'projects');

  yield put(getProjectsSuccess(response.data));
}

function* createProjects({ titleProject }) {
  try {
    const response = yield call(api.post, 'projects', {
      title: titleProject,
    });

    // yield put(createProjectsSuccess(response.data));
    toast.success('Novo projeto criado');
  } catch (error) {
    toast.warn('Erro ao criar projeto');
  }
}

export default all([
  takeLatest('@projects/GET_PROJECTS_REQUEST', getProjects),
  takeLatest('@projects/CREATE_PROJECTS_REQUEST', createProjects),
]);
