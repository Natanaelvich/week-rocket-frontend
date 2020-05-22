import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Container, SignIN } from '../styles';
import { Button } from '~/styles/components/Button';
import { signInRequest } from '~/store/modules/user/actions';

function SignIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <SignIN onSubmit={handleSubmit}>
        <h1>Boas vindas</h1>

        <span>E-Mail</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={text => setEmail(text.target.value)}
        />
        <span>SENHA</span>
        <input
          type="text"
          name="password"
          value={password}
          onChange={text => setPassword(text.target.value)}
        />

        <Button size="big" type="submit">
          ENTRAR
        </Button>
      </SignIN>
    </Container>
  );
}

export default SignIn;
