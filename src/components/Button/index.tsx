import React from 'react';
import { Container } from './styles';

interface IButtonProps {
  children: string
}

const Button: React.FC<IButtonProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Button;