import React, { useEffect } from 'react';
import api from '~/services/api';

// import { Container } from './styles';

function Main() {
  useEffect(() => {
    api.get('/haha');
  }, []);

  return (
    <div>
      <h1>Main</h1>
    </div>
  );
}

export default Main;
