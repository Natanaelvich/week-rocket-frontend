import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getProjectsRequest,
  openProjectModal,
  closeProjectModal,
  createProjectsRequest,
} from '~/store/modules/projects/actions';

import { Container, Project } from './styles';
import { Button } from '~/styles/components/Button';
import Modal from '../Modal';
import { openMembersModal } from '~/store/modules/members/actions';
import Members from '../Members';
import Can from '../Can';

function Projects() {
  const dispatch = useDispatch();

  const activeTeam = useSelector(state => state.teams.active);
  const projects = useSelector(state => state.projects);
  const members = useSelector(state => state.members);

  const [titleProject, settitleProject] = useState('');

  useEffect(() => {
    function getProjects() {
      dispatch(getProjectsRequest());
    }
    if (activeTeam) {
      getProjects();
    }
  }, [activeTeam, dispatch]);

  function handleOpenModalProject() {
    dispatch(openProjectModal());
  }

  function handleCloseModalProject() {
    dispatch(closeProjectModal());
  }

  function handleCreateProject(e) {
    e.preventDefault();

    dispatch(createProjectsRequest(titleProject));
    handleCloseModalProject();
  }

  return (
    <>
      {activeTeam && (
        <Container>
          <header>
            <h1>{activeTeam.name}</h1>

            <div>
              <Can checkPermission="projects_create">
                <Button onClick={handleOpenModalProject}>
                  + Novo
                </Button>
              </Can>
              <Button onClick={() => dispatch(openMembersModal())}>
                Membros
              </Button>
            </div>
          </header>

          {projects.data &&
            projects.data.map(project => (
              <Project key={project.id}>
                <p>{project.title}</p>
              </Project>
            ))}

          {projects.projectModalOpen && (
            <Modal>
              <h1>Criar projeto</h1>

              <form onSubmit={handleCreateProject}>
                <span>Nome</span>
                <input
                  value={titleProject}
                  onChange={text =>
                    settitleProject(text.target.value)
                  }
                  type="text"
                  name="newProject"
                />

                <Button size="big" type="submit">
                  Salvar
                </Button>

                <Button
                  onClick={handleCloseModalProject}
                  size="small"
                  color="gray"
                >
                  Cancelar
                </Button>
              </form>
            </Modal>
          )}

          {members.membersModalOpen && <Members />}
        </Container>
      )}
    </>
  );
}

export default Projects;
