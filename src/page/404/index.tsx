import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Message from '../../components/Message';
import ScareCrow from '../../components/ScareCrow';

import { Container, Content } from './styles';

const ErrorPage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <ScareCrow />
        <Message />
      </Content>
      <Footer />
    </Container>
  )
}

export default ErrorPage;
