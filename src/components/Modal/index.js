import React from 'react';
import PropsTypes from 'prop-types';

import { Container, Content } from './styles';

function Modal({ children, size }) {
  return (
    <Container>
      <Content size={size}>{children}</Content>
    </Container>
  );
}

Modal.propTypes = {
  size: PropsTypes.number.isRequired,
  children: PropsTypes.oneOfType([
    PropsTypes.element,
    PropsTypes.arrayOf(PropsTypes.element),
  ]).isRequired,
};
export default Modal;
