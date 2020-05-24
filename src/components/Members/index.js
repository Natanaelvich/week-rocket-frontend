import React from 'react';

import { useDispatch } from 'react-redux';
import { MembersList } from './styles';
import Modal from '../Modal';
import { Button } from '~/styles/components/Button';
import { closeMembersModal } from '~/store/modules/members/actions';

function Members() {
  const dispatch = useDispatch();
  return (
    <Modal size="big">
      <h1>Membros</h1>

      <form>
        <MembersList>
          <li>
            <strong>Natanael</strong>
          </li>
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
