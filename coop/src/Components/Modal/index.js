import React, { useEffect, useState, memo } from 'react';

import { Container } from './styles';

const Modal = ({children, show}) => {
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    setShowModal(show)
  }, [show]);

  return (
    <Container show={showModal}>
        {children}
    </Container>
  );
}

export default memo(Modal);