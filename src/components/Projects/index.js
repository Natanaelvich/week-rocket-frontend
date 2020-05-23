import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProjectsRequest } from '~/store/modules/projects/actions';

import { Container, Project } from './styles';
import { Button } from '~/styles/components/Button';

function Projects() {
  const dispatch = useDispatch();

  const activeTeam = useSelector(state => state.teams.active);
  const projects = useSelector(state => state.projects.data);

  function getProjects() {
    dispatch(getProjectsRequest());
  }

  useEffect(() => {
    if (activeTeam) {
      getProjects();
    }
  });

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

          {projects &&
            projects.map(project => (
              <Project key={project.id}>
                <p>{project.title}</p>
              </Project>
            ))}
        </Container>
      )}
    </>
  );
}

export default Projects;
