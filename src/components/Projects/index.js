import React from 'react';

import { useSelector } from 'react-redux';
import { Container, Project } from './styles';
import { Button } from '~/styles/components/Button';

function Projects() {
  const activeTeam = useSelector(state => state.teams.active);
  return (
    <>
      {activeTeam && (
        <Container>
          <header>
            <h1>{activeTeam.name}</h1>

            <div>
              <Button>+ Novo</Button>
              <Button>Membros</Button>
            </div>
          </header>

          <Project>
            <p>Aplicação com react native</p>
          </Project>
        </Container>
      )}
    </>
  );
}

export default Projects;
