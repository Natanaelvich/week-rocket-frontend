import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { createMemberSuccess, getMembersSuccess } from './actions';
import api from '~/services/api';

function* getMembers() {
  try {
    const response = yield call(api.get, 'members');

    yield put(getMembersSuccess(response.data));
  } catch (error) {
    toast.warn('🤷‍♂️ Erro ao buscar membros!');
  }
}

function* createMember({ emailInvite }) {
  try {
    const response = yield call(api.post, 'members', {
      email: emailInvite,
    });

    yield put(createMemberSuccess(response.data));
    toast.success('🚀 Convite enviado!');
  } catch (error) {
    toast.warn('🤷‍♂️ Erro ao enviar convite!');
  }
}

function* updateMember({ update }) {
  console.log(update);
  try {
    yield call(api.put, `members/${update.id}`, {
      roles: update.roles.map(role => role.id),
    });

    toast.success('🚀 Membro atualizadp!');
  } catch (error) {
    toast.error('🤷‍♂️ Erro ao mudar permissão!');
  }
}

export default all([
  takeLatest('@members/GET_MEMBERS_REQUEST', getMembers),
  takeLatest('@members/CREATE_MEMBER_REQUEST', createMember),
  takeLatest('@members/UPDATE_MEMBERS_REQUEST', updateMember),
]);
