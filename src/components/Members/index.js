import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Select from 'react-select';
import { MembersList, Invite } from './styles';
import Modal from '../Modal';
import { Button } from '~/styles/components/Button';
import {
  closeMembersModal,
  getMembersRequest,
  updateMembersRequest,
} from '~/store/modules/members/actions';
import api from '~/services/api';
import { inviteMembersRequest } from '~/store/modules/invites/actions';
import Can from '../Can';

function Members() {
  const dispatch = useDispatch();

  const members = useSelector(state => state.members);

  const [roles, setRoles] = useState([]);
  const [invite, setInvite] = useState([]);

  useEffect(() => {
    async function getRoles() {
      try {
        const response = await api.get('roles');

        setRoles(response.data);
      } catch (error) {
        toast.error('Erro ao buscar permissions');
      }
    }
    function getmembers() {
      getRoles();
      dispatch(getMembersRequest());
    }

    getmembers();
  }, [dispatch]);

  function handleRolesChange(id, rolesUpdate) {
    dispatch(updateMembersRequest(id, rolesUpdate));
  }

  function handleInvite(e) {
    e.preventDefault();

    dispatch(inviteMembersRequest(invite));
  }

  return (
    <Modal size="big">
      <h1>Membros</h1>

      <Can checkPermission="invites_create">
        <Invite onSubmit={handleInvite}>
          <input
            type="text"
            placeholder="Convidar para o time"
            value={invite}
            onChange={text => setInvite(text.target.value)}
          />

          <Button type="submit">Enviar</Button>
        </Invite>
      </Can>

      <form>
        <MembersList>
          {members &&
            members.data.map(member => (
              <li key={member.user.id}>
                <strong>{member.user.name}</strong>

                <Can checkRole="admnistrador">
                  <Select
                    isMulti
                    options={roles}
                    getOptionLabel={role => role.name}
                    getOptionValue={role => role.id}
                    value={member.roles}
                    onChange={value =>
                      handleRolesChange(member.id, value)
                    }
                  />
                </Can>
              </li>
            ))}
        </MembersList>

        <Button
          onClick={() => dispatch(closeMembersModal())}
          filled={false}
          color="gray"
        >
          Cancelar
        </Button>
      </form>
    </Modal>
  );
}

export default Members;
