import React from 'react';
import pumpkinHead from '../../assets/scarecrow.png'
import { Container } from './styles';

const ScareCrow: React.FC = () => {
  return (
    <Container>
      <img src={pumpkinHead} alt="Scare crow"/>
    </Container>
  )
}

export default ScareCrow;