import styled from 'styled-components';

export const Container = styled.aside`
  background: #202225;
  padding: 20px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const TeamList = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Team = styled.button`
  border: 0;
  background: transparent;
  margin: 0 0 8px;

  img {
    transition: all 0.2s;
    border-radius: 50%;
    width: 50px;
    height: 50px;

    &:hover {
      border-radius: 30%;
    }
  }
`;
export const NewTeam = styled.button`
  border: 1px dashed rgba(255, 255, 255, 0.3);
  background: transparent;
  margin: 0 0 8px;

  transition: all 0.2s;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  &:hover {
    border-radius: 30%;
    background: #7159c1;
  }
`;
