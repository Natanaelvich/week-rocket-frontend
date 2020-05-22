import React from 'react';

import { Container, SignIN } from '../styles';
import { Button } from '~/styles/components/Button';

function SignIn() {
  return (
    <Container>
      <SignIN>
        <h1>Boas vindas</h1>

        <span>E-Mail</span>
        <input type="text" name="email" />
        <span>SENHA</span>
        <input type="text" name="password" />

        <Button size="big" type="submit">
          ENTRAR
        </Button>
      </SignIN>
    </Container>
  );
}

export default SignIn;
